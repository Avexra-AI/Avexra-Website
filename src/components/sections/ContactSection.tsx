import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full pt-28 pb-20 lg:pt-36 overflow-hidden z-10"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white to-slate-50 border border-slate-200 overflow-hidden p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
          {/* background glows */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none opacity-60" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none opacity-60" />

          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                  Let&apos;s build the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                    future of work.
                  </span>
                </h2>

                <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                  Whether you&apos;re scaling an enterprise agentic system or
                  integrating custom LLMs, our engineering team is ready to
                  deploy.
                </p>

                <div className="flex flex-col gap-5">
                  {[
                    {
                      icon: "architecture",
                      text: "Free 30-min architecture review",
                    },
                    { icon: "security", text: "Enterprise-grade security" },
                    {
                      icon: "rocket_launch",
                      text: "Custom deployment strategy",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-slate-700 group hover:text-slate-900 transition-colors"
                    >
                      <div className="flex items-center justify-center size-10 rounded-full bg-white border border-slate-200 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                      </div>
                      <span className="font-semibold text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Priority booking */}
              <div className="mt-12 p-6 rounded-2xl bg-white/60 border border-slate-200 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      verified
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">
                      Priority Booking
                    </p>
                    <p className="text-slate-500 text-xs">
                      Skip the queue for enterprise inquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 to-transparent pointer-events-none" />

              <form className="flex flex-col gap-5 relative z-10">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3
                                            focus:outline-none
                                            focus:border-primary
                                            focus:ring-1
                                            focus:ring-primary
                                            focus:bg-white
                                            transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3
                                            focus:outline-none
                                            focus:border-primary
                                            focus:ring-1
                                            focus:ring-primary
                                            focus:bg-white
                                            transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@acme.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3
                                        focus:outline-none
                                        focus:border-primary
                                        focus:ring-1
                                        focus:ring-primary
                                        focus:bg-white
                                        transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    Challenge
                  </label>
                  <textarea
                    rows={3}
                    placeholder="We need to automate our..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3
                                        focus:outline-none
                                        focus:border-primary
                                        focus:ring-1
                                        focus:ring-primary
                                        focus:bg-white
                                        transition-all font-medium"
                  />
                </div>

                <button
                  type="button"
                  className="group mt-2 w-full h-14 bg-primary text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Link href="mailto:avexraai@gmail.com">Initialize Project</Link>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <p className="text-center text-xs text-slate-500 mt-2 font-medium">
                  Prefer to talk?{" "}
                  <a
                    href="tel:+917618293495" target="_blank" rel="noopener noreferrer"
                    className="text-slate-800 hover:text-primary hover:underline font-semibold underline-offset-4"
                  >
                    Book a call directly
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
