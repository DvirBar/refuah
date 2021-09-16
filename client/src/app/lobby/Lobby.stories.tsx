import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Lobby from "./Lobby";

export default {
  title: "app/lobby/Lobby",
  component: Lobby,
} as ComponentMeta<typeof Lobby>;

const Template: ComponentStory<typeof Lobby> = () => <Lobby />;

export const LobbyMain = Template.bind({});
LobbyMain.args = {
};
