import { Clock, Flame, Star } from "lucide-react";

interface StatsRowProps {
  duration: number;
  caloriesBurned: number;
  rating: number;
}

export default function StatsRow({ duration, caloriesBurned, rating }: StatsRowProps) {
  return (
    <div className="flex items-center gap-4 text-sm text-base-content/70">
      <span className="flex items-center gap-1">
        <Clock className="h-4 w-4" />
        {duration} min
      </span>
      <span className="flex items-center gap-1">
        <Flame className="h-4 w-4" />
        {caloriesBurned} kcal
      </span>
      <span className="flex items-center gap-1">
        <Star className="h-4 w-4" />
        {rating}
      </span>
    </div>
  );
}