import type { Preview } from "@storybook/react";
import '/Users/shawn/Desktop/Crypto-Arsenal/frontend-test/node_modules/tailwindcss/tailwind.css'




const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
