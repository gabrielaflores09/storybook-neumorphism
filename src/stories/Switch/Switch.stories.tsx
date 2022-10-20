import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Switch from './Switch'

export default {
  title: 'Component/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => {
  const [check, setCheck] = useState(false)

  return (
    <Switch {...args} handleChange={() => setCheck(!check)} isChecked={check} />
  )
}

export const SwitchComponent = Template.bind({})
SwitchComponent.args = {
  isChecked: false,
  size: 'small',
}
