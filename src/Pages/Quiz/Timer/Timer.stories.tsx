import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Timer from "./Timer";

const meta: Meta<typeof Timer> = {
  title: "Pages/Quiz/Timer",
  component: Timer,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    remainingTime: 60,
    currentIndex: 0,
    onTimeOut: action("Time out"),
  },
};
