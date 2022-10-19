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

export const Primary = Template.bind({});
Primary.args = {
  label: "Button Principal",
};

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  icon: BsFillPersonFill,
};
