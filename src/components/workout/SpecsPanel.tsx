import { Workout } from "@/lib/types";

interface SpecsPanelProps {
  workout: Workout;
}

export default function SpecsPanel({ workout }: SpecsPanelProps) {
  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <div className="divide-y divide-base-300 rounded-2xl bg-base-200">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="flex items-center justify-between px-4 py-3"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-base-content/60">
            {spec.label}
          </span>
          <span className="font-medium">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}