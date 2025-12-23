import { Navbar } from "@/components/navbar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"
import { Mail, Phone, MapPin, MessageCircle, Sparkles, ArrowRight, Send } from "lucide-react"

export const metadata = {
  title: "Contact — WebArya",
  description: "Get in touch with our team.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Navbar />

      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pt-24 pb-20">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
            <MessageCircle className="w-4 h-4" />
          </span>
        </div>

        {/* Heading */}
        <SectionHeading
          title="Contact Us"
          subtitle="We'd love to hear from you — let's build something amazing together"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 overflow-hidden">
              {/* Gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Send us a message</h2>
                  <p className="text-sm text-gray-500">We'll get back to you within 24 hours</p>
                </div>
              </div>

              <form className="grid gap-5">
                <div className="relative group/input">
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl border-2 border-gray-100 px-5 py-4 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
                <div className="relative group/input">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-xl border-2 border-gray-100 px-5 py-4 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
                <div className="relative group/input">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-xl border-2 border-gray-100 px-5 py-4 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
                <div className="relative group/input">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full rounded-xl border-2 border-gray-100 px-5 py-4 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none placeholder:text-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="group/btn w-full rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-4 text-sm font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 overflow-hidden">
                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="text-sm text-gray-500">We're here to help you succeed</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a href="mailto:consulting@webarya.com" className="group/item flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 transition-all duration-300 border border-blue-100">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-600 uppercase tracking-wide font-semibold">Email</p>
                      <p className="text-gray-900 font-medium text-lg">consulting@webarya.com</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-500 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </a>

                  <a href="tel:+918861919000" className="group/item flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100/50 hover:from-green-100 hover:to-emerald-200/50 transition-all duration-300 border border-green-100">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide font-semibold">Phone</p>
                      <p className="text-gray-900 font-medium text-lg">+91 8861919000</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-500 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-100/50 border border-purple-100">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-purple-600 uppercase tracking-wide font-semibold">Address</p>
                      <p className="text-gray-700 text-sm leading-relaxed mt-1">Harohalli village, nearby Bharath Gas godown muthsandra post, anugondanahalli hobli, Hoskote taluk Bangalore Karnataka 560087</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-gray-100 shadow-2xl h-[280px] hover:shadow-3xl transition-shadow">
                <iframe
                  title="Map to WebArya"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2430521691495!2d77.77842007358879!3d12.956293215216691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0dc85ff93e1f%3A0x84e465593cf89043!2sNavodaya%20Bharat%20Gas%20Godown!5e0!3m2!1sen!2sin!4v1758445621938!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppFloat />
    </main>
  )
}
