import RadioButtons from "@/components/KnowMeGame/RadioButtons";
import type { Question } from "@/types";
import questions from "@/data/knowMeGame.json" assert { type: "json" };

const KnowMeGame = () => {
  return (
    <section className="p-5 border rounded bg-main mb-4">
      {(questions as Question[]).map((q, index) => (
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
