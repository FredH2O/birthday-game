import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useQuiz } from "@/context/QuizContext";
type Answer = {
  label: string;
  value: string;
};

type KnowMeGameProps = {
  totalAnswer: Answer[];
  questionId: string;
};

const RadioButtons = ({ totalAnswer, questionId }: KnowMeGameProps) => {
  const { answers, setAnswer } = useQuiz();

  return (
    <div>
      <RadioGroup
        onValueChange={(val) => setAnswer(questionId, val)}
        value={answers[questionId] || ""}
      >
        {totalAnswer.map((answer) => {
          const id = `r-${answer.value}`;

          return (
            <div key={answer.value} className="flex items-center space-x-2">
              <RadioGroupItem value={answer.value} id={id} />
              <Label htmlFor={id}>{answer.label}</Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default RadioButtons;
