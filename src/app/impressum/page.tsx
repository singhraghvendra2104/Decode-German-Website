import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { legalInfo, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Legal notice (Impressum) for Decode German in accordance with §5 TMG.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  const postalLine = [legalInfo.postalCode, legalInfo.city]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24 text-charcoal">
        <header className="mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            Legal Notice
          </p>
          <h1 className="text-4xl md:text-6xl font-[var(--font-serif)] italic font-bold leading-tight">
            Impressum
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Information according to § 5 TMG (Telemediengesetz).
          </p>
        </header>

        <section className="space-y-8 text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal mb-3">
              Operator
            </h2>
            <address className="not-italic text-gray-700 space-y-1">
              <p>{legalInfo.operatorName}</p>
              <p>
                {legalInfo.brandName}
                {legalInfo.companyName ? ` — ${legalInfo.companyName}` : ""}
              </p>
              {legalInfo.street && <p>{legalInfo.street}</p>}
              {postalLine && <p>{postalLine}</p>}
              <p>{legalInfo.country}</p>
            </address>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal mb-3">
              Contact
            </h2>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href={`mailto:${legalInfo.email}`}
                className="text-primary hover:underline"
              >
                {legalInfo.email}
              </a>
            </p>
            <p className="text-gray-700">
              Phone:{" "}
              <a
                href={`tel:${siteConfig.whatsappNumber}`}
                className="text-primary hover:underline"
              >
                {legalInfo.phone}
              </a>
            </p>
          </div>

          {(legalInfo.vatId || legalInfo.taxNumber) && (
            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal mb-3">
                Tax Identification
              </h2>
              {legalInfo.vatId && (
                <p className="text-gray-700">
                  VAT-ID (USt-IdNr.): {legalInfo.vatId}
                </p>
              )}
              {legalInfo.taxNumber && (
                <p className="text-gray-700">
                  Tax Number (Steuernummer): {legalInfo.taxNumber}
                </p>
              )}
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal mb-3">
              Responsible for content according to § 55 Abs. 2 RStV
            </h2>
            <p className="text-gray-700">
              {legalInfo.responsibleForContent}
            </p>
            {legalInfo.street && (
              <p className="text-gray-700">{legalInfo.street}</p>
            )}
            {postalLine && <p className="text-gray-700">{postalLine}</p>}
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal mb-3">
              EU Dispute Resolution
            </h2>
            <p className="text-gray-700">
              The European Commission provides a platform for online dispute
              resolution (ODR):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . We are neither obliged nor willing to participate in dispute
              resolution proceedings before a consumer arbitration board.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal mb-3">
              Liability for Content
            </h2>
            <p className="text-gray-700">
              The contents of our pages have been created with the utmost care.
              However, we cannot guarantee the contents&apos; accuracy,
              completeness, or topicality. According to § 7 Abs. 1 TMG, we are
              responsible for our own content on these pages. According to §§
              8–10 TMG, we are not obligated to monitor transmitted or stored
              third-party information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal mb-3">
              Liability for Links
            </h2>
            <p className="text-gray-700">
              Our site contains links to external websites of third parties, on
              whose contents we have no influence. Therefore, we cannot assume
              any liability for these external contents. The respective provider
              or operator of the pages is always responsible for the content of
              the linked pages.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal mb-3">
              Copyright
            </h2>
            <p className="text-gray-700">
              The content and works created by the site operators on these pages
              are subject to German copyright law. Duplication, processing,
              distribution, or any form of commercialization of such material
              beyond the scope of copyright law requires the written consent of
              the respective author or creator.
            </p>
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200">
            Last updated: {legalInfo.lastUpdated}
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
