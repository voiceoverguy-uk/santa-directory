import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3">
              <span className="text-xl font-bold text-brand">Santa</span>
              <span className="text-xl font-bold text-white">Directory</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The UK&apos;s trusted directory of professional Santa performers
              for hire.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-300 mb-3">
              Directory
            </h3>
            <ul className="space-y-1.5">
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
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-300 mb-3">
              Company
            </h3>
            <ul className="space-y-1.5">
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
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-300 mb-3">
              Legal
            </h3>
            <ul className="space-y-1.5">
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
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} SantaDirectory. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-xs">
            enquiries@santadirectory.co.uk
          </p>
        </div>
      </div>
    </footer>
  );
}
