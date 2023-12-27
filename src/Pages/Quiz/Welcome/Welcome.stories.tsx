import { Meta, StoryObj } from "@storybook/react";
import Welcome from "./Welcome";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Welcome> = {
  title: "Pages/Quiz/Welcome",
  component: Welcome,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
