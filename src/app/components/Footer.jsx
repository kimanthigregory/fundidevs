import Link from "next/link";
import { Hammer, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-fundi-dark border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 font-mono text-lg tracking-tighter text-fundi-concrete">
          <Hammer className="w-5 h-5" />
          <span className="font-bold">FundiDevs</span>
        </div>

        {/* Copyright */}
        <div className="text-fundi-concrete/60 text-sm font-mono text-center md:text-left">
          &copy; {new Date().getFullYear()} FundiDevs. Built with sweat and
          syntax.
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          <a
            href="#"
            className="text-fundi-concrete hover:text-fundi-lime transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-fundi-concrete hover:text-fundi-lime transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-fundi-concrete hover:text-fundi-lime transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
