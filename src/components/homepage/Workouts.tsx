import { IWorkout } from "@/types/workout.type";
import WorkoutCard from "../shared/WorkoutCard";

const getWorkouts = async () => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workouts data:", error);
    return [];
  }
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return (
    <section id="library" className="container mx-auto px-4 py-10 sm:py-14 md:py-20">
      
      <div className="mb-8 sm:mb-10">
        <h2 className="text-3xl font-bold uppercase text-white md:text-4xl">
          The Library
        </h2>
        <p className="mt-2 text-white/50">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {workoutsData.map((workout: IWorkout) => {
          return <WorkoutCard key={workout.id} workout={workout} />;
        })}
      </div>
    </section>
  );
};

export default Workouts;
