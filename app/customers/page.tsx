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
    Trophy,
    TrendingUp,
    Heart,
} from "lucide-react"

// Real customer data
const customerStats = [
    { value: "7+", label: "Active Clients", icon: "🤝", gradient: "from-blue-500 to-cyan-500" },
    { value: "10+", label: "Projects Delivered", icon: "🚀", gradient: "from-purple-500 to-pink-500" },
    { value: "100%", label: "Client Satisfaction", icon: "⭐", gradient: "from-yellow-500 to-orange-500" },
    { value: "6+", label: "Industries Served", icon: "🏢", gradient: "from-green-500 to-emerald-500" },
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
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        name: "Cashper Finance",
        role: "FinTech Partner",
        quote: "The financial services platform WebArya developed for us is secure, user-friendly, and has helped us serve our customers better. Their understanding of fintech requirements is impressive.",
        rating: 5,
        gradient: "from-green-500 to-emerald-500",
    },
    {
        name: "BBD Academy",
        role: "Education Partner",
        quote: "Our school website has never looked better! WebArya created a professional platform that effectively showcases our institution and helps parents stay connected with their children's education.",
        rating: 5,
        gradient: "from-blue-500 to-indigo-500",
    },
    {
        name: "Mobiroute Team",
        role: "Telecom Partner",
        quote: "WebArya understands enterprise communication needs. They built a robust platform that helps us deliver SMS, Voice, and messaging services to our clients with exceptional reliability.",
        rating: 5,
        gradient: "from-purple-500 to-pink-500",
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
        icon: Car,
    },
    {
        customer: "Cashper",
        title: "AI-Powered Financial Services Platform",
        challenge: "Required a comprehensive platform for loans, insurance, and investment services with secure transactions.",
        solution: "Developed an end-to-end financial services platform with AI-powered recommendations and secure payment processing.",
        results: ["Complete Financial Suite", "Expert Guidance System", "Secure Transactions"],
        color: "from-green-500 to-emerald-500",
        icon: Banknote,
    },
    {
        customer: "Mobiroute Teleservices",
        title: "Enterprise Cloud Communication Platform",
        challenge: "Needed a scalable platform to manage SMS, Voice, Email, and IVR services for enterprise clients.",
        solution: "Created a comprehensive cloud communication platform with real-time analytics and multi-channel messaging.",
        results: ["Enterprise-grade Messaging", "Real-time Delivery Reports", "Multi-channel Support"],
        color: "from-purple-500 to-pink-500",
        icon: MessageSquare,
    },
]

const industries = [
    { icon: Car, name: "Transportation", count: "1+", color: "from-yellow-500 to-orange-500" },
    { icon: Banknote, name: "FinTech", count: "1+", color: "from-green-500 to-emerald-500" },
    { icon: GraduationCap, name: "Education", count: "3+", color: "from-blue-500 to-indigo-500" },
    { icon: MessageSquare, name: "Telecom", count: "1+", color: "from-purple-500 to-pink-500" },
    { icon: Palette, name: "Creative", count: "1+", color: "from-rose-500 to-red-500" },
    { icon: Home, name: "Real Estate", count: "1+", color: "from-teal-500 to-green-500" },
    { icon: Building2, name: "Enterprise", count: "2+", color: "from-slate-500 to-gray-600" },
    { icon: Briefcase, name: "Startups", count: "5+", color: "from-cyan-500 to-blue-500" },
]

export default function CustomersPage() {
    return (
        <main className="overflow-hidden">
            <Navbar />

            {/* Hero Section - Enhanced */}
            <section className="relative mx-auto max-w-6xl px-4 pt-24 pb-16">
                {/* Animated gradient blobs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="relative">
                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
                            <Heart className="w-4 h-4 text-red-500" />
                            Trusted by Innovative Businesses
                            <Heart className="w-4 h-4 text-red-500" />
                        </span>
                    </div>

                    <SectionHeading
                        title="Our Customers"
                        subtitle="Trusted by innovative businesses across industries"
                    />
                    <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mt-6 text-lg">
                        We're proud to partner with forward-thinking companies across industries. From education to
                        fintech, transportation to communications — our customers trust us to deliver exceptional
                        digital solutions that drive real business results.
                    </p>

                    {/* Stats Grid - Enhanced */}
                    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {customerStats.map((stat, i) => (
                            <div key={i} className="group relative" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                                    <p className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</p>
                                    <p className="text-gray-500 text-sm mt-1 font-medium">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Customers Section - Enhanced */}
            <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)]"></div>
                <div className="relative mx-auto max-w-6xl px-4">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-full text-xs font-semibold text-purple-700 mb-4">
                            <Trophy className="w-3 h-3" /> Our Partners
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">Our Valued Customers</h2>
                        <p className="text-gray-600 mt-3 text-lg">Companies that trust us with their digital transformation</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredCustomers.map((customer, i) => (
                            <a
                                key={i}
                                href={customer.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent block hover:-translate-y-2"
                            >
                                {/* Gradient top bar */}
                                <div className={`h-1.5 bg-gradient-to-r ${customer.color}`}></div>

                                {/* Hover gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${customer.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className="relative p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${customer.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                            <customer.Icon className="w-8 h-8" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-bold text-gray-900 text-lg">{customer.name}</h3>
                                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                            </div>
                                            <span className={`text-xs font-medium bg-gradient-to-r ${customer.color} bg-clip-text text-transparent`}>{customer.industry}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{customer.description}</p>
                                    <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${customer.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                                        <span>Visit Website</span>
                                        <ArrowRight className="w-4 h-4 text-blue-500" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section - Premium Dark Theme */}
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
                            <Building2 className="w-4 h-4" />
                            Diverse Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
                        <p className="text-gray-400 mt-3 text-lg">Expertise across diverse sectors</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {industries.map((industry, i) => (
                            <div key={i} className="group relative">
                                <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 text-center hover:-translate-y-1">
                                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                        <industry.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-white mb-1">{industry.name}</h3>
                                    <p className="text-blue-300 text-sm font-medium">{industry.count} clients</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Enhanced */}
            <section className="relative mx-auto max-w-6xl px-4 py-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>

                <div className="relative text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 rounded-full text-xs font-semibold text-yellow-700 mb-4">
                        <Star className="w-3 h-3 fill-yellow-500" /> Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">What Our Customers Say</h2>
                    <p className="text-gray-600 mt-3 text-lg">Real feedback from real partners</p>
                </div>

                <div className="relative grid md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className="group relative">
                            <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                {/* Gradient top bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-t-2xl`}></div>

                                <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100" />

                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, j) => (
                                        <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">"{testimonial.quote}"</p>

                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                                        <p className={`text-sm font-medium bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Success Stories Section - Enhanced */}
            <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)]"></div>
                <div className="relative mx-auto max-w-6xl px-4">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full text-xs font-semibold text-green-700 mb-4">
                            <TrendingUp className="w-3 h-3" /> Success Stories
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">Customer Success Stories</h2>
                        <p className="text-gray-600 mt-3 text-lg">Real results that speak for themselves</p>
                    </div>

                    <div className="space-y-8">
                        {successStories.map((story, i) => (
                            <div key={i} className="group relative">
                                <div className={`absolute inset-0 bg-gradient-to-r ${story.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                                    <div className={`h-2 bg-gradient-to-r ${story.color}`}></div>
                                    <div className="p-8 md:p-10">
                                        <div className="flex flex-col md:flex-row md:items-start gap-8">
                                            {/* Icon */}
                                            <div className={`w-20 h-20 flex-shrink-0 rounded-2xl bg-gradient-to-r ${story.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                                <story.icon className="w-10 h-10 text-white" />
                                            </div>

                                            <div className="flex-1">
                                                <span className={`text-sm font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}>{story.customer}</span>
                                                <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-5">{story.title}</h3>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="space-y-4">
                                                        <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                                                            <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2 flex items-center gap-2">
                                                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                                Challenge
                                                            </p>
                                                            <p className="text-gray-700 text-sm">{story.challenge}</p>
                                                        </div>
                                                        <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                                                            <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2 flex items-center gap-2">
                                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                                Solution
                                                            </p>
                                                            <p className="text-gray-700 text-sm">{story.solution}</p>
                                                        </div>
                                                    </div>

                                                    <div className={`p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200`}>
                                                        <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-4 flex items-center gap-2">
                                                            <Sparkles className="w-4 h-4 text-yellow-500" />
                                                            Key Results
                                                        </p>
                                                        <ul className="space-y-3">
                                                            {story.results.map((result, j) => (
                                                                <li key={j} className="flex items-start gap-3">
                                                                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${story.color} flex items-center justify-center flex-shrink-0`}>
                                                                        <CheckCircle className="w-4 h-4 text-white" />
                                                                    </div>
                                                                    <span className="text-gray-700 font-medium">{result}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logos Cloud - Enhanced */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <p className="text-gray-500 font-medium text-lg flex items-center justify-center gap-2">
                            <span className="w-8 h-[1px] bg-gray-300"></span>
                            Trusted by innovative companies
                            <span className="w-8 h-[1px] bg-gray-300"></span>
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {[
                            { name: "OlioCabs", color: "from-yellow-500 to-orange-500" },
                            { name: "Cashper", color: "from-green-500 to-emerald-500" },
                            { name: "BBD Academy", color: "from-blue-500 to-indigo-500" },
                            { name: "Mobiroute", color: "from-purple-500 to-pink-500" },
                            { name: "ArtClass", color: "from-rose-500 to-red-500" },
                            { name: "Nova Tuitions", color: "from-cyan-500 to-blue-500" },
                            { name: "Srushti Infra", color: "from-teal-500 to-green-500" }
                        ].map((company, i) => (
                            <div key={i} className={`text-2xl md:text-3xl font-bold text-gray-300 hover:bg-gradient-to-r hover:${company.color} hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer`}>
                                {company.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Premium Design */}
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
                            Join Our Success Stories
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
                        <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg">
                            Let's discuss how we can help transform your business with our innovative solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                Get Started
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
