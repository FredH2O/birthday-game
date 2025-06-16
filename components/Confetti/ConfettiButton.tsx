"use client";

import confetti from "canvas-confetti";
import { useCallback } from "react";

const ConfettiButton = () => {
  const fire = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <button
      onClick={fire}
      className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full shadow-md transition"
    >
      🎉 Throw Confetti!
    </button>
  );
};

export default ConfettiButton;
