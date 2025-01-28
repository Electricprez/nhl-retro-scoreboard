interface LogoDisplayProps {
  logoUrl?: string;
  onLogoChange: (file: File) => void;
}

export const LogoDisplay = ({ logoUrl, onLogoChange }: LogoDisplayProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'image/svg+xml') {
      onLogoChange(file);
    }
  };

  return (
    <div className="relative w-24 h-24 border-2 border-gray-600 rounded-lg overflow-hidden bg-gray-800 group">
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt="Team Logo" 
          className="w-full h-full object-contain p-2"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          No Logo
        </div>
      )}
      <input
        type="file"
        accept=".svg"
        onChange={handleFileChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
        title="Upload Logo"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="text-white text-sm">Click to upload SVG</span>
      </div>
    </div>
  );
};
