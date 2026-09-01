import React from "react";
import { ArrowUpRight } from "lucide-react";

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group relative">
      {/* Glow */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#06b6d4] to-[#10b981] opacity-0 blur-sm transition-all duration-500 group-hover:opacity-40" />

      {/* Card */}
      <div className="relative flex min-h-[180px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#08121f] p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-400/30 group-hover:bg-[#0b1827]">

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/20" />

        <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition-all duration-500 group-hover:bg-emerald-400/20" />

        {/* Number / small label */}
        <div className="absolute right-4 top-4 text-[10px] font-medium uppercase tracking-widest text-gray-700 transition-colors duration-300 group-hover:text-cyan-500/50">
          Tech
        </div>

        {/* Icon */}
        <div className="relative mb-5">
          <div className="absolute -inset-4 rounded-full bg-cyan-400/0 blur-xl transition-all duration-500 group-hover:bg-cyan-400/10" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-lg transition-all duration-500 group-hover:border-cyan-400/20 group-hover:bg-white/[0.06]">
            <img
              src={TechStackIcon}
              alt={`${Language} icon`}
              className="h-full w-full object-contain transition-all duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Language */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-wide text-gray-300 transition-colors duration-300 group-hover:text-white">
            {Language}
          </span>

          <ArrowUpRight className="h-3.5 w-3.5 text-gray-600 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400 group-hover:opacity-100" />
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#06b6d4] to-[#10b981] transition-all duration-500 group-hover:w-1/2" />
      </div>
    </div>
  );
};

export default TechStackIcon;