import { Meta, StoryObj } from "@storybook/react";
import HangmanDrawing from "./HangmanDrawing";

const meta: Meta<typeof HangmanDrawing> = {
  title: "Pages/Hangman/HangmanDrawing",
  component: HangmanDrawing,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { numberOfGuesses: 0 },
};

export const Head: Story = {
  args: { numberOfGuesses: 1 },
};

export const Body: Story = {
  args: { numberOfGuesses: 2 },
};

export const Arms: Story = {
  args: { numberOfGuesses: 4 },
};

export const Legs: Story = {
  args: { numberOfGuesses: 6 },
};
