import { Meta, StoryObj } from "@storybook/react";
import Task from "./Task";

const meta: Meta<typeof Task> = {
  component: Task,
  title: "Components/Task",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};
