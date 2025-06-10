import KnowMeGame from "@/components/KnowMeGame/KnowMeGame";

const KnowMeGame = () => {
  return (
    <section className="p-4 border rounded-xl mb-4">
      <p className="font-semibold">{question}</p>
      <div className="mt-2 space-y-2">
        <KnowMeGame />
      </div>
    </section>
  );
};

export default KnowMeGame;
