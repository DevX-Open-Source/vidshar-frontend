import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { EnvironmentTheme } from 'types/shared'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

type ColorVariation = 'white' | 'darkGrey' | 'grey'

export type ButtonProps = {
  size?: 'big' | 'small' | 'mini'
  variant?: 'primary' | 'secondary' | 'third'
  colorVariation?: ColorVariation
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  loading?: boolean
  square?: boolean
  disabled?: boolean
  circle?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes &
  EnvironmentTheme

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'small',
    fullWidth = false,
    square = false,
    disabled = false,
    loading = false,
    circle = false,
    variant = 'primary',
    colorVariation,
    environmentTheme = 'light',
    iconPosition = 'right',
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    square={square}
    ref={ref}
    disabled={disabled || loading}
    variant={variant}
    colorVariation={colorVariation}
    circle={circle}
    environmentTheme={environmentTheme}
    {...props}
  >
    {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
    {!loading && !!children && <>{children}</>}
    {!!loading && (
      <S.Loading
        {...S.animationAttrs}
        aria-hidden={loading}
        aria-label="carregando"
      />
    )}
  </S.Wrapper>
)

export default forwardRef(Button)
