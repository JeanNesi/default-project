import { StoryFn } from "@storybook/react";
import { Sidebar } from "."; // Assuming your component is in './Sidebar'

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    openSidebar: { control: { type: "boolean" } },
  },
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  openSidebar: true,
};

export const Closed = Template.bind({});
Closed.args = {
  openSidebar: false,
};

export const WithCustomTheme = Template.bind({});
WithCustomTheme.args = {
  // Provide custom theme values through context or props if needed (assuming styles use theme)
};
