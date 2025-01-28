interface DigitalDisplayProps {
  value: string | number;
  className?: string;
}

export const DigitalDisplay = ({ value, className = "" }: DigitalDisplayProps) => {
  return (
    <div 
      className={`
        font-mono bg-black p-2 rounded 
        border-2 border-gray-700
        shadow-[0_0_10px_rgba(255,0,0,0.3)]
        ${className}
      `}
    >
      <div className="text-red-500 opacity-90">{value.toString().padStart(2, '0')}</div>
    </div>
  );
};