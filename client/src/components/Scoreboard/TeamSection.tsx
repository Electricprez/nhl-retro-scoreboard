import { Button } from "@/components/ui/button";
import { DigitalDisplay } from "./DigitalDisplay";
import { PlusCircle, MinusCircle } from "lucide-react";

interface TeamSectionProps {
  name: string;
  score: number;
  onScoreChange: (newScore: number) => void;
}

export const TeamSection = ({ name, score, onScoreChange }: TeamSectionProps) => {
  const handleScoreChange = (increment: boolean) => {
    const newScore = increment ? score + 1 : Math.max(0, score - 1);
    onScoreChange(newScore);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border-2 border-white rounded">
      <div className="text-2xl font-bold text-white uppercase">
        {name.slice(0, 3)}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleScoreChange(false)}
          className="text-white hover:text-red-500"
        >
          <MinusCircle className="h-6 w-6" />
        </Button>
        <DigitalDisplay value={score} className="text-4xl min-w-[4rem] text-center" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleScoreChange(true)}
          className="text-white hover:text-red-500"
        >
          <PlusCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
