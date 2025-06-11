"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type QuizAnswers = {
  [questionId: number]: string;
};

type AnswerProp = {
  questionId: number;
  answer: string;
};

type QuizContextType = {
  answers: QuizAnswers;
  setAnswer: (arg: AnswerProp) => void;
  resetAnswers: () => void;
};

type QuizProp = {
  children: ReactNode;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: QuizProp) => {
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const setAnswer = ({ questionId, answer }: AnswerProp) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const resetAnswers = () => {
    setAnswers({});
  };

  return (
    <QuizContext.Provider value={{ answers, setAnswer, resetAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }

  return context;
};
