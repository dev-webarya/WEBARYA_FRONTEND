"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import servicesData from "@/app/seed-data/service-data.json";
import ServiceModal from "@/components/ServiceModal";
import { Sparkles, ArrowRight } from "lucide-react";

type Service = {
  title: string;
  imageUrl: string;
  shortDescription: string[] | string;
  longDescription: string;
  products: { name: string; features: string[] }[];
};

const getServiceGradient = (index: number) => {
  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-emerald-500",
    "from-indigo-500 to-purple-500",
  ];
  return gradients[index % gradients.length];
};

const getServiceColor = (index: number) => {
  const colors = ['#0ea5e9', '#a855f7', '#f97316', '#10b981', '#6366f1'];
  return colors[index % colors.length];
};

export default function ServicesPage({ detailed = true }: { detailed?: boolean }) {
  const [modalService, setModalService] = useState<Service | null>(null);

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        <SectionHeading title="Our Services" subtitle="Comprehensive digital solutions tailored to transform your business" />

        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(servicesData).map(([key, service], index) => {
            const s = service as Service;
            const gradient = getServiceGradient(index);
            const color = getServiceColor(index);

            return (
              <Card
                key={key}
                className="group relative rounded-2xl border border-gray-100 shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white"
                onClick={() => setModalService(s)}
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`}></div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <CardHeader className="relative flex flex-col items-center p-0">
                  {/* Image with overlay */}
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={s.imageUrl}
                      alt={s.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  <CardTitle className="text-xl font-bold text-center px-6 pt-5 pb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-2 text-sm text-gray-600 px-6 pb-6">
                  {Array.isArray(s.shortDescription)
                    ? s.shortDescription.slice(0, 4).map((desc, idx) => (
                      <p key={idx} className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} />
                        <span className="group-hover:text-gray-800 transition-colors">{desc}</span>
                      </p>
                    ))
                    : <p className="group-hover:text-gray-800 transition-colors">{s.shortDescription}</p>}

                  {/* Learn more link */}
                  <div className="pt-4">
                    <span className="font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color }}>
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {modalService && detailed && (
        <ServiceModal isOpen={!!modalService} onClose={() => setModalService(null)} service={modalService} />
      )}
      <WhatsAppFloat />
    </main>
  );
}
