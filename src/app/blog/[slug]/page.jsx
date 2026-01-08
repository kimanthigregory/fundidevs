import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle,
  Server,
  Shield,
} from "lucide-react";
import { notFound } from "next/navigation";

const CONTENT_MAP = {
  "website-checklist-for-new-businesses": {
    tag: "GETTING STARTED",
    readTime: "7 MIN",
    title: "The Ultimate New Business Website Checklist",
    description:
      "Building a website without a plan is just an expensive experiment. Here is exactly what you need to have ready before you hire a developer.",
    content: (
      <>
        <p className="lead">
          Building a digital presence is remarkably similar to physical
          construction. If you arrive at the construction site without
          blueprints, materials, or permits, you are going to waste time and
          money. Before you sign a contract with a design agency, ensure you
          have these five strategic pillars ready.
        </p>

        <h3>01. Brand Identity Assets (Vectors, Not JPEGs)</h3>
        <p>
          A common bottleneck in development is poor-quality assets. A developer
          cannot "fix" a blurry logo code-side. To ensure your site looks crisp
          on Retina displays and 4K monitors, you need your primary assets in
          vector format.
        </p>
        <ul>
          <li>
            <strong>Logo Files:</strong> .SVG, .AI, or .EPS formats.
          </li>
          <li>
            <strong>Brand Color Palette:</strong> Hex codes (e.g., #FF5733) or
            RGB values.
          </li>
          <li>
            <strong>Typography:</strong> Specific font files or Google Font
            links.
          </li>
        </ul>

        <h3>02. The 'Elevator Pitch' Copy</h3>
        <p>
          Design supports content, not the other way around. You don't need
          every word written, but you must have your "Hero Statement" drafted.
          When a user lands on your site, they need to answer three questions in
          3 seconds:
        </p>
        <blockquote>
          "Who are you? What problem do you solve? And why should I trust you?"
        </blockquote>

        <h3>03. High-Resolution Visuals</h3>
        <p>
          In 2026, authenticity wins. Avoid generic stock photos of "people
          shaking hands in a glass office." Invest in one day of professional
          photography for your team, your product, or your premises. Real photos
          build trust; stock photos build skepticism.
        </p>

        <h3>04. Competitor Benchmarking</h3>
        <p>
          You don't need to reinvent the wheel. Identify 3 websites you admire
          and 3 you dislike. This provides your development team with a
          "Technical Compass."
        </p>
        <ul>
          <li>
            <strong>Aesthetic Benchmark:</strong> "I like the clean lines of
            Company A."
          </li>
          <li>
            <strong>Functional Benchmark:</strong> "I like how Company B handles
            their booking form."
          </li>
        </ul>

        <h3>05. Technical Credentials</h3>
        <p>
          If you have existing accounts, have the keys ready. This includes your
          Domain Registrar login (GoDaddy, Namecheap) and Google Analytics
          access. Scrambling for passwords two days before launch is a stress
          you don't need.
        </p>
      </>
    ),
  },
  "website-design-timeline": {
    tag: "PLANNING",
    readTime: "5 MIN",
    title: "How Long Does It Take to Build a Business Website?",
    description:
      "A realistic, transparent breakdown of the modern web development lifecycle from discovery to deployment.",
    content: (
      <>
        <p>
          The number one question we receive is: <em>"When can we go live?"</em>{" "}
          The honest answer is that it depends on the complexity of the build,
          but for a standard, high-performance business website, the engineering
          timeline is predictable.
        </p>

        <h3>Phase 1: Discovery & Architecture (Week 1)</h3>
        <p>
          This is the foundation. We don't write a single line of code here. We
          map out the user flow, the sitemap, and the content strategy.
        </p>
        <ul>
          <li>
            <strong>Deliverable:</strong> Wireframes and Sitemap PDF.
          </li>
          <li>
            <strong>Goal:</strong> Ensuring we are solving the right business
            problems.
          </li>
        </ul>

        <h3>Phase 2: UI Design & Prototyping (Weeks 2-3)</h3>
        <p>
          Here, we visualize the interface. We define the tactile feel of the
          brand—interactions, hover states, and typography. We typically present
          a high-fidelity prototype that looks like the real website but is
          static images.
        </p>

        <h3>Phase 3: Development (Weeks 4-6)</h3>
        <p>
          The heavy lifting. This is where the design is translated into clean,
          semantic code (React/Next.js).
        </p>
        <ul>
          <li>
            <strong>Frontend:</strong> Building the visual interface.
          </li>
          <li>
            <strong>Backend:</strong> Connecting forms, CMS, and databases.
          </li>
          <li>
            <strong>Mobile Adaptation:</strong> Ensuring responsiveness on
            phones and tablets.
          </li>
        </ul>

        <h3>Phase 4: Content Population & QA (Week 7)</h3>
        <p>
          We migrate your actual content into the system and stress-test the
          site. We check for broken links, slow loading times, and browser
          compatibility.
        </p>

        <h3>The X-Factor: Client Feedback</h3>
        <p>
          The biggest variable in this timeline is usually{" "}
          <strong>feedback loops</strong>. To keep a project on track,
          consolidate your team's feedback into single rounds rather than
          dripping edits in one by one.
        </p>
      </>
    ),
  },
  "domains-and-hosting-explained": {
    tag: "TECHNICAL GUIDE",
    readTime: "6 MIN",
    title: "Domain Names & Hosting Explained: A Founder's Guide",
    description:
      "Demystifying the infrastructure of the web. We break down the 'Real Estate' analogy to help non-technical owners make smart decisions.",
    content: (
      <>
        <p>
          To the uninitiated, the backend of the web looks like a black box.
          However, understanding the basic infrastructure is crucial for owning
          your digital asset. Let's break it down using a simple{" "}
          <strong>Real Estate Analogy</strong>.
        </p>

        <h3>1. The Domain Name (The Street Address)</h3>
        <p>
          Your domain (e.g., <em>yourbusiness.com</em>) is simply an address. It
          tells the browser where to go, but it contains no content itself.
        </p>
        <ul>
          <li>
            <strong>Tip:</strong> Always own your domain name personally. Never
            let an agency or employee register it in their name. It is your
            intellectual property.
          </li>
        </ul>

        <h3>2. The Hosting (The Land)</h3>
        <p>
          If the domain is the address, hosting is the plot of land where your
          house sits. It is the server space where your text, images, and code
          physically live.
        </p>
        <p>
          <strong>Why price varies:</strong> Cheap hosting ($5/mo) is like
          building a skyscraper on a swamp—shared resources mean your site slows
          down when others get busy. Premium hosting is like a private gated
          lot—secure, fast, and dedicated to you.
        </p>

        <h3>3. The Website (The House)</h3>
        <p>
          This is what we design and build. The code is the brick and mortar;
          the images are the furniture. You can move your house (website) to
          different land (hosting) if you need to, provided you built it on a
          portable framework.
        </p>

        <h3>4. The SSL Certificate (The Security System)</h3>
        <p>
          You’ve seen the little padlock next to URLs. This is SSL (Secure
          Sockets Layer). It encrypts data passing between your customer and
          your site.
        </p>
        <blockquote>
          <strong>Critical Note:</strong> In 2026, Google actively penalizes
          sites without SSL. It is no longer an "optional feature"—it is a
          requirement for existence.
        </blockquote>

        <h3>5. DNS (The GPS)</h3>
        <p>
          The Domain Name System (DNS) connects your Address (Domain) to your
          Land (Hosting). When you launch a site, you are essentially updating
          the GPS coordinates to tell the world where your new house is located.
        </p>
      </>
    ),
  },
};
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = CONTENT_MAP[resolvedParams.slug];

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${resolvedParams.slug}`,
    },
  };
}
export default async function BlogPost({ params }) {
  // AWAIT the params to fix the Next.js 15 error
  const resolvedParams = await params;
  const post = CONTENT_MAP[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="py-24 min-h-screen bg-fundi-charcoal">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-fundi-concrete hover:text-fundi-lime font-mono text-xs uppercase tracking-widest mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Knowledge Hub
        </Link>

        <header className="mb-12 border-b border-white/10 pb-12">
          <div className="flex gap-4 font-mono text-xs text-fundi-rust mb-4">
            <span className="bg-white/5 px-2 py-1 rounded">{post.tag}</span>
            <span className="text-white/20 py-1">::</span>
            <span className="flex items-center gap-2 text-fundi-concrete py-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-fundi-concrete font-serif leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* The 'prose' classes here are critical. 
          They automatically style the <h3>, <p>, <ul>, and <blockquote> tags 
          inside the content object.
        */}
        <div className="prose prose-invert prose-lg prose-headings:font-mono prose-headings:text-white prose-p:font-serif prose-p:text-slate-300 prose-a:text-fundi-lime prose-strong:text-white prose-blockquote:border-l-fundi-lime prose-blockquote:text-slate-400 prose-li:text-slate-300 max-w-none">
          {post.content}
        </div>

        <div className="mt-20 p-8 border border-fundi-lime/20 bg-fundi-lime/5 rounded-xl">
          <h4 className="text-white font-bold mb-2 text-lg">
            Ready to start your project?
          </h4>
          <p className="text-fundi-concrete mb-6">
            Let's turn these insights into a high-performing digital asset.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-fundi-lime font-mono text-sm uppercase tracking-widest hover:text-white transition-colors"
          >
            Get a Free Consultation <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </article>
  );
}
