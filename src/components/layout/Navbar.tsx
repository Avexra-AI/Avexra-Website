"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import SolutionsMegaMenu from "./SolutionsMegaMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isSolutionsActive = pathname.startsWith("/solutions");

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "/blogs" },
    { label: "About Us", href: "/about" },
  ];

  const openSolutions = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };

  const closeSolutions = () => {
    closeTimer.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
        <nav className="glass-panel flex items-center justify-between rounded-full px-6 py-2 w-full max-w-6xl shadow-xl">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/icons/logo.jpg" alt="Avexra AI" width={36} height={36} priority />
            <span className="text-lg font-bold">
              Avexra <span className="text-primary">AI</span>
            </span>
          </Link>

          {/* LINKS */}
          <div className="hidden md:flex items-center gap-1 bg-surface-dim/70 rounded-full p-1 border backdrop-blur">

            {links.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition
                    ${isActive ? "bg-white shadow text-black" : "hover:bg-white hover:shadow"}
                  `}
                >
                  {label}
                </Link>
              );
            })}

            {/* SOLUTIONS */}
            <div
              className=""
              onMouseEnter={openSolutions}
              onMouseLeave={closeSolutions}
            >
              <span
                className={`px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition
                  ${isSolutionsActive ? "bg-white shadow text-black" : "hover:bg-white hover:shadow"}
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
              className="md:hidden p-2"
              onClick={() => setMobileOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </nav>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div className={`fixed inset-0 z-40 md:hidden ${mobileOpen ? "visible" : "invisible"}`}>
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 transition-transform
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button onClick={() => setMobileOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>

          <nav className="flex flex-col gap-4 mt-10">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium px-3 py-2 rounded-md hover:bg-slate-100"
              >
                {label}
              </Link>
            ))}

            {/* MOBILE SOLUTIONS */}
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Solutions
              <span className="material-symbols-outlined">
                {solutionsOpen ? "expand_less" : "expand_more"}
              </span>
            </button>

            {solutionsOpen && (
              <div className="pl-3">
                <SolutionsMegaMenu />
              </div>
            )}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 text-center bg-text-main text-white rounded-full px-4 py-2 font-bold hover:bg-primary transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
