import { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./Login";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof LoginForm> = {
  title: "Pages/Login",
  component: LoginForm,
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

export const EmailError: Story = {
  args: {
    defaultErrors: {
      email: "Invalid email address",
    },
  },
};

export const PasswordError: Story = {
  args: {
    defaultErrors: {
      password: "Password must be at least 6 characters long",
    },
  },
};
