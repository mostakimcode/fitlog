"use client";

import { PlanContext } from "@/context/PlanContext";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Navbar = () => {
  const { plan, saved } = useContext(PlanContext);
  const pathname = usePathname();

  const navLinks = [
    { label: "Workouts", href: "/" },
    { label: "My Plan", href: "/my-plan" },
  ];

  return (
    <nav className="border-b border-white/10 bg-[#0a0a0a]">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 md:py-4">
        
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src={logo} alt="FitLog Logo" className="h-6 w-6" />
          <span className="text-lg font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        
        <ul className="order-last flex w-full items-center gap-2 md:order-none md:w-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="flex-1 md:flex-none">
                <Link
                  href={link.href}
                  className={`block rounded-full px-4 py-2 text-center text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-lime-400 text-black"
                      : "bg-white/5 text-white/70 hover:text-white md:bg-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        
        <div className="flex shrink-0 items-center gap-3 text-sm text-white/70 sm:gap-4">
          <Link href="/my-plan" className="flex items-center gap-1.5 whitespace-nowrap sm:gap-2">
            Plan
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-1.5 whitespace-nowrap sm:gap-2">
            Saved
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-xs font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
