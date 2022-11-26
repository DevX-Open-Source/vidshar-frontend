import { motion } from 'framer-motion'
import styled, { css, DefaultTheme } from 'styled-components'
import { EnvironmentTheme } from 'types/shared'

import { ButtonProps } from '.'

type IconProps = Pick<ButtonProps, 'iconPosition'>

export type WrapperProps = {
  hasIcon: boolean
} & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'square' | 'variant' | 'circle' | 'colorVariation'
> &
  EnvironmentTheme

const environmentColor = {
  textPrimaryButtonColor: {
    dark: (theme: DefaultTheme) => theme.colors.neutral.black,
    light: (theme: DefaultTheme) => theme.colors.neutral.white
  },
  textSecondaryButtonColor: {
    dark: (theme: DefaultTheme) => theme.colors.neutral.white,
    light: (
      theme: DefaultTheme,
      colorVariation: WrapperProps['colorVariation']
    ) =>
      colorVariation
        ? theme.colors.neutral[colorVariation]
        : theme.colors.primary.orange
  },
  borderThirdButtonColor: {
    dark: (theme: DefaultTheme) => theme.colors.neutral.white,
    light: (
      theme: DefaultTheme,
      colorVariation: WrapperProps['colorVariation']
    ) =>
      colorVariation
        ? theme.colors.neutral[colorVariation]
        : theme.colors.primary.orange
  },
  textThirdButtonColor: {
    dark: (theme: DefaultTheme) => theme.colors.neutral.white,
    light: (
      theme: DefaultTheme,
      colorVariation: WrapperProps['colorVariation']
    ) =>
      colorVariation
        ? theme.colors.neutral[colorVariation]
        : theme.colors.primary.orange
  }
}

const spinTransition = {
  repeat: Infinity,
  ease: 'linear',
  duration: 1
}

export const animationAttrs = {
  transition: spinTransition,
  animate: { rotate: 360 }
}

const wrapperModifiers = {
  mini: (theme: DefaultTheme) => css`
    height: 2.4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    height: 3.2rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  big: (theme: DefaultTheme) => css`
    height: ${theme.spacings.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  primary: (theme: DefaultTheme, environmentTheme: string) => css`
    background-color: ${theme.colors.primary.orange};
    color: ${environmentColor.textPrimaryButtonColor[environmentTheme](theme)};
  `,
  secondary: (
    theme: DefaultTheme,
    environmentTheme: string,
    colorVariation: WrapperProps['colorVariation']
  ) => css`
    background-color: transparent;
    color: ${environmentColor.textSecondaryButtonColor[environmentTheme](
      theme,
      colorVariation
    )};
  `,
  third: (
    theme: DefaultTheme,
    environmentTheme: string,
    colorVariation: WrapperProps['colorVariation']
  ) => css`
    background-color: transparent;
    color: ${environmentColor.textThirdButtonColor[environmentTheme](
      theme,
      colorVariation
    )};
    border: 0.1rem solid
      ${environmentColor.borderThirdButtonColor[environmentTheme](
        theme,
        colorVariation
      )};
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      & + span {
        margin-left: ${theme.spacings.xxxsmall};
      }
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  square: (theme: DefaultTheme) => css`
    width: 3.6rem;
    height: 3.6rem;
    padding: ${theme.spacings.xxsmall};

    &:hover {
      filter: brightness(90%);
      transition: filter 0.2s;
    }
  `,
  circle: (theme: DefaultTheme) => css`
    border-radius: ${theme.spacings.small};
    padding: ${theme.spacings.xxsmall};
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    square,
    disabled,
    variant,
    colorVariation,
    circle,
    environmentTheme
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.neutral.white};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.spacings.xxxsmall};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    font-style: normal;
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.spacings.xsmall};
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    ${!!size && wrapperModifiers[size](theme)};
    ${!!variant &&
    wrapperModifiers[variant](theme, environmentTheme, colorVariation)};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!circle && wrapperModifiers.circle(theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!square && wrapperModifiers.square(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
export const Loading = styled(motion.span)`
  border: 0.2rem solid ${({ theme }) => theme.colors.neutral.darkGrey};
  border-top: 0.2rem solid ${({ theme }) => theme.colors.neutral.white};
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  box-sizing: border-box;
`
export const Icon = styled.div<IconProps>`
  display: flex;
  order: ${({ iconPosition }) => (iconPosition === 'right' ? 1 : 0)};
`
