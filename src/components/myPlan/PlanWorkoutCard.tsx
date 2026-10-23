"use client";

import { IWorkout } from "@/types/workout.type";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import { PiFireSimpleFill } from "react-icons/pi";
import Image from "next/image";

interface IPlanWorkout extends IWorkout {
  done?: boolean;
}

interface IPlanWorkoutCardProps {
  workout: IPlanWorkout;
  showMarkAsDone?: boolean;
  onMarkAsDone?: () => void;
  onRemove: () => void;
}

const PlanWorkoutCard = ({
  workout,
  showMarkAsDone,
  onMarkAsDone,
  onRemove,
}: IPlanWorkoutCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#111214] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <Image
          src={workout.image}
          alt={workout.name}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-xl object-cover"
        />
        <div className="min-w-0">
          <h3
            className={`break-words font-bold uppercase ${
              workout.done ? "text-white/40 line-through" : "text-white"
            }`}
          >
            {workout.name}
          </h3>
          <p className="text-sm text-white/50">{workout.equipment}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/50">
            <span className="flex items-center gap-1"><LuClock4 className="text-[#ccff00]"/> {workout.duration} min</span>
            <span className="flex items-center gap-1"><PiFireSimpleFill className="text-[#ccff00]"/> {workout.caloriesBurned} kcal</span>
            <span className="flex items-center gap-1"><FaRegStar className="text-[#ccff00]"/> {workout.rating}</span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:flex-nowrap">
        <Link
          href={`/workouts/${workout.id}`}
          className="flex-1 whitespace-nowrap rounded-full border border-white/20 px-4 py-2 text-center text-xs font-semibold uppercase text-white transition hover:border-white/40 sm:flex-none"
        >
          View Details
        </Link>

        {showMarkAsDone && (
          <button
            onClick={onMarkAsDone}
            disabled={workout.done}
            className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-lime-400 px-4 py-2 text-xs font-bold uppercase text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
          >
            <BiCheck />  {workout.done ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          onClick={onRemove}
          className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/40 transition hover:text-white sm:ml-0"
          aria-label="Remove"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;
