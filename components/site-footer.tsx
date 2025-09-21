"use client";

import { useRouter } from "next/navigation";
import {
  Code2,
  Smartphone,
  Brain,
  GraduationCap,
  BookOpen,
  Car,
  Mail,
  Phone,
  MapPin
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
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">
        {/* Brand */}
        <div>
          <h4 className="text-white font-semibold text-lg">WebArya</h4>
          <p className="mt-3 leading-relaxed">
            AI, Web & Mobile Development with automation at the core. <br />
            Empowering businesses with next-gen digital solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-lg">Services</h4>
          <ul className="mt-3 space-y-3">
            {topServices.map((key) => {
              const title = key.replace(/([A-Z])/g, " $1").trim();
              return (
                <li key={key}>
                  <button
                    onClick={() => router.push(`/services?service=${key}`)}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    {key.includes("Website") && <Code2 size={16} />}
                    {key.includes("AI") && <Brain size={16} />}
                    {key.includes("App") && <Smartphone size={16} />}
                    {title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold text-lg">Products</h4>
          <ul className="mt-3 space-y-3">
            {topProducts.map((key) => (
              <li key={key}>
                <button
                  onClick={() => router.push(`/products?product=${key}`)}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  {key.includes("School") && <GraduationCap size={16} />}
                  {key.includes("Cab") && <Car size={16} />}
                  {key.includes("Finance") && <BookOpen size={16} />}
                  {key}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-lg">Contact</h4>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:consulting@webarya.com" className="hover:text-white transition-colors">
                consulting@webarya.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+918861919000" className="hover:text-white transition-colors">
                +91 8861919000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={60} />
              Harohalli village, nearby Bharath Gas godown muthsandra post, anugondanahalli hobli , Hoskote taluk Bangalore Karnataka 560087
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 py-6 border-t border-gray-800 text-xs">
        © {new Date().getFullYear()} WebArya. All rights reserved.
      </div>
    </footer>
  );
}
