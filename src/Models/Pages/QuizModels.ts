export type QuizType = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
};

export type QuizResponseType = {
  results: Array<QuizType>;
};

export type SubmittedAnswersType = {
  [key: number]: boolean;
};

export type ResultPropType = {
  submittedAnswers: SubmittedAnswersType;
};

export type TimerPropType = {
  remainingTime: number;
  onTimeOut: () => void;
  currentIndex: number;
};
