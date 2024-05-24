/* eslint-disable no-console */
import { StoryFn } from "@storybook/react";
import { Pagination } from "."; // Assuming your component is in './Pagination'
import { IPagination } from "./types";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    totalCountOfRegister: { control: { type: "number" } },
    registerPerPage: { control: { type: "number" } },
    currentPage: { control: { type: "number" } },
    onPageChange: { action: "onPageChange" }, // Action for page change event
  },
};

const Template: StoryFn<IPagination> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  totalCountOfRegister: 100,
  registerPerPage: 10,
  currentPage: 1,
  onPageChange: (page) => console.log("Page changed to:", page), // Example handler
};

export const WithManyPages = Template.bind({});
WithManyPages.args = {
  ...Primary.args,
  totalCountOfRegister: 200,
};

export const CurrentAtEnd = Template.bind({});
CurrentAtEnd.args = {
  ...Primary.args,
  currentPage: 5,
};

export const DisabledPrevious = Template.bind({});
DisabledPrevious.args = {
  ...Primary.args,
  currentPage: 1,
};

export const DisabledNext = Template.bind({});
DisabledNext.args = {
  ...Primary.args,
  currentPage:
    WithManyPages.args.totalCountOfRegister! / Primary.args.registerPerPage!,
};

export const WithCustomTheme = Template.bind({});
WithCustomTheme.args = {
  ...Primary.args,
  // Provide custom theme values through context or props if needed (assuming styles use theme)
};
