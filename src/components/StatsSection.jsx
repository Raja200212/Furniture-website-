import { stats } from "@/data/solutions";

export default function StatsSection() {
  return (
    <section className="bg-[#0A1C38] text-white py-12 relative border-y border-slate-800/80 tech-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col ${idx !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-300 font-mono mb-1">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-100 mb-0.5">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
