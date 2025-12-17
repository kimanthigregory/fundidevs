import { LayoutGrid, Database, Fingerprint } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Digital Architecture",
      desc: "Full-scale frontend development. Not just 'websites,' but immersive digital environments.",
      icon: <LayoutGrid />,
      tools: ["React", "Next.js", "WebGL"],
      class:
        "md:col-span-2 md:row-span-2 bg-slate-800/20 border-fundi-lime/20 hover:border-fundi-lime/50",
    },
    {
      title: "System Forging",
      desc: "Backend engineering. The steel beams behind the drywall.",
      icon: <Database />,
      tools: ["Node.js", "PostgreSQL"],
      class:
        "bg-slate-800/20 border-fundi-amber/20 hover:border-fundi-amber/50",
    },
    {
      title: "User Mechanics",
      desc: "UX/UI Design. Ensuring the machine feels human.",
      icon: <Fingerprint />,
      tools: ["Figma", "Framer"],
      class: "bg-slate-800/20 border-fundi-rust/20 hover:border-fundi-rust/50",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-mono text-fundi-rust text-sm uppercase tracking-widest mb-12">
          02. The Toolbox
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:h-[600px]">
          {services.map((s, i) => (
            <div
              key={i}
              className={`border p-8 transition-all group flex flex-col justify-between ${s.class}`}
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center mb-6 bg-white/5 rounded-sm text-white">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-fundi-concrete font-serif">{s.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5">
                <div className="flex gap-2 font-mono text-xs text-white">
                  {s.tools.map((t) => (
                    <span key={t} className="bg-white/5 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
