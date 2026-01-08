"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "The Journey", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Pricing", href: "/pricing" },
    { name: "Journal", href: "/blog" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed w-full z-40 bg-fundi-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO SECTION */}
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-fundi-concrete">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-fundi-lime ${
                isActive(link.href)
                  ? "text-fundi-lime underline underline-offset-4 decoration-2"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 font-bold border-2 border-fundi-lime bg-fundi-lime text-fundi-dark transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[4px_4px_0px_0px_#c2410c] hover:bg-transparent hover:text-fundi-lime"
          >
            Start Build
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-fundi-lime"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-fundi-dark border-b border-white/10 p-6 font-mono absolute w-full top-20 left-0 z-50">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-fundi-lime"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-fundi-lime font-bold"
            >
              {">"} Start Build
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
