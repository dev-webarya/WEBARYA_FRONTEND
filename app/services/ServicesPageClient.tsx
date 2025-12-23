"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import servicesData from "@/app/seed-data/service-data.json";
import ServiceModal from "@/components/ServiceModal";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

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
    <main className="overflow-hidden">
      <Navbar />
      <section className="relative mx-auto max-w-6xl px-4 pt-24 pb-20">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
              <Zap className="w-4 h-4" />
              Expert Solutions
              <Zap className="w-4 h-4" />
            </span>
          </div>

          <SectionHeading title="Our Services" subtitle="Comprehensive digital solutions tailored to transform your business" />
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {Object.entries(servicesData).map(([key, service], index) => {
            const s = service as Service;
            const gradient = getServiceGradient(index);
            const color = getServiceColor(index);

            return (
              <Card
                key={key}
                className="group relative rounded-2xl border border-gray-100 shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white"
                onClick={() => setModalService(s)}
              >
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Blur glow on hover */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`}></div>

                <CardHeader className="relative flex flex-col items-center p-0">
                  {/* Image with overlay */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={s.imageUrl}
                      alt={s.title}
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
                      {s.title}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 text-sm text-gray-600 px-6 pb-6">
                  {Array.isArray(s.shortDescription)
                    ? s.shortDescription.slice(0, 4).map((desc, idx) => (
                      <p key={idx} className="flex items-start gap-3">
                        <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0`}>
                          <Sparkles className="w-3 h-3 text-white" />
                        </span>
                        <span className="group-hover:text-gray-800 transition-colors">{desc}</span>
                      </p>
                    ))
                    : <p className="group-hover:text-gray-800 transition-colors">{s.shortDescription}</p>}

                  {/* Learn more link */}
                  <div className="pt-4">
                    <span className={`font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color }} />
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
