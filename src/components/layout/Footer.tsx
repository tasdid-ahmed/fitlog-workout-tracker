import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm sm:flex-row sm:px-6 lg:px-8">
        <Link
            href="/"
            className="font-display flex items-center gap-2 font-bold text-base-content"
            >
            <Image src="/assets/logo.png" alt="FitLog logo" width={16} height={16} />
            FITLOG
        </Link>
        <p className="text-base-content/60">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}