"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { WebAryaLogo } from "./NovaAiLogo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/customers", label: "Customers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-b border-gray-100"
        : "bg-gradient-to-b from-black/20 to-transparent"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <WebAryaLogo scrolled={scrolled} />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-1">
          {LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    active
                      ? "text-blue-600 bg-blue-50"
                      : scrolled
                        ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/free-demo"
            className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Free Demo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            href="/contact"
            className={cn(
              "px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border-2",
              scrolled
                ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                : "border-white/70 text-white hover:bg-white hover:text-blue-600"
            )}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "lg:hidden p-2.5 rounded-xl transition-all",
            scrolled
              ? "text-gray-700 hover:bg-gray-100"
              : "text-white hover:bg-white/10"
          )}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-x-0 top-[72px] bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden",
        mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <ul className="space-y-1 px-4 py-4">
          {LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block text-base px-4 py-3 rounded-xl transition-all duration-200",
                    active
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3 px-2">
            <Link
              href="/free-demo"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Free Demo
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </ul>
      </div>
    </header>
  );
}
