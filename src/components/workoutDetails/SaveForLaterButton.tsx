"use client";
import { PlanContext } from "@/context/PlanContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(PlanContext);

  const alreadySaved = saved.some((item) => item.id === workout.id);

  const handleSaveForLater = () => {
    console.log("save for later btn triggered", workout);

    if (alreadySaved) {
      toast.info(`"${workout.name}" is already saved`);
      return;
    }

    setSaved([...saved, workout]);
    toast.success("Saved for later");
  };

  return (
    <button
      className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase text-white transition hover:border-white/40"
      onClick={handleSaveForLater}
    >
      <FaRegBookmark /> Save for later
    </button>
  );
};

export default SaveForLaterButton;
