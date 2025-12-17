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
  title: "FundiDevs | Digital Craftsmanship",
  description: "We do not just write code. We build legacies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
