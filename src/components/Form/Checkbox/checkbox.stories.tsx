import { StoryFn } from "@storybook/react";
import { FormCheckbox } from "."; // Assuming your component is in './FormCheckbox'
import { theme } from "../../../styles/theme"; // Assuming theme import
import { IInput } from "./types";

export default {
  title: "Components/FormCheckbox",
  component: FormCheckbox,
  argTypes: {
    label: { control: { type: "text" } },
    labelColor: { control: { type: "color" } },
    errorColor: { control: { type: "color" } },
    name: { control: { type: "text" } },
    error: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    marginTop: { control: { type: "text" } },
    marginTopOnMedia: { control: { type: "text" } },
  },
};

const Template: StoryFn<IInput> = (args) => <FormCheckbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Agree to terms",
  labelColor: theme.color.gray5,
  errorColor: theme.color.danger,
  name: "agreeToTerms",
  error: "",
  disabled: false,
  marginTop: "0px",
  marginTopOnMedia: "0px",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Primary.args,
  error: "This field is required",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};
