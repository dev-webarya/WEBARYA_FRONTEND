"use client"
// import { motion } from "framer-motion";
import { Lightbulb, Users, Award, CheckCircle } from "lucide-react";
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { SectionHeading } from "@/components/section-heading"
import { DemoForm } from "@/components/demo-form"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { JSX } from "react"
import ServicesPageClient from "./services/ServicesPageClient";
import ProductsPageClient from "./products/ProductsPageClient";


// ----------------- MAIN PAGE -----------------
export default function HomePage(): JSX.Element {
  return (
    <main>
      <Navbar />

      <div className="pt-16">
        <HeroCarousel />

        {/* Services */}
        <ServicesPageClient />

        {/* Products */}
        <ProductsPageClient />

        {/* Demo Form */}
        <section
          id="demo"
          className="relative mx-auto max-w-6xl px-4 py-16 overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

          <SectionHeading
            title="Book a Free Demo"
            subtitle="Experience our solutions firsthand with a personalized walkthrough"
          />
          <div className="relative mt-10 grid gap-8 lg:grid-cols-2">
            {/* Form Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Schedule a Demo</h3>
                    <p className="text-sm text-gray-500">Fill in your details below</p>
                  </div>
                </div>
                <DemoForm />
              </div>
            </div>

            {/* Why Choose Card */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8 shadow-2xl overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">WebArya?</span>
                  </h3>
                  <p className="text-gray-400 mt-2">Transform your business with our expertise</p>

                  <ul className="mt-8 space-y-4">
                    {[
                      { icon: "🚀", text: "Experienced in AI/ML, Web & Mobile" },
                      { icon: "⚡", text: "Fast delivery with reliable support" },
                      { icon: "🔧", text: "Tailored automation for your workflows" },
                      { icon: "🏢", text: "Proven solutions for enterprises & startups" },
                      { icon: "💻", text: "Custom website & app development" },
                      { icon: "🤖", text: "AI-driven automation bots & agents" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="text-gray-200 font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Vision */}
        <section
          id="vision"
          className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-24 text-white overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.3),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.2),transparent_70%)]"></div>

          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              At WebArya, we build future-ready digital ecosystems. We empower
              businesses with AI-driven automation, scalable web & mobile
              solutions, and products that streamline operations.
            </p>

            <div className="mt-14 grid gap-10 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">
                  We push boundaries to craft cutting-edge solutions.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 12l2 2m-2-2l-2 2m0-2l-2 2m2-2l-2-2m10-2.5a5.5 5.5 0 00-10.5 2.5h-1.5a4.5 4.5 0 000 9H12a4.5 4.5 0 004.5-4.5V13h1a3 3 0 003-3v0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-300 text-sm">
                  We collaborate closely with clients for long-term success.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8l-2 4h4l-2 4m0-12v4m0 8v4m8-8h-4M4 12H0"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm">
                  We deliver with precision, quality, and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>



        <WhatsAppFloat />
      </div>
    </main>
  )
}
