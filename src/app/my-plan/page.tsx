"use client";

import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import MetricsSummary from "@/components/my-plan/MetricsSummary";
import PlanTabs from "@/components/my-plan/PlanTabs";
import PlanWorkoutCard from "@/components/my-plan/PlanWorkoutCard";
import EmptyState from "@/components/my-plan/EmptyState";

export default function MyPlanPage() {
  const { todaysPlan, saved, isHydrated } = usePlan();
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const list = activeTab === "today" ? todaysPlan : saved;

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold uppercase">My Plan</h1>
      <p className="mt-1 text-base-content/60">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-6">
        <MetricsSummary />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <PlanTabs activeTab={activeTab} onChange={setActiveTab} />
        {/* Sort By dropdown lands here in Phase 8 */}
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