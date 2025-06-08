import ImageCard from "@/components/neobrutalism-ui/image-card";

const FavouriteFood = [
  {
    id: 1,
    url: "/images/strawberry.jpg",
    caption: "Strawberries",
  },
  {
    id: 2,
    url: "/images/spaghetti.jpg",
    caption: "Spaghetti",
  },
  {
    id: 3,
    url: "/images/chicken-nuggets.jpg",
    caption: "Chicken Nuggets",
  },
  {
    id: 4,
    url: "/images/chicken-wings.jpg",
    caption: "Chicken Wings",
  },
];

const Food = () => {
  return (
    <div className="space-y-3 p-3 border container grid md:grid-cols-2 grid-cols-1 place-items-center">
      {FavouriteFood.map((food) => (
        <ImageCard
          key={food.id}
          caption={food.caption}
          imageUrl={food.url}
        ></ImageCard>
      ))}
    </div>
  );
};

export default Food;
