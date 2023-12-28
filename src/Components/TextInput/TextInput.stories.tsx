import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    onChange: action("text input changed"),
    label: "Text Input",
    required: true,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    onChange: action("number input changed"),
    label: "Number Input",
    required: false,
  },
};

export const Email: Story = {
  args: {
    type: "email",
    onChange: action("email input changed"),
    label: "Email Input",
    required: true,
    placeholder: "Enter your email",
    autoFocus: true,
  },
};
