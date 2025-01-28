import { useState } from "react";
import { TeamSection } from "./TeamSection";
import { Clock } from "./Clock";
import { DigitalDisplay } from "./DigitalDisplay";
import { Input } from "@/components/ui/input";

export const Scoreboard = () => {
  const [homeTeam, setHomeTeam] = useState("HOME");
  const [awayTeam, setAwayTeam] = useState("AWAY");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [period, setPeriod] = useState(1);
  const [isPaused, setIsPaused] = useState(true);
  const [periodLength] = useState(20); // 20 minute periods

  const handleHomeScoreChange = (newScore: number) => {
    setIsPaused(true);
    setHomeScore(newScore);
  };

  const handleAwayScoreChange = (newScore: number) => {
    setIsPaused(true);
    setAwayScore(newScore);
  };

  return (
    <div className="bg-black p-8 rounded-lg shadow-xl w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.target.value)}
            className="bg-gray-800 text-white border-white"
            maxLength={12}
          />
          <TeamSection
            name={homeTeam}
            score={homeScore}
            onScoreChange={handleHomeScoreChange}
          />
        </div>

        <div className="flex flex-col items-center justify-between">
          <Clock
            periodLength={periodLength}
            isPaused={isPaused}
            onPauseChange={setIsPaused}
          />
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm">PERIOD</span>
            <DigitalDisplay value={period} className="text-3xl" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Input
            type="text"
            value={awayTeam}
            onChange={(e) => setAwayTeam(e.target.value)}
            className="bg-gray-800 text-white border-white"
            maxLength={12}
          />
          <TeamSection
            name={awayTeam}
            score={awayScore}
            onScoreChange={handleAwayScoreChange}
          />
        </div>
      </div>
    </div>
  );
};