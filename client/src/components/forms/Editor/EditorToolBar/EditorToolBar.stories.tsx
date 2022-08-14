import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EditorToolBar from "./EditorToolBar";

export default {
  title: "components/forms/Editor/ToolBar",
  component: EditorToolBar,
  decorators: [(Story) => (
    <Story />
  )],
} as ComponentMeta<typeof EditorToolBar>;

const Template: ComponentStory<typeof EditorToolBar> = () => <EditorToolBar />;

export const EditorToolBarMain = Template.bind({});
