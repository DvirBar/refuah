import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Auth from "./Auth";

export default {
  title: "app/lobby/auth/Auth",
  component: Auth,
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<typeof Auth> = () => <Auth />;

export const AuthMain = Template.bind({});
AuthMain.args = {
};
