"use client";
import ImageCard from "@/components/neobrutalism-ui/image-card";
import { motion } from "framer-motion";
import SplitText from "@/components/react-bits-ui/SplitText";

const FavouriteFood = [
  {
    id: 1,
    url: "/Images/strawberry.jpg",
    caption: "Strawberries",
    description: "Juicy and red - like little hearts you can eat!",
  },
  {
    id: 2,
    url: "/Images/spaghetti.jpg",
    caption: "Spaghetti",
    description: "Slurpy noodles with yummy sauce - so fun to twirl!",
  },
  {
    id: 3,
    url: "/Images/chicken-nuggets.jpg",
    caption: "Chicken Nuggets",
    description: "Crispy outside, soft inside - nuggety happiness!",
  },
  {
    id: 4,
    url: "/Images/chicken-wings.jpg",
    caption: "Chicken Wings",
    description: "Sticky, tasty, and extra good with fingers!",
  },
];

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Food = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 items-center justify-center text-center p-5">
        <SplitText
          text="😋 Fave Food 😻"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <p className="text-md max-w-md font-light italic">
          A peek into Amber’s magical menu—where strawberries sparkle like fairy
          snacks, spaghetti twirls with joy, and every nugget is a golden
          treasure. These aren’t just meals, they’re tiny adventures on a plate!
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="gap-3 p-3 grid md:grid-cols-2 grid-cols-1 place-items-center"
      >
        {FavouriteFood.map((food) => (
          <ImageCard
            className="hover:-translate-y-1 transition-all h-86 duration-300"
            key={food.id}
            caption={food.caption}
            imageUrl={food.url}
            description={food.description}
          ></ImageCard>
        ))}
      </motion.div>
    </div>
  );
};

export default Food;
