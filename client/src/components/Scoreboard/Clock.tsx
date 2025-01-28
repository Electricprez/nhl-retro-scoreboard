import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DigitalDisplay } from "./DigitalDisplay";
import { Play, Pause } from "lucide-react";

interface ClockProps {
  periodLength: number;
  isPaused: boolean;
  onPauseChange: (paused: boolean) => void;
}

export const Clock = ({ periodLength, isPaused, onPauseChange }: ClockProps) => {
  const [timeLeft, setTimeLeft] = useState(periodLength * 60);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-1">
        <DigitalDisplay value={minutes} className="text-4xl" />
        <span className="text-4xl text-red-500">:</span>
        <DigitalDisplay value={seconds} className="text-4xl" />
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPauseChange(!isPaused)}
        className="text-white hover:text-red-500"
      >
        {isPaused ? <Play className="h-6 w-6" /> : <Pause className="h-6 w-6" />}
      </Button>
    </div>
  );
};
