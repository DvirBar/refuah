import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Edit } from "react-feather";
import EditorToolBarButton from "./EditorToolBarButton";

export default {
  title: "components/forms/Editor/ToolBarButton",
  component: EditorToolBarButton,
  decorators: [(Story) => (
    <Story />
  )],
} as ComponentMeta<typeof EditorToolBarButton>;

const Template: ComponentStory<typeof EditorToolBarButton> = () => (
  <EditorToolBarButton icon={<Edit size={16} />} />
);

export const EditorToolBarButtonMain = Template.bind({});
