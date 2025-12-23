import { Navbar } from "@/components/navbar"
import { DemoForm } from "@/components/demo-form"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CheckCircle, Sparkles, Zap, Shield, Clock, Star, Rocket, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Book a Free Demo — WebArya",
  description: "Schedule a demo for our services and products.",
}

const benefits = [
  { icon: Sparkles, title: "Personalized Demo", desc: "Tailored to your specific business needs", color: "from-blue-500 to-cyan-500" },
  { icon: Zap, title: "Quick Setup", desc: "Get started in minutes, not days", color: "from-yellow-500 to-orange-500" },
  { icon: Shield, title: "No Commitment", desc: "Explore freely with zero obligation", color: "from-green-500 to-emerald-500" },
  { icon: Clock, title: "Expert Guidance", desc: "Direct access to our solution specialists", color: "from-purple-500 to-pink-500" },
]

export default function FreeDemoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Navbar />

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <Sparkles className="w-4 h-4" />
            Free Consultation
            <Sparkles className="w-4 h-4" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Book a Free Demo
          </h1>
          <p className="mt-5 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover how WebArya can transform your business. Get a personalized walkthrough of our solutions.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Form Card */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 overflow-hidden">
              {/* Gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Schedule Your Demo</h2>
                  <p className="text-sm text-gray-500">Fill in your details below</p>
                </div>
              </div>
              <DemoForm />
            </div>
          </div>

          {/* Benefits Card */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8 text-white shadow-2xl overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.3),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.3),transparent_50%)]"></div>
                <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white mb-4 border border-white/20">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    Why Choose Us
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">WebArya?</span>
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Experience the difference with our comprehensive digital solutions.
                  </p>

                  <div className="space-y-4">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}>
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-lg">{benefit.title}</p>
                          <p className="text-gray-300 text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl bg-white p-6 shadow-xl border border-gray-100 overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>

                <p className="text-sm text-gray-500 mb-5 font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-green-500" />
                  What you'll get:
                </p>
                <ul className="space-y-3">
                  {[
                    "Live product walkthrough",
                    "Custom solutions discussion",
                    "Pricing & timeline estimates",
                    "Q&A with our experts"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 group/check">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium group-hover/check:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Prefer to chat?</p>
                  <p className="text-white/80 text-sm">Reach our team directly</p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-purple-600 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </main>
  )
}
