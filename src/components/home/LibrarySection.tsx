"use client";

import { useState, useEffect } from "react";
import { getWorkouts } from "@/lib/api";
import { Workout } from "@/lib/types";
import WorkoutCard from "./WorkoutCard";

export default function LibrarySection() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getWorkouts()
      .then((data) => setWorkouts(data))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section id="library" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl font-bold uppercase">The Library</h2>
      <p className="mt-1 text-base-content/60">
        Twelve lifts covering every major muscle group.
      </p>

      {isLoading && (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      {error && (
        <div className="py-20 text-center text-base-content/60">
          Couldn&apos;t load workouts. Please try again later.
        </div>
      )}

      {!isLoading && !error && (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout, index) => (
            <WorkoutCard key={workout.id} workout={workout}  priority={index < 3} />
          ))}
        </div>
      )}
    </section>
  );
}