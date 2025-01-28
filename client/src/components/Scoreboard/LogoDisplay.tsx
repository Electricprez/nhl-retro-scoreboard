interface LogoDisplayProps {
  logoUrl?: string;
}

export const LogoDisplay = ({ logoUrl }: LogoDisplayProps) => {
  return (
    <div className="relative w-24 h-24 border-2 border-gray-600 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt="Team Logo" 
          className="w-full h-full object-contain p-2"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Logo
        </div>
      )}
    </div>
  );
};