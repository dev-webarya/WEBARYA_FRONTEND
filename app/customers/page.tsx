"use client"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"
import {
    Building2,
    Users,
    Star,
    Quote,
    ArrowRight,
    CheckCircle,
    Briefcase,
    GraduationCap,
    Banknote,
    Sparkles,
    Car,
    MessageSquare,
    Palette,
    Home,
    BookOpen,
    ExternalLink,
} from "lucide-react"

// Real customer data
const customerStats = [
    { value: "7+", label: "Active Clients" },
    { value: "10+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "6+", label: "Industries Served" },
]

const featuredCustomers = [
    {
        name: "OlioCabs",
        logo: "OC",
        industry: "Transportation",
        description: "Premium car booking service offering reliable cabs for local trips, airport transfers, and outstation travel with verified drivers and 24/7 support.",
        color: "from-yellow-500 to-orange-500",
        website: "https://oliocabs.com/",
        Icon: Car,
    },
    {
        name: "Cashper",
        logo: "CP",
        industry: "FinTech",
        description: "Comprehensive financial services platform providing loans, insurance, investments, and tax planning solutions with expert guidance for all financial needs.",
        color: "from-green-500 to-emerald-500",
        website: "https://cashper.ai/",
        Icon: Banknote,
    },
    {
        name: "BBD Academy",
        logo: "BBD",
        industry: "Education",
        description: "Premier educational institution committed to nurturing young minds with quality education, modern teaching methodologies, and holistic development programs.",
        color: "from-blue-500 to-indigo-500",
        website: "https://bbdacademyskn.com/",
        Icon: GraduationCap,
    },
    {
        name: "Mobiroute Teleservices",
        logo: "MT",
        industry: "Cloud Communications",
        description: "Leading cloud communication platform providing enterprise-grade SMS, Voice, Email, RCS messaging, and IVR services with unmatched delivery rates and 24/7 support.",
        color: "from-purple-500 to-pink-500",
        website: "https://www.mobirouteteleservices.com/",
        Icon: MessageSquare,
    },
    {
        name: "ArtClass",
        logo: "AC",
        industry: "Creative Education",
        description: "World-class art education platform offering expert-led painting, drawing, and creative courses for all skill levels to unleash creative potential.",
        color: "from-rose-500 to-red-500",
        website: "https://art-crm.netlify.app/",
        Icon: Palette,
    },
    {
        name: "Nova Tuitions",
        logo: "NT",
        industry: "EdTech",
        description: "Expert online tuition platform for CBSE, ICSE, and State Boards (Grades 6-12) with 25+ years of teaching excellence and personalized learning experiences.",
        color: "from-cyan-500 to-blue-500",
        website: "https://stately-muffin-52a23d.netlify.app/",
        Icon: BookOpen,
    },
    {
        name: "Srushti Infra",
        logo: "SI",
        industry: "Real Estate",
        description: "Modern property listing and management platform connecting buyers, sellers, and agents with seamless property search and intuitive user experience.",
        color: "from-teal-500 to-green-500",
        website: "https://realeste1234.netlify.app/",
        Icon: Home,
    },
]

const testimonials = [
    {
        name: "OlioCabs Team",
        role: "Transportation Partner",
        quote: "WebArya built us a stunning car booking platform that our customers love. The 24/7 booking system and driver management features have streamlined our entire operation.",
        rating: 5,
    },
    {
        name: "Cashper Finance",
        role: "FinTech Partner",
        quote: "The financial services platform WebArya developed for us is secure, user-friendly, and has helped us serve our customers better. Their understanding of fintech requirements is impressive.",
        rating: 5,
    },
    {
        name: "BBD Academy",
        role: "Education Partner",
        quote: "Our school website has never looked better! WebArya created a professional platform that effectively showcases our institution and helps parents stay connected with their children's education.",
        rating: 5,
    },
    {
        name: "Mobiroute Team",
        role: "Telecom Partner",
        quote: "WebArya understands enterprise communication needs. They built a robust platform that helps us deliver SMS, Voice, and messaging services to our clients with exceptional reliability.",
        rating: 5,
    },
]

const successStories = [
    {
        customer: "OlioCabs",
        title: "Premium Car Booking Platform",
        challenge: "Needed a modern booking system for local, airport, and outstation travel with driver management.",
        solution: "Built a complete car booking platform with real-time availability, driver tracking, and seamless payment integration.",
        results: ["24/7 Online Booking", "Verified Driver System", "Multi-city Coverage"],
        color: "from-yellow-500 to-orange-500",
    },
    {
        customer: "Cashper",
        title: "AI-Powered Financial Services Platform",
        challenge: "Required a comprehensive platform for loans, insurance, and investment services with secure transactions.",
        solution: "Developed an end-to-end financial services platform with AI-powered recommendations and secure payment processing.",
        results: ["Complete Financial Suite", "Expert Guidance System", "Secure Transactions"],
        color: "from-green-500 to-emerald-500",
    },
    {
        customer: "Mobiroute Teleservices",
        title: "Enterprise Cloud Communication Platform",
        challenge: "Needed a scalable platform to manage SMS, Voice, Email, and IVR services for enterprise clients.",
        solution: "Created a comprehensive cloud communication platform with real-time analytics and multi-channel messaging.",
        results: ["Enterprise-grade Messaging", "Real-time Delivery Reports", "Multi-channel Support"],
        color: "from-purple-500 to-pink-500",
    },
]

const industries = [
    { icon: Car, name: "Transportation", count: "1+" },
    { icon: Banknote, name: "FinTech", count: "1+" },
    { icon: GraduationCap, name: "Education", count: "3+" },
    { icon: MessageSquare, name: "Telecom", count: "1+" },
    { icon: Palette, name: "Creative", count: "1+" },
    { icon: Home, name: "Real Estate", count: "1+" },
    { icon: Building2, name: "Enterprise", count: "2+" },
    { icon: Briefcase, name: "Startups", count: "5+" },
]

export default function CustomersPage() {
    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className="mx-auto max-w-6xl px-4 pt-24 pb-12">
                <SectionHeading
                    title="Our Customers"
                    subtitle="Trusted by innovative businesses across industries"
                />
                <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mt-6">
                    We're proud to partner with forward-thinking companies across industries. From education to
                    fintech, transportation to communications — our customers trust us to deliver exceptional
                    digital solutions that drive real business results.
                </p>

                {/* Stats Grid */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {customerStats.map((stat, i) => (
                        <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{stat.value}</p>
                            <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Customers Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Valued Customers</h2>
                        <p className="text-gray-600 mt-2">Companies that trust us with their digital transformation</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredCustomers.map((customer, i) => (
                            <a
                                key={i}
                                href={customer.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 block"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${customer.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <customer.Icon className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-gray-900">{customer.name}</h3>
                                            <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{customer.industry}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{customer.description}</p>
                                <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                                    <span className="text-sm font-medium">Visit Website</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-16 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
                <div className="relative mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold">Industries We Serve</h2>
                        <p className="text-gray-400 mt-2">Expertise across diverse sectors</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {industries.map((industry, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-5 hover:bg-white/15 transition-colors duration-300 text-center group">
                                <industry.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold text-white mb-1">{industry.name}</h3>
                                <p className="text-blue-300 text-sm">{industry.count} clients</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="mx-auto max-w-6xl px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Our Customers Say</h2>
                    <p className="text-gray-600 mt-2">Real feedback from real partners</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Customer Success Stories</h2>
                        <p className="text-gray-600 mt-2">Real results that speak for themselves</p>
                    </div>

                    <div className="space-y-6">
                        {successStories.map((story, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className={`h-2 bg-gradient-to-r ${story.color}`}></div>
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        <div className="flex-1">
                                            <span className="text-blue-600 font-medium text-sm">{story.customer}</span>
                                            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-4">{story.title}</h3>

                                            <div className="space-y-4">
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Challenge</p>
                                                    <p className="text-gray-700 text-sm">{story.challenge}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Solution</p>
                                                    <p className="text-gray-700 text-sm">{story.solution}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:w-64 bg-gray-50 rounded-xl p-4">
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                                                <Sparkles className="w-4 h-4 text-yellow-500" />
                                                Key Results
                                            </p>
                                            <ul className="space-y-2">
                                                {story.results.map((result, j) => (
                                                    <li key={j} className="flex items-start gap-2 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-700">{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logos Cloud */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-10">
                        <p className="text-gray-500 font-medium">Trusted by innovative companies</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {["OlioCabs", "Cashper", "BBD Academy", "Mobiroute", "ArtClass", "Nova Tuitions", "Srushti Infra"].map((company, i) => (
                            <div key={i} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="mx-auto max-w-6xl px-4 pb-16">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 text-center text-white shadow-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]"></div>
                    <div className="relative">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Join Our Success Stories?</h2>
                        <p className="text-white/90 mb-6 max-w-xl mx-auto">
                            Let's discuss how we can help transform your business with our innovative solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                            >
                                Get Started
                                <ArrowRight className="w-4 h-4" />
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
