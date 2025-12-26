"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "#" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className="glass-panel flex items-center justify-between rounded-full px-2 py-2 pl-6 w-full max-w-6xl shadow-xl shadow-indigo-100/50">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center size-9">
            <Image
              src="/icons/logo.jpg"
              alt="Avexra AI Logo"
              className="object-contain"
              width={36}
              height={36}
              priority
            />
          </div>
          <span className="text-text-main text-lg font-bold tracking-tight">
            Avexra <span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1 bg-surface-dim/80 rounded-full p-1 border border-slate-200 backdrop-blur-md">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="px-5 py-2 text-sm font-medium text-slate-600
                 hover:text-slate-900 transition-colors
                 rounded-full hover:bg-white relative group shadow-sm hover:shadow"
            >
              {label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all group-hover:w-4" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 pr-1">
          {/* <Link
            href="#"
            className="hidden lg:block text-sm font-medium text-slate-600 hover:text-primary transition-colors"
          >
            Sign In
          </Link> */}

          <button className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-text-main text-white text-sm font-bold hover:bg-primary transition-all duration-300 shadow-lg shadow-slate-300/50 hover:shadow-indigo-500/30">
            <Link
              href="/contact"
            >
              Start Building
            </Link>
          </button>

          {/* Mobile Menu */}
          <button
            className="sm:hidden p-2 text-slate-700 hover:text-primary"
            onClick={() => setOpen(!open)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
