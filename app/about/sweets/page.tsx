"use client";
import ImageCard from "@/components/neobrutalism-ui/image-card";
import { motion } from "framer-motion";
import SplitText from "@/components/react-bits-ui/SplitText";

const handleAnimationComplete = () => {
  console.log("Animation completed.");
};

const FavouriteSweets = [
  {
    id: 1,
    url: "/Images/chocolate.jpg",
    caption: "Chocolate",
    description: "Rich, smooth, and melts like a hug from Amber’s smile!",
  },
  {
    id: 2,
    url: "/Images/cookies.jpg",
    caption: "Cookies",
    description: "Crunchy, warm, and filled with sweet little surprises!",
  },
  {
    id: 3,
    url: "/Images/gummy-bear.jpg",
    caption: "Gummy Bears",
    description: "Chewy, colorful friends that dance on your tongue!",
  },
  {
    id: 4,
    url: "/Images/ice-cream.jpg",
    caption: "Ice Cream",
    description: "Cool, creamy, and the perfect treat for sunny days!",
  },
];

const Sweets = () => {
  return (
    <div>
      <div className="flex justify-center py-5">
        <SplitText
          text="😋 Sweet Tooth Cravings 😻"
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
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="gap-3 p-3 grid md:grid-cols-2 grid-cols-1 place-items-center"
      >
        {FavouriteSweets.map((sweet) => (
          <ImageCard
            key={sweet.id}
            caption={sweet.caption}
            imageUrl={sweet.url}
            description={sweet.description}
          ></ImageCard>
        ))}
      </motion.div>
    </div>
  );
};

export default Sweets;
