"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import SolutionsMegaMenu from "./SolutionsMegaMenu";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout|null>(null);
  const pathname = usePathname();

  const isSolutionsActive = pathname.startsWith("/solutions");

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "#" },
    { label: "About Us", href: "/about" },
  ];

  const openSolutions = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };

  const closeSolutions = () => {
    closeTimer.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 180);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className="glass-panel flex items-center justify-between rounded-full px-6 py-2 w-full max-w-6xl shadow-xl">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icons/logo.jpg" alt="Logo" width={36} height={36} />
          <span className="font-bold text-lg">
            Avexra <span className="text-primary">AI</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-1 bg-surface-dim/80 rounded-full p-1 border backdrop-blur-md">

          {links.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`px-5 py-2 text-sm font-medium rounded-full transition
                  ${isActive ? "bg-white shadow text-slate-900" : "text-slate-600 hover:bg-white"}
                `}
              >
                {label}
              </Link>
            );
          })}

          {/* SOLUTIONS */}
          <div
            className="relative"
            onMouseEnter={openSolutions}
            onMouseLeave={closeSolutions}
          >
            <span
              className={`px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition
                ${isSolutionsActive ? "bg-white shadow text-slate-900" : "text-slate-600 hover:bg-white"}
              `}
            >
              Solutions
            </span>

            {solutionsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                <SolutionsMegaMenu />
              </div>
            )}
          </div>
        </div>

        {/* CTA + MOBILE BUTTON */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden sm:flex h-10 px-6 items-center rounded-full bg-text-main text-white text-sm font-bold hover:bg-primary transition"
          >
            Contact Us
          </Link>

          <button
            className="sm:hidden p-2"
            onClick={() => setOpen(true)}
          >
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-40 md:hidden ${open ? "visible" : "invisible"}`}>
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-full w-72 bg-white p-6 transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
          <button onClick={() => setOpen(false)} className="mb-6">
            <span className="material-symbols-outlined">close</span>
          </button>

          <nav className="flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center rounded-full bg-text-main text-white py-2 font-bold hover:bg-primary transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
