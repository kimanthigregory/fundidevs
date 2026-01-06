import Link from "next/link";
import { Wrench, ArrowRight, ShieldCheck, Search, Globe } from "lucide-react";
import BlueprintCanvas from "@/components/BlueprintCanvas";

export default function Home() {
  const processSteps = [
    {
      step: "01",
      title: "The Blueprint",
      desc: "We meet to discuss your business goals. No tech jargon, just your vision.",
    },
    {
      step: "02",
      title: "The Foundation",
      desc: "You receive a clear quotation. A 40% deposit secures your spot in the workshop.",
    },
    {
      step: "03",
      title: "The Build",
      desc: "We craft your site, sending you weekly progress reports so you're never in the dark.",
    },
    {
      step: "04",
      title: "The Refinement",
      desc: "We review together. We polish pixels and content until it feels like 'you'.",
    },
    {
      step: "05",
      title: "The Handover",
      desc: "Final payment. We launch your site and teach you how to use it.",
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      <BlueprintCanvas />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-32 grid md:grid-cols-12 gap-12 items-center min-h-[90vh]">
        <div className="md:col-span-8 space-y-8">
          <div className="inline-flex items-center gap-2 border border-fundi-lime/50 bg-fundi-lime/10 px-3 py-1 rounded-full font-mono text-xs text-fundi-lime uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-fundi-lime animate-pulse"></span>
            Accepting New Clients
          </div>

          <h1 className="font-mono text-5xl md:text-7xl font-bold leading-tight text-white">
            Your Business Deserves More Than a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fundi-rust to-fundi-amber">
              "Link in Bio."
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-fundi-concrete max-w-2xl leading-relaxed font-serif">
            Social media is a crowded street. A website is your office. We build
            the digital headquarters that makes your business official,
            searchable, and trusted.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <Link
              href="/contact"
              className="flex items-center gap-3 px-8 py-4 font-mono font-bold uppercase border-2 border-fundi-rust bg-fundi-rust text-white transition-all hover:bg-transparent hover:text-fundi-rust shadow-[4px_4px_0px_0px_white] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              <Wrench className="w-5 h-5" /> Start Your Build
            </Link>
            <Link
              href="/work"
              className="flex items-center gap-3 px-8 py-4 font-mono font-bold uppercase text-fundi-concrete hover:text-white transition-colors group"
            >
              See Success Stories{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="font-mono text-fundi-rust text-sm uppercase tracking-widest mb-4">
              The Reality
            </h2>
            <h3 className="text-3xl font-bold text-white mb-4">
              Is Your Business "Homeless"?
            </h3>
            <p className="text-fundi-concrete font-serif">
              Without a website, you are at the mercy of algorithms. If
              Instagram went down tomorrow, would your customers still find you?
            </p>
          </div>
          <div className="md:col-span-2 grid gap-6">
            {[
              {
                icon: <ShieldCheck />,
                title: "Trust & Legitimacy",
                text: "Clients hesitate to pay businesses that only exist in DMs. A website proves you are here to stay.",
              },
              {
                icon: <Search />,
                title: "Google Searchable",
                text: "People search for 'Plumbers in Nairobi', not your Instagram handle. We put you on the map.",
              },
              {
                icon: <Globe />,
                title: "Your Digital Catalog",
                text: "Social media feeds move too fast. A website lets clients browse your full services at their own pace.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 border border-white/5 bg-fundi-dark/50 hover:border-fundi-lime/30 transition-colors"
              >
                <div className="text-fundi-lime">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-fundi-concrete text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS (THE FUNDI PATH) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-fundi-lime text-sm uppercase tracking-widest mb-4">
            Our Methodology
          </h2>
          <h3 className="text-4xl font-bold text-white">The Fundi Path</h3>
          <p className="text-fundi-concrete mt-4 font-serif">
            We guide you through the construction so you never feel lost.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 border-l-2 border-white/10 hover:border-fundi-rust transition-colors group"
            >
              <span className="block font-mono text-4xl font-bold text-white/10 mb-4 group-hover:text-fundi-rust/50 transition-colors">
                {step.step}
              </span>
              <h4 className="font-bold text-white mb-2">{step.title}</h4>
              <p className="text-sm text-fundi-concrete font-serif leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
