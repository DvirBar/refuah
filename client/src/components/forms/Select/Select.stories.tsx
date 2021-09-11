import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";
import Option from "./Option";

export default {
  title: "components/forms/Select",
  component: Select,
  decorators: [(Story) => (
    <div style={{ width: "30rem" }}>
      <Story />
    </div>
  )],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const OneOption = Template.bind({});

OneOption.args = {
  label: "שם השדה",
  children: [<Option value={1}>אפשרות</Option>],
};

export const MultipleOptions = Template.bind({});
MultipleOptions.args = {
  label: "שם השדה",
  children: [
    <Option value="">ללא אפשרות</Option>,
    <Option value="he">אפשרות 1</Option>,
    <Option value={2}>אפשרות 2</Option>,
    <Option value={3}>אפשרות 3</Option>,
    <Option value={4}>אפשרות 4</Option>,
    <Option value={5}>אפשרות 5</Option>,
    <Option value={6}>אפשרות 6</Option>,
    <Option value={7}>אפשרות 7</Option>,
  ],
};

export const SelectWithOverflow = Template.bind({});
SelectWithOverflow.args = {
  label: "שם השדה",
  children: [
    <Option value="he">אפשרות 1</Option>,
    <Option value={2}>אפשרות 2</Option>,
    <Option value={3}>אפשרות 3</Option>,
    <Option value={4}>אפשרות 4</Option>,
    <Option value={5}>אפשרות 5</Option>,
    <Option value={6}>אפשרות 6</Option>,
    <Option value={7}>אפשרות 7</Option>,
    <Option value={8}>אפשרות 8</Option>,
    <Option value={9}>אפשרות 9</Option>,
    <Option value={10}>אפשרות 10</Option>,
    <Option value={11}>אפשרות 11</Option>,
    <Option value={12}>אפשרות 12</Option>,
  ],
};

export const OptionChosen = Template.bind({});
OptionChosen.args = {
  label: "שם השדה",
  children: MultipleOptions.args.children,
  value: MultipleOptions.args.children?.[3].props.value,
};
