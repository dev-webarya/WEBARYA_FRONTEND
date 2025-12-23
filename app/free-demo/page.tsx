import { Navbar } from "@/components/navbar"
import { DemoForm } from "@/components/demo-form"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CheckCircle, Sparkles, Zap, Shield, Clock } from "lucide-react"

export const metadata = {
  title: "Book a Free Demo — WebArya",
  description: "Schedule a demo for our services and products.",
}

const benefits = [
  { icon: Sparkles, title: "Personalized Demo", desc: "Tailored to your specific business needs" },
  { icon: Zap, title: "Quick Setup", desc: "Get started in minutes, not days" },
  { icon: Shield, title: "No Commitment", desc: "Explore freely with zero obligation" },
  { icon: Clock, title: "Expert Guidance", desc: "Direct access to our solution specialists" },
]

export default function FreeDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Navbar />

      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pt-28 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Free Consultation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Book a Free Demo
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how WebArya can transform your business. Get a personalized walkthrough of our solutions.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Form Card */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-2xl border border-gray-200 p-8 bg-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
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
            <div className="rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-2">
                Why Choose <span className="text-blue-400">WebArya?</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Experience the difference with our comprehensive digital solutions.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{benefit.title}</p>
                      <p className="text-gray-300 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust indicators */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <p className="text-sm text-gray-500 mb-4 font-medium">What you'll get:</p>
              <ul className="space-y-3">
                {[
                  "Live product walkthrough",
                  "Custom solutions discussion",
                  "Pricing & timeline estimates",
                  "Q&A with our experts"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </main>
  )
}
