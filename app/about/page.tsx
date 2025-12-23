"use client"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"
import {
  Code,
  Zap,
  Users,
  Shield,
  Rocket,
  Bot,
  Database,
  Cpu,
  Lightbulb,
  Award,
  Phone,
  Smartphone
} from "lucide-react"

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-12">
        <SectionHeading
          title="About WebArya"
          subtitle="AI-first innovation for enterprises and startups"
        />
        <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mt-6">
          We're a technology company with a passionate team of developers, designers, and innovators.
          We transform complex ideas into powerful digital products — from web and mobile apps to
          intelligent automation solutions that scale with your business.
        </p>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "AI-First", label: "Approach" },
            { value: "Full-Stack", label: "Expertise" },
            { value: "24/7", label: "Support" },
            { value: "100%", label: "Commitment" },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{item.value}</p>
              <p className="text-gray-600 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Team Expertise</h2>
            <p className="text-gray-600 mt-2">A passionate team of skilled developers and innovators</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Description */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                At WebArya, we've assembled a team of highly skilled professionals who are passionate about
                building exceptional digital products. Our developers bring deep expertise across the entire
                technology stack, from frontend to backend, from databases to AI.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, title: "Frontend", desc: "Expertise in all modern responsive web frameworks." },
                  { icon: Database, title: "Backend", desc: "Scalable architectures in any language." },
                  { icon: Cpu, title: "AI & ML", desc: "Advanced models, LLMs, and intelligent agents." },
                  { icon: Zap, title: "Automation", desc: "Workflow optimization and custom bots." },
                  { icon: Phone, title: "Mobile App", desc: "Native and cross-platform mobile solutions." },
                  { icon: Shield, title: "Cloud & DevOps", desc: "Secure infrastructure and CI/CD pipelines." },
                ].map((skill, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <skill.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{skill.title}</p>
                      <p className="text-gray-500 text-xs">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right - Skill Bars */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-10"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  {[
                    { label: "Frontend Development", value: 95 },
                    { label: "Backend Development", value: 90 },
                    { label: "AI & Automation", value: 85 },
                    { label: "Mobile Development", value: 88 },
                    { label: "Cloud & DevOps", value: 82 },
                  ].map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{skill.label}</span>
                        <span className="text-gray-500">{skill.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Drives Us</h2>
          <p className="text-gray-600 mt-2">Our core values shape everything we do</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Lightbulb, title: "Innovation", desc: "Pioneering solutions that push boundaries", color: "from-yellow-400 to-orange-500" },
            { icon: Users, title: "Collaboration", desc: "Building together for long-term success", color: "from-green-400 to-emerald-500" },
            { icon: Award, title: "Excellence", desc: "Delivering quality without compromise", color: "from-blue-400 to-indigo-500" },
            { icon: Zap, title: "Speed", desc: "Fast execution, faster results", color: "from-purple-400 to-pink-500" },
          ].map((value, i) => (
            <div key={i} className="text-center group">
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-16 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Why Choose WebArya?</h2>
            <p className="text-gray-400 mt-2">What sets us apart from the rest</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Fast Delivery", desc: "We ship in days, not months. Agile methodologies ensure rapid development." },
              { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade security with infrastructure designed to scale." },
              { icon: Users, title: "Dedicated Support", desc: "24/7 support with a team that understands your needs." },
              { icon: Bot, title: "AI-First Approach", desc: "We integrate AI and automation into every solution." },
              { icon: Code, title: "Clean Code", desc: "Well-documented, maintainable code following best practices." },
              { icon: Zap, title: "Innovation Driven", desc: "We stay ahead of technology trends for cutting-edge solutions." },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Leadership</h2>
          <p className="text-gray-600 mt-2">The visionary behind WebArya</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-4xl mx-auto">
          {/* Photo */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <Image
              src="/rohit.webp"
              alt="Rohit Gupta - Founder & CEO"
              width={240}
              height={240}
              className="relative rounded-full object-cover shadow-xl border-4 border-white"
            />
          </div>

          {/* Bio */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900">Rohit Gupta</h3>
            <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>

            <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
              <p>
                An accomplished technologist and serial entrepreneur with deep expertise from
                working with global giants like <strong className="text-gray-900">Accenture, IBM, HP, Wipro</strong>, and
                <strong className="text-gray-900"> Manhattan Associates</strong>. A proud alumnus of <strong className="text-gray-900">IIT Kharagpur</strong>.
              </p>
              <p>
                <strong className="text-gray-900">WebArya Tech</strong> represents his vision of making cutting-edge technology
                accessible to businesses of all sizes through AI-powered solutions.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
              {["IIT Kharagpur", "Serial Entrepreneur", "Tech Leader", "AI Advocate"].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Valued Clients</h2>
            <p className="text-gray-600 mt-2">Partnering with visionaries across industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "EduSmart Systems", desc: "Leading education technology provider transforming classroom learning with AI." },
              { name: "AutoFleet Corp", desc: "Automating logistics and fleet management for nationwide transport networks." },
              { name: "FinTrack Solutions", desc: "Next-gen personal finance and investment tracking platform for millennials." },
              { name: "RetailPro Global", desc: "Empowering retailers with smart inventory and e-commerce growth tools." },
            ].map((client, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 font-bold text-xl">
                  {client.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{client.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{client.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 font-medium flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              And many more trusting us with their digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 text-center text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]"></div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Let's Build Something Amazing Together</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Whether you need a website, mobile app, or AI-powered automation — our team is ready.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/free-demo"
                className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </main>
  )
}
