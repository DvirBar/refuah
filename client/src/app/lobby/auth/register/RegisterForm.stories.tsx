import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RegisterForm from "./RegisterForm";

export default {
  title: "app/lobby/auth/register/RegisterForm",
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = () => <RegisterForm />;

export const RegisterFormMain = Template.bind({});
RegisterFormMain.args = {
};
