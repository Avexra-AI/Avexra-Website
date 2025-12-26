import { methodologySteps } from "@/data/methodology";

export default function MethodologySection() {
  return (
    <section
      id="methodology"
      className="relative w-full bg-background-light text-slate-900 overflow-x-hidden selection:bg-primary selection:text-black"
    >
      <section className="flex-1 flex flex-col items-center w-full relative">
        {/* ================= HEADER ================= */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 pt-20 pb-12 flex flex-col items-center text-center relative overflow-hidden z-10">
          <div className="absolute inset-0 grid-bg opacity-100 -z-10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 shadow-sm mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Workflow
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl leading-[1.1]">
            From Audit to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-400 to-primary animate-flow glow-text">
              Autonomous
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-8 mx-auto">
            We don&apos;t just build chatbots. We engineer intelligent
            architectures that scale, learn, and evolve with your enterprise.
          </p>
        </section>

        {/* ================= DESKTOP TIMELINE ================= */}
        <section className="w-full px-4 md:px-10 py-10 relative overflow-hidden bg-surface-dim">
          <div className="max-w-[1280px] mx-auto">
            <div className="hidden lg:grid grid-cols-4 gap-8 relative py-20">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 rounded-full bg-border-light -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-0 w-[100%] h-[2px] bg-gradient-to-r from-transparent via-primary to-primary -translate-y-1/2 z-0 shadow-[0_0_10px_rgba(112,128,144,0.5)]"></div>

              {methodologySteps.map((step, index) => {
                const isTop = index % 2 === 0;

                return (
                  <div
                    key={step.id}
                    className="relative z-10 flex flex-col items-center group"
                  >
                    {isTop && (
                      <div className="mb-10 w-full transition-transform duration-300 group-hover:-translate-y-2">
                        <div className="glass-card rounded-2xl p-6 relative overflow-hidden border-t-4 border-primary/20 group-hover:border-t-primary transition-colors">
                          <span className="absolute top-0 right-0 p-4 text-6xl font-black opacity-10">
                            {String(step.id).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl font-bold text-black mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-primary/80">
                            <span className="material-symbols-outlined text-[16px]">
                              schedule
                            </span>
                            <span>{step.duration}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="w-12 h-12 rounded-full bg-background-light border-2 border-primary flex items-center justify-center relative z-20">
                      <span className="material-symbols-outlined text-primary">
                        {step.icon}
                      </span>
                    </div>

                    <div
                      className={`absolute ${
                        isTop ? "top-1/2 mt-6" : "bottom-1/2 mb-6"
                      } h-20 w-[1px] ${
                        isTop ? "bg-gradient-to-b" : "bg-gradient-to-t"
                       } from-primary to-transparent -z-10`}
                    />

                    {!isTop && (
                      <div className="mt-10 w-full transition-transform duration-300 group-hover:translate-y-2">
                        <div className="glass-card rounded-2xl p-6 relative overflow-hidden border-b-4 border-primary/20 group-hover:border-b-primary transition-colors">
                          <span className="absolute top-0 right-0 p-4 text-6xl font-black opacity-10">
                            {String(step.id).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl font-bold text-black mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-primary/80">
                            <span className="material-symbols-outlined text-[16px]">
                              schedule
                            </span>
                            <span>{step.duration}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ================= MOBILE TIMELINE ================= */}
            <div className="lg:hidden flex flex-col relative pl-4">
              <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-border-dark" />
              <div className="absolute left-[27px] top-4 h-[60%] w-[2px] bg-gradient-to-b from-primary via-primary to-border-dark"></div>

              {methodologySteps.map((step, index) => (
                <div key={step.id} className="relative flex gap-6 pb-12">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 rounded-full bg-primary ring-4 ring-background-light flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px] text-white">
                        check
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 glass-card p-5 rounded-2xl border-l-4 border-l-primary/30">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-black">
                        {step.title}
                      </h3>
                      <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative w-full mt-10 md:mt-16 px-4 pb-16 overflow-hidden bg-slate-50">
          {/* grid background */}
          <div className="absolute inset-0 grid-bg opacity-100 -z-30 pointer-events-none"></div>

          {/* soft glow like hero */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px] -z-20"
          ></div>

          {/* TOP SOFT FADE */}
          <div
            className="absolute inset-x-0 top-0 h-48 
                  bg-gradient-to-b from-background-light via-background-light/80 to-transparent 
                  -z-20"
          />

          {/* TOP SOFT FADE */}
          <div
            className="absolute inset-x-0 top-0 h-48 
                  bg-gradient-to-b from-background-light via-background-light/80 to-transparent 
                  -z-20"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl md:rounded-[2.5rem] bg-[#122230] overflow-hidden border border-border-dark ">
              {/* image */}
              <img
                alt="Digital network map"
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWO6f8aqeWmMLZZh-6d0Ezk5g9MwmE-d_9bOQeuIQw0EHQq38cYb_nhB31QWiXTMt_1h9hC2NBjYg9DkXjlNW0-M1M1zBF3LaMbTFp7Zf4Vx7ADzHy-3DTugQsaAa4xPlEqnTkoZQRCgpAZEnIga38vNtYjfuEz1AJM7Z1rvtRozMXkdRojptRBkqJXPamNb9ISpVCzTod_t0d6g-Ha_jCvRYxdOQ0SFOtInSB4DJAopQ6VC7hX8iRMSnGyqoZuPYpJlpJ_pAOVvQ"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>

              {/* content */}
              <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 md:py-24 ">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                  Ready to Automate Your Enterprise?
                </h2>

                <p className="text-gray-300 text-lg mb-10 max-w-xl">
                  Let&apos;s build intelligent systems that work while you
                  sleep. Schedule your free discovery audit today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <button
                    className="h-12 px-8 rounded-full bg-primary text-background-light font-bold text-base
                       hover:shadow-[0_0_25px_rgba(99,102,241,0.45)]
                       transition-all transform hover:-translate-y-1"
                  >
                    Start Your Project
                  </button>

                  <button
                    className="h-12 px-8 rounded-full bg-transparent border border-white/20 text-white
                       font-bold text-base hover:bg-white/10 transition-colors"
                  >
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
