import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 px-4 py-14 text-center sm:py-20">
      <h3 className="text-xl font-bold uppercase text-white">
        Nothing here yet
      </h3>
      <p className="mt-2 text-white/50">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyState;
