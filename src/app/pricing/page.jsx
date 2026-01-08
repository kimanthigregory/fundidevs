import Link from "next/link";
import { Check } from "lucide-react";
export const metadata = {
  title: "Transparent Pricing & Packages | Custom Web Solutions",
  description:
    "Flexible pricing models for every stage of growth. From MVP launches to enterprise-grade custom engineering. See our investment tiers and ROI-driven approach.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Website Design Investment & Pricing | Fundi",
    description:
      "Get a clear breakdown of our web development packages and custom engineering rates.",
  },
};
export default function Pricing() {
  const tiers = [
    {
      name: "The Starter Forge",
      price: "KES 35,000 - 45,000",
      desc: "Ideal for startups and individuals looking to get official.",
      features: [
        "3-5 Custom Pages",
        "Mobile Responsive Design",
        "Contact Form Integration",
        "Google Search Setup",
        "Social Media Links",
        "1 Week Support",
      ],
      color: "border-white/10",
      btnColor: "bg-white/10 text-white",
    },
    {
      name: "The Business Build",
      price: "KES 60,000 - 90,000",
      desc: "Perfect for growing businesses that need to showcase multiple services.",
      features: [
        "Up to 10 Custom Pages",
        "Advanced SEO Optimization",
        "Blog / Journal Setup",
        "Social Media Integration",
        "CMS (Edit content yourself)",
        "1 Month Support",
      ],
      color: "border-fundi-lime",
      btnColor: "bg-fundi-lime text-fundi-dark",
      recommended: true,
    },
    {
      name: "Master Architecture",
      price: "From KES 120,000",
      desc: "Custom solutions for companies needing specific software or e-commerce.",
      features: [
        "Fully Custom Functionality",
        "E-commerce / Payment Gateways",
        "Automated Workflows",
        "Staff Training",
        "Priority Support",
        "Advanced Analytics",
      ],
      color: "border-fundi-rust",
      btnColor: "bg-fundi-rust text-white",
    },
  ];

  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-mono text-fundi-lime text-sm uppercase tracking-widest mb-4">
            Investment
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transparent Pricing.
          </h1>
          <p className="text-fundi-concrete font-serif text-lg">
            No hidden fees. No technical confusion. Just a clear investment in
            your business's future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative p-8 bg-slate-900/20 border-2 rounded-sm flex flex-col ${tier.color}`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fundi-lime text-fundi-dark px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-mono text-lg text-white mb-2">
                  {tier.name}
                </h3>
                <div className="text-2xl font-bold text-white mb-4">
                  {tier.price}
                </div>
                <p className="text-fundi-concrete text-sm font-serif">
                  {tier.desc}
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feat, index) => (
                  <div key={index} className="flex gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-fundi-lime shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`w-full py-4 text-center font-mono font-bold uppercase tracking-wider transition-all hover:opacity-90 ${tier.btnColor}`}
              >
                Select Plan
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-fundi-concrete font-serif">
            Not sure which one fits?{" "}
            <Link href="/contact" className="text-fundi-rust underline">
              Contact us
            </Link>{" "}
            for a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
