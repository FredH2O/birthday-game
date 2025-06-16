"use client";

import { useState } from "react";

const choices = ["Rock", "Paper", "Scissors"] as const;
type Choice = (typeof choices)[number];

const getResult = (player: Choice, computer: Choice) => {
  if (player === computer) return "It’s a tie!";
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    return "You win!";
  }
  return "You lose!";
};

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");

  const play = (choice: Choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computer);
    setPlayerChoice(choice);
    setResult(getResult(choice, computer));
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 text-center space-y-6 bg-yellow-50 border border-yellow-300 rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-pink-700">
        🎉 Rock Paper Scissors 🎉
      </h2>

      <div className="flex justify-center gap-4">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => play(choice)}
            className="bg-pink-200 hover:bg-pink-300 text-black px-4 py-2 rounded-full font-semibold transition"
            aria-label={`Choose ${choice}`}
          >
            {choice}
          </button>
        ))}
      </div>

      {playerChoice && (
        <div className="mt-4 space-y-2 text-lg">
          <p>
            🧒 You chose: <strong>{playerChoice}</strong>
          </p>
          <p>
            💻 Computer chose: <strong>{computerChoice}</strong>
          </p>
          <p className="font-bold text-xl">{result}</p>
        </div>
      )}
    </div>
  );
}
