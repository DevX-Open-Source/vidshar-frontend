import { MdAdd } from 'react-icons/md'

import { Meta, Story } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    environmentTheme: {
      control: {
        type: 'radio',
        options: ['dark', 'light']
      }
    },
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'third']
      }
    },
    size: {
      control: {
        type: 'radio',
        options: ['mini', 'small', 'big']
      }
    },
    colorVariation: {
      control: {
        type: 'radio',
        options: ['white', 'darkGrey', 'grey']
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'koper-dark'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = ({ ...args }) => (
  <Button variant="primary" {...args}>
    children
  </Button>
)

export const Square: Story<ButtonProps> = ({ ...args }) => (
  <Button variant="primary" square {...args}>
    <MdAdd size={24} />
  </Button>
)

export const asLink: Story<ButtonProps> = ({ ...args }) => <Button {...args} />
asLink.args = {
  children: 'As a link',
  as: 'a',
  href: '/link'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  children: 'with icon',
  icon: <MdAdd size={24} />
}

export const circle: Story<ButtonProps> = (args) => <Button {...args} />

circle.args = {
  circle: true,
  square: true,
  icon: <MdAdd size={24} />,
  iconPosition: 'right'
}

export const FullWidth: Story<ButtonProps> = ({ ...args }) => (
  <Button variant="primary" fullWidth={true} {...args}>
    Button
  </Button>
)

export const Disabled: Story<ButtonProps> = ({ ...args }) => (
  <Button variant="primary" disabled {...args}>
    Disabled
  </Button>
)
