import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LegalPage, {
  LegalSection,
  GermanBlock,
} from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Decode German Privacy Policy: How we handle your personal data, in English and German.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <LegalPage
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        effectiveDate="April 2026"
      >
        <LegalSection number={1} title="Who We Are">
          <p>
            This website is operated by SKID Decode Deutsch Language Institute
            Private Limited, an Indian company incorporated under the Companies
            Act, 2013. Our registered office is in Madhya Pradesh, India. Our
            teaching operations are led by Shalini K. Dubey, based in Dresden,
            Germany.
          </p>
          <p>Contact:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:decodegerman@gmail.com"
                className="text-primary hover:underline"
              >
                decodegerman@gmail.com
              </a>
            </li>
            <li>
              Phone / WhatsApp: +49 15900 4836675 (Germany) | +91 98712 05947
              (India)
            </li>
            <li>Website: www.decodegerman.com</li>
          </ul>
          <GermanBlock title="Wer wir sind">
            <p>
              Diese Website wird betrieben von SKID Decode Deutsch Language
              Institute Private Limited, einem nach indischem Recht
              eingetragenen Unternehmen. Unser Lehrbetrieb wird von Shalini K.
              Dubey, ansässig in Dresden, Deutschland, geleitet.
            </p>
            <p>
              Kontakt: decodegerman@gmail.com | +49 15900 4836675 |
              www.decodegerman.com
            </p>
          </GermanBlock>
        </LegalSection>

        <LegalSection number={2} title="What Data We Collect and Why">
          <p>
            We collect personal data only when you voluntarily provide it to
            us, specifically when you submit an enquiry through our contact
            form or reach out via WhatsApp or email. The data we collect
            includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>First name and last name</li>
            <li>Email address</li>
            <li>Phone number / WhatsApp number</li>
            <li>Your current German level (if provided)</li>
            <li>The course you are interested in (if provided)</li>
            <li>Any message or information you choose to share with us</li>
          </ul>
          <p>
            We use this data solely to respond to your enquiry and, if you
            enrol, to manage your course participation. We do not use it for
            automated profiling, advertising targeting, or any purpose other
            than communicating with you directly.
          </p>
          <GermanBlock title="Welche Daten wir erheben und warum">
            <p>
              Wir erheben personenbezogene Daten nur, wenn Sie uns diese
              freiwillig über das Kontaktformular, WhatsApp oder E-Mail
              mitteilen: Vor- und Nachname, E-Mail-Adresse, Telefonnummer,
              aktuelles Deutschniveau und Kursinteresse.
            </p>
            <p>
              Wir nutzen diese Daten ausschließlich zur Beantwortung Ihrer
              Anfrage und zur Kursverwaltung. Eine Verwendung für Werbung oder
              automatisiertes Profiling findet nicht statt.
            </p>
          </GermanBlock>
        </LegalSection>

        <LegalSection number={3} title="Legal Basis for Processing (GDPR)">
          <p>
            For visitors from the European Union, we process your personal data
            on the following legal bases under the General Data Protection
            Regulation (GDPR):
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Article 6(1)(b):</strong> Processing is necessary to
              take steps at your request prior to entering into a contract
              (i.e., responding to your course enquiry).
            </li>
            <li>
              <strong>Article 6(1)(f):</strong> Processing is necessary for
              our legitimate interest in communicating with prospective and
              enrolled students.
            </li>
            <li>
              <strong>Article 6(1)(a):</strong> Where you have given your
              consent, for example by subscribing to updates.
            </li>
          </ul>
          <GermanBlock title="Rechtsgrundlage der Verarbeitung (DSGVO)">
            <p>
              Für Besucher aus der Europäischen Union verarbeiten wir Ihre
              Daten auf folgenden Rechtsgrundlagen gemäß DSGVO:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Art. 6 Abs. 1 lit. b: Verarbeitung zur Durchführung
                vorvertraglicher Maßnahmen auf Ihre Anfrage hin.
              </li>
              <li>
                Art. 6 Abs. 1 lit. f: Verarbeitung aufgrund unseres
                berechtigten Interesses an der Kommunikation mit Interessenten
                und Studierenden.
              </li>
              <li>
                Art. 6 Abs. 1 lit. a: Sofern Sie Ihre Einwilligung erteilt
                haben.
              </li>
            </ul>
          </GermanBlock>
        </LegalSection>

        <LegalSection number={4} title="Google Fonts">
          <p>
            Our website uses Google Fonts to display text. Google Fonts files
            are loaded from Google&apos;s servers, which means your IP address
            is transmitted to Google when you visit our site. This occurs as a
            technical necessity for the fonts to display correctly.
          </p>
          <p>
            Google LLC is the data controller for this processing. For more
            information, see Google&apos;s Privacy Policy at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              policies.google.com/privacy
            </a>
            . The legal basis for this processing is Article 6(1)(f) GDPR:
            our legitimate interest in presenting a readable, well-designed
            website.
          </p>
          <GermanBlock title="Google Fonts">
            <p>
              Unsere Website verwendet Google Fonts zur Textdarstellung. Beim
              Aufruf der Seite wird Ihre IP-Adresse an Server von Google LLC
              übertragen, damit die Schriftarten korrekt geladen werden
              können.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einer ansprechenden Darstellung). Weitere
              Informationen: policies.google.com/privacy
            </p>
          </GermanBlock>
        </LegalSection>

        <LegalSection number={5} title="Cookies">
          <p>
            Our website does not use advertising or tracking cookies. We use
            only technically necessary cookies that are required for the
            website to function, for example, to remember your language
            preference or session state. These cookies do not collect personal
            data and do not require your consent under ePrivacy law.
          </p>
          <p>
            For full details on cookies used, please see our{" "}
            <a
              href="/cookie-policy"
              className="text-primary hover:underline"
            >
              Cookie Policy
            </a>
            .
          </p>
          <GermanBlock title="Cookies">
            <p>
              Unsere Website verwendet keine Werbe- oder Tracking-Cookies. Es
              werden ausschließlich technisch notwendige Cookies eingesetzt,
              die keine personenbezogenen Daten erheben und keiner Einwilligung
              bedürfen.
            </p>
            <p>Weitere Details entnehmen Sie bitte unserer Cookie-Richtlinie.</p>
          </GermanBlock>
        </LegalSection>

        <LegalSection number={6} title="Data Sharing and Third Parties">
          <p>
            We do not sell, rent, or share your personal data with third
            parties for their own marketing purposes. Your data may be accessed
            by:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Shalini K. Dubey and Decode German teaching staff, for the
              purpose of managing your enrolment and course communication.
            </li>
            <li>
              IT service providers who host and maintain this website (Vercel,
              Inc., our hosting provider), who process data strictly on our
              behalf under contractual data processing agreements.
            </li>
            <li>
              WhatsApp (Meta Platforms), if you choose to contact us via
              WhatsApp. In that case, Meta&apos;s own privacy policy governs
              that communication.
            </li>
          </ul>
          <p>We do not transfer your data to any other third parties.</p>
          <GermanBlock title="Datenweitergabe und Dritte">
            <p>
              Wir verkaufen oder vermieten Ihre Daten nicht. Ihre Daten können
              eingesehen werden von: Shalini K. Dubey und Lehrkräften (zur
              Kursverwaltung), unserem Hosting-Anbieter Vercel, Inc. (im Rahmen
              eines Auftragsverarbeitungsvertrags), sowie Meta Platforms, falls
              Sie uns über WhatsApp kontaktieren.
            </p>
          </GermanBlock>
        </LegalSection>

        <LegalSection number={7} title="Data Retention">
          <p>
            We retain your personal data for as long as is necessary to fulfil
            the purpose for which it was collected:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Enquiry data (contact form submissions):</strong>{" "}
              retained for up to 2 years, or until you request deletion.
            </li>
            <li>
              <strong>Enrolled student data:</strong> retained for up to 5
              years following the end of your last course, for the purpose of
              re-enrolment support and administrative records.
            </li>
            <li>
              <strong>Payment-related records:</strong> retained for 7 years to
              comply with Indian accounting and tax regulations.
            </li>
          </ul>
          <p>
            After these periods, your data is securely deleted or anonymised.
          </p>
          <GermanBlock title="Datenspeicherung">
            <p>
              Wir speichern Ihre Daten nur so lange, wie es für den jeweiligen
              Zweck erforderlich ist:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Anfragedaten: bis zu 2 Jahre oder bis zur Löschungsanfrage.
              </li>
              <li>
                Daten eingeschriebener Studierender: bis zu 5 Jahre nach
                Kursende.
              </li>
              <li>
                Zahlungsbezogene Unterlagen: 7 Jahre gemäß indischen
                Buchhaltungsvorschriften.
              </li>
            </ul>
          </GermanBlock>
        </LegalSection>

        <LegalSection number={8} title="Your Rights Under GDPR">
          <p>
            If you are located in the European Union, you have the following
            rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Right of access (Art. 15):</strong> You may request a
              copy of the personal data we hold about you.
            </li>
            <li>
              <strong>Right to rectification (Art. 16):</strong> You may ask us
              to correct inaccurate or incomplete data.
            </li>
            <li>
              <strong>Right to erasure (Art. 17):</strong> You may request that
              we delete your personal data, subject to legal retention
              obligations.
            </li>
            <li>
              <strong>Right to restriction (Art. 18):</strong> You may ask us
              to restrict how we process your data.
            </li>
            <li>
              <strong>Right to data portability (Art. 20):</strong> You may
              request your data in a structured, machine-readable format.
            </li>
            <li>
              <strong>Right to object (Art. 21):</strong> You may object to
              processing based on our legitimate interests.
            </li>
            <li>
              <strong>Right to withdraw consent (Art. 7(3)):</strong> Where
              processing is based on consent, you may withdraw it at any time.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:decodegerman@gmail.com"
              className="text-primary hover:underline"
            >
              decodegerman@gmail.com
            </a>
            . We will respond within 30 days. You also have the right to lodge
            a complaint with a supervisory authority. In Germany, this is the
            relevant Landesbeauftragte für Datenschutz in your state.
          </p>
          <GermanBlock title="Ihre Rechte gemäß DSGVO">
            <p>
              Als betroffene Person in der EU stehen Ihnen folgende Rechte zu:
              Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
              Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20),
              Widerspruch (Art. 21) und Widerruf einer erteilten Einwilligung
              (Art. 7 Abs. 3).
            </p>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
              decodegerman@gmail.com. Wir antworten innerhalb von 30 Tagen.
              Sie haben außerdem das Recht, eine Beschwerde bei der zuständigen
              Datenschutzbehörde einzureichen.
            </p>
          </GermanBlock>
        </LegalSection>

        <LegalSection number={9} title="Children's Privacy">
          <p>
            Our services are intended for adults aged 18 and above. We do not
            knowingly collect personal data from children under 18. If you
            believe a child has submitted data to us, please contact us
            immediately at{" "}
            <a
              href="mailto:decodegerman@gmail.com"
              className="text-primary hover:underline"
            >
              decodegerman@gmail.com
            </a>{" "}
            and we will delete it promptly.
          </p>
          <GermanBlock title="Datenschutz für Minderjährige">
            <p>
              Unsere Dienste richten sich an Personen ab 18 Jahren. Wir erheben
              wissentlich keine Daten von Minderjährigen. Sollten Sie
              vermuten, dass ein Kind Daten übermittelt hat, kontaktieren Sie
              uns bitte umgehend unter decodegerman@gmail.com.
            </p>
          </GermanBlock>
        </LegalSection>

        <LegalSection number={10} title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. The effective
            date at the top of this page will reflect the date of the latest
            revision. For significant changes, we will notify enrolled students
            by email. We encourage you to review this page periodically.
          </p>
          <GermanBlock title="Änderungen dieser Datenschutzerklärung">
            <p>
              Wir können diese Datenschutzerklärung gelegentlich
              aktualisieren. Das Datum der letzten Änderung ist oben auf dieser
              Seite angegeben. Bei wesentlichen Änderungen informieren wir
              eingeschriebene Studierende per E-Mail.
            </p>
          </GermanBlock>
        </LegalSection>

        <LegalSection number={11} title="Contact for Privacy Questions">
          <p>
            For any questions, concerns, or requests relating to this Privacy
            Policy or your personal data, please contact:
          </p>
          <address className="not-italic space-y-1">
            <p>Shalini K. Dubey</p>
            <p>SKID Decode Deutsch Language Institute Private Limited</p>
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
          <GermanBlock title="Kontakt für Datenschutzfragen">
            <p>
              Shalini K. Dubey | SKID Decode Deutsch Language Institute Private
              Limited
            </p>
            <p>E-Mail: decodegerman@gmail.com | Tel: +49 15900 4836675</p>
          </GermanBlock>
        </LegalSection>
      </LegalPage>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
