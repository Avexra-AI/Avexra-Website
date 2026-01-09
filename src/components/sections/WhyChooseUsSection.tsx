"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { whyChooseFeatures, whyChooseStats } from "@/data/whyChooseUs";
import Background from "../layout/Background";
import Link from "next/link";

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [activated, setActivated] = useState(false);

  const retention = useCountUp(activated ? whyChooseStats[0].value : 0, 1400);
  const deployments = useCountUp(activated ? whyChooseStats[1].value : 0, 1400);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || activated) return;

        setActivated(true);

        cardRefs.current.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add("reveal-visible");
          }, i * 280);
        });

        setTimeout(() => {
          if (lineRef.current) {
            lineRef.current.classList.remove("scale-y-0");
            lineRef.current.classList.add("scale-y-100");
          }
        }, 200);

        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [activated]);

  return (
    <>
      <Background />
      <section
        ref={sectionRef}
        id="why-choose-us"
        className="relative w-full pt-28 lg:pt-36 overflow-hidden"
      >
        {/* glows */}
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* LEFT */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                  Why Choose Us
                </span>
              </div> */}

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Engineering the{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Autonomy
                </span>{" "}
                of Tomorrow.
              </h2>

              <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                We build adaptive, intelligent systems that scale with ambition
                — engineered by real people, not templates.
              </p>
              <div className="flex items-center gap-4">
                <button className="group flex items-center gap-2 px-7 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-indigo-600 transition-all shadow-lg">
                  <Link href="/contact">Start Building</Link>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <button className="text-sm font-semibold text-slate-500 hover:text-slate-900 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 hover:after:w-full after:transition-all">
                  View Our Work
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200 max-w-sm">
                <div>
                  <div className="text-3xl font-bold text-slate-900">
                    {retention}
                    {whyChooseStats[0].suffix}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">
                    {whyChooseStats[0].label}
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-bold text-slate-900">
                    {deployments}
                    {whyChooseStats[1].suffix}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">
                    {whyChooseStats[1].label}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7 relative flex flex-col gap-6">
              <div
                ref={lineRef}
                className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-indigo-400 to-transparent origin-top scale-y-0 transition-transform duration-[900ms] hidden md:block"
              />

              {whyChooseFeatures.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) {
                      cardRefs.current[i] = el;
                    }
                  }}
                  className="group reveal-on-scroll glass-card rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-indigo-600 text-3xl" style={{fontVariationSettings:"'wght' 400",}}>
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 transition-colors group-hover:text-indigo-600">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
