import { Meta, StoryObj } from "@storybook/react";
import Result from "./Result";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Result> = {
  title: "Pages/Quiz/Result",
  component: Result,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
  args: {
    location: {
      state: {
        submittedAnswers: {
          1: true,
          2: false,
          3: true,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
