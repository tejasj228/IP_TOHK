"use client";

export default function SafeguardingPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-bold text-4xl text-[#050a30] md:text-5xl">
              Safeguarding Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Protecting the safety, dignity, and wellbeing of every
              participant.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 rounded-lg border bg-gray-50 p-6">
              <h2 className="mb-4 font-bold text-2xl text-[#050a30]">
                Young Changemakers Bootcamp – Safeguarding Policy
              </h2>
              <div className="mb-4 flex gap-6 text-gray-600 text-sm">
                <span>
                  <strong>Effective Date:</strong> [Insert Date]
                </span>
                <span>
                  <strong>Last Updated:</strong> [Insert Date]
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  1. Scope and Purpose
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      This policy applies to:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• All students participating in YCB.</li>
                      <li>
                        • All mentors, staff, faculty, volunteers, and partners.
                      </li>
                      <li>
                        • All external service providers (accommodation, food,
                        travel, event venues).
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      The purpose of this policy is to:
                    </h4>
                    <div className="border-blue-500 border-l-4 bg-blue-50 p-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • Protect the safety, dignity, and wellbeing of every
                          participant.
                        </li>
                        <li>
                          • Establish roles and responsibilities for adults
                          working with minors.
                        </li>
                        <li>
                          • Provide clear procedures for preventing, reporting,
                          and responding to safeguarding concerns.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  2. Principles of Safeguarding
                </h3>
                <div className="grid gap-4 md:grid-cols-1">
                  <div className="border-red-500 border-l-4 bg-red-50 p-4">
                    <h4 className="mb-2 font-bold text-red-700">
                      Zero Tolerance:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      No form of abuse, neglect, harassment, exploitation, or
                      discrimination will be tolerated.
                    </p>
                  </div>
                  <div className="border-green-500 border-l-4 bg-green-50 p-4">
                    <h4 className="mb-2 font-bold text-green-700">
                      Best Interests of the Child:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      All actions and decisions prioritize the welfare of
                      participants.
                    </p>
                  </div>
                  <div className="border-blue-500 border-l-4 bg-blue-50 p-4">
                    <h4 className="mb-2 font-bold text-blue-700">
                      Transparency:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Policies are communicated clearly to students, parents,
                      and staff.
                    </p>
                  </div>
                  <div className="border-purple-500 border-l-4 bg-purple-50 p-4">
                    <h4 className="mb-2 font-bold text-purple-700">
                      Confidentiality:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Safeguarding information is shared only with those who
                      need to know.
                    </p>
                  </div>
                  <div className="border-amber-500 border-l-4 bg-amber-50 p-4">
                    <h4 className="mb-2 font-bold text-amber-700">
                      Accountability:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Every adult associated with YCB is individually
                      responsible for upholding safeguarding standards.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  3. Designated Safeguarding Officer (DSO)
                </h3>
                <div className="rounded-lg border bg-blue-50 p-4">
                  <h4 className="mb-3 font-bold text-[#050a30]">
                    The appointed Safeguarding Officer for YCB is:
                  </h4>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-800">
                      Ms. Ayushi Singhal
                    </p>
                    <p className="text-gray-700">
                      Program Leader, Young Changemakers Bootcamp
                    </p>
                    <p className="text-gray-700">
                      <strong>Email:</strong>{" "}
                      <a
                        className="text-blue-600 underline hover:text-blue-800"
                        href="mailto:ayushi@taleofhumankind.org"
                      >
                        ayushi@taleofhumankind.org
                      </a>
                    </p>
                  </div>
                  <p className="mb-2 text-gray-700">
                    <strong>
                      All safeguarding concerns should be reported directly to
                      the DSO.
                    </strong>
                  </p>
                  <div className="mt-3 border-amber-500 border-l-4 bg-amber-50 p-3">
                    <p className="text-gray-700 text-sm">
                      If the concern involves the DSO, it should be escalated to
                      the Co-Founder, Tale of Humankind (Aniket Gupta) at{" "}
                      <a
                        className="text-blue-600 underline hover:text-blue-800"
                        href="mailto:aniket@taleofhumankind.org"
                      >
                        aniket@taleofhumankind.org
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  4. Responsibilities
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      Staff, Mentors, and Volunteers must:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Act as responsible role models at all times.</li>
                      <li>
                        • Maintain professional boundaries (no favoritism,
                        gifts, or private relationships).
                      </li>
                      <li>
                        • Avoid one-on-one unsupervised contact with
                        participants; if unavoidable, ensure it is in a
                        visible/public space.
                      </li>
                      <li>
                        • Be mindful of language, jokes, gestures, and physical
                        contact.
                      </li>
                      <li>
                        • Complete mandatory safeguarding training before camp.
                      </li>
                      <li>
                        • Undergo reference checks and, where feasible, police
                        verification.
                      </li>
                      <li>• Report any concern immediately to the DSO.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#050a30] text-lg">
                      Participants must:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Treat peers and staff with respect.</li>
                      <li>
                        • Avoid bullying, harassment, or exclusionary behavior.
                      </li>
                      <li>
                        • Report any incident that makes them uncomfortable to
                        staff or the DSO.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  5. Types of Harm Covered
                </h3>
                <p className="mb-4 text-gray-700">
                  This policy protects against:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-lg border bg-gray-50 p-3">
                    <span className="font-bold text-red-600">
                      Physical harm:
                    </span>
                    <span className="text-gray-700">
                      Assault, unsafe conditions, neglect.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border bg-gray-50 p-3">
                    <span className="font-bold text-orange-600">
                      Emotional harm:
                    </span>
                    <span className="text-gray-700">
                      Bullying, humiliation, exclusion, discrimination.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border bg-gray-50 p-3">
                    <span className="font-bold text-purple-600">
                      Sexual harm:
                    </span>
                    <span className="text-gray-700">
                      Harassment, exploitation, inappropriate contact.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border bg-gray-50 p-3">
                    <span className="font-bold text-blue-600">Neglect:</span>
                    <span className="text-gray-700">
                      Lack of proper care, attention, or supervision.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border bg-gray-50 p-3">
                    <span className="font-bold text-green-600">
                      Digital harm:
                    </span>
                    <span className="text-gray-700">
                      Cyberbullying, online harassment, exposure to harmful
                      content.
                    </span>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  6. Reporting & Escalation Procedure
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-[#050a30] text-lg">
                      6.1 Who Can Report:
                    </h4>
                    <p className="text-gray-700">
                      Any participant, parent, staff member, mentor, volunteer,
                      or visitor can raise a safeguarding concern.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-[#050a30] text-lg">
                      6.2 How to Report:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Report verbally or in writing to the DSO or any YCB
                        staff member.
                      </li>
                      <li>
                        • Use confidential email:{" "}
                        <a
                          className="text-blue-600 underline hover:text-blue-800"
                          href="mailto:ayushi@taleofhumankind.org"
                        >
                          ayushi@taleofhumankind.org
                        </a>
                      </li>
                      <li>
                        • In emergencies, report directly to local authorities.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-[#050a30] text-lg">
                      6.3 Escalation Flow:
                    </h4>
                    <div className="rounded-lg border bg-gray-50 p-4">
                      <ol className="list-decimal space-y-2 pl-4 text-gray-700">
                        <li>
                          Concern raised → to DSO (Ayushi Singhal) immediately.
                        </li>
                        <li>DSO logs and investigates within 24 hours.</li>
                        <li>
                          Parents/guardians informed, unless doing so puts the
                          child at greater risk.
                        </li>
                        <li>
                          <strong>Serious concerns</strong> (abuse, violence,
                          sexual misconduct) escalated within 24 hours to:
                          <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>
                              Local Police (under POCSO Act, 2012 for child
                              protection), and/or
                            </li>
                            <li>Child Welfare Committee (CWC).</li>
                          </ul>
                        </li>
                        <li>
                          DSO updates Program Head and maintains confidential
                          records.
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-[#050a30] text-lg">
                      6.4 Assurance:
                    </h4>
                    <div className="border-green-500 border-l-4 bg-green-50 p-4">
                      <ul className="space-y-1 text-gray-700">
                        <li>• Reports are taken seriously.</li>
                        <li>
                          • No participant will face retaliation for raising
                          concerns in good faith.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  7. Accommodation & Supervision
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Separate accommodations provided for male and female
                    participants.
                  </li>
                  <li>
                    • Curfews, roll calls, and daily attendance checks enforced.
                  </li>
                  <li>
                    • Safe supervision ratios maintained (approx. 1 adult for
                    every 10–12 students).
                  </li>
                  <li>• No visitors allowed in hostel rooms.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  8. Health & Medical Care
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Parents must disclose accurate health information and
                    emergency contacts.
                  </li>
                  <li>
                    • First aid kits and designated medical staff available
                    on-site.
                  </li>
                  <li>
                    • Emergency treatment may be arranged by staff; parents will
                    be informed immediately.
                  </li>
                  <li>
                    • Prescribed medicines must be handed to the medical
                    supervisor with instructions.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  9. Mental & Emotional Wellbeing
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Staff trained to recognize signs of stress, anxiety, or
                    homesickness.
                  </li>
                  <li>
                    • Participants may approach staff or DSO for confidential
                    support.
                  </li>
                  <li>
                    • Peer-support groups and wellbeing sessions provided during
                    camp.
                  </li>
                  <li>
                    • Access to professional counseling will be facilitated if
                    required.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  10. Online & Digital Safety
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Participants must follow responsible digital conduct (no
                    inappropriate or harmful content).
                  </li>
                  <li>
                    • No photos/videos may be taken or shared without consent.
                  </li>
                  <li>
                    • YCB staff may monitor device use during sessions for
                    safety reasons.
                  </li>
                  <li>
                    • Cyberbullying or online harassment will be treated as a
                    safeguarding violation.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  11. Confidential Handling of Safeguarding Records
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • All safeguarding reports will be documented and stored
                    securely.
                  </li>
                  <li>• Access restricted only to the DSO and Program Head.</li>
                  <li>
                    • Records will be retained for 5 years or as legally
                    required.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  12. Breach of Policy
                </h3>
                <p className="mb-4 text-gray-700">
                  Violation of safeguarding standards will lead to strict
                  action, including:
                </p>
                <div className="border-amber-500 border-l-4 bg-amber-50 p-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Verbal or written warning.</li>
                    <li>• Restriction from activities.</li>
                    <li>• Immediate dismissal from the program (no refund).</li>
                    <li>• Notification to parents/guardians.</li>
                    <li>
                      • Referral to external authorities where required by law.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  13. Parent & Guardian Engagement
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Parents will receive this Safeguarding Policy before the
                    program.
                  </li>
                  <li>
                    • Parents must sign an acknowledgment of understanding and
                    consent.
                  </li>
                  <li>• Parents may contact the DSO directly with concerns.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  14. Review & Updates
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • This policy will be reviewed annually by TOH leadership.
                  </li>
                  <li>
                    • Updates will reflect legal changes (e.g., amendments to
                    POCSO Act or DPDP Act) and best practice standards.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  15. Contact for Safeguarding Concerns
                </h3>
                <div className="rounded-lg border bg-gray-50 p-6">
                  <div className="mb-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Designated Safeguarding Officer (DSO):
                    </h4>
                    <p className="text-gray-700">
                      Ayushi Singhal – Program Leader, YCB
                    </p>
                    <p className="text-gray-700">
                      <strong>Email:</strong>{" "}
                      <a
                        className="text-blue-600 underline hover:text-blue-800"
                        href="mailto:ayushi@taleofhumankind.org"
                      >
                        ayushi@taleofhumankind.org
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Alternate Contact:
                    </h4>
                    <p className="text-gray-700">
                      Aniket Gupta – Co-Founder, Tale of Humankind
                    </p>
                    <p className="text-gray-700">
                      <strong>Email:</strong>{" "}
                      <a
                        className="text-blue-600 underline hover:text-blue-800"
                        href="mailto:aniket@taleofhumankind.org"
                      >
                        aniket@taleofhumankind.org
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
