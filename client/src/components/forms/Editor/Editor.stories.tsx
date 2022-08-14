import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Editor from "./Editor";

export default {
  title: "components/forms/Editor",
  component: Editor,
  decorators: [(Story) => (
    <Story />
  )],
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = () => <Editor />;

export const EditorMain = Template.bind({});
