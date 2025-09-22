"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import productData from "@/app/seed-data/product-data.json";
import ProductModal from "@/components/ProductModal";

export type ProductCategory = {
  title: string;
  imageUrl: string;
  shortDescription: string | string[];
  longDescription: string;
  products: { name: string; features: string[] }[];
};

type MasterPortfolio = typeof productData.MasterProductPortfolio;

export default function ProductsPageClient({ detailed = true }) {
  const [modalCategory, setModalCategory] = useState<ProductCategory | null>(null);
  const portfolio: MasterPortfolio = productData.MasterProductPortfolio;

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-12">
        <SectionHeading title="Our Products" subtitle="Smart solutions tailored for your needs" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(portfolio).map(([key, category]) => {
            const c = category as ProductCategory;
            return (
              <Card
                key={key}
                className="rounded-2xl border border-gray-300 shadow-sm transition-all duration-300 group hover:shadow-lg hover:border-blue-500 cursor-pointer"
                onClick={() => setModalCategory(c)}
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="h-32 w-full max-w-xs rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src={c.imageUrl}
                      alt={c.title}
                      width={400}
                      height={200}
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center mt-2">
                    {c.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-700">
                  <ul className="space-y-3 text-gray-500">
                    {Array.isArray(c.shortDescription)
                      ? c.shortDescription.map((point: string, idx: number) => (
                          <li key={idx} className="hover:text-blue-500 transition-colors duration-200">
                            {point}
                          </li>
                        ))
                      : (
                        <li className="hover:text-blue-500 transition-colors duration-200">
                          {c.shortDescription}
                        </li>
                      )}
                  </ul>
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
