import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EditorToolBarButton from "./EditorToolBarButton";

export default {
  title: "components/forms/Editor/ToolBarButton",
  component: EditorToolBarButton,
  decorators: [(Story) => (
    <Story />
  )],
} as ComponentMeta<typeof EditorToolBarButton>;

const Template: ComponentStory<typeof EditorToolBarButton> = () => <EditorToolBarButton />;

export const EditorToolBarButtonMain = Template.bind({});
