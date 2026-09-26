"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, Check, X } from "lucide-react";
import { toast } from "sonner";
import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/lib/types";
import StatsRow from "@/components/ui/StatsRow";

interface PlanWorkoutCardProps {
  workout: Workout;
  variant: "plan" | "saved";
}

export default function PlanWorkoutCard({ workout, variant }: PlanWorkoutCardProps) {
  const { markAsDone, removeFromPlan, removeFromSaved } = usePlan();

  const handleMarkDone = () => {
    markAsDone(workout.id);
    toast.success(`Marked "${workout.name}" as done`);
  };

  const handleRemove = () => {
    if (variant === "plan") {
      removeFromPlan(workout.id);
    } else {
      removeFromSaved(workout.id);
    }
    toast(`Removed "${workout.name}"`);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-base-200 p-3">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex min-w-[10rem] flex-1 flex-col gap-1">
        <h3 className="font-display truncate text-base font-bold uppercase">
          {workout.name}
        </h3>
        <p className="truncate text-sm text-base-content/60">{workout.equipment}</p>
        <StatsRow
          duration={workout.duration}
          caloriesBurned={workout.caloriesBurned}
          rating={workout.rating}
        />
      </div>

      <div className="flex flex-shrink-0 flex-wrap items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-outline btn-sm font-display gap-1 rounded-full uppercase"
        >
          <Eye className="h-4 w-4" />
          <span className="hidden sm:inline">View Details</span>
        </Link>
        {variant === "plan" && (
          <button
            type="button"
            onClick={handleMarkDone}
            className="btn btn-primary btn-sm font-display gap-1 rounded-full uppercase"
          >
            <Check className="h-4 w-4" />
            <span className="hidden sm:inline">Mark as Done</span>
          </button>
        )}
        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remove"
          className="btn btn-ghost btn-sm btn-circle"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}