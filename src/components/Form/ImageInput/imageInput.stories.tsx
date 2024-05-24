import { StoryFn } from "@storybook/react";
import { FormImageInput } from "."; // Assuming your component is in './FormImageInput'
import { IUploader } from "./types";

export default {
  title: "Components/FormImageInput",
  component: FormImageInput,
  argTypes: {
    label: { control: { type: "text" } },
    error: { control: { type: "text" } },
    defaultImage: { control: { type: "text" } }, // Knob for default image URL
  },
};

const Template: StoryFn<IUploader> = (args) => <FormImageInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Upload Image",
  error: "",
  defaultImage: "", // No default image
};

export const WithError = Template.bind({});
WithError.args = {
  ...Primary.args,
  error: "Erro ao carregar a imagem",
};

export const WithDefaultImage = Template.bind({});
WithDefaultImage.args = {
  ...Primary.args,
  defaultImage: "https://via.placeholder.com/80", // Example default image URL
};

export const WithCustomTheme = Template.bind({});
WithCustomTheme.args = {
  ...Primary.args,
  // Provide custom theme values through context or props if needed
};
