import { Button } from "@/components/ui/button";
import { DigitalDisplay } from "./DigitalDisplay";
import { LogoDisplay } from "./LogoDisplay";
import { PlusCircle, MinusCircle } from "lucide-react";

interface TeamSectionProps {
  name: string;
  score: number;
  logoUrl?: string;
  onScoreChange: (newScore: number) => void;
  onLogoChange: (file: File) => void;
}

export const TeamSection = ({ 
  name, 
  score, 
  logoUrl,
  onScoreChange,
  onLogoChange 
}: TeamSectionProps) => {
  const handleScoreChange = (increment: boolean) => {
    const newScore = increment ? score + 1 : Math.max(0, score - 1);
    onScoreChange(newScore);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 border-4 border-gray-300 rounded-lg bg-gray-900 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <LogoDisplay logoUrl={logoUrl} onLogoChange={onLogoChange} />
      <div className="text-2xl font-bold text-gray-100 uppercase tracking-wider">
        {name.slice(0, 3)}
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleScoreChange(false)}
          className="text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-colors duration-200"
        >
          <MinusCircle className="h-8 w-8" />
        </Button>
        <DigitalDisplay value={score} className="text-5xl min-w-[5rem] text-center" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleScoreChange(true)}
          className="text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-colors duration-200"
        >
          <PlusCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};