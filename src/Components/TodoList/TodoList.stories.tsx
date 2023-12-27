import { Meta, StoryObj } from "@storybook/react";
import TodoList from "./TodoList";
import { action } from "@storybook/addon-actions";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof TodoList> = {
  component: TodoList,
  title: "Components/TodoList",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TodoListDefault: Story = {
  args: {
    todos: ["Task-1", "Task-2"],
    editIndex: -1,
    completedTasks: { "Task-1": true },
    completeTask: action("Task completed"),
    handleEdit: action("task edited"),
    deleteTodo: action("task deleted"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Task-1")).toBeInTheDocument();
    await expect(canvas.getByText("Task-2")).toBeInTheDocument();
  },
};
