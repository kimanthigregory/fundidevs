import Link from "next/link";
import { Terminal, ArrowRight } from "lucide-react";
export const metadata = {
  title: "Founder Resources & Engineering Logs | The Knowledge Hub",
  description:
    "Expert advice on web development, hosting, and digital strategy designed to help new business owners navigate the technical landscape.",
  alternates: {
    canonical: "/blog",
  },
};
// Updated Content Data optimized for "Preparation & Process" search intent
const POSTS = [
  {
    slug: "website-checklist-for-new-businesses",
    title: "The Ultimate New Business Website Checklist",
    date: "2026-02-12",
    readTime: "5 MIN",
    tag: "GETTING STARTED",
    excerpt:
      "Don't hire a designer just yet. Here are the 5 essential assets (branding, copy, and images) you need to have ready to save money and speed up the build.",
    // Pseudo-code snippet to maintain the 'Engineering' aesthetic
    snippet: `// Pre-Flight_Checklist.json
{
  "logo_vectors": "READY",
  "brand_colors": "DEFINED",
  "service_copy": "DRAFTED",
  "competitor_list": "COMPILED"
}`,
  },
  {
    slug: "website-design-timeline",
    title: "How Long Does It Take to Build a Business Website?",
    date: "2026-02-05",
    readTime: "4 MIN",
    tag: "PLANNING",
    excerpt:
      "Is it 2 weeks or 2 months? We break down the realistic timeline for a custom site build versus a template, and how to launch faster.",
    snippet: null,
  },
  {
    slug: "domains-and-hosting-explained",
    title: "Domain Names & Hosting Explained: A Founder's Guide",
    date: "2026-01-28",
    readTime: "6 MIN",
    tag: "TECHNICAL GUIDE",
    excerpt:
      "Confused by the jargon? We explain the difference between your domain (address) and hosting (land) so you never overpay for tech you don't need.",
    snippet: `const mental_model = {
  domain: "The Street Address",
  hosting: "The Plot of Land",
  website: "The House You Build"
};`,
  },
];

export default function Blog() {
  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
          <div>
            <h2 className="font-mono text-fundi-lime text-sm uppercase tracking-widest mb-2">
              03. The Knowledge Hub
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Founder Resources.
            </h1>
          </div>
          <Terminal className="text-fundi-concrete w-8 h-8 hidden md:block" />
        </div>

        <div className="grid gap-12">
          {POSTS.map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group block">
              <article className="grid md:grid-cols-12 gap-8 items-start border-l-2 border-white/10 pl-6 hover:border-fundi-rust transition-colors duration-300">
                {/* Meta Data */}
                <div className="md:col-span-3 font-mono text-xs text-fundi-concrete space-y-2 mt-2">
                  <div className="text-fundi-rust">
                    LOG_ID: {i + 1}0{i}
                  </div>
                  <div>{post.date}</div>
                  <div className="border border-white/10 inline-block px-2 py-1 text-white">
                    {post.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-fundi-lime transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-fundi-concrete font-serif text-lg mb-6 max-w-2xl">
                    {post.excerpt}
                  </p>

                  {/* Code Snippet Preview (if exists) */}
                  {post.snippet && (
                    <div className="bg-slate-900 p-4 rounded border border-white/10 font-mono text-xs text-gray-400 mb-6 overflow-x-auto">
                      <pre>{post.snippet}</pre>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-fundi-lime font-mono text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
