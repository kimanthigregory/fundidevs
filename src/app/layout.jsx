import { Space_Mono, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Industrial Mono font for headers
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

// Editorial Serif font for storytelling
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  metadataBase: new URL("https://www.yourdomain.com"), // Replace with your actual domain
  title: {
    default: "Fundi | Custom Web Design & Development for Business",
    template: "%s | Fundi", // This adds "| Fundi" to every page title automatically
  },
  description:
    "We build high-performance custom websites for businesses that want to grow. No templates, just results-driven engineering.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yourdomain.com",
    siteName: "Fundi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${spaceMono.variable} ${lora.variable} bg-fundi-dark text-slate-50 selection:bg-fundi-rust selection:text-white`}
      >
        {/* Grain Overlay for Texture */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] bg-grain mix-blend-overlay"></div>

        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
