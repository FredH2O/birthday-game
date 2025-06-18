import CatAnimation from "@/components/CatGame/CatAnimation";

const CatGame = () => {
  return (
    <div className="max-w-sm mx-auto p-4 mt-20 mb-5 flex flex-col items-center gap-4 bg-orange-50 rounded-2xl shadow-md">
      <p className="font-light italic text-center text-orange-900 leading-relaxed">
        This little game is inspired by one of my favorite things in the whole
        wide world: petting cats! I just love their soft fur, their cozy purrs,
        and the way they make everything feel calm and happy. My favorite cats
        of all are the orange ones—warm and bright like little furry suns. So
        come play along and join me in a simple celebration of all things cat!
      </p>
      <CatAnimation />
    </div>
  );
};

export default CatGame;
