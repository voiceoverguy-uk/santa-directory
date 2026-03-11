import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Locations | Find Santas Across the UK",
  description:
    "Browse professional Santa performers by location across the UK. Find Santas for hire in London, Manchester, Birmingham, Leeds, and more.",
};

const regions = [
  {
    name: "London & South East",
    locations: [
      "London",
      "Brighton",
      "Reading",
      "Oxford",
      "Canterbury",
      "Guildford",
    ],
  },
  {
    name: "North West",
    locations: [
      "Manchester",
      "Liverpool",
      "Chester",
      "Preston",
      "Blackpool",
      "Lancaster",
    ],
  },
  {
    name: "West Midlands",
    locations: [
      "Birmingham",
      "Coventry",
      "Wolverhampton",
      "Worcester",
      "Stoke-on-Trent",
      "Shrewsbury",
    ],
  },
  {
    name: "Yorkshire & Humber",
    locations: [
      "Leeds",
      "Sheffield",
      "York",
      "Bradford",
      "Hull",
      "Harrogate",
    ],
  },
  {
    name: "South West",
    locations: ["Bristol", "Bath", "Exeter", "Plymouth", "Gloucester", "Cheltenham"],
  },
  {
    name: "East Midlands",
    locations: [
      "Nottingham",
      "Leicester",
      "Derby",
      "Lincoln",
      "Northampton",
    ],
  },
  {
    name: "East of England",
    locations: [
      "Cambridge",
      "Norwich",
      "Ipswich",
      "Colchester",
      "Peterborough",
    ],
  },
  {
    name: "North East",
    locations: [
      "Newcastle",
      "Sunderland",
      "Durham",
      "Middlesbrough",
      "Darlington",
    ],
  },
  {
    name: "Scotland",
    locations: [
      "Edinburgh",
      "Glasgow",
      "Aberdeen",
      "Dundee",
      "Inverness",
      "Stirling",
    ],
  },
  {
    name: "Wales",
    locations: ["Cardiff", "Swansea", "Newport", "Wrexham", "Bangor"],
  },
  {
    name: "Northern Ireland",
    locations: ["Belfast", "Derry", "Lisburn", "Newry"],
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Santas by Location
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Browse professional Santa performers available across the United
            Kingdom.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-cream rounded-xl p-6 border border-gray-100"
              >
                <h2 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                  <MapPin className="text-brand" size={18} />
                  {region.name}
                </h2>
                <ul className="space-y-2">
                  {region.locations.map((loc) => (
                    <li key={loc}>
                      <Link
                        href={`/santas?search=${encodeURIComponent(loc)}`}
                        className="text-charcoal-light hover:text-brand transition-colors text-sm"
                      >
                        Hire a Santa in {loc}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Can't Find Your Area?"
        description="New Santa performers are joining SantaDirectory regularly. Contact us if you need help finding a Santa in your area."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
