import { Meta, StoryObj } from "@storybook/react";
import Keyboard from "./Keyboard";
import { KEYS } from "../../../Constants/KeyboardConstants";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Keyboard> = {
  title: "Pages/Hangman/Keyboard",
  component: Keyboard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    activeLetters: [],
    inactiveLetters: [],
    addGuessedLetter: action("Added to guessed letter"),
  },
};

export const Disabled: Story = {
  args: {
    disabled: false,
    activeLetters: [],
    inactiveLetters: KEYS,
    addGuessedLetter: action("Added to guessed letter"),
  },
};

export const DisabledAndEnabled: Story = {
  args: {
    disabled: false,
    activeLetters: ["e"],
    inactiveLetters: ["a", "d", "h"],
    addGuessedLetter: action("Added to guessed letter"),
  },
};
