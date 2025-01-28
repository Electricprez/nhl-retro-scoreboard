import { useEffect, useState } from 'react';

interface LogoDisplayProps {
  teamCode?: string;
}

export const LogoDisplay = ({ teamCode }: LogoDisplayProps) => {
  const [LogoComponent, setLogoComponent] = useState<any>(null);

  useEffect(() => {
    async function loadLogo() {
      if (teamCode) {
        try {
          const NHLLogos = await import('react-nhl-logos');
          const TeamLogo = NHLLogos[`NHL${teamCode}Logo`];
          setLogoComponent(() => TeamLogo);
        } catch (error) {
          console.error('Error loading NHL logo:', error);
        }
      }
    }

    loadLogo();
  }, [teamCode]);

  return (
    <div className="relative w-24 h-24 border-2 border-gray-600 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
      {LogoComponent ? (
        <div className="w-full h-full p-2">
          <LogoComponent />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Logo
        </div>
      )}
    </div>
  );
};