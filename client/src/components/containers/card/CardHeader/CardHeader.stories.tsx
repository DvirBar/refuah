import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardHeader from "./CardHeader";

export default {
  title: "components/containers/card/CardHeader",
  component: CardHeader,
} as ComponentMeta<typeof CardHeader>;

const Template: ComponentStory<typeof CardHeader> = (args) => <CardHeader {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: "כותרת",
  subTitle: "תת כותרת",
  closeAction: () => console.log("exec"),
};
