"use client";

import { IWorkout } from "@/types/workout.type";
import { createContext, ReactNode, useEffect, useState } from "react";

interface IPlanWorkout extends IWorkout {
  done?: boolean;
}

interface IPlanContext {
  plan: IPlanWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IPlanWorkout[]>>;
  saved: IPlanWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IPlanWorkout[]>>;
}

export const PlanContext = createContext<IPlanContext>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const readFromStorage = (key: string): IPlanWorkout[] => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return [];
  }
};

const PlanProvider = ({ children }: { children: ReactNode }) => {

  const [plan, setPlan] = useState<IPlanWorkout[]>([]);
  const [saved, setSaved] = useState<IPlanWorkout[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

 
  useEffect(() => {
    
    setPlan(readFromStorage("fitlog_plan"));
    setSaved(readFromStorage("fitlog_saved"));
    setHasLoaded(true);
  }, []);

  
  useEffect(() => {
    if (!hasLoaded) return;
    localStorage.setItem("fitlog_plan", JSON.stringify(plan));
  }, [plan, hasLoaded]);

  useEffect(() => {
    if (!hasLoaded) return;
    localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [saved, hasLoaded]);

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
  };

  return (
    <PlanContext.Provider value={sharedData}>{children}</PlanContext.Provider>
  );
};

export default PlanProvider;
