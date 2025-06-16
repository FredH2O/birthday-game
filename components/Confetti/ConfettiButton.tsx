"use client";

import confetti from "canvas-confetti";
import { useCallback } from "react";

import { Button } from "@/components/neobrutalism-ui/button";

const ConfettiButton = () => {
  const fire = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.7 },
    });
  }, []);

  return <Button onClick={fire}> Throw Confetti! 🎉</Button>;
};

export default ConfettiButton;
