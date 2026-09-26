import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/lib/types";
import CategoryTag from "@/components/ui/CategoryTag";
import StatsRow from "@/components/ui/StatsRow";

interface WorkoutCardProps {
  workout: Workout;
  priority?: boolean;
}

export default function WorkoutCard({ workout, priority = false }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-base-200 transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          priority={priority}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <CategoryTag key={group} label={group} />
          ))}
        </div>
        <h3 className="font-display text-lg font-bold uppercase leading-tight">
          {workout.name}
        </h3>
        <p className="text-sm text-base-content/60">{workout.equipment}</p>
        <div className="mt-auto border-t border-base-300 pt-3">
          <StatsRow
            duration={workout.duration}
            caloriesBurned={workout.caloriesBurned}
            rating={workout.rating}
          />
        </div>
      </div>
    </Link>
  );
}