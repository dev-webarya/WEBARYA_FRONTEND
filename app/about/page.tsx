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
  Smartphone,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react"

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero Section with Animated Background */}
      <section className="relative mx-auto max-w-6xl px-4 pt-24 pb-16">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
              <Sparkles className="w-4 h-4" />
              AI-First Technology Company
              <Sparkles className="w-4 h-4" />
            </span>
          </div>

          <SectionHeading
            title="About WebArya"
            subtitle="AI-first innovation for enterprises and startups"
          />
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mt-6 text-lg">
            We're a technology company with a passionate team of developers, designers, and innovators.
            We transform complex ideas into powerful digital products — from web and mobile apps to
            intelligent automation solutions that scale with your business.
          </p>

          {/* Quick Stats - Enhanced */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "AI-First", label: "Approach", icon: "🚀", gradient: "from-blue-500 to-cyan-500" },
              { value: "Full-Stack", label: "Expertise", icon: "💻", gradient: "from-purple-500 to-pink-500" },
              { value: "24/7", label: "Support", icon: "⚡", gradient: "from-orange-500 to-red-500" },
              { value: "100%", label: "Commitment", icon: "🎯", gradient: "from-green-500 to-emerald-500" },
            ].map((item, i) => (
              <div key={i} className="group relative" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.value}</p>
                  <p className="text-gray-500 text-sm mt-1 font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section - Enhanced */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-xs font-semibold text-blue-700 mb-4">
              <Star className="w-3 h-3" /> Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">Our Team Expertise</h2>
            <p className="text-gray-600 mt-3 text-lg">A passionate team of skilled developers and innovators</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Description with Enhanced Cards */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                At WebArya, we've assembled a team of highly skilled professionals who are passionate about
                building exceptional digital products. Our developers bring deep expertise across the entire
                technology stack, from frontend to backend, from databases to AI.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, title: "Frontend", desc: "Expertise in all modern responsive web frameworks.", color: "from-blue-500 to-cyan-500" },
                  { icon: Database, title: "Backend", desc: "Scalable architectures in any language.", color: "from-purple-500 to-pink-500" },
                  { icon: Cpu, title: "AI & ML", desc: "Advanced models, LLMs, and intelligent agents.", color: "from-orange-500 to-red-500" },
                  { icon: Zap, title: "Automation", desc: "Workflow optimization and custom bots.", color: "from-yellow-500 to-orange-500" },
                  { icon: Phone, title: "Mobile App", desc: "Native and cross-platform mobile solutions.", color: "from-green-500 to-emerald-500" },
                  { icon: Shield, title: "Cloud & DevOps", desc: "Secure infrastructure and CI/CD pipelines.", color: "from-indigo-500 to-purple-500" },
                ].map((skill, i) => (
                  <div key={i} className="group relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{skill.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{skill.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right - Skill Bars Enhanced */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-15"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">Skill Proficiency</span>
                </div>
                <div className="space-y-5">
                  {[
                    { label: "Frontend Development", value: 95, color: "from-blue-500 to-cyan-500" },
                    { label: "Backend Development", value: 90, color: "from-purple-500 to-pink-500" },
                    { label: "AI & Automation", value: 85, color: "from-orange-500 to-red-500" },
                    { label: "Mobile Development", value: 88, color: "from-green-500 to-emerald-500" },
                    { label: "Cloud & DevOps", value: 82, color: "from-indigo-500 to-purple-500" },
                  ].map((skill, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700 font-medium">{skill.label}</span>
                        <span className="text-gray-500 font-semibold">{skill.value}%</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative group-hover:shadow-lg transition-shadow duration-300`}
                          style={{ width: `${skill.value}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Enhanced */}
      <section className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-full text-xs font-semibold text-purple-700 mb-4">
            <Lightbulb className="w-3 h-3" /> Core Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">What Drives Us</h2>
          <p className="text-gray-600 mt-3 text-lg">Our core values shape everything we do</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Lightbulb, title: "Innovation", desc: "Pioneering solutions that push boundaries", color: "from-yellow-400 to-orange-500", bg: "bg-yellow-50" },
            { icon: Users, title: "Collaboration", desc: "Building together for long-term success", color: "from-green-400 to-emerald-500", bg: "bg-green-50" },
            { icon: Award, title: "Excellence", desc: "Delivering quality without compromise", color: "from-blue-400 to-indigo-500", bg: "bg-blue-50" },
            { icon: Zap, title: "Speed", desc: "Fast execution, faster results", color: "from-purple-400 to-pink-500", bg: "bg-purple-50" },
          ].map((value, i) => (
            <div key={i} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition-all duration-500`}></div>
              <div className={`relative text-center p-8 ${value.bg} rounded-2xl border border-gray-100 hover:border-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section - Premium Dark Theme */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.2),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

        <div className="relative mx-auto max-w-6xl px-4">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 mb-4">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose WebArya?</h2>
            <p className="text-gray-400 mt-3 text-lg">What sets us apart from the rest</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Fast Delivery", desc: "We ship in days, not months. Agile methodologies ensure rapid development.", color: "text-orange-400" },
              { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade security with infrastructure designed to scale.", color: "text-green-400" },
              { icon: Users, title: "Dedicated Support", desc: "24/7 support with a team that understands your needs.", color: "text-blue-400" },
              { icon: Bot, title: "AI-First Approach", desc: "We integrate AI and automation into every solution.", color: "text-purple-400" },
              { icon: Code, title: "Clean Code", desc: "Well-documented, maintainable code following best practices.", color: "text-cyan-400" },
              { icon: Zap, title: "Innovation Driven", desc: "We stay ahead of technology trends for cutting-edge solutions.", color: "text-pink-400" },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - Premium Card Design */}
      <section className="relative mx-auto max-w-6xl px-4 py-20">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div className="relative text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-xs font-semibold text-blue-700 mb-4">
            <Award className="w-3 h-3" /> Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">Leadership</h2>
          <p className="text-gray-600 mt-3 text-lg">The visionary behind WebArya</p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
          {/* Decorative gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-10"></div>
          <div className="absolute inset-[1px] bg-white rounded-3xl"></div>

          {/* Photo */}
          <div className="relative flex-shrink-0 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-20"></div>
              <Image
                src="/rohit.webp"
                alt="Rohit Gupta - Founder & CEO"
                width={260}
                height={260}
                className="relative rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-blue-100"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              Founder & CEO
            </div>
          </div>

          {/* Bio */}
          <div className="relative text-center lg:text-left">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">Rohit Gupta</h3>
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-2 mb-5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-blue-600 font-medium">Visionary Leader</span>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
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

            {/* Enhanced Highlights */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
              {[
                { label: "IIT Kharagpur", icon: "🎓" },
                { label: "Serial Entrepreneur", icon: "🚀" },
                { label: "Tech Leader", icon: "💼" },
                { label: "AI Advocate", icon: "🤖" }
              ].map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <span>{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Animated Premium Design */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 text-center text-white shadow-2xl">
          {/* Animated background patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.2),transparent_50%)]"></div>
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Let's Work Together
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg">
              Whether you need a website, mobile app, or AI-powered automation — our team is ready.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/free-demo"
                className="group inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                Book Free Demo
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </main>
  )
}
