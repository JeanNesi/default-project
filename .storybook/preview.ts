import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import GlobalStyles from "../src/styles/globalCSS";
import { withRouter } from "storybook-addon-remix-react-router";
import { withReactContext } from "storybook-react-context";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withRouter(),
    withReactContext(),
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
  ],
};

export default preview;
