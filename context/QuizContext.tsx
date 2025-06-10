"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type QuizAnswers = {
  [questionId: number]: string;
};

type QuizContextType = {
  answers: QuizAnswers;
  setAnswer: (questionId: number, answer: string) => void;
  resetAnswers: () => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const setAnswer = (questionId: number, answer: string) => {
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
