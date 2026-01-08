import Link from "next/link";
import Image from "next/image";
import { Hammer, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-fundi-dark border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          {/* UPDATED IMAGE SIZE HERE */}
          <Image
            src="/logo.png"
            alt="FundiDevs Logo"
            width={180}
            height={40}
            // Changed from 'h-10' to 'h-14' (56px) or 'h-16' (64px) to make it larger
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

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
