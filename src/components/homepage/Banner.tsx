import bannerImg from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="border-b border-white/10 bg-[#0a0a0a] px-4 py-10 sm:py-14 md:py-20">
      <div className="container mx-auto grid items-center gap-8 md:grid-cols-2 md:gap-10">
        
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lime-400">
            Workout Library
          </p>

          <h1 className="text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-white/60 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-lime-300"
          >
            Browse Workouts
          </a>
        </div>

       
        <div className="flex justify-center">
          <Image
            src={bannerImg}
            alt="Workout illustration"
            priority
            className="h-auto w-full max-w-[16rem] object-contain sm:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
