import { Navbar } from "@/components/navbar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"

export const metadata = {
  title: "Contact — WebArya",
  description: "Get in touch with our team.",
}

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pt-24 pb-20">
        {/* Heading */}
        <SectionHeading
          title="Contact Us"
          subtitle="We'd love to hear from you — let's build something amazing together"
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg">✉️</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Send us a message</h2>
              </div>

              <form className="grid gap-5">
                <div className="relative">
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-4 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-4 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="relative">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-4 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-4 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Get in Touch</h2>
                </div>

                <div className="space-y-4">
                  <a href="mailto:consulting@webarya.com" className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl group-hover/item:scale-110 transition-transform">
                      📧
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                      <p className="text-blue-600 font-medium hover:text-blue-700">consulting@webarya.com</p>
                    </div>
                  </a>

                  <a href="tel:+918861919000" className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-xl group-hover/item:scale-110 transition-transform">
                      📞
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                      <p className="text-blue-600 font-medium hover:text-blue-700">+91 8861919000</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gray-50">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-xl flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Address</p>
                      <p className="text-gray-700 text-sm leading-relaxed">Harohalli village, nearby Bharath Gas godown muthsandra post, anugondanahalli hobli, Hoskote taluk Bangalore Karnataka 560087</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl h-[280px] hover:shadow-2xl transition-shadow">
              <iframe
                title="Map to WebArya"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2430521691495!2d77.77842007358879!3d12.956293215216691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0dc85ff93e1f%3A0x84e465593cf89043!2sNavodaya%20Bharat%20Gas%20Godown!5e0!3m2!1sen!2sin!4v1758445621938!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
              />
            </div>

          </div>
        </div>
      </section>
      <WhatsAppFloat />
    </main>
  )
}
