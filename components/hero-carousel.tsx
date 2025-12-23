"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const slides = [
  {
    src: "/images/hero-1.png",
    alt: "Modern AI & Web solutions",
    title: "Build Digital Excellence",
    subtitle: "Transform your business with cutting-edge technology"
  },
  {
    src: "/images/hero-2.png",
    alt: "Enterprise-grade engineering",
    title: "AI-Powered Solutions",
    subtitle: "Intelligent automation for smarter operations"
  },
  {
    src: "/images/hero-3.png",
    alt: "Mobile apps that scale",
    title: "Custom Web & Apps",
    subtitle: "Beautiful, high-performance digital experiences"
  },
  {
    src: "/images/hero-4.png",
    alt: "Automation & workflows",
    title: "Scale With Confidence",
    subtitle: "Enterprise-grade solutions that grow with you"
  },
  {
    src: "/images/hero-5.png",
    alt: "Data-driven products",
    title: "Innovation Partners",
    subtitle: "From idea to launch, we're with you every step"
  },
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + slides.length) % slides.length)

  return (
    <section className="relative mt-[64px]">
      <div className="relative h-[500px] md:h-[650px] overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
          />
        ))}

        {/* Premium overlay with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-purple-900/40" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_50%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.25),transparent_50%)]" aria-hidden="true" />

        {/* Content with animations */}
        <div className="absolute inset-0 flex items-center">
          <div className={`mx-auto max-w-5xl px-6 text-center text-white transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium tracking-wide">Welcome to WebArya</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              <span className="block text-white drop-shadow-lg">
                {slides[index].title}
              </span>
              <span className="block mt-3 text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">
                {slides[index].subtitle}
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-200 text-pretty max-w-2xl mx-auto leading-relaxed">
              We build <span className="text-blue-400 font-semibold">AI-powered</span> web applications,
              mobile apps, and automation solutions that drive
              <span className="text-purple-400 font-semibold"> real business growth</span>.
            </p>

            <div className="mt-10 flex gap-4 justify-center flex-wrap">
              <Link
                href="/services"
                className="group rounded-full bg-white text-gray-900 px-8 py-4 text-sm font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105"
              >
                Explore Services
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/free-demo"
                className="group rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-sm font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 border border-white/10"
              >
                <Sparkles className="inline w-4 h-4 mr-2" />
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Premium Navigation Controls */}
        <button
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md text-white p-3 md:p-4 hover:bg-white/25 transition-all duration-300 border border-white/20 group"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md text-white p-3 md:p-4 hover:bg-white/25 transition-all duration-300 border border-white/20 group"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Premium Dots Indicator with progress */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`transition-all duration-500 rounded-full ${i === index
                  ? "w-10 h-3 bg-gradient-to-r from-blue-500 to-purple-500"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
