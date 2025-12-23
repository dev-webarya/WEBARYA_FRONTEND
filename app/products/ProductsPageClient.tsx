"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import productData from "@/app/seed-data/product-data.json";
import ProductModal from "@/components/ProductModal";
import { ArrowRight, Sparkles, Package } from "lucide-react";

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

const getProductColor = (index: number) => {
  const colors = ['#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'];
  return colors[index % colors.length];
};

export default function ProductsPageClient({ detailed = true }) {
  const [modalCategory, setModalCategory] = useState<ProductCategory | null>(null);
  const portfolio: MasterPortfolio = productData.MasterProductPortfolio;

  return (
    <main className="overflow-hidden">
      <Navbar />
      <section className="relative mx-auto max-w-6xl px-4 pt-24 pb-20">
        {/* Background decorations */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full text-sm font-medium text-amber-700">
              <Package className="w-4 h-4" />
              Ready-to-Deploy Products
              <Package className="w-4 h-4" />
            </span>
          </div>

          <SectionHeading title="Our Products" subtitle="Smart solutions designed to streamline your business operations" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {Object.entries(portfolio).map(([key, category], index) => {
            const c = category as ProductCategory;
            const gradient = getProductGradient(index);
            const color = getProductColor(index);

            return (
              <Card
                key={key}
                className="group relative rounded-2xl border border-gray-100 shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white"
                onClick={() => setModalCategory(c)}
              >
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Blur glow on hover */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`}></div>

                <CardHeader className="relative flex flex-col items-center p-0">
                  {/* Product image - full width with overlay */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={c.imageUrl}
                      alt={c.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent`}></div>

                    {/* Floating sparkle on image */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold text-center px-6 pt-6 pb-2">
                    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:from-gray-900 group-hover:to-gray-900 transition-all duration-300`}>
                      {c.title}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 text-sm text-gray-600 px-6 pb-6">
                  <ul className="space-y-3">
                    {Array.isArray(c.shortDescription)
                      ? c.shortDescription.slice(0, 4).map((point: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0`}>
                            <Sparkles className="w-3 h-3 text-white" />
                          </span>
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
                    <span className={`font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color }} />
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
