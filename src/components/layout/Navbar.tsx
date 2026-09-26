"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

const navLinks = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { todaysPlan, saved } = usePlan();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu automatically on any route change —
  // covers link clicks, badge links, and browser back/forward.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-base-300 bg-base-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display flex items-center gap-2 text-lg font-bold tracking-wide text-base-content"
        >
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

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-base-content md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="flex flex-col gap-1 border-t border-base-300 px-4 py-3 md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
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
      )}
    </header>
  );
}