import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RecoilRoot } from "recoil";
import Lobby from "./Lobby";

export default {
  title: "app/lobby/Lobby",
  decorators: [(Story) => <RecoilRoot>{Story}</RecoilRoot>],
  component: Lobby,
} as ComponentMeta<typeof Lobby>;

const Template: ComponentStory<typeof Lobby> = () => <Lobby />;

export const LobbyMain = Template.bind({});
LobbyMain.args = {
};
