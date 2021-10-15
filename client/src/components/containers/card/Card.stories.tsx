import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from "./CardBody/CardBody";

export default {
  title: "components/containers/card/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Main = Template.bind({});
Main.args = {
  children: [
    <CardHeader
      title="כותרת"
      subTitle="תת כותרת"
      closeAction={() => {}}
    />,
    <CardBody>
      <p>תוכן</p>
    </CardBody>,
  ],
};
