"use client";

import { usePlan } from "@/context/PlanContext";

export default function MetricsSummary() {
  const { todaysPlan } = usePlan();

  const exercises = todaysPlan.length;
  const minutes = todaysPlan.reduce((sum, w) => sum + w.duration, 0);
  const calories = todaysPlan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <div className="grid grid-cols-3 divide-x divide-base-300 rounded-2xl bg-base-200">
      <div className="flex flex-col items-center gap-1 py-4">
        <span className="text-xs uppercase tracking-wide text-base-content/60">
          Exercises
        </span>
        <span className="font-display text-2xl font-bold text-primary">
          {exercises}
        </span>
      </div>
      <div className="flex flex-col items-center gap-1 py-4">
        <span className="text-xs uppercase tracking-wide text-base-content/60">
          Minutes
        </span>
        <span className="font-display text-2xl font-bold">{minutes}</span>
      </div>
      <div className="flex flex-col items-center gap-1 py-4">
        <span className="text-xs uppercase tracking-wide text-base-content/60">
          Calories
        </span>
        <span className="font-display text-2xl font-bold">{calories}</span>
      </div>
    </div>
  );
}