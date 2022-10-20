import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Switch from "./Switch";

export default {
  title: "Example/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const [check, setCheck] = useState(false);

  return (
    <Switch {...args} handleChange={() => setCheck(!check)} isChecked={check} />
  );
};

export const PrimarySwitch = Template.bind({});
PrimarySwitch.args = {
  isChecked: false,
};
