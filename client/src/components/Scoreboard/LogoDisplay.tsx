interface LogoDisplayProps {
  teamCode?: string;
}

export const LogoDisplay = ({ teamCode }: LogoDisplayProps) => {
  let LogoComponent;

  try {
    if (teamCode) {
      // Dynamically import the logo component
      const NHLLogos = require('react-nhl-logos');
      LogoComponent = NHLLogos[`NHL${teamCode}Logo`];
    }
  } catch (error) {
    console.error('Error loading NHL logo:', error);
  }

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