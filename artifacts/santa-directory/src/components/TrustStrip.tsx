import { Shield, Sparkles, Users, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <Users size={24} />,
    title: "Professional Performers",
    desc: "Experienced, vetted Santa performers",
  },
  {
    icon: <Shield size={24} />,
    title: "DBS-Declared Profiles",
    desc: "Safety and trust you can rely on",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Real Beard Santas",
    desc: "Authentic Father Christmas experiences",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Direct Contact",
    desc: "Connect with performers directly",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-charcoal mb-1">{f.title}</h3>
              <p className="text-sm text-charcoal-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
