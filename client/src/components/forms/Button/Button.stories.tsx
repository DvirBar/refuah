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
  label: "כפתור",
};

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {
  label: "כפתור",
  variant: "danger",
};

export const ButtonSuccess = Template.bind({});
ButtonSuccess.args = {
  label: "כפתור",
  variant: "success",
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  label: "כפתור",
  variant: "secondary",
};
