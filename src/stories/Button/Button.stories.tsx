// External deps
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BsFillPersonFill } from 'react-icons/bs'

// Internal deps
import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ButtonComponent = Template.bind({})
ButtonComponent.args = {
  label: 'Button Principal',
}

export const IconButtonComponent = Template.bind({})
IconButtonComponent.args = {
  icon: BsFillPersonFill,
}
