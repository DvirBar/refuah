import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "components/forms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonMain = Template.bind({});
ButtonMain.args = {
  children: "כפתור",
};

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {
  children: "כפתור",
  variant: "danger",
};

export const ButtonSuccess = Template.bind({});
ButtonSuccess.args = {
  children: "כפתור",
  variant: "success",
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  children: "כפתור",
  variant: "secondary",
};
