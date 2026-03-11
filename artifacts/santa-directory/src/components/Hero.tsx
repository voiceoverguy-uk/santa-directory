import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand via-brand-dark to-brand overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,168,76,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Find a Professional
            <br />
            <span className="text-cream">Santa Near You</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Browse trusted Santa performers for home visits, grottos, schools,
            and corporate events across the UK.
          </p>

          <SearchBar />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/santas"
              className="w-full sm:w-auto bg-white text-brand hover:bg-cream px-8 py-3.5 rounded-lg font-semibold transition-colors text-center"
            >
              Find a Santa
            </Link>
            <Link
              href="/list-your-profile"
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-colors text-center"
            >
              List Your Santa Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
