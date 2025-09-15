import { useState } from 'react';
import { ChevronLeft, ChevronRight, Grid3X3, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const MonthlyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(6); // July (0-indexed)
  const [isPlaying, setIsPlaying] = useState(false);

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev + 1) % 12);
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev - 1 + 12) % 12);
  };

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
        {/* Grid Button */}
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:text-golden hover:bg-white/10 border-none p-2 rounded-full"
        >
          <Grid3X3 className="h-5 w-5" />
        </Button>

        {/* Previous Month */}
        <Button
          variant="ghost"
          size="sm"
          onClick={prevMonth}
          className="text-white hover:text-golden hover:bg-white/10 border-none p-2 rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Month Navigation */}
        <div className="flex items-center space-x-1">
          {months.map((month, index) => (
            <button
              key={month}
              onClick={() => setCurrentMonth(index)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                index === currentMonth
                  ? 'bg-white text-black'
                  : 'text-white hover:text-golden'
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        {/* Next Month */}
        <Button
          variant="ghost"
          size="sm"
          onClick={nextMonth}
          className="text-white hover:text-golden hover:bg-white/10 border-none p-2 rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Play/Pause Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-white hover:text-golden hover:bg-white/10 border-none p-2 rounded-full"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  );
};