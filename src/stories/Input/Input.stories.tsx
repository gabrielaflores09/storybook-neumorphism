import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './Input'

export default {
  title: 'Component/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const InputComponent = Template.bind({})
InputComponent.args = {
  placeholder: 'placeholder',
  size: 'small',
}
