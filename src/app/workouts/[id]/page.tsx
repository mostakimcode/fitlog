import AddToPlanButton from "@/components/workoutDetails/AddToPlanButton";
import SaveForLaterButton from "@/components/workoutDetails/SaveForLaterButton";
import { IWorkout } from "@/types/workout.type";
import { notFound } from "next/navigation";


interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

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

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutsData = await getWorkouts();
  const workout = workoutsData.find(
    (workout: IWorkout) => String(workout.id) === String(id),
  ) as IWorkout;

  if (!workout) {
    notFound();
  }

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <div className="container mx-auto px-4 py-10 md:py-14">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
        
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 sm:aspect-[16/10] sm:rounded-3xl lg:aspect-auto">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover"
          />
        </div>

        
        <div>
          <h1 className="text-3xl font-bold uppercase text-white md:text-4xl">
            {workout.name}
          </h1>

          <p className="mt-4 text-white/60">{workout.description}</p>

          
          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between gap-4 px-4 py-3 text-sm sm:px-5 ${
                  index % 2 === 0 ? "bg-white/5" : "bg-transparent"
                }`}
              >
                <span className="font-semibold uppercase tracking-wide text-white/50">
                  {spec.label}
                </span>
                <span className="text-right font-medium text-white">{spec.value}</span>
              </div>
            ))}
          </div>

          
          <div className="mt-6">
            <h2 className="text-lg font-bold uppercase text-white">
              Instructions
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-white/70">
              {workout.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddToPlanButton workout={workout} />
            <SaveForLaterButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
