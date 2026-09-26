"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Workout } from "@/lib/types";

interface PlanContextType {
  todaysPlan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  isHydrated: boolean;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

const PLAN_KEY = "fitlog-todays-plan";
const SAVED_KEY = "fitlog-saved";

export function PlanProvider({ children }: { children: ReactNode }) {
  const [todaysPlan, setTodaysPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage AFTER first render (client-only).
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem(PLAN_KEY);
      const storedSaved = localStorage.getItem(SAVED_KEY);
      if (storedPlan) setTodaysPlan(JSON.parse(storedPlan));
      if (storedSaved) setSaved(JSON.parse(storedSaved));
    } catch (e) {
      console.error("Failed to load plan from localStorage", e);
    }
    setIsHydrated(true);
  }, []);

  // Persist on every change, but only after hydration (otherwise this
  // effect would fire once on mount and overwrite storage with the
  // empty initial state before the load-effect above even runs).
  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(PLAN_KEY, JSON.stringify(todaysPlan));
  }, [todaysPlan, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved, isHydrated]);

  const addToPlan = (workout: Workout) => {
    setTodaysPlan((prev) => {
      if (prev.some((w) => w.id === workout.id)) return prev;
      if (prev.length >= 5) return prev;
      return [...prev, workout];
    });
  };

  const addToSaved = (workout: Workout) => {
    setSaved((prev) => {
      if (prev.some((w) => w.id === workout.id)) return prev;
      return [...prev, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setTodaysPlan((prev) => prev.filter((w) => w.id !== id));
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((w) => w.id !== id));
  };

  const markAsDone = (id: number) => {
    // "Done" for now just means removing it from today's plan —
    removeFromPlan(id);
  };

  return (
    <PlanContext.Provider
      value={{
        todaysPlan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        isHydrated,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
}