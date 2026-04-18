import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LegalPage, { LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "What cookies Decode German uses on decodegerman.com and what your choices are.",
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <LegalPage
        eyebrow="Legal"
        title="Cookie Policy"
        effectiveDate="April 2026"
        intro={
          <p>
            This Cookie Policy explains what cookies are, which ones we use on
            decodegerman.com, and what your choices are. It applies to all
            visitors to our website.
          </p>
        }
      >
        <LegalSection number={1} title="What Are Cookies?">
          <p>
            Cookies are small text files that are stored on your device
            (computer, phone, or tablet) when you visit a website. They help
            websites remember information about your visit — for example, your
            language preference or whether you have already seen a
            notification.
          </p>
          <p>
            Cookies are set either by the website you are visiting (first-party
            cookies) or by third-party services embedded on the site
            (third-party cookies).
          </p>
        </LegalSection>

        <LegalSection number={2} title="Cookies We Use">
          <h3 className="font-semibold text-charcoal">
            2.1 Strictly Necessary Cookies
          </h3>
          <p>
            These cookies are essential for the website to function and cannot
            be switched off. They are set in response to actions you take —
            such as submitting a form. They do not store any personally
            identifiable information.
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse text-sm rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr>
                  <th className="bg-[#092226] text-white px-4 py-3 text-left text-xs uppercase tracking-wider font-bold">
                    Cookie Name
                  </th>
                  <th className="bg-[#092226] text-white px-4 py-3 text-left text-xs uppercase tracking-wider font-bold">
                    Provider
                  </th>
                  <th className="bg-[#092226] text-white px-4 py-3 text-left text-xs uppercase tracking-wider font-bold">
                    Purpose
                  </th>
                  <th className="bg-[#092226] text-white px-4 py-3 text-left text-xs uppercase tracking-wider font-bold">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2.5 border-b border-gray-100 leading-relaxed font-mono text-xs">
                    _session
                  </td>
                  <td className="px-4 py-2.5 border-b border-gray-100 leading-relaxed">
                    Decode German
                  </td>
                  <td className="px-4 py-2.5 border-b border-gray-100 leading-relaxed">
                    Maintains your session while browsing
                  </td>
                  <td className="px-4 py-2.5 border-b border-gray-100 leading-relaxed">
                    Session
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 border-b border-gray-100 leading-relaxed font-mono text-xs">
                    cookie_consent
                  </td>
                  <td className="px-4 py-2.5 border-b border-gray-100 leading-relaxed">
                    Decode German
                  </td>
                  <td className="px-4 py-2.5 border-b border-gray-100 leading-relaxed">
                    Remembers your cookie consent choice
                  </td>
                  <td className="px-4 py-2.5 border-b border-gray-100 leading-relaxed">
                    1 year
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold text-charcoal mt-6">
            2.2 Performance / Analytics Cookies
          </h3>
          <p>
            We currently do not use any analytics or performance tracking
            cookies. We do not use Google Analytics, Meta Pixel, or any other
            third-party analytics service. If this changes in the future, this
            policy will be updated and your consent will be sought before any
            such cookies are set.
          </p>

          <h3 className="font-semibold text-charcoal mt-6">2.3 Google Fonts</h3>
          <p>
            Our website loads fonts from Google&apos;s servers
            (fonts.googleapis.com and fonts.gstatic.com). This is not a cookie,
            but it does result in your IP address being transmitted to Google
            when you visit the site. This is a technical necessity for the
            fonts to display correctly.
          </p>
        </LegalSection>

        <LegalSection number={3} title="Your Choices">
          <p>
            Strictly necessary cookies cannot be disabled as they are required
            for the website to function. Since we do not use any tracking or
            analytics cookies, there are no optional cookies to manage at this
            time.
          </p>
          <p>
            You can also manage cookies through your browser settings. Most
            browsers allow you to view, delete, and block cookies. Note that
            blocking all cookies may affect website functionality. Here are
            links to cookie management instructions for common browsers:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Google Chrome:</strong>{" "}
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                support.google.com/chrome/answer/95647
              </a>
            </li>
            <li>
              <strong>Mozilla Firefox:</strong>{" "}
              <a
                href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer
              </a>
            </li>
            <li>
              <strong>Safari:</strong>{" "}
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                support.apple.com/guide/safari/manage-cookies-sfri11471
              </a>
            </li>
            <li>
              <strong>Microsoft Edge:</strong>{" "}
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge
              </a>
            </li>
          </ul>
        </LegalSection>

        <LegalSection number={4} title="Changes to This Cookie Policy">
          <p>
            We may update this Cookie Policy when we change the cookies or
            third-party services we use. The effective date at the top of this
            page will reflect the latest update. We will seek your consent
            again if we introduce any new non-essential cookies.
          </p>
        </LegalSection>

        <LegalSection number={5} title="Contact">
          <p>
            If you have any questions about this Cookie Policy, please contact
            us at:
          </p>
          <address className="not-italic space-y-1">
            <p>
              Email:{" "}
              <a
                href="mailto:decodegerman@gmail.com"
                className="text-primary hover:underline"
              >
                decodegerman@gmail.com
              </a>
            </p>
            <p>Phone: +49 15900 4836675 | +91 98712 05947</p>
            <p>Website: www.decodegerman.com</p>
          </address>
        </LegalSection>
      </LegalPage>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
