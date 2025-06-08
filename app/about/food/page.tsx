import ImageCard from "@/components/neobrutalism-ui/image-card";

const FavouriteFood = [
  {
    id: 1,
    url: "/images/strawberry.jpg",
    caption: "Strawberries",
    description: "Sweet, squishy, and pink like a princess snack!",
  },
  {
    id: 2,
    url: "/images/spaghetti.jpg",
    caption: "Spaghetti",
    description: "Twirly noodles that dance on the fork!",
  },
  {
    id: 3,
    url: "/images/chicken-nuggets.jpg",
    caption: "Chicken Nuggets",
    description: "Crunchy little bites Amber’s nuggety joy!",
  },
  {
    id: 4,
    url: "/images/chicken-wings.jpg",
    caption: "Chicken Wings",
    description: "Sticky, yummy, and oh-so-fun to eat!",
  },
];

const Food = () => {
  return (
    <div className="space-y-3 p-3 container grid md:grid-cols-2 grid-cols-1 place-items-center">
      {FavouriteFood.map((food) => (
        <ImageCard
          key={food.id}
          caption={food.caption}
          imageUrl={food.url}
          description={food.description}
        ></ImageCard>
      ))}
    </div>
  );
};

export default Food;
