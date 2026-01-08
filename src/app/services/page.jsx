import {
  LayoutGrid,
  TrendingUp,
  Cpu,
  Users,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
export const metadata = {
  title: "Strategic Web Services | Design, Dev & SEO",
  description:
    "Explore our core capabilities: from custom React development and technical SEO to brand identity and UI/UX design optimized for conversion.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Design & Development Services | Fundi",
    description:
      "Transforming your business goals into technical reality with our full-stack services.",
  },
};
export default function Services() {
  const services = [
    {
      title: "Custom Web Development",
      desc: "Your digital headquarters. We build fast, mobile-friendly sites that turn visitors into customers.",
      icon: <LayoutGrid />,
      detail:
        "Not just a template. A custom build that reflects your unique brand.",
    },
    {
      title: "SEO Growth",
      desc: "Get found on Google. We optimize your site so you appear when clients search for your services.",
      icon: <TrendingUp />,
      detail: "Keyword research, content strategy, and technical optimization.",
    },
    {
      title: "Custom Software",
      desc: "Automate your workflow. From inventory systems to client portals, we build tools that save you time.",
      icon: <Cpu />,
      detail: "Tailored specifically to how your business operates.",
    },
    {
      title: "IT Consultancy",
      desc: "Your tech partner. We help you choose the right tools and strategies to stay ahead.",
      icon: <Users />,
      detail: "Expert advice on software, security, and digital strategy.",
    },
    {
      title: "WebDev Training",
      desc: "Master the craft. Personalized training for individuals or teams who want to learn coding.",
      icon: <GraduationCap />,
      detail: "Hands-on mentorship from industry experts.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-mono text-fundi-rust text-sm uppercase tracking-widest mb-4">
              02. The Toolkit
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Services We Offer.
            </h3>
          </div>
          <Link
            href="/pricing"
            className="mt-4 md:mt-0 text-fundi-lime font-mono border-b border-fundi-lime hover:text-white hover:border-white transition-colors"
          >
            View Pricing Options
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-slate-900/20 border border-white/5 p-8 hover:border-fundi-lime/50 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 bg-white/5 rounded-sm text-fundi-lime group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-fundi-concrete font-serif mb-4">{s.desc}</p>
              <div className="text-xs font-mono text-white/40 border-t border-white/5 pt-4">
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
