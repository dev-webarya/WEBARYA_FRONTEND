"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Brain,
  GraduationCap,
  BookOpen,
  Car,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import servicesData from "@/app/seed-data/service-data.json";
import productData from "@/app/seed-data/product-data.json";

type ServicesData = typeof servicesData;
type ProductsData = typeof productData.MasterProductPortfolio;

export default function SiteFooter() {
  const router = useRouter();
  const topServices = Object.keys(servicesData).slice(0, 3) as (keyof ServicesData)[];
  const topProducts = Object.keys(productData.MasterProductPortfolio).slice(0, 3) as (keyof ProductsData)[];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 overflow-hidden">
      {/* Gradient accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-sm">
        {/* Brand */}
        <div className="lg:col-span-1">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            WebArya
          </h4>
          <p className="mt-4 leading-relaxed text-gray-400">
            AI, Web & Mobile Development with automation at the core. Empowering businesses with next-gen digital solutions.
          </p>

          {/* Social links - uncomment when links are ready */}
          {/* <div className="flex gap-3 mt-6">
            {[
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
              >
                <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div> */}
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            Services
          </h4>
          <ul className="space-y-3">
            {topServices.map((key) => {
              const title = key.replace(/([A-Z])/g, " $1").trim();
              return (
                <li key={key}>
                  <button
                    onClick={() => router.push(`/services?service=${key}`)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    {key.includes("Website") && <Code2 size={14} className="text-blue-400" />}
                    {key.includes("AI") && <Brain size={14} className="text-purple-400" />}
                    {key.includes("App") && <Smartphone size={14} className="text-green-400" />}
                    <span>{title}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              );
            })}
            <li>
              <Link href="/services" className="text-blue-400 hover:text-blue-300 text-xs font-medium">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            Products
          </h4>
          <ul className="space-y-3">
            {topProducts.map((key) => (
              <li key={key}>
                <button
                  onClick={() => router.push(`/products?product=${key}`)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  {key.includes("School") && <GraduationCap size={14} className="text-blue-400" />}
                  {key.includes("Cab") && <Car size={14} className="text-yellow-400" />}
                  {key.includes("Finance") && <BookOpen size={14} className="text-green-400" />}
                  <span className="truncate">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </button>
              </li>
            ))}
            <li>
              <Link href="/products" className="text-purple-400 hover:text-purple-300 text-xs font-medium">
                View all products →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></div>
            Contact
          </h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:consulting@webarya.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={14} className="text-blue-400" />
                </div>
                <span>consulting@webarya.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+918861919000" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Phone size={14} className="text-green-400" />
                </div>
                <span>+91 8861919000</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={14} className="text-purple-400" />
              </div>
              <span className="text-xs leading-relaxed">Harohalli village, nearby Bharath Gas godown, Hoskote, Bangalore 560087</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} WebArya. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/customers" className="hover:text-white transition-colors">Customers</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
