"use client";

import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

const choices = ["Rock 🪨", "Paper 📃", "Scissors ✂️"] as const;
type Choice = (typeof choices)[number];

const getResult = (player: Choice, computer: Choice) => {
  if (player === computer) return "It’s a tie 🫱🏻‍🫲🏽!";
  if (
    (player === "Rock 🪨" && computer === "Scissors ✂️") ||
    (player === "Paper 📃" && computer === "Rock 🪨") ||
    (player === "Scissors ✂️" && computer === "Paper 📃")
  ) {
    return "You win 🎊!";
  }
  return "You lose 💔!";
};

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [resultId, setResultId] = useState<number>(0);

  const play = (choice: Choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    const outcome = getResult(choice, computer);
    setComputerChoice(computer);
    setPlayerChoice(choice);
    setResult(outcome);
    setResultId((prev) => prev + 1);
    // console.log(resultId);

    if (outcome === "You win 🎊!") {
      setPlayerScore((prev) => prev + 1);
    }

    if (outcome === "You lose 💔!") {
      setComputerScore((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setPlayerScore(0);
    setComputerScore(0);
    setResultId(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeInOut }}
      className="w-full max-w-md mx-auto mt-8 text-center space-y-6 bg-yellow-50 border border-yellow-300 rounded-xl shadow-md p-6"
    >
      <h2 className="text-2xl font-bold text-pink-700">
        😆 Rock Paper Scissors 🤔
      </h2>

      <div className="flex justify-center gap-4">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => play(choice)}
            className="bg-pink-200 cursor-pointer hover:bg-pink-300 text-black px-4 py-2 rounded-full font-semibold transition"
            aria-label={`Choose ${choice}`}
          >
            {choice}
          </button>
        ))}
      </div>

      {playerChoice && (
        <>
          <div className="mt-4 space-y-2 text-lg">
            <p>
              🧒 You chose: <strong>{playerChoice}</strong>
            </p>
            <p>
              💻 Computer chose: <strong>{computerChoice}</strong>
            </p>
            <motion.p
              key={resultId}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="font-bold text-xl"
            >
              {result}
            </motion.p>
          </div>
          <div className="flex justify-between">
            <p className=" bg-pink-500/10 rounded px-3">
              🫵🏻 You: {playerScore}
            </p>
            <p className=" bg-pink-500/10 rounded px-3">
              🖥️ Computer: {computerScore}
            </p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleReset}
              className="px-3 bg-pink-500/50 rounded cursor-pointer hover:bg-pink-500/30"
            >
              Reset
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
