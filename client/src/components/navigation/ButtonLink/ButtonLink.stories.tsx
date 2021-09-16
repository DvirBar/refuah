import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonLink from "./ButtonLink";

export default {
  title: "components/navigation/ButtonLink",
  component: ButtonLink,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const ButtonLinkMain = Template.bind({});
ButtonLinkMain.args = {
  children: "קישור",
};
