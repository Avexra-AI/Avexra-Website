export default function Background() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.5]" />

      {/* Glow blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-200/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-200/40 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-violet-200/50 rounded-full blur-[130px] animate-float-delayed" />

      {/* White fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" />
    </div>
  );
}
