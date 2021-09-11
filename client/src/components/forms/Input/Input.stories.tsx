import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Anchor, ChevronDown } from "react-feather";
import Input from "./Input";

export default {
  title: "components/forms/Input",
  component: Input,
  decorators: [(Story) => (
    <div style={{ width: "30rem" }}>
      <Story />
    </div>
  )],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputMain = Template.bind({});
InputMain.args = {
  name: "name",
  label: "שם השדה",
};

export const InputWithValue = Template.bind({});
InputWithValue.args = {
  ...InputMain.args,
  value: "ערך",
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  ...InputMain.args,
  error: "זה תיאור של שגיאה",
};

export const InputWithStartChip = Template.bind({});
InputWithStartChip.args = {
  ...InputMain.args,
  startChip: <Anchor size={20} />,
};

export const InputWithEndChip = Template.bind({});
InputWithEndChip.args = {
  ...InputMain.args,
  endChip: <ChevronDown size={20} />,
};

export const InputWithStartAndEndChip = Template.bind({});
InputWithStartAndEndChip.args = {
  ...InputMain.args,
  startChip: <Anchor />,
  endChip: <ChevronDown />,
};
