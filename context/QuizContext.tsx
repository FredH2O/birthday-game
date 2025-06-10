"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type QuizAnswers = {
  [questionId: string]: string;
};

type QuizContextType = {
  answers: QuizAnswers;
  setAnswer: (questionId: string, answer: string) => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const setAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  return (
    <QuizContext.Provider value={{ answers, setAnswer }}>
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
