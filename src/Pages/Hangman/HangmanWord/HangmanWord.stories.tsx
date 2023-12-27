import { Meta, StoryObj } from "@storybook/react";
import HangmanWord from "./HangmanWord";

const meta: Meta<typeof HangmanWord> = {
  title: "Pages/Hangman/Hangmanword",
  component: HangmanWord,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { guessedLetters: [], reveal: false, wordToGuess: "Test" },
};

export const WithGuessedLetters: Story = {
  args: { guessedLetters: ["e", "s"], reveal: false, wordToGuess: "Test" },
};

export const RevealWord: Story = {
  args: { guessedLetters: ["e", "s"], reveal: true, wordToGuess: "Test" },
};
