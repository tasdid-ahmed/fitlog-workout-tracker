"use client";

import { CalendarPlus, Bookmark } from "lucide-react";
import { toast } from "sonner";
import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/lib/types";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {
  const { todaysPlan , saved , addToPlan, addToSaved } = usePlan();

    const isInPlan = todaysPlan.some((w) => w.id === workout.id);
    const isSaved = saved.some((w) => w.id === workout.id);

    const handleAddToPlan = () => {
    if (isInPlan) {
      toast.error(`"${workout.name}" is already in today's plan`);
      return;
    }
    if (todaysPlan.length >= 5) {
      toast.error("Today's plan is full — remove a lift to add another");
      return;
    }
    addToPlan(workout);
    toast.success(`Added "${workout.name}" to today's plan`);
  };

    const handleSaveForLater = () => {
        if (isSaved) {
        toast.error(`"${workout.name}" is already saved`);
        return;
    }
    addToSaved(workout);
    toast.success(`Saved "${workout.name}" for later`);
  };

  return (
    <div className="mt-2 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="btn btn-primary font-display gap-2 rounded-full uppercase tracking-wide"
      >
        <CalendarPlus className="h-4 w-4" />
        Add to today&apos;s plan
      </button>
      <button
        type="button"
        onClick={handleSaveForLater}
        className="btn btn-outline font-display gap-2 rounded-full uppercase tracking-wide"
      >
        <Bookmark className="h-4 w-4" />
        Save for later
      </button>
    </div>
  );
}