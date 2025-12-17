import { Cpu } from "lucide-react";

export default function About() {
  const timeline = [
    {
      title: "The Spark",
      desc: "It began with tearing apart radios to see how they worked. That tactile curiosity transferred to the screen.",
      color: "rust",
    },
    {
      title: "The Struggle",
      desc: "We saw agencies churning out cookie-cutter templates. Soulless. Fragile. We rejected the 'fast and cheap' model.",
      color: "concrete",
    },
    {
      title: "The Philosophy",
      desc: "'Fundi' implies a master craftsman. We treat every pixel and database query with the respect a carpenter treats a joint.",
      color: "lime",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="md:grid md:grid-cols-2 gap-16">
          <div className="mb-12 md:mb-0">
            <h2 className="font-mono text-fundi-lime text-sm uppercase tracking-widest mb-4">
              01. Origin Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              From Soldering Irons to Syntax.
            </h3>
            <p className="text-fundi-concrete text-lg mb-8 font-serif">
              FundiDevs isn't a startup born in a boardroom. It started in a
              garage, amidst the smell of burnt solder and the hum of old
              servers.
            </p>
            {/* Image Placeholder styled as a Polaroid/Schematic */}
            <div className="relative w-full aspect-square bg-slate-800/50 border border-white/10 p-4 rotate-2">
              <div className="w-full h-full bg-black/40 flex items-center justify-center border border-dashed border-white/20">
                <Cpu className="w-16 h-16 text-fundi-concrete" />
              </div>
            </div>
          </div>

          <div className="space-y-12 border-l border-white/10 pl-8 relative">
            {timeline.map((item, index) => (
              <div key={index} className="relative group">
                <span
                  className={`absolute -left-[39px] top-1 w-5 h-5 bg-fundi-dark border-2 rounded-full ${
                    item.color === "rust"
                      ? "border-fundi-rust"
                      : item.color === "lime"
                      ? "border-fundi-lime"
                      : "border-fundi-concrete"
                  }`}
                ></span>
                <h4 className="font-mono text-xl text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-fundi-concrete leading-relaxed font-serif">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
