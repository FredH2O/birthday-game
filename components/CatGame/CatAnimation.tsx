"use client";
import { useState } from "react";
import Image from "next/image";

export default function PetTheCat() {
  const [pets, setPets] = useState(0);
  const [isHappy, setIsHappy] = useState(false);

  const handlePet = () => {
    setPets((prev) => prev + 1);
    setIsHappy(true);

    // Return to sleep after 1 second
    setTimeout(() => {
      setIsHappy(false);
    }, 1000);
  };

  const catImage = isHappy ? "/Images/cat-happy.png" : "/Images/cat-sleep.png";

  return (
    <div className="flex flex-col items-center justify-center border rounded bg-yellow-50 p-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Pet the Cat 🐾</h1>

      <Image
        priority
        width={300}
        height={300}
        src={catImage}
        alt={isHappy ? "Happy Cat" : "Sleeping Cat"}
        onClick={handlePet}
        onTouchStart={handlePet}
        className="w-48 h-48 cursor-grab select-none transition-all duration-300 ease-in-out"
        draggable={false}
      />

      <p className="mt-6 text-xl text-gray-800">
        Pets: <span className="font-semibold">{pets}</span>
      </p>
    </div>
  );
}
