"use client";
import { PlanContext } from "@/context/PlanContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { plan, setPlan } = useContext(PlanContext);

  const alreadyInPlan = plan.some((item) => item.id === workout.id);
  const planIsFull = plan.length >= 5;

  const handleAddToPlan = () => {
    console.log("add to plan btn triggered", workout);

    if (alreadyInPlan) {
      toast.info(`"${workout.name}" is already in today's plan`);
      return;
    }

    if (planIsFull) {
      toast.error("Today's plan is full. Finish a lift before adding more.");
      return;
    }

    setPlan([...plan, { ...workout, done: false }]);
    toast.success("Added to today's plan");
  };

  return (
    <button
      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-40"
      onClick={handleAddToPlan}
      disabled={planIsFull && !alreadyInPlan}
    >
      <LuCalendarPlus2 /> Add to today's plan
    </button>
  );
};

export default AddToPlanButton;
