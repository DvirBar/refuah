import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Login from "./Login";

export default {
  title: "app/lobby/auth/login/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <Login toggleLogin={() => true} />;

export const LoginMain = Template.bind({});
LoginMain.args = {};
