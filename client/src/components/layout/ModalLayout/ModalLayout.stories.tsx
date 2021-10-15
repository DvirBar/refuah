import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalLayout from "./ModalLayout";

export default {
  title: "components/forms/ModalLayout",
  component: ModalLayout,
} as ComponentMeta<typeof ModalLayout>;

const Template: ComponentStory<typeof ModalLayout> = (args) => <ModalLayout {...args} />;

export const Main = Template.bind({});
Main.args = {
};
