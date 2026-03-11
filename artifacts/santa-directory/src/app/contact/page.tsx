import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the SantaDirectory team. Whether you're looking for a Santa or want to list your profile, we're here to help.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have a question or need help? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-charcoal mb-2">
                Send Us a Message
              </h2>
              <p className="text-charcoal-light mb-8">
                Whether you&apos;re looking for a Santa, interested in listing
                your profile, or have a general enquiry, fill in the form below
                and we&apos;ll get back to you as soon as we can.
              </p>
              <EnquiryForm type="general" />
            </div>

            <div className="space-y-6">
              <div className="bg-cream rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Mail className="text-brand shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm">
                      Email
                    </h3>
                    <a
                      href="mailto:enquiries@santadirectory.co.uk"
                      className="text-brand hover:underline text-sm"
                    >
                      enquiries@santadirectory.co.uk
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="text-brand shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm">
                      Coverage
                    </h3>
                    <p className="text-charcoal-light text-sm">
                      We list professional Santa performers across the United
                      Kingdom.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-sm mb-2">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/santas"
                      className="text-brand hover:underline"
                    >
                      Find a Santa
                    </a>
                  </li>
                  <li>
                    <a
                      href="/list-your-profile"
                      className="text-brand hover:underline"
                    >
                      List Your Profile
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-brand hover:underline">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
