import { Meta, StoryObj } from "@storybook/react";
import Todo from "./Todo";

const meta: Meta<typeof Todo> = {
  component: Todo,
  title: "Pages/Todo",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTodo: Story = {
  args: {},
};
