import React from "react";
import { StoryFn } from "@storybook/react";
import { Plus } from "@phosphor-icons/react";
import { IconButton } from "."; // Replace with your component path
import { IIconButton } from "./types";
import { IconWrapper } from "@/components/IconWrapper";
import { theme } from "@/styles/theme";

// Import necessary icons or icon components (if applicable)

export default {
  title: "Buttons/IconButton",
  component: IconButton,
  argTypes: {
    labelPos: { control: { type: "radio", options: ["left", "right"] } },
    opacity: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    label: { control: { type: "text" } },
    gap: { control: { type: "number" } },
    color: { control: { type: "color" } },
    selected: { control: { type: "boolean" } },
    onClick: { action: "onClick" },
    className: { control: { type: "text" } },
    hideLabelOnMedia: { control: { type: "boolean" } },
    fontWeight: { control: { type: "number" } },
    disabled: { control: { type: "boolean" } },
    title: { control: { type: "text" } },
    type: {
      control: { type: "select", options: ["button", "submit", "reset"] },
    },
  },
};

const Template: StoryFn<IIconButton> = (args) => <IconButton {...args} />;

// Define stories for various use cases
export const Default = Template.bind({});
Default.args = {
  label: "Adicionar",
  icon: (
    <IconWrapper>
      <Plus color={theme.color.white} />
    </IconWrapper>
  ),
};

export const RightLabel = Template.bind({});
RightLabel.args = {
  ...Default.args,
  labelPos: "right",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

// Add more stories based on your component's features
