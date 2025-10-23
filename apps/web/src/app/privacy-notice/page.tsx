"use client";

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-bold text-4xl text-[#050a30] md:text-5xl">
              Privacy Notice
            </h1>
            <p className="text-gray-600 text-lg">
              Your privacy matters to us. Learn how we protect and use your
              information.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 rounded-lg border bg-gray-50 p-6">
              <h2 className="mb-4 font-bold text-2xl text-[#050a30]">
                Young Changemakers Bootcamp – Privacy Policy
              </h2>
              <div className="mb-4 flex gap-6 text-gray-600 text-sm">
                <span>
                  <strong>Effective Date:</strong> April 2023
                </span>
                <span>
                  <strong>Last Updated:</strong> 23rd October 2025
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  1. Introduction & Scope
                </h3>
                <div className="mb-4 border-blue-500 border-l-4 bg-blue-50 p-4">
                  <p className="text-gray-700">
                    The Young Changemakers Bootcamp (YCB), organized under the
                    Tale of Humankind Foundation (TOH), is a one-week immersive
                    residential program designed for high school students to
                    develop changemaking, innovation, and leadership skills.
                  </p>
                </div>
                <p className="mb-4 text-gray-700">
                  This Privacy Policy explains:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-gray-700">
                  <li>
                    <strong>What personal data we collect</strong>
                  </li>
                  <li>
                    <strong>Why we collect it</strong>
                  </li>
                  <li>
                    <strong>How we use and protect it</strong>
                  </li>
                  <li>
                    <strong>With whom we may share it</strong>
                  </li>
                  <li>
                    <strong>
                      What rights you (or parents/guardians of minors) have
                    </strong>
                  </li>
                </ul>
                <div className="mt-4 border-amber-500 border-l-4 bg-amber-50 p-4">
                  <p className="text-gray-700">
                    <strong>Important:</strong> We take privacy extremely
                    seriously because most of our participants are minors. We
                    ensure that any processing of data is compliant with
                    applicable data protection laws (such as India's DPDP Act,
                    GDPR principles where applicable) and is handled with care,
                    transparency, and accountability.
                  </p>
                </div>
                <p className="mt-4 text-gray-700">
                  By accessing our website, applying, or participating in YCB,
                  you agree to this Privacy Policy.
                </p>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  2. Definitions
                </h3>
                <p className="mb-4 text-gray-700">To avoid ambiguity:</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Personal Data:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Any information that identifies you (name, email, phone,
                      DOB, ID, photos).
                    </p>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Sensitive Personal Data:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Medical info, dietary requirements, ID proof, financial
                      info.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Processing:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Any use of your data (collection, storage, sharing,
                      deletion).
                    </p>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Controller:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      YCB/TOH, responsible for how your data is used.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  3. Information We Collect
                </h3>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                    3.1 Information You Provide
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Identity & Contact:</strong> Name, DOB, gender,
                      email, phone, address.
                    </li>
                    <li>
                      <strong>Student Profile:</strong> School name, grade,
                      academic interests, extracurriculars.
                    </li>
                    <li>
                      <strong>Parent/Guardian Details:</strong> Names,
                      relationship, phone numbers, emergency contact.
                    </li>
                    <li>
                      <strong>Application Materials:</strong> Essays, project
                      writeups, "My Idea for Change" pitches, references,
                      videos.
                    </li>
                    <li>
                      <strong>Photos & ID Proof:</strong> For program ID cards,
                      campus access, and safety.
                    </li>
                    <li>
                      <strong>Medical Info:</strong> Allergies, chronic
                      conditions, medications, dietary needs, health insurance
                      (for safety during residential stay).
                    </li>
                    <li>
                      <strong>Financial Info:</strong> Payment details (card/UPI
                      data sent securely to payment processor).
                    </li>
                    <li>
                      <strong>Online Accounts:</strong> Username, password
                      (encrypted), profile photo if account created.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                    3.2 Information from Other Sources
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Third-Party Sign-ins:</strong> Limited data if you
                      log in with Google or similar.
                    </li>
                    <li>
                      <strong>Public Information:</strong> Social media project
                      updates, published work (where relevant).
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  4. How We Use Data
                </h3>
                <p className="mb-4 text-gray-700">
                  We process personal data only for legitimate purposes:
                </p>

                <div className="space-y-4">
                  <div className="border-gray-400 border-l-4 bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      4.1 Program Operations
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>
                        • To evaluate applications and select participants
                      </li>
                      <li>
                        • To coordinate accommodation, meals, logistics, and
                        transport
                      </li>
                      <li>• To create campus IDs and ensure security</li>
                      <li>
                        • To deliver program services (sessions, mentorship,
                        workshops)
                      </li>
                    </ul>
                  </div>

                  <div className="border-gray-400 border-l-4 bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      4.2 Communication
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>
                        • To send updates on schedules, instructions, emergency
                        alerts
                      </li>
                      <li>
                        • To share reminders (emails, SMS, WhatsApp with
                        parental consent)
                      </li>
                    </ul>
                  </div>

                  <div className="border-gray-400 border-l-4 bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      4.3 Legal, Verification & Safety
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• To verify participant identity</li>
                      <li>
                        • To ensure safety on campus through security partner
                        verifications
                      </li>
                      <li>• To comply with tax and audit obligations</li>
                    </ul>
                  </div>

                  <div className="border-gray-400 border-l-4 bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      4.4 Alumni & Community Engagement
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>
                        • To include students in the YCB/TOH alumni network
                      </li>
                      <li>
                        • To notify alumni about future opportunities,
                        scholarships, and events
                      </li>
                    </ul>
                  </div>

                  <div className="border-amber-500 border-l-4 bg-amber-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      4.5 Media, Storytelling & Promotions (Consent-based)
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>
                        • To feature projects or success stories in reports,
                        newsletters, or media
                      </li>
                      <li>
                        •{" "}
                        <strong>
                          No individual photos/videos of minors will be used
                          without parental/guardian consent
                        </strong>
                      </li>
                    </ul>
                  </div>

                  <div className="border-gray-400 border-l-4 bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      4.6 Analytics & Research
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>
                        • To measure program effectiveness (impact data
                        anonymized)
                      </li>
                      <li>• To generate internal reports for improvement</li>
                    </ul>
                  </div>

                  <div className="border-gray-400 border-l-4 bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      4.7 Finance & Record-Keeping
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• To process fee payments securely</li>
                      <li>• To maintain statutory records for 7 years</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  5. Information Sharing
                </h3>
                <div className="mb-4 border-red-500 border-l-4 bg-red-50 p-4">
                  <p className="font-semibold text-gray-700">
                    We never sell personal data. We share data only when
                    necessary:
                  </p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Internal YCB Staff & Volunteers:</strong> Restricted
                    access on a need-to-know basis.
                  </li>
                  <li>
                    <strong>Vendors (Processors):</strong> Application
                    platforms, payment processors, hosting providers, SMS/email
                    services, accommodation/logistics providers.
                  </li>
                  <li>
                    <strong>Institutional Partners:</strong> For campus security
                    and event access (only basic info like name, photo, ID).
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> If required by law,
                    regulation, or legal order.
                  </li>
                  <li>
                    <strong>Aggregated/Anonymized Data:</strong> For reports
                    like "213 alumni from 12 states" without personal
                    identifiers.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  6. Data Transfers
                </h3>
                <p className="text-gray-700">
                  If data is stored/processed outside India (e.g., cloud
                  servers), appropriate safeguards such as encryption and
                  contractual agreements will apply.
                </p>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  7. Data Retention
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Applications:
                    </h4>
                    <p className="text-gray-700 text-sm">Up to 5 years.</p>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Alumni Records:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Retained indefinitely unless deletion requested.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Financial Records:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      7 years (legal requirement).
                    </p>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Medical/Emergency Data:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Retained only for program duration + 5 years.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Inactive Accounts:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Deleted/archived after inactivity period.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  8. Security Measures
                </h3>
                <p className="mb-4 text-gray-700">We implement:</p>
                <ul className="list-disc space-y-1 pl-6 text-gray-700">
                  <li>Data encryption (at rest & transit)</li>
                  <li>Limited access controls & role-based permissions</li>
                  <li>Periodic security audits</li>
                  <li>Breach detection & incident response protocols</li>
                  <li>Staff training on confidentiality</li>
                </ul>
                <div className="mt-4 border-amber-500 border-l-4 bg-amber-50 p-4">
                  <p className="text-gray-700">
                    <strong>Note:</strong> No system is 100% secure, but we
                    follow industry-standard best practices.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  9. Cookies & Tracking
                </h3>
                <p className="mb-4 text-gray-700">Our website uses:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Essential Cookies:</strong> For login and form
                    functionality.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> To monitor website
                    usage.
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> To remember form
                    progress or settings.
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Users can disable cookies in their browser.
                </p>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  10. Children's Privacy
                </h3>
                <div className="border-red-500 border-l-4 bg-red-50 p-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Target Audience:</strong> YCB primarily serves
                      minors (Grades 9–12).
                    </li>
                    <li>
                      <strong>Parental Consent:</strong> Applications must be
                      submitted with parent/guardian consent.
                    </li>
                    <li>
                      <strong>Access Rights:</strong> Parents/guardians have
                      full access rights to view, correct, or delete their
                      child's data.
                    </li>
                    <li>
                      <strong>Media Consent:</strong> Photos/videos used
                      publicly only with explicit written parental consent.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  11. Data Breach Response
                </h3>
                <p className="mb-4 text-gray-700">If a breach occurs:</p>
                <ol className="list-decimal space-y-1 pl-6 text-gray-700">
                  <li>Contain and investigate immediately</li>
                  <li>Assess the scope</li>
                  <li>
                    Notify affected individuals and authorities (if required)
                  </li>
                  <li>Provide mitigation steps</li>
                  <li>Strengthen systems to prevent recurrence</li>
                </ol>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  12. Your Rights
                </h3>
                <p className="mb-4 text-gray-700">
                  Participants and parents may:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-gray-700">
                  <li>Request a copy of stored data</li>
                  <li>Correct or delete personal data</li>
                  <li>Restrict or object to processing</li>
                  <li>Withdraw consent (where applicable)</li>
                </ul>
                <div className="mt-4 border-blue-500 border-l-4 bg-blue-50 p-4">
                  <p className="text-gray-700">
                    <strong>Contact:</strong>{" "}
                    <a
                      className="text-blue-600 underline hover:text-blue-800"
                      href="mailto:ycbootcamp@taleofhumankind.org"
                    >
                      ycbootcamp@taleofhumankind.org
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  13. Third-Party Services
                </h3>
                <p className="text-gray-700">
                  Our program uses third-party vendors (payment gateways, Google
                  services, video hosting). Their policies apply when
                  interacting with those services.
                </p>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  14. Policy Updates
                </h3>
                <p className="text-gray-700">
                  We may revise this Policy as laws or practices evolve. The
                  latest version will always carry an updated "Last Updated"
                  date.
                </p>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  15. Contact Information
                </h3>
                <div className="rounded-lg border bg-gray-50 p-6">
                  <h4 className="mb-3 font-bold text-[#050a30]">
                    Young Changemakers Bootcamp (YCB)
                  </h4>
                  <p className="mb-2 text-gray-700">
                    c/o Tale of Humankind Foundation
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong>{" "}
                    <a
                      className="text-blue-600 underline hover:text-blue-800"
                      href="mailto:ycbootcamp@taleofhumankind.org"
                    >
                      ycbootcamp@taleofhumankind.org
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
