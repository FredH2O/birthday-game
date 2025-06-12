"use client";

import RadioButtons from "@/components/RadioButtons/RadioButtons";
import type { Question } from "@/types";
import questions from "@/data/knowMeGame.json" assert { type: "json" };
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import { FormEvent, useState, useEffect } from "react";

const shuffle = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const KnowMeGame = () => {
  const { answers, resetAnswers } = useQuiz();
  const [submit, setSubmit] = useState<boolean>(false);

  const [shuffledQuestionsOptions] = useState(() =>
    (questions as Question[]).map((q) => shuffle(q.options))
  );

  useEffect(() => {
    if (!submit) return;

    const timer = setTimeout(() => {
      setSubmit(false);
      resetAnswers();
    }, 5000);

    return () => clearTimeout(timer);
  }, [submit, resetAnswers]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSubmit(true);
    console.log("User's Answer", answers);
  };

  return (
    <div>
      <h1 className="text-xl text-center p-3">How well do you know me ? 🤔 </h1>
      <section className="p-5 max-w-sm rounded bg-pink-200 mb-4 shadow-2xl border-r-5 border-b-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-5 min-w-sm py-1 items-center"
        >
          {(questions as Question[]).map((q, index) => {
            const mixedOptions = shuffledQuestionsOptions[index];

            return (
              <div key={index} className="self-start">
                <p className="font-semibold">{q.question}</p>
                <div className="mt-2 space-y-2">
                  <RadioButtons totalAnswer={mixedOptions} questionId={index} />
                </div>

                {/* result */}
                {submit && answers[index] !== undefined ? (
                  answers[index] === q.answer ? (
                    <p>Correct ✅</p>
                  ) : (
                    <p>Wrong ❌</p>
                  )
                ) : null}
              </div>
            );
          })}
          <Button className="self-center" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
};

export default KnowMeGame;
