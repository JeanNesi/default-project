/* eslint-disable no-alert */
import { TrashSimple } from "@phosphor-icons/react"; // Assuming X icon is used
import { StoryFn } from "@storybook/react";

import { PopoverIconButton } from ".";
import { theme } from "../../../styles/theme"; // Assuming theme is imported
import { IPopoverButton } from "./types";

export default {
  title: "Buttons/PopoverIconButton",
  component: PopoverIconButton,
  argTypes: {
    label: { control: { type: "text" } },
    actionButtonBgColor: { control: { type: "color" } },
    actionButtonClick: { action: "actionButtonClick" },
    disabled: { control: { type: "boolean" } },
    message: { control: { type: "object" } },
    buttonIcon: { control: { type: "node" } }, // Assuming you can pass a React node
    fontWeight: { control: { type: "number" } },
    hiddenIconButtonLabel: { control: { type: "boolean" } },
    hideLabelOnMedia: { control: { type: "boolean" } },
    iconButtonClassName: { control: { type: "text" } },
    iconButtonColor: { control: { type: "color" } },
    labelPos: { control: { type: "radio", options: ["left", "right"] } },
  },
};

const Template: StoryFn<IPopoverButton> = (args) => (
  <PopoverIconButton {...args} />
);

// Define stories for various use cases
export const Default = Template.bind({});
Default.args = {
  label: "Excluir",
  actionButtonBgColor: theme.color.danger,
  actionButtonClick: () => alert("Item excluído com sucesso!"),
  message: {
    title: "Deseja excluir este usuário?",
    content: "Esta ação não poderá ser desfeita posteriormente.",
    contentColor: theme.color.gray4,
  },
  buttonIcon: <TrashSimple color={theme.color.danger} />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  ...Default.args,
  hiddenIconButtonLabel: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  iconButtonColor: theme.color.danger,
};

// Add more stories based on your component's features (e.g., different positions, icons)
