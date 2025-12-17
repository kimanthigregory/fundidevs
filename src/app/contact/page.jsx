"use client";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const WorkshopClock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    // Set to Kenya Time (EAT) or local time
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="text-4xl font-mono text-fundi-lime font-bold tracking-widest">
      {time || "00:00:00"}
    </div>
  );
};

export default function Contact() {
  return (
    <section className="min-h-screen grid md:grid-cols-2">
      {/* Left: The Form */}
      <div className="p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
        <h2 className="text-4xl font-bold text-white mb-2">
          Ready to break ground?
        </h2>
        <p className="text-fundi-concrete mb-12 font-serif">
          Tell us about the blueprint. We'll handle the heavy lifting.
        </p>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block font-mono text-xs text-fundi-rust uppercase">
              Project Codename
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-fundi-lime transition-colors placeholder:text-white/20"
              placeholder="e.g. Operation Skyfall"
            />
          </div>
          <div className="space-y-2">
            <label className="block font-mono text-xs text-fundi-rust uppercase">
              Direct Comms (Email)
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-fundi-lime transition-colors placeholder:text-white/20"
              placeholder="you@company.com"
            />
          </div>
          <div className="space-y-2">
            <label className="block font-mono text-xs text-fundi-rust uppercase">
              The Specs (Message)
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-fundi-lime transition-colors placeholder:text-white/20"
              placeholder="We need a platform that handles..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-fundi-lime text-fundi-dark font-mono font-bold uppercase py-4 mt-8 border-2 border-fundi-lime transition-all hover:bg-transparent hover:text-fundi-lime shadow-[4px_4px_0px_0px_#c2410c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            // Start Your Build
          </button>
        </form>
      </div>

      {/* Right: The Info Panel */}
      <div className="relative bg-slate-900/20 p-12 md:p-24 flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #333 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="relative z-10 border-2 border-white/10 p-8 bg-fundi-dark/80 backdrop-blur-md max-w-sm w-full">
          <div className="flex items-center justify-center mb-4 text-fundi-rust">
            <MapPin className="w-6 h-6 animate-bounce" />
          </div>
          <h3 className="font-mono text-xl text-white mb-2">FundiDevs HQ</h3>
          <p className="text-fundi-concrete text-sm mb-6 font-serif">
            Nairobi, Kenya
            <br />
            Silicon Savannah
          </p>
          <div className="border-t border-white/10 pt-6">
            <p className="font-mono text-xs text-fundi-concrete uppercase mb-2">
              Workshop Time (EAT)
            </p>
            <WorkshopClock />
          </div>
        </div>
      </div>
    </section>
  );
}
