import { useState } from "react";
import { Award, Maximize2, X, ExternalLink } from "lucide-react";

export default function Certificate({ ImgSertif }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (!ImgSertif) return null;

  return (
    <>
      {/* Certificate Card */}
      <div className="group relative">
        {/* Cyan / Emerald Glow */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#06b6d4] to-[#10b981] opacity-0 blur-sm transition-all duration-500 group-hover:opacity-40" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08121f] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-400/30">
          
          {/* Image Container */}
          <div
            className="relative aspect-[16/11] cursor-pointer overflow-hidden bg-[#0b1725]"
            onClick={() => setIsOpen(true)}
          >
            {/* Loading Skeleton */}
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-white/5" />
            )}

            <img
              src={ImgSertif}
              alt="Certificate"
              onLoad={() => setLoaded(true)}
              className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-transparent to-transparent opacity-60" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#050b14]/55 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-[#07111f]/90 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-100">
                <Maximize2 className="h-4 w-4 text-cyan-400" />
                View Certificate
              </div>
            </div>

            {/* Certificate Badge */}
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-[#07111f]/85 px-3 py-1.5 backdrop-blur-md">
              <Award className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-[11px] font-medium text-gray-200">
                Certificate
              </span>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex items-center justify-between border-t border-white/5 px-4 py-3">
            <div>
              <p className="text-xs font-medium text-white">
                Achievement Certificate
              </p>
              <p className="mt-0.5 text-[10px] text-gray-500">
                Click to view details
              </p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
              aria-label="View certificate"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-h-[92vh] max-w-[94vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#06b6d4] to-[#10b981] opacity-20 blur-xl" />

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#08121f] shadow-2xl">
              <img
                src={ImgSertif}
                alt="Certificate Preview"
                className="max-h-[88vh] max-w-[92vw] object-contain"
              />

              {/* Bottom Action */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/90 to-transparent px-5 pb-4 pt-10">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Certificate
                  </p>
                  <p className="text-xs text-gray-400">
                    Muhammad Nur Adzim
                  </p>
                </div>

                <a
                  href={ImgSertif}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-300 transition-all hover:bg-cyan-400/20"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open Image
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}