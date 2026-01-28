"use client";

import Link from "next/link";

import { solutions } from "@/data/solutions";

export default function SolutionsMegaMenu() {
  return (
    <div
      className="
        absolute top-[100%] left-1/2 -translate-x-1/2 mt-6 z-40
      "
    >
      {/* HOVER BUFFER */}
      <div className="absolute -top-6 left-0 right-0 h-6" />

      {/* GLASS PANEL */}
      <div
        className="
          w-[1400px] max-w-[95vw]
          rounded-[32px] p-8
          bg-white/60 backdrop-blur-2xl
          border border-white/80
          shadow-[0_20px_80px_-20px_rgba(0,0,0,0.25)]
        "
      >
        <div className="grid grid-cols-4 gap-6">
          {solutions.map((item) => (
            <Link
              key={item.title}
              href={`/solutions/${item.slug}`} // ✅ dynamic route
              className={`
                relative overflow-hidden
                rounded-3xl p-7 min-h-[410px]
                text-white
                bg-gradient-to-b ${item.gradient}
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-2xl
              `}
            >
              {/* TEXT */}
              <div className="relative z-10 max-w-[80%]">
                <span className="text-xs font-semibold opacity-90">
                  {item.tag}
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm opacity-100 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* ICON */} 
              <div className="absolute bottom-6 left-6 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center"> 
                <span className="material-symbols-outlined text-3xl" 
                  style={{fontVariationSettings:"'wght' 400"}}> 
                  {item.icon} 
                </span> 
              </div>

              {/* ILLUSTRATION */}
              {/* <img
                src={item.image}
                alt={item.title}
                className="
                  absolute bottom-0 right-0
                  w-44 h-44
                  object-contain
                  opacity-80
                  pointer-events-none
                  translate-x-6 translate-y-6
                "
              /> */}

              {/* SOFT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

              {/* ARROW */}
              <div className="absolute top-6 right-6 w-10 h-10 text-xl font-bold rounded-full border-2 border-white/40 flex items-center justify-center z-10">
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
