import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import Counter from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Pages/Counter",
  component: Counter,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Counter3: Story = {
  args: {
    incrementValue: 3,
    defaultCount: 3,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const incrementButton = canvas.getByRole("button", { name: "+" });
    const decrementButton = canvas.getByRole("button", { name: "-" });
    const countValue = canvas.getByTestId("count");

    await expect(countValue).toHaveTextContent("3");
    await expect(incrementButton).toBeInTheDocument();
    await expect(decrementButton).toBeInTheDocument();
    await expect(decrementButton).toBeDisabled();

    await userEvent.click(incrementButton);
    await expect(countValue).toHaveTextContent("6");
    await expect(countValue).toBeEnabled();

    await userEvent.click(decrementButton);
    await expect(countValue).toHaveTextContent("3");
  },
};

export const DefaultCounter: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const incrementButton = canvas.getByRole("button", { name: "+" });
    const decrementButton = canvas.getByRole("button", { name: "-" });
    const countValue = canvas.getByTestId("count");

    await expect(countValue).toHaveTextContent("0");
    await expect(incrementButton).toBeInTheDocument();
    await expect(decrementButton).toBeInTheDocument();
    await expect(decrementButton).toBeDisabled();

    await userEvent.click(incrementButton);
    await expect(countValue).toHaveTextContent("1");
    await expect(countValue).toBeEnabled();

    await userEvent.click(decrementButton);
    await expect(countValue).toHaveTextContent("0");
  },
};
