import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-base-200 py-16 text-center">
      <h3 className="font-display text-lg font-bold uppercase">
        Nothing Here Yet
      </h3>
      <p className="text-base-content/60">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="btn btn-primary font-display mt-2 rounded-full uppercase"
      >
        Go to workouts
      </Link>
    </div>
  );
}