import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Our Work | Case Studies in Digital Excellence",
  description:
    "Browse our portfolio of custom-built websites and digital products. See how we’ve helped startups and established brands achieve 2x performance gains.",
  alternates: {
    canonical: "/work",
  },
};

export default function Work() {
  const cases = [
    {
      client: "Manzi Homes",
      category: "Real Estate & Architecture",
      problem:
        "A high-end architectural firm needed a digital presence that matched the premium quality of their physical builds.",
      solution:
        "We engineered a bespoke, image-heavy showcase with optimized rendering paths for high-res renders.",
      result: "Transformed their portfolio into a high-conversion sales tool.",
      image: "/manzihomes.png", // Update with your actual image path
    },
    {
      client: "Stadium Status Productions",
      category: "Media & Event Production",
      problem:
        "A dynamic media house required a platform that captured the scale of stadium-sized events.",
      solution:
        "Created an immersive UI using bold typography and a motion-driven grid layout.",
      result: "Increased brand authority and corporate sponsorship interest.",
      image: "/stadium.png",
    },
    {
      client: "Lex & Co. Advocates",
      category: "Legal Services",
      problem:
        "A modern law firm needed to project authority and accessibility simultaneously.",
      solution:
        "Designed a high-trust, structured interface with clear information hierarchy.",
      result: "Positioned the firm as a digital-first legal headquarters.",
      image: "/lex.png",
    },
    {
      client: "Kibathi & Co. Advocates",
      category: "Legal & Corporate",
      problem:
        "This heritage firm needed to digitize its legacy and provide a 'Digital Office' for regional branches.",
      solution:
        "Built a fast-loading, mobile-first platform focused on quality legal services.",
      result:
        "Successfully translated two decades of trust into a modern digital asset.",
      image: "/kibathi.png",
    },
  ];

  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-mono text-fundi-lime text-sm uppercase tracking-widest mb-12">
          03. Success Stories
        </h2>

        <div className="grid gap-32">
          {" "}
          {/* Increased gap for better breathing room */}
          {cases.map((project, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-video rounded-xl border border-white/10 overflow-hidden group bg-slate-900">
                <Image
                  src={project.image}
                  alt={`${project.client} case study`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-fundi-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* TEXT CONTENT */}
              <div>
                <div className="font-mono text-xs text-fundi-rust mb-2">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {project.client}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest opacity-50">
                      The Problem
                    </h4>
                    <p className="text-fundi-concrete font-serif text-lg leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest opacity-50">
                      The Fundi Solution
                    </h4>
                    <p className="text-fundi-concrete font-serif text-lg leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div className="bg-fundi-lime/5 p-6 border-l-2 border-fundi-lime rounded-r-lg">
                    <h4 className="font-bold text-fundi-lime mb-1 uppercase text-xs tracking-widest">
                      The Result
                    </h4>
                    <p className="text-white font-serif italic text-lg leading-relaxed">
                      "{project.result}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
