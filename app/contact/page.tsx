import { Navbar } from "@/components/navbar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"

export const metadata = {
  title: "Contact — WebArya",
  description: "Get in touch with our team.",
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pt-24 pb-20">
        {/* Heading */}
        <SectionHeading
          title="Contact Us"
          subtitle="We’d love to hear from you — let’s build something amazing together"
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-900">Send us a message</h2>
            <form className="mt-6 grid gap-4">
              <input
                name="name"
                placeholder="Your Name"
                required
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-gray-900">Get in Touch</h2>
              <div className="mt-4 text-sm text-gray-700 space-y-2">
                <p>
                  📧 Email:{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="mailto:consulting@webarya.com"
                  >
                    consulting@webarya.com
                  </a>
                </p>
                <p>
                  📞 Phone:{" "}
                  <a className="text-blue-600 hover:underline" href="tel:+918861919000">
                    +91 8861919000
                  </a>
                </p>
                <p>📍 Address: Harohalli village, nearby Bharath Gas godown muthsandra post, anugondanahalli hobli , Hoskote taluk Bangalore Karnataka 560087</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md h-[300px]">
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
