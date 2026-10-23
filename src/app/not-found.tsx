import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold uppercase text-white md:text-5xl">
        Lift not found
      </h1>
      <p className="mt-4 max-w-md text-white/50">
        The page you're looking for doesn't exist. Let's get
        you back to the library.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default NotFound;
