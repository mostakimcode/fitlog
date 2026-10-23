import { IWorkout } from "@/types/workout.type";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import { PiFireSimpleFill } from "react-icons/pi";

interface IWorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`} className="block">
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111214] transition-all duration-300 hover:border-lime-400/40">
        
        <div className="h-48 w-full overflow-hidden bg-white/5 sm:h-56">
          <img
            src={workout.image}
            alt={workout.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        
        <div className="p-4 sm:p-5">
          
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-lime-400 px-2.5 py-1 text-xs font-bold uppercase text-black"
              >
                {tag}
              </span>
            ))}
          </div>

        
          <h3 className="text-lg font-bold uppercase text-white">
            {workout.name}
          </h3>

          
          <p className="mt-1 text-sm text-white/50">{workout.equipment}</p>

          
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-sm text-white/60">
            <span className="flex items-center gap-1">
              <LuClock4 /> {workout.duration} min
            </span>
            <span className="flex items-center gap-1">
              <PiFireSimpleFill /> {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <FaRegStar /> {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
