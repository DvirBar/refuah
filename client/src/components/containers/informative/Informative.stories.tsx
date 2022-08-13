import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Informative from "./Informative";

export default {
  title: "components/containers/Informative",
  component: Informative,
} as ComponentMeta<typeof Informative>;

const Template: ComponentStory<typeof Informative> = (args) => <Informative {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: "זו הודעת הצלחה",
  isError: false,
};

export const Error = Template.bind({});
Error.args = {
  message: "זו הודעת שגיאה",
  isError: true,
};
