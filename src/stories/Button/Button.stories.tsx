// External deps
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BsFillPersonFill } from "react-icons/bs";

// Internal deps
import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: "Button Principal",
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: BsFillPersonFill,
};
