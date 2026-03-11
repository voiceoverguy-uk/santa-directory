import type { Metadata } from "next";
import Link from "next/link";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "About SantaDirectory",
  description:
    "Learn about SantaDirectory — the UK's trusted directory of professional Santa performers for hire. We're making it easier to find quality Santas.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About SantaDirectory
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A better way to find professional Santa performers.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-charcoal-light leading-relaxed">
              <p className="text-xl text-charcoal font-medium">
                SantaDirectory was created with one simple goal: to give
                families, venues, and businesses a better way to find
                professional Santa performers across the UK.
              </p>

              <p>
                For too long, finding a quality Santa for hire has meant
                trawling through outdated directories, scrolling past irrelevant
                results, or relying on word-of-mouth recommendations that
                don&apos;t always work out. Many existing sites are cluttered,
                hard to navigate, and offer no way to verify the quality or
                credentials of the performers listed.
              </p>

              <p>
                We set out to change that. SantaDirectory is a modern, curated
                directory that makes it simple to browse professional Santa
                profiles, view their experience and credentials, and get in
                touch directly. Every listing is reviewed to ensure it meets our
                quality standards.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4">
                What Makes Us Different
              </h2>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-charcoal">Curated quality.</strong>{" "}
                    We review every listing to ensure only genuine, professional
                    performers appear on the directory.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-charcoal">
                      Trust and transparency.
                    </strong>{" "}
                    We highlight DBS-checked performers, real beard Santas, and
                    verified credentials so you can book with confidence.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-charcoal">
                      Clean, modern experience.
                    </strong>{" "}
                    No clutter, no gimmicks — just polished profiles and easy
                    navigation designed for today&apos;s web.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-charcoal">Direct contact.</strong>{" "}
                    We connect you directly with performers. No middlemen, no
                    commission, no booking fees.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4">
                Our Vision
              </h2>

              <p>
                SantaDirectory is just getting started. We&apos;re building the
                go-to platform for professional Santa performers in the UK —
                somewhere families can find the perfect Santa with complete
                confidence, and where performers can showcase their services to
                a wide audience.
              </p>

              <p>
                We&apos;re continuously adding new features, new performers,
                and new locations. If you&apos;re a professional Santa looking
                to grow your reach, or a family looking for that perfect
                Christmas experience, you&apos;re in the right place.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/santas"
                className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Browse Santas
              </Link>
              <Link
                href="/contact"
                className="border border-gray-200 hover:border-brand text-charcoal hover:text-brand px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Are You a Professional Santa?"
        description="Join our growing directory of trusted Santa performers and reach new customers across the UK."
        buttonText="List Your Profile"
        buttonHref="/list-your-profile"
        variant="forest"
      />
    </>
  );
}
