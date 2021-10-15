import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "components/containers/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: "כותרת",
  subTitle: "תת כותרת",
  display: true,
  setDisplay: () => console.log("exec"),
};
