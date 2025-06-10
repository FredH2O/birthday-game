"use client";

import RadioButtons from "@/components/RadioButtons/RadioButtons";
import type { Question } from "@/types";
import questions from "@/data/knowMeGame.json" assert { type: "json" };
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import { FormEvent } from "react";

const KnowMeGame = () => {
  const { answers } = useQuiz();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

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
              <RadioButtons
                totalAnswer={q.options}
                questionId={index.toString()}
              />
            </div>
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
