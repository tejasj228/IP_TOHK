"use client";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-bold text-4xl text-[#050a30] md:text-5xl">
              Refund & Cancellation Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Understanding our refund policy and the importance of committed
              participation.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 rounded-lg border bg-gray-50 p-6">
              <h2 className="mb-4 font-bold text-2xl text-[#050a30]">
                Young Changemakers Bootcamp — Refund & Cancellation Policy
              </h2>
              <div className="mb-4 flex gap-6 text-gray-600 text-sm">
                <span>
                  <strong>Effective Date:</strong> [Insert Date]
                </span>
                <span>
                  <strong>Last Updated:</strong> [Insert Date]
                </span>
              </div>
              <div className="border-amber-500 border-l-4 bg-amber-50 p-4">
                <p className="text-gray-700">
                  At the Young Changemakers Bootcamp (YCB), every seat is
                  valuable. We receive an overwhelming number of applications,
                  and each student who is selected occupies a spot that could
                  have been offered to another equally deserving candidate. For
                  this reason, we follow a strict refund policy, allowing
                  refunds only in exceptional emergencies.
                </p>
                <p className="mt-3 text-gray-700">
                  This policy ensures fairness, respects the competitive
                  admissions process, and helps us maintain the quality and
                  accessibility of the program.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  1. Why Refunds Are Restricted
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • Selection into YCB involves a multi-stage process
                    (application, essay, interviews/group discussions). Families
                    are given ample time and information before confirming
                    admission and paying the fee.
                  </li>
                  <li>
                    • Once a participant is confirmed, significant resources are
                    committed on their behalf — including accommodation, meals,
                    mentors, logistics, and materials — much of which cannot be
                    recovered.
                  </li>
                  <li>
                    • Allowing casual cancellations would mean denying
                    opportunities to other deserving students who could have
                    benefitted.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  2. General Rule
                </h3>
                <div className="border-red-500 border-l-4 bg-red-50 p-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • <strong>No refunds are provided</strong> for
                      cancellations due to change of mind, academic schedules,
                      personal travel plans, or non-emergency reasons.
                    </li>
                    <li>
                      • By paying the program fee, participants and guardians
                      acknowledge that this seat was secured after a competitive
                      process and accept the refund policy.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  3. Emergency Exceptions
                </h3>
                <p className="mb-4 text-gray-700">
                  We understand that unforeseen emergencies can occur. Refunds
                  may be considered only in the following circumstances, with
                  appropriate documentation:
                </p>

                <div className="space-y-3">
                  <div className="border-blue-500 border-l-4 bg-blue-50 p-4">
                    <h4 className="mb-2 font-bold text-blue-700">
                      Valid Emergency Reasons:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Serious medical emergency of the participant that
                        prevents attendance (doctor's certificate/hospital
                        records required).
                      </li>
                      <li>
                        • Death or life-threatening medical emergency in the
                        immediate family.
                      </li>
                      <li>
                        • Official government restrictions or travel bans that
                        make it impossible for the participant to attend.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 border-amber-500 border-l-4 bg-amber-50 p-4">
                  <h4 className="mb-2 font-bold text-amber-700">
                    Important Notes:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Requests must be made in writing as soon as possible,
                      with valid supporting documents.
                    </li>
                    <li>
                      • Even in emergencies, refunds will exclude any
                      non-recoverable vendor costs (accommodation deposits,
                      logistics, partner bookings).
                    </li>
                    <li>
                      • Refund decisions are at the discretion of YCB and will
                      be communicated transparently.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  4. No-Refund Situations (Examples)
                </h3>
                <p className="mb-4 text-gray-700">
                  To avoid confusion, these do <strong>not</strong> qualify for
                  refunds:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Personal Decisions:
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Change of mind after paying the fee</li>
                      <li>• Alternate travel or vacation plans</li>
                      <li>• Failure to arrange travel/leave on time</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h4 className="mb-2 font-bold text-[#050a30]">
                      Academic & Behavioral:
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Overlapping school exams or academic schedules</li>
                      <li>
                        • Withdrawal after program start or early departure
                      </li>
                      <li>
                        • Dismissal due to violation of the Code of Conduct
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  5. Requesting a Refund (Emergency Cases Only)
                </h3>

                <div className="rounded-lg border bg-blue-50 p-4">
                  <h4 className="mb-3 font-bold text-[#050a30]">
                    Refund Request Process:
                  </h4>
                  <ol className="list-decimal space-y-2 pl-4 text-gray-700">
                    <li>
                      Email{" "}
                      <a
                        className="text-blue-600 underline hover:text-blue-800"
                        href="mailto:finance@taleofhumankind.org"
                      >
                        finance@taleofhumankind.org
                      </a>{" "}
                      (subject: Refund Request — [Participant Name]).
                    </li>
                    <li>
                      Provide details of the emergency with supporting
                      documents.
                    </li>
                    <li>
                      YCB will acknowledge within{" "}
                      <strong>5 working days</strong> and review the case.
                    </li>
                    <li>
                      Decisions will be shared within{" "}
                      <strong>30 working days</strong>. If approved, refunds
                      will be processed within <strong>30 working days</strong>{" "}
                      via the original payment method.
                    </li>
                  </ol>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  6. Program Cancellation by YCB
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-[#050a30] text-lg">
                      If YCB cancels the entire program for reasons within our
                      control:
                    </h4>
                    <div className="border-green-500 border-l-4 bg-green-50 p-4">
                      <p className="mb-2 text-gray-700">
                        Families will be offered either:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • A full refund (minus non-recoverable third-party
                          charges), <strong>OR</strong>
                        </li>
                        <li>
                          • The option to transfer their fee to a future
                          edition.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-[#050a30] text-lg">
                      Force Majeure Events:
                    </h4>
                    <div className="border-amber-500 border-l-4 bg-amber-50 p-4">
                      <p className="text-gray-700">
                        If cancellation is due to Force Majeure (natural
                        disasters, government orders, pandemics, etc.),
                        refunds/credits will be decided based on recoverable
                        costs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  7. Acknowledgement at Registration
                </h3>
                <div className="border-purple-500 border-l-4 bg-purple-50 p-4">
                  <p className="text-gray-700">
                    By confirming participation and paying the fee, students and
                    guardians agree to this Refund & Cancellation Policy and
                    acknowledge its importance in ensuring fairness and
                    opportunity for all applicants.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  Contact Us
                </h3>
                <div className="rounded-lg border bg-gray-50 p-6">
                  <h4 className="mb-3 font-bold text-[#050a30]">
                    Get in Touch
                  </h4>
                  <p className="mb-3 text-gray-700">
                    Best way to reach out to the team is to email us and you
                    will get a response within one working day.
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
                  <p className="mt-2 text-gray-700 text-sm">
                    <strong>For refund requests:</strong>{" "}
                    <a
                      className="text-blue-600 underline hover:text-blue-800"
                      href="mailto:finance@taleofhumankind.org"
                    >
                      finance@taleofhumankind.org
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
