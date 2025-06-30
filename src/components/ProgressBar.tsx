
interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full bg-gray-200 h-2">
      <div 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
