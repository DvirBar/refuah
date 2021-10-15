import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputError from "./InputError";

export default {
  title: "components/forms/InputError",
  component: InputError,
} as ComponentMeta<typeof InputError>;

const Template: ComponentStory<typeof InputError> = (args) => <InputError {...args} />;

export const Main = Template.bind({});
Main.args = {
  error: "זה תיאור של שגיאה",
};
