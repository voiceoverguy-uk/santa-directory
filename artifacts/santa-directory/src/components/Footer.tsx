import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-brand">Santa</span>
              <span className="text-2xl font-bold text-white">Directory</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The UK&apos;s trusted directory of professional Santa performers
              for hire. Find DBS-checked, experienced Santas for home visits,
              grottos, schools, and corporate events.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Directory
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/santas"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Find a Santa
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/list-your-profile"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  List Your Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SantaDirectory. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-sm">
            enquiries@santadirectory.co.uk
          </p>
        </div>
      </div>
    </footer>
  );
}
