import { notFound } from "next/navigation";
import Image from "next/image";
import { getWorkoutById } from "@/lib/api";
import CategoryTag from "@/components/ui/CategoryTag";
import SpecsPanel from "@/components/workout/SpecsPanel";
import WorkoutActions from "@/components/workout/WorkoutActions";

interface WorkoutDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function WorkoutDetailPage({ params }: WorkoutDetailPageProps) {
  const { id } = await params;

  let workout;
  try {
    workout = await getWorkoutById(id);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            {workout.name}
          </h1>
          <p className="text-base-content/70">{workout.description}</p>
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <CategoryTag key={group} label={group} />
            ))}
          </div>

          <SpecsPanel workout={workout} />

          <div>
            <h2 className="font-display text-lg font-bold uppercase">
              Instructions
            </h2>
            <ol className="mt-2 flex flex-col gap-2 text-base-content/80">
              {workout.instructions.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <span className="font-semibold">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
}