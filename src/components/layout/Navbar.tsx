"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import SolutionsMegaMenu from "./SolutionsMegaMenu";
import { usePathname } from "next/navigation";
import { isDragActive } from "framer-motion";
import { img } from "framer-motion/client";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
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
    }, 180); // 🔑 delay fixes hover gap
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 overflow-visible">
      <nav className="glass-panel relative z-50 flex items-center justify-between rounded-full px-2 py-2 pl-6 w-full max-w-6xl shadow-xl shadow-indigo-100/50 overflow-visible">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icons/logo.jpg"
            alt="Avexra AI Logo"
            width={36}
            height={36}
            priority
          />
          <span className="text-text-main text-lg font-bold tracking-tight">
            Avexra <span className="text-primary">AI</span>
          </span>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-1 bg-surface-dim/80 rounded-full p-1 border border-slate-200 backdrop-blur-md overflow-visible">
          {links.map(({ label, href }) => {
            const isActive = pathname === href;
          return(
            <Link
              key={label}
              href={href}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all shadow-sm relative group 
                ${
                  isActive
                   ? "text-slate-900 bg-white shadow"
                   : "text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow"
              }`}
            >
              {label}
              <span className={`absolute bottom-1 left-1/2-translate-x-1/2 w-0 h-0.5  bg-primary rounded-full transition-all
                ${isActive ? "w-0" : "w-0 group-hover:w-4"

                }`}
                />
            </Link>
          );
})}

          {/* ✅ SOLUTIONS (FIXED) */}
          <div
            className="relative"
            onMouseEnter={openSolutions}
            onMouseLeave={closeSolutions}
          >
            

            
            <button
              onClick={()=> setSolutionsOpen(!solutionsOpen)}
              className={`px-5 py-2 text-sm font-medium transition-all
                rounded-full cursor-pointer
                shadow-sm
                ${
                  isSolutionsActive
                  ? " text-slate-900 hover:bg-white shadow"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow"
                }`}
            >
              Solutions

            </button>




            {/* 🔽 Mega Menu INSIDE same hover zone */}
            {solutionsOpen && (
              <div
                onMouseEnter={openSolutions}
                onMouseLeave={closeSolutions}
                className="absolute left-1/2 top-full-translate-x-1/2 pt-4"
              >
                <SolutionsMegaMenu />
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 pr-1">
          {/* <Link
            href="#"
            className="hidden lg:block text-sm font-medium text-slate-600 hover:text-primary transition-colors"
          >
          
          </Link> */}
          <button className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-text-main text-white text-sm font-bold hover:bg-primary transition-all duration-300 shadow-lg shadow-slate-300/50 hover:shadow-indigo-500/30">
            <Link href="/contact">Contact Us</Link>
          </button>
        
          {/* Mobile Menu */}
          <button
            className="sm:hidden p-2 text-slate-700 hover:text-primary"
            onClick={() => setOpen(!open)} aris-label = "Toggle menu"
          >
             {open ? "✕" : "☰"}
          </button>
      </div>
      </nav>
         {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-4 mx-4 glass-panel rounded-2xl p-4 shadow-xl space-y-2">
          {links.map(({ label, href }) => {
            const isActive = pathname === href;
            return(
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition
                ${
                  isActive
                   ? "bg-primary text-white"
                   : "text-slate-700 hover:bg-slate-100"
                }`}
            >
              {label}
            </Link>
            );
})}

          <button
            onClick={() => setSolutionsOpen(!solutionsOpen)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition
              ${
                isSolutionsActive
                ? "bg-primary text-white"
                : "text-slate-700 hover:bg-slate-100"
              }`}
          >
            Solutions
          </button>

          {solutionsOpen && <SolutionsMegaMenu />}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center mt-3 px-4 py-3 rounded-lg bg-primary text-white font-semibold"
          >
            Contact Us
          </Link>
        


        </div>
      
        )}
    </div>
  );
}
