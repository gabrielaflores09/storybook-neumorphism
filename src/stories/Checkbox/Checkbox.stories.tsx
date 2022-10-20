import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Checkbox from "./Checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [check, setCheck] = useState(false);
  return (
    <Checkbox
      {...args}
      isChecked={check}
      handleChange={() => setCheck(!check)}
    />
  );
};

export const PrimaryCheckbox = Template.bind({});
PrimaryCheckbox.args = {
  isChecked: false,
};
