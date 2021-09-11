import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Option from "./Option";

export default {
  title: "components/forms/Option",
  component: Option,
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = (args) => <Option {...args} />;

export const Main = Template.bind({});
Main.args = {
  value: "1",
  children: "אפשרות",
};
