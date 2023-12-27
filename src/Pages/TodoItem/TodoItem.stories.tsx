import type { Meta, StoryObj } from "@storybook/react";

import fetch from "node-fetch";
import TodoItem from "./TodoItem";

const meta: Meta<typeof TodoItem> = {
  component: TodoItem,
  render: (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />,
  argTypes: {
    rowsPerPage: {
      options: [10, 20, 30],
      control: { type: "radio" },
    },
  },
  loaders: [
    async () => ({
      todo: await (
        await fetch("https://jsonplaceholder.typicode.com/todos")
      ).json(),
    }),
  ],
  tags: ["autodocs"],
  args: {
    rowsPerPage: 10,
  },
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Default: Story = {
  args: {
    all: true,
  },
};

export const Pending: Story = {
  args: {
    isCompleted: false,
    all: false,
  },
};

export const Completed: Story = {
  args: {
    isCompleted: true,
    all: false,
  },
};
