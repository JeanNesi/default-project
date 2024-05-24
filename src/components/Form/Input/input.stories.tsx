import React from "react";
import { StoryFn } from "@storybook/react";
import { FormInput } from "."; // Assuming your component is in './FormInput'
import { theme } from "../../../styles/theme"; // Assuming theme import
import { IInput } from "./types";

export default {
  title: "Components/FormInput",
  component: FormInput,
  argTypes: {
    label: { control: { type: "text" } },
    labelColor: { control: { type: "color" } },
    errorColor: { control: { type: "color" } },
    name: { control: { type: "text" } },
    error: { control: { type: "text" } },
    passwordPlaceholder: { control: { type: "text" } },
    removeStyles: { control: { type: "boolean" } },
    step: { control: { type: "number" } },
    max: { control: { type: "number" } },
    type: {
      control: {
        type: "select",
        options: ["text", "number", "date", "datetime-local"],
      },
    },
  },
};

const Template: StoryFn<IInput> = (args) => <FormInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Input Label",
  labelColor: theme.color.gray5,
  errorColor: theme.color.danger,
  name: "textInput",
  error: "",
  removeStyles: false,
  step: "any",
  max: undefined, // No max value by default
  type: "text",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Primary.args,
  error: "This field is required",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  ...Primary.args,
  type: "password",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  ...Primary.args,
  type: "number",
  step: 0.1, // Example step value
};

export const DateInput = Template.bind({});
DateInput.args = {
  ...Primary.args,
  type: "date",
};

export const DateTimeInput = Template.bind({});
DateTimeInput.args = {
  ...Primary.args,
  type: "datetime-local",
};

export const NoStyles = Template.bind({});
NoStyles.args = {
  ...Primary.args,
  removeStyles: true, // Remove default styles for custom styling
};
