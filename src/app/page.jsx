import Link from "next/link";
import { Wrench, ArrowRight } from "lucide-react";
import BlueprintCanvas from "@/components/BlueprintCanvas";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <BlueprintCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 space-y-8">
          <div className="inline-flex items-center gap-2 border border-fundi-rust/50 bg-fundi-rust/10 px-3 py-1 rounded-full font-mono text-xs text-fundi-rust uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-fundi-rust animate-pulse"></span>
            Workshop Status: Active
          </div>

          <h1 className="font-mono text-5xl md:text-7xl font-bold leading-tight text-white">
            We don't just write code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fundi-lime to-fundi-amber">
              We build legacies.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-fundi-concrete max-w-2xl leading-relaxed font-serif">
            Welcome to the digital forge. Where raw ideas are hammered into
            robust, scalable systems through obsessive craftsmanship.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <Link
              href="/contact"
              className="flex items-center gap-3 px-8 py-4 font-mono font-bold uppercase border-2 border-fundi-rust bg-fundi-rust text-white transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[4px_4px_0px_0px_white] hover:bg-transparent hover:text-fundi-rust"
            >
              <Wrench className="w-5 h-5" /> Initiate Project
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-3 px-8 py-4 font-mono font-bold uppercase text-fundi-concrete hover:text-white transition-colors group"
            >
              View Blueprints{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* The Code Metric Box */}
        <div className="hidden md:block col-span-4 bg-slate-800/30 border border-white/5 backdrop-blur-sm p-6 rounded-sm font-mono text-xs">
          {/* Static content or a Client Component for live numbers */}
          <div className="text-fundi-lime uppercase mb-4 border-b border-white/10 pb-2">
            ## System Metrics
          </div>
          <div className="space-y-4 text-fundi-concrete">
            <div className="flex justify-between">
              <span>Uptime:</span> <span className="text-white">99.99%</span>
            </div>
            <div className="flex justify-between">
              <span>Bugs Squashed:</span>{" "}
              <span className="text-fundi-rust">4,021</span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 italic opacity-50">
              {`> initializing craft.exe...`}
              <br />
              {`> done.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
