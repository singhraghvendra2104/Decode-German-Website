import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LegalPage, { LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions governing your use of Decode German's website and your enrolment in our courses.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalPage
        eyebrow="Legal"
        title="Terms & Conditions"
        effectiveDate="April 2026"
        intro={
          <div className="bg-[#f6f1e8] border-l-4 border-primary px-5 py-4 rounded-r-md">
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              Important
            </p>
            <p>
              These Terms &amp; Conditions govern your use of Decode
              German&apos;s website and your enrolment in any of our courses.
              By submitting an enquiry, enrolling in a course, or attending any
              class, you agree to be bound by these terms. Please read them
              carefully.
            </p>
          </div>
        }
      >
        <LegalSection number={1} title="About Us">
          <p>
            Decode German is a brand of SKID Decode Deutsch Language Institute
            Private Limited, a company incorporated under the Companies Act,
            2013 in India. We provide online German language courses at levels
            A1 through B2, taught via live video sessions and structured
            learning materials.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Company name:</strong> SKID Decode Deutsch Language
              Institute Private Limited
            </li>
            <li>
              <strong>Brand name:</strong> Decode German
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:decodegerman@gmail.com"
                className="text-primary hover:underline"
              >
                decodegerman@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone / WhatsApp:</strong> +49 15900 4836675 (Germany) |
              +91 98712 05947 (India)
            </li>
          </ul>
        </LegalSection>

        <LegalSection number={2} title="Courses and Enrolment">
          <h3 className="font-semibold text-charcoal">
            2.1 Course Availability
          </h3>
          <p>
            All courses are conducted fully online via Zoom or an equivalent
            video conferencing platform. Classes are scheduled in small batches
            of 8–10 students. Course availability, batch timing, and scheduling
            are subject to change and will be communicated to enrolled students
            in advance.
          </p>
          <h3 className="font-semibold text-charcoal">2.2 Enrolment Process</h3>
          <p>
            To enrol in any course above A1 level, you must first pass an
            entrance test. This ensures that every student in a batch is at an
            appropriate and consistent level. Decode German reserves the right
            to decline enrolment if a student does not meet the required
            standard for their chosen course.
          </p>
          <p>
            For A1 level, no entrance test is required. Enrolment is confirmed
            upon payment of the course fee.
          </p>
          <h3 className="font-semibold text-charcoal">
            2.3 Crash Courses and Re-enrolment
          </h3>
          <p>
            If you do not pass the entrance test for your target level, you may
            opt for a Crash Course — fast-paced, one-to-one sessions designed
            to prepare you for the level. Once you pass the test, your place in
            the batch will be confirmed.
          </p>
        </LegalSection>

        <LegalSection number={3} title="Payment">
          <p>
            Course fees are communicated to you directly before enrolment. All
            fees must be paid in full before the course begins unless a
            specific instalment arrangement has been agreed in writing with
            Decode German.
          </p>
          <p>
            We accept payment via bank transfer and other methods as
            communicated at the time of enrolment. Fees are quoted in Indian
            Rupees (INR) or Euros (EUR) as agreed. Payment confirms your place
            in the batch.
          </p>
        </LegalSection>

        <LegalSection number={4} title="Refund and Cancellation Policy">
          <div className="bg-[#f6f1e8] border-l-4 border-primary px-5 py-4 rounded-r-md">
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              Our Commitment
            </p>
            <p>
              We stand behind the quality of our teaching. If you are not
              satisfied within the first 15 days of a course, we will give you
              a full refund — no questions asked. Beyond that, we offer a
              structured re-enrolment pathway rather than refunds, so that your
              learning investment is never lost.
            </p>
          </div>
          <h3 className="font-semibold text-charcoal mt-4">
            4.1 Satisfaction Guarantee — First 15 Days
          </h3>
          <p>
            If you are unsatisfied with the quality of teaching and wish to
            leave within the first 15 days of your course start date, you are
            entitled to a full refund of the course fee paid. To request a
            refund under this clause, you must notify us in writing at{" "}
            <a
              href="mailto:decodegerman@gmail.com"
              className="text-primary hover:underline"
            >
              decodegerman@gmail.com
            </a>{" "}
            within the 15-day window, stating the reason for your
            dissatisfaction.
          </p>
          <p>
            Refunds under the satisfaction guarantee will be processed within 7
            business days of the approved request.
          </p>
          <h3 className="font-semibold text-charcoal">
            4.2 Personal Reasons — After 15 Days
          </h3>
          <p>
            If you choose to leave the course after the 15-day satisfaction
            period for personal reasons (including but not limited to: change
            in schedule, relocation, personal circumstances, or lack of time),
            no refund will be issued for the remaining course fee.
          </p>
          <p>
            However, we recognise that life circumstances change. You will
            retain the right to re-enrol in the same course level at any time
            in the future at 50% of the standard course fee at the time of
            re-enrolment. This right has no expiry date.
          </p>
          <p>
            To use your re-enrolment right, contact us at{" "}
            <a
              href="mailto:decodegerman@gmail.com"
              className="text-primary hover:underline"
            >
              decodegerman@gmail.com
            </a>
            . Re-enrolment is subject to batch availability and, if more than 6
            months have passed, you may be asked to take a brief placement
            check to confirm your current level.
          </p>
          <h3 className="font-semibold text-charcoal">
            4.3 Batch Cancellation by Decode German
          </h3>
          <p>
            In the unlikely event that a batch is cancelled by Decode German
            (for example, due to insufficient enrolments or unforeseen
            circumstances), enrolled students will receive a full refund of any
            fees paid, or the option to transfer to the next available batch at
            no additional cost.
          </p>
          <h3 className="font-semibold text-charcoal">4.4 No Show</h3>
          <p>
            If you do not attend class without prior notice and do not contact
            us within 7 days of your first absence, your place in the batch may
            be reallocated. The standard personal-reasons policy (clause 4.2)
            will apply.
          </p>
        </LegalSection>

        <LegalSection number={5} title="Student Responsibilities">
          <p>By enrolling in a course, you agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Attend classes regularly and punctually. Consistent attendance is
              essential to your progress and to the progress of your batch.
            </li>
            <li>
              Complete assigned homework and self-study tasks between sessions.
            </li>
            <li>
              Treat teachers, native speakers, and fellow students with respect
              at all times during live sessions.
            </li>
            <li>
              Not record, share, redistribute, or publish any live class
              recordings, course materials, or teaching content without
              explicit written permission from Decode German.
            </li>
            <li>
              Keep your login credentials and class links confidential and not
              share them with third parties.
            </li>
          </ul>
        </LegalSection>

        <LegalSection number={6} title="Intellectual Property">
          <p>
            All course content, teaching materials, video recordings,
            worksheets, grammar notes, audio drills, and other resources
            provided by Decode German are the intellectual property of SKID
            Decode Deutsch Language Institute Private Limited. You are granted
            a limited, personal, non-transferable licence to use these
            materials solely for the purpose of your own language learning.
          </p>
          <p>
            You may not reproduce, distribute, sell, publish, or create
            derivative works from any Decode German content without prior
            written consent.
          </p>
        </LegalSection>

        <LegalSection number={7} title="Code of Conduct">
          <p>
            Decode German is built on a foundation of respect, commitment, and
            mutual support. We reserve the right to remove any student from a
            batch — without refund — in cases of serious misconduct, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Harassment, abuse, or disrespectful behaviour toward any teacher,
              native speaker, or fellow student.
            </li>
            <li>Deliberate disruption of live sessions.</li>
            <li>
              Any form of cheating or academic dishonesty in tests or
              assessments.
            </li>
            <li>
              Sharing class access links or course materials publicly or with
              non-enrolled individuals.
            </li>
          </ul>
        </LegalSection>

        <LegalSection number={8} title="Limitation of Liability">
          <p>
            Decode German&apos;s liability is limited to the amount of the
            course fee paid by you. We are not liable for any indirect,
            incidental, or consequential loss arising from your participation
            in or inability to participate in our courses, including but not
            limited to: technical issues with your internet connection, device
            failures, or third-party platform outages (e.g., Zoom).
          </p>
          <p>
            We do not guarantee specific exam results, employment outcomes, or
            visa approvals as a result of completing any course.
          </p>
        </LegalSection>

        <LegalSection number={9} title="Modifications to Terms">
          <p>
            We may update these Terms &amp; Conditions from time to time. The
            effective date above will reflect the latest revision. Material
            changes will be communicated to enrolled students by email.
            Continued enrolment or participation after the effective date of
            revised terms constitutes acceptance.
          </p>
        </LegalSection>

        <LegalSection number={10} title="Governing Law">
          <p>
            These Terms &amp; Conditions are governed by and construed in
            accordance with the laws of India. Any disputes arising from these
            terms or your use of Decode German&apos;s services shall be subject
            to the exclusive jurisdiction of the courts in Madhya Pradesh,
            India.
          </p>
          <p>
            For students based in the European Union, nothing in these terms
            affects your statutory rights under applicable EU consumer
            protection law.
          </p>
        </LegalSection>

        <LegalSection number={11} title="Contact">
          <p>
            For any questions about these Terms &amp; Conditions, please
            contact:
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
          </address>
        </LegalSection>
      </LegalPage>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
