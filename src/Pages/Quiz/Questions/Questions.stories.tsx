import { Meta, StoryObj } from "@storybook/react";
import Questions from "./Questions";
import { BrowserRouter } from "react-router-dom";

const questions = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "History",
    question: "When did the French Revolution begin?",
    correct_answer: "1789",
    incorrect_answers: ["1823", "1756", "1799"],
  },
];

const meta: Meta<typeof Questions> = {
  title: "Pages/Quiz/Questions",
  component: Questions,
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

export const QuestionsWithLoader: Story = {
  args: { defaultLoader: true },
};

export const QuestionsWithSelectedAnswer: Story = {
  args: {
    defaultQuestions: questions,
    defaultSelectedOption: "1756",
  },
};

export const CorrectAnswer: Story = {
  args: {
    defaultQuestions: questions,
    defaultSubmittedAnswers: { 0: true },
  },
};

export const WrongAnswer: Story = {
  args: {
    defaultQuestions: questions,
    defaultSelectedOption: "1756",
    defaultSubmittedAnswers: { 0: false },
  },
};
