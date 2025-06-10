"use client";

import RadioButtons from "@/components/RadioButtons/RadioButtons";
import type { Question } from "@/types";
import questions from "@/data/knowMeGame.json" assert { type: "json" };
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import { FormEvent, useState, useEffect } from "react";

const KnowMeGame = () => {
  const { answers, resetAnswers } = useQuiz();
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
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
    <section className="p-5 border rounded bg-main mb-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-5 min-w-sm py-1 items-center"
      >
        {(questions as Question[]).map((q, index) => (
          <div key={index} className="self-start">
            <p className="font-semibold">{q.question}</p>
            <div className="mt-2 space-y-2">
              <RadioButtons totalAnswer={q.options} questionId={index} />
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
        ))}
        <Button className="self-end" type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default KnowMeGame;
