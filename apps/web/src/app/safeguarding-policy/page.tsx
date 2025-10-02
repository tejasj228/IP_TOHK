"use client";

import Image from "next/image";
import Link from "next/link";
import tohkLogo from "@/assets/tohk.jpg";

export default function SafeguardingPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#050a30] md:text-5xl">
              Safeguarding Policy
            </h1>
            <p className="text-lg text-gray-600">
              Our commitment to protecting and safeguarding all participants in our programs.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-bold text-[#050a30]">Our Safeguarding Commitment</h2>
              <p className="text-gray-700">
                The Tale of Humankind and the Young Changemaker Bootcamp are committed to safeguarding and protecting the welfare of all participants, volunteers, and stakeholders. We believe that everyone has the right to be protected from harm and abuse, and we take this responsibility seriously.
              </p>
              <p className="mt-4 font-semibold text-gray-800">
                This policy applies to all staff, volunteers, participants, and anyone acting on behalf of our organization.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Policy Statement</h3>
                <p className="mb-4 text-gray-700">
                  The Tale of Humankind is committed to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Creating and maintaining a safe environment for all participants</li>
                  <li>Promoting the welfare and protection of young people and vulnerable adults</li>
                  <li>Responding appropriately to safeguarding concerns</li>
                  <li>Ensuring all staff and volunteers understand their safeguarding responsibilities</li>
                  <li>Working with partner organizations to promote best safeguarding practices</li>
                  <li>Regular review and improvement of our safeguarding procedures</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Who This Policy Protects</h3>
                <p className="mb-4 text-gray-700">
                  This policy is designed to protect:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>All participants in YCB programs, particularly those under 18 years of age</li>
                  <li>Young adults aged 18-25 who may be vulnerable</li>
                  <li>Volunteers and staff members</li>
                  <li>Any individual who may be at risk in connection with our activities</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Types of Abuse</h3>
                <p className="mb-4 text-gray-700">
                  We recognize the following forms of abuse and will take action to prevent and respond to them:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li><strong>Physical abuse:</strong> Hitting, slapping, pushing, kicking, restraining, or otherwise causing physical harm</li>
                  <li><strong>Sexual abuse:</strong> Any sexual activity with someone who cannot or does not consent</li>
                  <li><strong>Emotional/psychological abuse:</strong> Humiliation, threats, intimidation, or other actions that cause psychological harm</li>
                  <li><strong>Financial abuse:</strong> Theft, fraud, or misuse of someone's finances or resources</li>
                  <li><strong>Neglect:</strong> Failure to provide adequate care, support, or supervision</li>
                  <li><strong>Online abuse:</strong> Cyberbullying, online harassment, or inappropriate digital contact</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Prevention Measures</h3>
                <p className="mb-4 text-gray-700">
                  We implement the following measures to prevent abuse:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Comprehensive background checks for all staff and volunteers</li>
                  <li>Mandatory safeguarding training for all team members</li>
                  <li>Clear guidelines for appropriate behavior and boundaries</li>
                  <li>Regular supervision and support for staff and volunteers</li>
                  <li>Safe recruitment practices and reference checks</li>
                  <li>Clear reporting mechanisms and procedures</li>
                  <li>Regular review of safeguarding arrangements</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Recognizing Signs of Abuse</h3>
                <p className="mb-4 text-gray-700">
                  Warning signs may include:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Unexplained changes in behavior or personality</li>
                  <li>Withdrawal from activities or social situations</li>
                  <li>Signs of physical injury or neglect</li>
                  <li>Inappropriate sexual behavior or knowledge</li>
                  <li>Fear of specific individuals or situations</li>
                  <li>Regression in behavior or development</li>
                  <li>Poor academic or program performance</li>
                  <li>Low self-esteem or confidence</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Reporting Procedures</h3>
                <p className="mb-4 text-gray-700">
                  If you have concerns about someone's welfare:
                </p>
                <ol className="list-decimal space-y-2 pl-6 text-gray-700">
                  <li><strong>Immediate danger:</strong> If someone is in immediate danger, contact emergency services (police: 100, ambulance: 108)</li>
                  <li><strong>Report to Designated Safeguarding Officer:</strong> Contact our safeguarding officer immediately at safeguarding@taleofhumankind.com</li>
                  <li><strong>Document concerns:</strong> Write down what you observed, heard, or were told as soon as possible</li>
                  <li><strong>Maintain confidentiality:</strong> Only share information with those who need to know</li>
                  <li><strong>Follow up:</strong> Ensure appropriate action has been taken</li>
                </ol>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Contact Information</h3>
                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="mb-2 font-bold text-[#050a30]">Designated Safeguarding Officer</h4>
                  <p className="text-gray-700">Email: safeguarding@taleofhumankind.com</p>
                  <p className="text-gray-700">Phone: [To be provided during programs]</p>
                  
                  <h4 className="mb-2 mt-4 font-bold text-[#050a30]">Alternative Contact</h4>
                  <p className="text-gray-700">Director: director@taleofhumankind.com</p>
                  
                  <h4 className="mb-2 mt-4 font-bold text-[#050a30]">External Support</h4>
                  <p className="text-gray-700">Childline India: 1098 (24/7 helpline)</p>
                  <p className="text-gray-700">Women Helpline: 181</p>
                </div>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Training and Support</h3>
                <p className="text-gray-700">
                  All staff and volunteers receive regular training on safeguarding procedures, recognizing signs of abuse, and appropriate responses. We provide ongoing support and supervision to ensure everyone feels confident in their ability to keep participants safe.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Policy Review</h3>
                <p className="text-gray-700">
                  This policy is reviewed annually and updated as necessary to reflect best practices and legal requirements. The last review was conducted in October 2025.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Remember</h3>
                <div className="rounded-lg bg-yellow-50 p-4">
                  <p className="font-semibold text-gray-800">
                    It is everyone's responsibility to safeguard and protect participants. If you have any concerns, no matter how small, please speak up. It is better to err on the side of caution.
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