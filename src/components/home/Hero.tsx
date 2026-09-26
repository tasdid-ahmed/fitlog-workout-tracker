import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-8 rounded-2xl bg-base-200 p-8 md:flex-row md:justify-between md:p-12">
        <div className="flex max-w-lg flex-col items-start gap-4 text-left">
          <span className="font-display text-sm font-semibold tracking-widest text-primary">
            WORKOUT LIBRARY
          </span>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Train With Intent. Log Every Set.
          </h1>
          <p className="text-base-content/70">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          
                      
           <a href="#library"
            className="btn btn-primary font-display mt-2 gap-2 rounded-full uppercase tracking-wide"
          >
            Browse Workouts
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <div className="w-48 sm:w-64 md:w-72">
          <Image
            src="/assets/banner.png"
            alt="Illustration of a figure using a gym machine"
            width={334}
            height={334}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}