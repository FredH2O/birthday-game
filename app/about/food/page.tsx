"use client";
import ImageCard from "@/components/neobrutalism-ui/image-card";
import { motion } from "framer-motion";

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

const Food = () => {
  return (
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
  );
};

export default Food;
