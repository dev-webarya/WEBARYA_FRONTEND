import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About — WebArya",
  description: "Learn about our vision, mission, and team.",
}

export default async function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-12 space-y-16">
        {/* Intro */}
        <SectionHeading
          title="About WebArya"
          subtitle="AI-first innovation for enterprises and startups"
        />
        <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          At WebArya, we specialize in creating AI-powered platforms that help businesses grow, scale, and automate. 
          Our expertise spans across web and mobile app development, AI automation, and custom software solutions. 
          With a mission to enable enterprises and startups to embrace the future of digital transformation, we craft cutting-edge tools that optimize productivity, enhance user experience, and drive innovation.
        </p>
        {/* Vision & Mission */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-10">Our Vision</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Our vision is to empower businesses with intelligent technology solutions that simplify complexity and drive innovation. 
            We aim to be the go-to partner for organizations looking to leverage AI, automation, and modern web technologies to achieve their goals.
          </p>
        </div>
      </section>
      <WhatsAppFloat />
    </main>
  )
}
