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

// const RESET_DELAY_MS = 5000;

const KnowMeGame = () => {
  const { answers, resetAnswers } = useQuiz();
  const [submit, setSubmit] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [playAgain, setPlayAgain] = useState<boolean>(false);
  const [formKey, setFormKey] = useState(0);

  const [shuffledQuestionsOptions] = useState(() =>
    (questions as Question[]).map((q) => shuffle(q.options))
  );

  useEffect(() => {
    if (!submit) return;

    switch (score) {
      case 0:
        setMessage("Try again! You can do it!");
        break;
      case 1:
        setMessage("You're just warming up!");
        break;
      case 2:
        setMessage("Not bad! You're getting there!");
        break;
      case 3:
        setMessage("You're good!");
        break;
      case 4:
        setMessage("Great job! Keep going!");
        break;
      case 5:
        setMessage("Wow! You're halfway to genius!");
        break;
      case 6:
        setMessage("Amazing! You're getting to know me!");
        break;
      case 7:
        setMessage("Incredible! You're really close!");
        break;
      case 8:
        setMessage("So smart! You're almost perfect!");
        break;
      case 9:
        setMessage("Perfect score! You know me better than anyone!");
        break;
      default:
        setMessage("");
    }

    // const timer = setTimeout(() => {}, RESET_DELAY_MS);
    // return () => clearTimeout(timer);
  }, [submit, resetAnswers, score]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let totalScore = 0;

    (questions as Question[]).forEach((q, index) => {
      if (answers[index] === q.answer) {
        totalScore++;
      }
    });

    setScore(totalScore);
    setSubmit(true);
    setPlayAgain(true);

    console.log("User's Answer", answers);
  };

  const handlePlayAgain = () => {
    setPlayAgain(false);
    setSubmit(false);
    resetAnswers();
    setScore(0);
    setMessage("");
    setFormKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex my-10 justify-center items-center flex-col">
      <h1 className="text-xl text-center p-3">How well do you know me ? 🤔 </h1>
      <section className="p-5 lg:max-w-lg max-w-sm rounded bg-pink-200 mb-4 shadow-2xl border-r-5 border-b-5">
        <form
          key={formKey}
          onSubmit={handleSubmit}
          className="lg:grid lg:grid-cols-2 lg:gap-5 flex flex-col justify-center gap-5 min-w-sm py-1 items-center"
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
          <div className="flex flex-col gap-3 justify-start items-start w-full">
            <p className="font-bold text-sm bg-sky-200 py-1 px-3 rounded">
              Score: {score}
            </p>
            <p className="text-2xl">{message}</p>
            {playAgain ? (
              <Button
                onClick={() => handlePlayAgain()}
                className="self-start"
                type="button"
              >
                Play Again ?
              </Button>
            ) : (
              <Button className="self-start" type="submit">
                Submit
              </Button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default KnowMeGame;
