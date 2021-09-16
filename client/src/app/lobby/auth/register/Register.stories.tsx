import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Register from "./Register";

export default {
  title: "app/lobby/auth/register/Register",
  component: Register,
} as ComponentMeta<typeof Register>;

const Template: ComponentStory<typeof Register> = () => <Register toggleLogin={() => true} />;

export const RegisterMain = Template.bind({});
RegisterMain.args = {
};
