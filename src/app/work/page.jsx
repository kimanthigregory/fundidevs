import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      client: "Zuri's Handcrafted Decor",
      category: "E-Commerce",
      problem:
        "Zuri had 10k Instagram followers but was overwhelmed by DMs. Clients didn't trust sending money without an official site.",
      solution:
        "We built a clean, minimalist gallery with a direct ordering system linked to her bio.",
      result:
        "Sales increased by 40% in the first month. She stopped 'chatting' and started 'selling'.",
      image: "bg-slate-800", // Placeholder for image class
    },
    // Add more cases here
  ];

  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-mono text-fundi-lime text-sm uppercase tracking-widest mb-12">
          03. Success Stories
        </h2>

        <div className="grid gap-20">
          {cases.map((project, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`aspect-video rounded border border-white/10 ${project.image} relative overflow-hidden group`}
              >
                {/* Place actual <img> here */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-4xl">
                  PROJECT IMAGE
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-fundi-rust mb-2">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {project.client}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white mb-2">The Problem</h4>
                    <p className="text-fundi-concrete font-serif">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      The Fundi Solution
                    </h4>
                    <p className="text-fundi-concrete font-serif">
                      {project.solution}
                    </p>
                  </div>
                  <div className="bg-fundi-lime/10 p-4 border-l-2 border-fundi-lime">
                    <h4 className="font-bold text-fundi-lime mb-1">
                      The Result
                    </h4>
                    <p className="text-white font-serif italic">
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
