import type { Metadata } from "next";
import { Star, Eye, MapPin, TrendingUp, Shield, Award } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "List Your Santa Profile",
  description:
    "Join SantaDirectory and reach thousands of families, venues, and businesses looking for professional Santa performers across the UK.",
};

const benefits = [
  {
    icon: <Eye size={24} />,
    title: "Maximum Visibility",
    desc: "Your profile is seen by thousands of visitors searching for professional Santas.",
  },
  {
    icon: <MapPin size={24} />,
    title: "Area Discovery",
    desc: "Appear in location-based searches when customers look for Santas near them.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "SEO Exposure",
    desc: "Benefit from our search engine optimisation — your profile ranks when people search online.",
  },
  {
    icon: <Star size={24} />,
    title: "Featured Profiles",
    desc: "Stand out from the crowd with featured placement on the homepage and listings page.",
  },
  {
    icon: <Shield size={24} />,
    title: "Trust Badges",
    desc: "Display your DBS check, real beard status, and other credentials to build trust.",
  },
  {
    icon: <Award size={24} />,
    title: "Professional Platform",
    desc: "Present your services on a modern, premium directory built for professional performers.",
  },
];

export default function ListYourProfilePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            List Your Santa Profile
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join the UK&apos;s premium directory of professional Santa
            performers. Reach families, venues, and businesses looking for
            trusted Santas for hire.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-charcoal">
              Why List on SantaDirectory?
            </h2>
            <p className="text-charcoal-light mt-3 max-w-xl mx-auto">
              Everything you need to showcase your Santa services and attract
              new bookings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-cream rounded-xl p-6 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand mb-4">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-charcoal mb-3">
                Get Started
              </h2>
              <p className="text-charcoal-light max-w-lg mx-auto">
                We&apos;re currently curating our early listings by hand to
                ensure every profile meets our quality standards. Fill in the
                form below and we&apos;ll be in touch to help build your
                profile.
              </p>
            </div>
            <EnquiryForm type="join" />
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Pricing</h2>
          <div className="bg-cream rounded-xl p-8 border border-gray-100">
            <p className="text-3xl font-bold text-brand mb-2">
              From £150
              <span className="text-lg font-normal text-charcoal-light">
                {" "}
                / year
              </span>
            </p>
            <p className="text-charcoal-light max-w-md mx-auto">
              Listing packages start from £150 per year. We offer different
              tiers depending on the features you need. Get in touch to discuss
              the best option for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
