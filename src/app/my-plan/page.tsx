"use client";

import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import MetricsSummary from "@/components/my-plan/MetricsSummary";
import PlanTabs from "@/components/my-plan/PlanTabs";
import SortDropdown from "@/components/my-plan/SortDropdown";
import PlanWorkoutCard from "@/components/my-plan/PlanWorkoutCard";
import EmptyState from "@/components/my-plan/EmptyState";
import { Workout } from "@/lib/types";

type SortKey = "duration" | "calories" | "rating";

function sortWorkouts(workouts: Workout[], sortBy: SortKey): Workout[] {
  const sorted = [...workouts];
  switch (sortBy) {
    case "duration":
      return sorted.sort((a, b) => a.duration - b.duration);
    case "calories":
      return sorted.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
  }
}

export default function MyPlanPage() {
  const { todaysPlan, saved, isHydrated } = usePlan();
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  const rawList = activeTab === "today" ? todaysPlan : saved;
  const list = sortWorkouts(rawList, sortBy);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold uppercase">My Plan</h1>
      <p className="mt-1 text-base-content/60">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-6">
        <MetricsSummary />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <PlanTabs activeTab={activeTab} onChange={setActiveTab} />
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {!isHydrated && (
          <p className="py-16 text-center text-base-content/60">
            Loading workouts…
          </p>
        )}

        {isHydrated && list.length === 0 && <EmptyState />}

        {isHydrated &&
          list.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              variant={activeTab === "today" ? "plan" : "saved"}
            />
          ))}
      </div>
    </main>
  );
}