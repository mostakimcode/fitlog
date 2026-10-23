  "use client";

  import EmptyState from "@/components/myPlan/EmptyState";
  import PlanWorkoutCard from "@/components/myPlan/PlanWorkoutCard";
  import { PlanContext } from "@/context/PlanContext";
  import { IWorkout } from "@/types/workout.type";
  import { useContext, useEffect, useState } from "react";
  import { toast } from "react-toastify";

  interface IPlanWorkout extends IWorkout {
    done?: boolean;
  }

  const MyPlanPage = () => {
    const { plan, setPlan, saved, setSaved } = useContext(PlanContext);
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration",);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(timer);
    }, []);

    const sortWorkouts = (list: IPlanWorkout[]) => {
      const sorted = [...list];

      if (sortBy === "duration") {
        sorted.sort((a, b) => a.duration - b.duration);
      } else if (sortBy === "calories") {
        sorted.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
      } else if (sortBy === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
      }

      return sorted;
    };

    const activeList = activeTab === "plan" ? plan : saved;
    const sortedList = sortWorkouts(activeList);

  
    const totalExercises = activeList.length;
    const totalMinutes = activeList.reduce((sum, w) => sum + w.duration, 0);
    const totalCalories = activeList.reduce((sum, w) => sum + w.caloriesBurned, 0);

    const handleMarkAsDone = (id: number) => {
      setPlan(
        plan.map((workout) =>
          workout.id === id ? { ...workout, done: true } : workout,
        ),
      );
      toast.success("Marked as done. Nice work.");
    };

    const handleRemove = (id: number) => {
      if (activeTab === "plan") {
        setPlan(plan.filter((workout) => workout.id !== id));
        toast.info("Removed from today's plan");
      } else {
        setSaved(saved.filter((workout) => workout.id !== id));
        toast.info("Removed from saved");
      }
    };

    return (
      <div className="container mx-auto px-4 py-10 md:py-14">
        <h1 className="text-3xl font-bold uppercase text-white md:text-4xl">
          My Plan
        </h1>
        <p className="mt-2 text-white/50">
          Cap of five lifts for today. Finish them, then load more.
        </p>

      
        <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-[#111214] p-4 text-center sm:mt-8 sm:gap-4 sm:p-6 sm:text-left">
          <div>
            <p className="text-xs text-white/50 sm:text-sm">Exercises</p>
            <p className="mt-1 text-2xl font-bold text-lime-400 sm:text-3xl">
              {totalExercises}
            </p>
          </div>
          <div>
            <p className="text-xs text-white/50 sm:text-sm">Minutes</p>
            <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              {totalMinutes}
            </p>
          </div>
          <div>
            <p className="text-xs text-white/50 sm:text-sm">Calories</p>
            <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              {totalCalories}
            </p>
          </div>
        </div>


        <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full gap-2 rounded-full border border-white/10 p-1 sm:w-auto">
            <button
              onClick={() => setActiveTab("plan")}
              className={`flex-1 rounded-full px-4 py-2 sm:flex-none text-sm font-semibold transition ${
                activeTab === "plan"
                  ? "bg-white text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 rounded-full px-4 py-2 sm:flex-none text-sm font-semibold transition ${
                activeTab === "saved"
                  ? "bg-white text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start">
            <span className="text-sm text-white/50">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="min-w-0 rounded-lg border border-white/10 bg-[#111214] px-3 py-2 text-sm text-white"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {isLoading ? (
            <p className="py-10 text-center text-white/50">
              Loading workouts…
            </p>
          ) : sortedList.length > 0 ? (
            sortedList.map((workout) => (
              <PlanWorkoutCard
                key={workout.id}
                workout={workout}
                showMarkAsDone={activeTab === "plan"}
                onMarkAsDone={() => handleMarkAsDone(workout.id)}
                onRemove={() => handleRemove(workout.id)}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    );
  };

  export default MyPlanPage;
