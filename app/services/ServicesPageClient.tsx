"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { FloatingContacts, WhatsAppFloat } from "@/components/whatsapp-float";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import servicesData from "@/app/seed-data/service-data.json";
import ServiceModal from "@/components/ServiceModal";

type Service = {
  imageUrl: string;
  shortDescription: string[] | string;
  longDescription: string;
  products: { name: string; features: string[] }[];
};

export default function ServicesPage({ detailed = true }: { detailed?: boolean }) {
  const [modalService, setModalService] = useState<Service | null>(null);

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-12">
        <SectionHeading title="Our Services" subtitle="Explore our services" />
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(servicesData).map(([key, service]) => {
            const readableTitle = key.replace(/([A-Z])/g, " $1").trim();
            return (
              <Card
                key={key}
                className="rounded-2xl border border-gray-300 shadow-sm transition-all duration-300 group hover:shadow-lg hover:border-blue-500 cursor-pointer"
                onClick={() => setModalService(service as Service)}
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="h-32 w-full max-w-xs rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src={service.imageUrl}
                      alt={readableTitle}
                      width={400}
                      height={200}
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center mt-2">
                    {readableTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-700">
                  {Array.isArray(service.shortDescription)
                    ? service.shortDescription.map((desc, idx) => (
                        <p key={idx} className="hover:text-blue-500 transition-colors duration-200">
                          {desc}
                        </p>
                      ))
                    : <p className="hover:text-blue-500 transition-colors duration-200">{service.shortDescription}</p>}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {modalService && detailed && (
        <ServiceModal isOpen={!!modalService} onClose={() => setModalService(null)} service={modalService} />
      )}

      <FloatingContacts />
      <WhatsAppFloat />
    </main>
  );
}
