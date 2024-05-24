import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./index";
import { IButton } from "./types";
import { theme } from "../../../styles/theme";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    loading: { control: "boolean" },
    outlined: { control: "boolean" },
    bgColor: { control: "color" },
    color: { control: "color" },
    borderless: { control: "boolean" },
    fullWidth: { control: "boolean" },
    justify: {
      control: "select",
      options: ["flex-start", "center", "flex-end"],
    },
    disabled: { control: "boolean" },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
  },
} as Meta;

const Template: StoryFn<IButton> = (args: IButton) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  loading: false,
  outlined: false,
  bgColor: theme.color.primary,
  borderless: false,
  fullWidth: false,
  justify: "center",
  disabled: false,
  type: "button",
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  outlined: true,
  color: theme.color.primary,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};
