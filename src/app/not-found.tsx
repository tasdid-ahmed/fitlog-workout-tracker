import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6 lg:px-8">
      <Compass className="h-10 w-10 text-primary" />
      <h1 className="font-display text-6xl font-bold">404</h1>
      <h2 className="font-display text-xl font-bold uppercase">
        Page Not Found
      </h2>
      <p className="max-w-sm text-base-content/60">
        The page you&apos;re looking for doesn&apos;t exist. It might have
        been moved, or the link might be off.
      </p>
      <Link
        href="/"
        className="btn btn-primary font-display mt-2 rounded-full uppercase"
      >
        Go to workouts
      </Link>
    </main>
  );
}