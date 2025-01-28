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
  const [homeLogo, setHomeLogo] = useState<string>();
  const [awayLogo, setAwayLogo] = useState<string>();

  const handleHomeScoreChange = (newScore: number) => {
    setIsPaused(true);
    setHomeScore(newScore);
  };

  const handleAwayScoreChange = (newScore: number) => {
    setIsPaused(true);
    setAwayScore(newScore);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border-4 border-gray-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-sm w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-12">
        <div className="flex flex-col gap-6">
          <Input
            type="text"
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.target.value)}
            className="bg-gray-800 text-gray-100 border-2 border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-md px-4 py-2 text-lg font-bold uppercase"
            maxLength={12}
          />
          <TeamSection
            name={homeTeam}
            score={homeScore}
            logoUrl={homeLogo}
            onScoreChange={handleHomeScoreChange}
          />
        </div>

        <div className="flex flex-col items-center justify-between">
          <Clock
            periodLength={periodLength}
            isPaused={isPaused}
            onPauseChange={setIsPaused}
          />
          <div className="flex flex-col items-center gap-4 mt-8">
            <span className="text-gray-300 text-lg font-bold tracking-wider">PERIOD</span>
            <DigitalDisplay value={period} className="text-4xl" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Input
            type="text"
            value={awayTeam}
            onChange={(e) => setAwayTeam(e.target.value)}
            className="bg-gray-800 text-gray-100 border-2 border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-md px-4 py-2 text-lg font-bold uppercase"
            maxLength={12}
          />
          <TeamSection
            name={awayTeam}
            score={awayScore}
            logoUrl={awayLogo}
            onScoreChange={handleAwayScoreChange}
          />
        </div>
      </div>
    </div>
  );
};