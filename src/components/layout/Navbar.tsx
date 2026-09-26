"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { usePlan } from "@/context/PlanContext";

const navLinks = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { todaysPlan, saved } = usePlan();

  return (
    <header className="border-b border-base-300 bg-base-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
            href="/"
            className="font-display flex items-center gap-2 text-lg font-bold tracking-wide text-base-content">
                
            <Image src="/assets/logo.png" alt="FitLog logo" width={20} height={20} />
            FITLOG
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-base-content/70 hover:text-base-content"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/my-plan" className="flex items-center gap-1.5">
            <span className="text-base-content/80">Plan</span>
            <span className="badge badge-primary badge-sm font-semibold">
              {todaysPlan.length}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-1.5">
            <span className="text-base-content/80">Saved</span>
            <span className="badge badge-outline badge-sm font-semibold">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}