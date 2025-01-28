interface DigitalDisplayProps {
  value: string | number;
  className?: string;
}

export const DigitalDisplay = ({ value, className = "" }: DigitalDisplayProps) => {
  return (
    <div className={`font-mono text-red-500 bg-black p-2 ${className}`}>
      {value.toString().padStart(2, '0')}
    </div>
  );
};
