import RadioButtons from "@/components/KnowMeGame/RadioButtons";
import questions from "@/data/knowMeGame.json";

const KnowMeGame = () => {
  return (
    <section className="p-4 border rounded-xl mb-4">
      {questions.map((q, index) => (
        <section key={index}>
          <p className="font-semibold">{q.question}</p>
          <div className="mt-2 space-y-2">
            <RadioButtons totalAnswer={q.options} />
          </div>
        </section>
      ))}
    </section>
  );
};

export default KnowMeGame;
