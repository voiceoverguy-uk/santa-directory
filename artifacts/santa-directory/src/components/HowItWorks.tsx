import { Search, Users, MessageCircle } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: <Search size={28} />,
    title: "Search by Area",
    desc: "Enter your location to find professional Santa performers near you.",
  },
  {
    num: "2",
    icon: <Users size={28} />,
    title: "Browse Profiles",
    desc: "View detailed profiles with photos, videos, reviews, and service information.",
  },
  {
    num: "3",
    icon: <MessageCircle size={28} />,
    title: "Contact Directly",
    desc: "Get in touch with your chosen Santa to discuss your requirements and book.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal">
            How It Works
          </h2>
          <p className="text-charcoal-light mt-3 max-w-xl mx-auto">
            Finding the perfect Santa for your event is simple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand text-white mb-6">
                {step.icon}
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
