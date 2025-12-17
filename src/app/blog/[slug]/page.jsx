import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost({ params }) {
  // In a real app, you would fetch data using params.slug
  return (
    <article className="py-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-fundi-concrete hover:text-fundi-lime font-mono text-xs uppercase tracking-widest mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Logs
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-12">
          <div className="flex gap-4 font-mono text-xs text-fundi-rust mb-4">
            <span>ENGINEERING</span>
            <span>::</span>
            <span>4 MIN READ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
            Why We Abandoned 'Generic' CSS Frameworks
          </h1>
          <p className="text-xl text-fundi-concrete font-serif leading-relaxed">
            The decision to move away from heavy libraries wasn't aesthetic. It
            was a mathematical necessity for performance.
          </p>
        </header>

        {/* Content Body */}
        <div className="prose prose-invert prose-lg prose-headings:font-mono prose-p:font-serif prose-p:text-slate-300 prose-a:text-fundi-lime">
          <p>
            When we audit a client's legacy codebase, the first thing we notice
            is the weight. Gigabytes of unused CSS classes loaded on mobile
            devices...
          </p>
          <h3>The Calculation</h3>
          <p>
            We treat code like raw material. If you are building a chair, you
            don't bring the whole tree into the living room. You bring the
            carved wood.
          </p>
          <pre className="bg-slate-900 p-4 border border-white/10 rounded">
            <code>
              {`// This is how we structure our utility classes
const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-fundi-rust text-white hover:bg-fundi-rust/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      }
    }
  }
)`}
            </code>
          </pre>
          <p>
            This approach allows us to maintain the tactile feel of the UI
            without the bloat.
          </p>
        </div>
      </div>
    </article>
  );
}
