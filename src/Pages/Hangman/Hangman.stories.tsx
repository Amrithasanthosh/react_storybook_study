import { Meta, StoryObj } from "@storybook/react";
import Hangman from "./Hangman";

const meta: Meta<typeof Hangman> = {
  title: "Pages/Hangman",
  component: Hangman,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
