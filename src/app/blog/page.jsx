import Link from "next/link";
import { Terminal, ArrowRight } from "lucide-react";

// Mock Data (In the future, fetch this from Sanity/Contentful)
const POSTS = [
  {
    slug: "abandoning-generic-css",
    title: "Why We Abandoned 'Generic' CSS Frameworks",
    date: "2023-10-12",
    readTime: "4 MIN",
    tag: "ENGINEERING",
    excerpt:
      "Generic templates breed generic businesses. We analyzed the load time impact of custom utility classes vs. heavy libraries.",
    snippet:
      ".btn-generic { display: block; } // Bad \n.btn-fundi { @apply tactile-shadow; } // Good",
  },
  {
    slug: "technical-debt-cost",
    title: "The Actual Cost of Technical Debt",
    date: "2023-11-05",
    readTime: "6 MIN",
    tag: "PHILOSOPHY",
    excerpt:
      "Cutting corners in the foundation phase creates cracks in the penthouse. A case study on refactoring a legacy monolith.",
    snippet: null,
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
              Engineering Logs.
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
                    Read Log <ArrowRight className="w-4 h-4" />
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
