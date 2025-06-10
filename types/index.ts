export type Answer = {
  label: string;
  value: string;
};

export type Question = {
  question: string;
  options: Answer[];
  answer: string;
};
