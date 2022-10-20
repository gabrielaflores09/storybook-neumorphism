import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Chip from './Chip'

export default {
  title: 'Component/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const ClickeableChip = Template.bind({})
ClickeableChip.args = {
  label: 'Clickeable Chip Component',
  size: 'small',
  onClick: () => {},
  hover: true,
}

export const SmallChip = Template.bind({})
SmallChip.args = {
  label: 'Small Chip Component',
  size: 'small',
  onClick: null,
}

export const MediumChip = Template.bind({})
MediumChip.args = {
  label: 'Medium Chip Component',
  size: 'medium',
  onClick: null,
}

export const LargeChip = Template.bind({})
LargeChip.args = {
  label: 'Large Chip Component',
  size: 'large',
  onClick: null,
}
