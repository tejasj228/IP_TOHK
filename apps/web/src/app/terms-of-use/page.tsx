"use client";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-bold text-4xl text-[#050a30] md:text-5xl">
              Terms & Conditions
            </h1>
            <p className="text-gray-600 text-lg">
              Please read these terms and conditions carefully before applying
              or participating.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 rounded-lg border bg-gray-50 p-6">
              <h2 className="mb-4 font-bold text-2xl text-[#050a30]">
                Young Changemakers Bootcamp — Terms & Conditions
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
                  1. Acceptance of Terms
                </h3>
                <p className="text-gray-700">
                  These Terms & Conditions ("Terms") govern your application to,
                  acceptance of, and participation in the Young Changemakers
                  Bootcamp ("YCB"), organised by Tale of Humankind ("TOH", "we",
                  "us"). By applying for, registering for, or participating in
                  YCB, you (and, where the participant is a minor, the
                  parent/guardian) agree to these Terms in full. If you do not
                  agree, do not apply or participate.
                </p>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  2. Eligibility & Admission
                </h3>

                <div className="mb-4">
                  <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                    2.1 Eligibility
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Applicants must be students in Grades 9–12 (or
                      equivalent) at the time of application and during the
                      program.
                    </li>
                    <li>
                      • Applicants must provide complete, accurate and truthful
                      information and required documentation.
                    </li>
                    <li>
                      • For minors, a parent/guardian's consent is mandatory and
                      their signature/acceptance constitutes agreement to these
                      Terms on behalf of the minor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                    2.2 Selection & Admission
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Submission of an application does not guarantee
                      admission.
                    </li>
                    <li>
                      • Admission decisions are made by the YCB Admissions
                      Committee at its sole discretion, based on eligibility,
                      application materials, essays, interviews/group-discussion
                      performance, and seat availability.
                    </li>
                    <li>
                      • YCB reserves the right to refuse or withdraw admission
                      at any time without providing a reason.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  3. Application Process & Accounts
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      3.1 Application Submission
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Complete the online application form and upload all
                        required documents (photo, ID, essays, guardian consent
                        where applicable).
                      </li>
                      <li>
                        • You represent and warrant that all materials submitted
                        are original and accurate.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      3.2 Account Security
                    </h4>
                    <p className="text-gray-700">
                      If an online account is created, the applicant is
                      responsible for maintaining the security of login
                      credentials and must notify YCB immediately of any
                      unauthorized use.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      3.3 Communication
                    </h4>
                    <p className="text-gray-700">
                      Applicants/guardians must regularly monitor the email
                      address and phone number provided during application for
                      updates, deadlines, and instructions. YCB is not
                      responsible for missed communications due to incorrect
                      contact details.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  4. Program Fees, Payment & Financial Aid
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      4.1 Fee Structure & Payment
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Program fees and related instructions are published on
                        the official YCB website and/or admission notification.
                      </li>
                      <li>
                        • Fees must be paid through authorised channels and
                        within the timelines specified. Failure to pay within
                        the deadline may result in forfeiture of the seat and
                        reallocation to waitlisted applicants.
                      </li>
                      <li>
                        • Any bank/transfer charges are the responsibility of
                        the payer unless otherwise stated.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      4.2 Financial Aid & Scholarships
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Need-based financial aid is available as published by
                        YCB; applications must include required documentation
                        and be submitted by the stated deadline. Aid is awarded
                        at YCB's discretion and may be conditional.
                      </li>
                      <li>
                        • Recipients of financial aid must comply with any
                        conditions attached to the aid (e.g., community service,
                        reporting, participation requirements).
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  5. Refunds, Cancellations & Transfers
                </h3>
                <div className="border-blue-500 border-l-4 bg-blue-50 p-4">
                  <p className="text-gray-700">
                    <strong>Note:</strong> See the full Refund & Cancellation
                    Policy for detailed terms.
                  </p>
                </div>
                <p className="mt-4 mb-2 text-gray-700">In brief:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Refunds and cancellations are governed by the published
                    Refund Policy. Applicants/participants should review that
                    document prior to payment.
                  </li>
                  <li>
                    • YCB reserves the right to cancel, postpone or modify
                    program details; in such cases, YCB will offer alternative
                    arrangements such as transfer to a future edition, credit
                    note, or refunds as set out in the Refund Policy.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  6. Code of Conduct & Participant Obligations
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      6.1 Expected Behaviour
                    </h4>
                    <p className="mb-2 text-gray-700">Participants must:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Treat fellow participants, mentors, staff, volunteers
                        and host-institution personnel with respect and
                        courtesy.
                      </li>
                      <li>
                        • Comply with program schedules, safety rules, and
                        instructions from the YCB team and host institution.
                      </li>
                      <li>
                        • Respect campus property and host-institution rules.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      6.2 Prohibited Actions
                    </h4>
                    <p className="mb-2 text-gray-700">Participants must not:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Engage in harassment, discrimination, bullying, abuse,
                        or violent behaviour.
                      </li>
                      <li>
                        • Possess or consume alcohol, tobacco, illegal
                        drugs/substances, or participate in activities that
                        endanger others.
                      </li>
                      <li>• Steal, vandalize, or otherwise damage property.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      6.3 Consequences
                    </h4>
                    <div className="border-amber-500 border-l-4 bg-amber-50 p-4">
                      <p className="text-gray-700">
                        Breach of the Code of Conduct may result in warnings,
                        parental notification, restriction from activities,
                        suspension or immediate dismissal from the program
                        without refund, and reporting to legal authorities where
                        appropriate.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  7. Health, Safety & Medical Matters
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      7.1 Medical Disclosure
                    </h4>
                    <div className="border-red-500 border-l-4 bg-red-50 p-4">
                      <p className="text-gray-700">
                        Applicants must accurately disclose health information,
                        allergies, chronic conditions, dietary restrictions and
                        ongoing medications on the application form. This
                        information will be used to plan for participant safety.
                        Non-disclosure may lead to risks for which YCB will not
                        be responsible.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      7.2 On-site Medical Care & Emergencies
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • YCB will arrange for first aid and access to emergency
                        medical care. Parents/guardians must ensure participants
                        have appropriate medical/travel insurance.
                      </li>
                      <li>
                        • In a medical emergency, YCB may arrange or authorise
                        treatment which it reasonably considers necessary;
                        parents/guardians will be informed as soon as
                        practicable. Any medical costs incurred will generally
                        be charged to the participant/guardian.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      7.3 Medication
                    </h4>
                    <p className="text-gray-700">
                      Any medication to be administered during the program must
                      be declared and handed to YCB's designated medical
                      supervisor with clear instructions.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  8. Intellectual Property & Participant Work
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      8.1 YCB Materials
                    </h4>
                    <p className="text-gray-700">
                      Program materials (presentations, curriculum, logos) are
                      the property of YCB/TOH and may not be reproduced or
                      distributed without prior written permission.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      8.2 Participant Submissions & Projects
                    </h4>
                    <p className="text-gray-700">
                      Participants retain ownership of original works they
                      create. By submitting work to YCB (including project
                      reports and pitches), participants grant YCB a
                      non-exclusive, royalty-free, worldwide licence to use,
                      reproduce, display and share those works for educational,
                      promotional or archival purposes, with attribution unless
                      otherwise agreed in writing.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  9. Media, Photography & Publicity
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      9.1 Media Release & Consent
                    </h4>
                    <div className="border-blue-500 border-l-4 bg-blue-50 p-4">
                      <p className="text-gray-700">
                        By participating, you consent to being photographed,
                        filmed and quoted for use by YCB for educational and
                        promotional purposes. For minors, written
                        parental/guardian consent is required before
                        identifiable media is used publicly. If a participant or
                        guardian requests restrictive use, they must notify
                        admissions in writing.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      9.2 Social Media & Public Statements
                    </h4>
                    <p className="text-gray-700">
                      Participants should not disclose confidential program
                      materials or make official public statements on behalf of
                      YCB without prior approval.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  10. Data Privacy
                </h3>
                <p className="text-gray-700">
                  Personal data is processed in accordance with YCB's Privacy
                  Policy{" "}
                  <a
                    className="text-blue-600 underline hover:text-blue-800"
                    href="/privacy-notice"
                  >
                    [link]
                  </a>
                  . Participation requires certain data processing; by applying
                  you consent to the collection and use set out there.
                </p>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  11. Limitation of Liability & Indemnity
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      11.1 Liability
                    </h4>
                    <p className="text-gray-700">
                      To the extent permitted by law, YCB and TOH (and their
                      officers, employees, volunteers and partner institutions)
                      will not be liable for indirect, incidental, consequential
                      or special losses arising from participation, use of
                      materials, or reliance upon any content provided during
                      the program. Liability for direct, proven losses will be
                      limited to the amount of program fees paid, except where
                      law provides otherwise.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      11.2 Indemnity
                    </h4>
                    <p className="text-gray-700">
                      Participants and their parents/guardians agree to
                      indemnify and hold harmless YCB, TOH, partners, staff,
                      mentors and host institutions against claims, losses,
                      liabilities, damages, costs and expenses arising from the
                      participant's breach of these Terms or negligent or
                      unlawful acts.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  12. Force Majeure
                </h3>
                <p className="text-gray-700">
                  YCB will not be liable for failure to perform obligations
                  caused by events beyond reasonable control (e.g., natural
                  disaster, pandemic, government action, strikes, terrorism,
                  host-institution restrictions). If such events prevent program
                  delivery, YCB may modify, postpone or cancel the program and
                  will provide options consistent with the Refund Policy.
                </p>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  13. Grievance, Complaints & Dispute Resolution
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      13.1 Grievance Procedure
                    </h4>
                    <p className="text-gray-700">
                      Participants/guardians should raise issues first with the
                      YCB team on-site. If unresolved, submit a written
                      complaint to{" "}
                      <a
                        className="text-blue-600 underline hover:text-blue-800"
                        href="mailto:ycbootcamp@taleofhumankind.org"
                      >
                        ycbootcamp@taleofhumankind.org
                      </a>
                      . YCB will investigate and respond in a timely manner.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      13.2 Governing Law & Dispute Resolution
                    </h4>
                    <p className="text-gray-700">
                      These Terms are governed by the laws of India. Parties
                      shall attempt to resolve disputes amicably. If unresolved,
                      disputes are subject to the exclusive jurisdiction of
                      courts in Delhi, India.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  14. Modifications to Program or Terms
                </h3>
                <p className="text-gray-700">
                  YCB reserves the right to amend program details, dates,
                  sessions, fees and these Terms. Material changes that affect
                  participants materially will be communicated promptly.
                  Continued participation after notification constitutes
                  acceptance of changes.
                </p>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  15. Entire Agreement & Severability
                </h3>
                <p className="text-gray-700">
                  These Terms, together with the Privacy Policy, Refund Policy,
                  Code of Conduct and Safeguarding Policy, represent the full
                  agreement between the parties regarding participation. If any
                  provision is held invalid, the remaining provisions remain in
                  effect.
                </p>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  16. Notices & Contact
                </h3>
                <div className="rounded-lg border bg-gray-50 p-6">
                  <p className="mb-2 text-gray-700">
                    All official notices or requests under these Terms should be
                    addressed to:
                  </p>
                  <h4 className="mb-2 font-bold text-[#050a30]">
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
