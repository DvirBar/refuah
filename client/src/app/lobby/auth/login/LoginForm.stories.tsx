import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoginForm from "./LoginForm";

export default {
  title: "app/lobby/auth/login/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const LoginFormMain = Template.bind({});
LoginFormMain.args = {
};
