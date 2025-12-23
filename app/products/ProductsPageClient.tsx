"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import productData from "@/app/seed-data/product-data.json";
import ProductModal from "@/components/ProductModal";
import { ArrowRight, Sparkles } from "lucide-react";

export type ProductCategory = {
  title: string;
  imageUrl: string;
  shortDescription: string | string[];
  longDescription: string;
  products: { name: string; features: string[] }[];
};

type MasterPortfolio = typeof productData.MasterProductPortfolio;

const getProductGradient = (index: number) => {
  const gradients = [
    "from-amber-500 to-orange-500",
    "from-blue-500 to-indigo-500",
    "from-emerald-500 to-teal-500",
    "from-purple-500 to-pink-500",
  ];
  return gradients[index % gradients.length];
};

export default function ProductsPageClient({ detailed = true }) {
  const [modalCategory, setModalCategory] = useState<ProductCategory | null>(null);
  const portfolio: MasterPortfolio = productData.MasterProductPortfolio;

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        <SectionHeading title="Our Products" subtitle="Smart solutions designed to streamline your business operations" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(portfolio).map(([key, category], index) => {
            const c = category as ProductCategory;
            const gradient = getProductGradient(index);

            return (
              <Card
                key={key}
                className="group relative rounded-2xl border border-gray-100 shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white"
                onClick={() => setModalCategory(c)}
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`}></div>

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <CardHeader className="relative flex flex-col items-center p-0">
                  {/* Product image - full width with overlay */}
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={c.imageUrl}
                      alt={c.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent`}></div>
                  </div>

                  <CardTitle className="text-xl font-bold text-center px-6 pt-5 pb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {c.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-2 text-sm text-gray-600 px-6 pb-6">
                  <ul className="space-y-2">
                    {Array.isArray(c.shortDescription)
                      ? c.shortDescription.slice(0, 4).map((point: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Sparkles className={`w-4 h-4 mt-0.5 flex-shrink-0 text-transparent bg-gradient-to-r ${gradient} bg-clip-text`} style={{ color: index === 0 ? '#f59e0b' : index === 1 ? '#3b82f6' : index === 2 ? '#10b981' : '#8b5cf6' }} />
                          <span className="group-hover:text-gray-800 transition-colors">{point}</span>
                        </li>
                      ))
                      : (
                        <li className="group-hover:text-gray-800 transition-colors">
                          {c.shortDescription}
                        </li>
                      )}
                  </ul>

                  {/* View details link */}
                  <div className="pt-4">
                    <span className={`font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all`} style={{ color: index === 0 ? '#f59e0b' : index === 1 ? '#3b82f6' : index === 2 ? '#10b981' : '#8b5cf6' }}>
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {modalCategory && detailed && (
        <ProductModal
          isOpen={!!modalCategory}
          onClose={() => setModalCategory(null)}
          category={modalCategory}
        />
      )}
      <WhatsAppFloat />
    </main>
  );
}
