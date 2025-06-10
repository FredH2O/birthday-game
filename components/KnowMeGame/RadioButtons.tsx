import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Answer = {
  label: string;
  value: string;
};

type KnowMeGameProps = {
  totalAnswer: Answer[];
};

const RadioButtons = ({ totalAnswer }: KnowMeGameProps) => {
  return (
    <div>
      <RadioGroup defaultValue="">
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
