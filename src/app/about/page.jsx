import { User, Heart, Briefcase } from "lucide-react";
export const metadata = {
  title: "The Philosophy Behind Fundi | About Our Studio",
  description:
    "We believe in craft over templates. Learn about our engineering-led approach to web design and our commitment to building the future of the web.",
  alternates: {
    canonical: "/about",
  },
};
export default function About() {
  return (
    <section className="py-24 relative min-h-screen">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="font-mono text-fundi-lime text-sm uppercase tracking-widest mb-4">
            01. The Founder
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            The Heart Behind the Code.
          </h3>

          <div className="prose prose-invert prose-lg prose-p:font-serif prose-p:text-fundi-concrete prose-headings:font-mono prose-headings:text-white">
            <p>
              For years, I lived two lives. By day, I watched brilliant local
              businesses struggle to be seen. They had amazing products but no
              "digital home." By night, I was at my desk, obsessively learning
              the craft of software development—not just for fun, but because I
              saw the gap.
            </p>
            <p>
              I realized that <strong>code is just a tool.</strong> The real
              mission is helping a business grow from a "hustle" to a "brand."
            </p>
            <p>
              I founded <strong>FundiDevs</strong> to bridge that gap. The name{" "}
              <em>Fundi</em> implies a master craftsman—someone you trust to
              fix, build, and improve. That is who we are. We don't just hand
              you a website and disappear; we become your technical partners,
              guiding you through the digital world like a concierge in a luxury
              hotel.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
          <div className="space-y-4">
            <Heart className="w-8 h-8 text-fundi-rust" />
            <h4 className="font-mono text-xl text-white">Passion First</h4>
            <p className="text-fundi-concrete text-sm font-serif">
              Tech isn't just a job; it's a craft. We obsess over details so you
              don't have to.
            </p>
          </div>
          <div className="space-y-4">
            <User className="w-8 h-8 text-fundi-lime" />
            <h4 className="font-mono text-xl text-white">Human Centric</h4>
            <p className="text-fundi-concrete text-sm font-serif">
              We speak plain English, not "Developer." We explain every step
              clearly.
            </p>
          </div>
          <div className="space-y-4">
            <Briefcase className="w-8 h-8 text-fundi-amber" />
            <h4 className="font-mono text-xl text-white">Business Focused</h4>
            <p className="text-fundi-concrete text-sm font-serif">
              A pretty website is useless if it doesn't sell. We build for
              conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
