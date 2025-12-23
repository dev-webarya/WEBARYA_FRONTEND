"use client"
import { Lightbulb, Users, Award, CheckCircle, Sparkles, ArrowRight, Zap, Shield, Bot, Rocket, Code } from "lucide-react";
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { SectionHeading } from "@/components/section-heading"
import { DemoForm } from "@/components/demo-form"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { JSX } from "react"
import ServicesPageClient from "./services/ServicesPageClient";
import ProductsPageClient from "./products/ProductsPageClient";
import Link from "next/link";


// ----------------- MAIN PAGE -----------------
export default function HomePage(): JSX.Element {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <div className="pt-16">
        <HeroCarousel />

        {/* Services */}
        <ServicesPageClient />

        {/* Products */}
        <ProductsPageClient />

        {/* Demo Form - Enhanced */}
        <section
          id="demo"
          className="relative mx-auto max-w-6xl px-4 py-20 overflow-hidden"
        >
          {/* Background decorations - Enhanced */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="relative">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
                <Sparkles className="w-4 h-4" />
                Free Consultation
                <Sparkles className="w-4 h-4" />
              </span>
            </div>

            <SectionHeading
              title="Book a Free Demo"
              subtitle="Experience our solutions firsthand with a personalized walkthrough"
            />
          </div>

          <div className="relative mt-12 grid gap-8 lg:grid-cols-2">
            {/* Form Card - Enhanced */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 overflow-hidden">
                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl">
                    <span className="text-white text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Schedule a Demo</h3>
                    <p className="text-sm text-gray-500">Fill in your details below</p>
                  </div>
                </div>
                <DemoForm />
              </div>
            </div>

            {/* Why Choose Card - Enhanced */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8 shadow-2xl overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.3),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.3),transparent_50%)]"></div>
                <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white mb-4">
                    <Award className="w-3 h-3 text-yellow-400" />
                    Why Choose Us
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">WebArya?</span>
                  </h3>
                  <p className="text-gray-400 mt-2">Transform your business with our expertise</p>

                  <ul className="mt-8 space-y-4">
                    {[
                      { icon: "🚀", text: "Experienced in AI/ML, Web & Mobile", color: "from-blue-500 to-cyan-500" },
                      { icon: "⚡", text: "Fast delivery with reliable support", color: "from-yellow-500 to-orange-500" },
                      { icon: "🔧", text: "Tailored automation for your workflows", color: "from-purple-500 to-pink-500" },
                      { icon: "🏢", text: "Proven solutions for enterprises & startups", color: "from-green-500 to-emerald-500" },
                      { icon: "💻", text: "Custom website & app development", color: "from-indigo-500 to-purple-500" },
                      { icon: "🤖", text: "AI-driven automation bots & agents", color: "from-rose-500 to-red-500" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group/item border border-white/5 hover:border-white/20">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-xl shadow-lg group-hover/item:scale-110 transition-transform duration-300`}>
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


        {/* Vision - Premium Redesign */}
        <section
          id="vision"
          className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-24 text-white overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.3),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.2),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_50%)]"></div>

          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>

          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/5 rounded-full"></div>

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Our Vision
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Building the <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Future</span>
              </h2>
              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                At WebArya, we build future-ready digital ecosystems. We empower
                businesses with AI-driven automation, scalable web & mobile
                solutions, and products that streamline operations.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  desc: "We push boundaries to craft cutting-edge solutions that define the future of technology.",
                  color: "from-yellow-400 to-orange-500",
                  bgGlow: "bg-yellow-500/20"
                },
                {
                  icon: Users,
                  title: "Partnership",
                  desc: "We collaborate closely with clients to build lasting relationships and ensure long-term success.",
                  color: "from-pink-400 to-rose-500",
                  bgGlow: "bg-pink-500/20"
                },
                {
                  icon: Award,
                  title: "Excellence",
                  desc: "We deliver with precision, quality, and reliability — excellence in every project we undertake.",
                  color: "from-green-400 to-emerald-500",
                  bgGlow: "bg-green-500/20"
                },
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className={`absolute inset-0 ${item.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className="relative rounded-3xl bg-white/5 backdrop-blur-md p-10 border border-white/10 hover:border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                    {/* Gradient top bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Feature Cards */}
            <div className="mt-16 grid md:grid-cols-2 gap-6">
              {[
                { icon: Rocket, title: "Fast Delivery", desc: "We ship in days, not months. Agile methodologies ensure rapid development.", color: "from-blue-500 to-cyan-500" },
                { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade security with infrastructure designed to scale.", color: "from-purple-500 to-pink-500" },
                { icon: Bot, title: "AI-First Approach", desc: "We integrate AI and automation into every solution we build.", color: "from-orange-500 to-red-500" },
                { icon: Code, title: "Clean Code", desc: "Well-documented, maintainable code following best practices.", color: "from-green-500 to-emerald-500" },
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-300">
                  <div className={`w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                Get in Touch
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>



        <WhatsAppFloat />
      </div>
    </main>
  )
}
