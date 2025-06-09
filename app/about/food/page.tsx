"use client";
import ImageCard from "@/components/neobrutalism-ui/image-card";
import { motion } from "framer-motion";
import SplitText from "@/components/react-bits-ui/SplitText";

const FavouriteFood = [
  {
    id: 1,
    url: "/Images/strawberry.jpg",
    caption: "Strawberries",
    description: "Sweet, squishy, and pink like a princess snack!",
  },
  {
    id: 2,
    url: "/Images/spaghetti.jpg",
    caption: "Spaghetti",
    description: "Twirly noodles that dance on the fork!",
  },
  {
    id: 3,
    url: "/Images/chicken-nuggets.jpg",
    caption: "Chicken Nuggets",
    description: "Crunchy little bites Amber’s nuggety joy!",
  },
  {
    id: 4,
    url: "/Images/chicken-wings.jpg",
    caption: "Chicken Wings",
    description: "Sticky, yummy, and oh-so-fun to eat!",
  },
];

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Food = () => {
  return (
    <div>
      <div className="flex justify-center py-5">
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
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="gap-3 p-3 grid md:grid-cols-2 grid-cols-1 place-items-center"
      >
        {FavouriteFood.map((food) => (
          <ImageCard
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
