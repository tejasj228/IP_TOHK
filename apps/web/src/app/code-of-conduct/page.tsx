"use client";

import Image from "next/image";
import Link from "next/link";
import tohkLogo from "@/assets/tohk.jpg";

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#050a30] md:text-5xl">
              Code of Conduct
            </h1>
            <p className="text-lg text-gray-600">
              Our commitment to creating a safe, inclusive, and respectful environment for all.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-bold text-[#050a30]">Our Commitment</h2>
              <p className="text-gray-700">
                The Young Changemaker Bootcamp is committed to providing a harassment-free experience for everyone, regardless of age, gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, or technology choices.
              </p>
              <p className="mt-4 font-semibold text-gray-800">
                We do not tolerate harassment of participants in any form. Participants violating these rules may be sanctioned or expelled from the program at the discretion of the organizers.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Expected Behavior</h3>
                <p className="mb-4 text-gray-700">
                  All participants, volunteers, speakers, and organizers are expected to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Be respectful and inclusive in language and actions</li>
                  <li>Respect differing viewpoints and experiences</li>
                  <li>Accept constructive criticism gracefully</li>
                  <li>Focus on what is best for the community</li>
                  <li>Show empathy towards other community members</li>
                  <li>Collaborate effectively and support fellow participants</li>
                  <li>Maintain confidentiality when discussing sensitive topics</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Unacceptable Behavior</h3>
                <p className="mb-4 text-gray-700">
                  Harassment includes, but is not limited to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion</li>
                  <li>Sexual language and imagery in public spaces</li>
                  <li>Deliberate intimidation, stalking, or following</li>
                  <li>Harassing photography or recording</li>
                  <li>Sustained disruption of talks or other events</li>
                  <li>Inappropriate physical contact</li>
                  <li>Unwelcome sexual attention</li>
                  <li>Advocating for, or encouraging, any of the above behavior</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Online Conduct</h3>
                <p className="mb-4 text-gray-700">
                  For online interactions and social media:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Maintain professionalism in all digital communications</li>
                  <li>Respect privacy and confidentiality of fellow participants</li>
                  <li>Avoid sharing inappropriate content or links</li>
                  <li>Be mindful of cultural differences in online interactions</li>
                  <li>Report any cyberbullying or online harassment immediately</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Enforcement</h3>
                <p className="mb-4 text-gray-700">
                  Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing behavior, the organizers may take any action they deem appropriate, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Warning the offender</li>
                  <li>Expulsion from the program without refund</li>
                  <li>Banning from future events</li>
                  <li>Reporting to appropriate authorities if necessary</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Reporting</h3>
                <p className="mb-4 text-gray-700">
                  If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the organizing team immediately. You can report incidents:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>In person to any organizer or volunteer</li>
                  <li>By email to conduct@taleofhumankind.com</li>
                  <li>Through our confidential reporting system</li>
                  <li>By calling our dedicated helpline (to be provided during events)</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  All reports will be handled with discretion and confidentiality. We will respect confidentiality requests for the purpose of protecting victims of abuse.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Scope</h3>
                <p className="text-gray-700">
                  This Code of Conduct applies to all YCB spaces, both online and offline. This includes workshops, networking events, social media platforms, email communications, and any other forum created by the program team which the community uses for communication.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Attribution</h3>
                <p className="text-gray-700">
                  This Code of Conduct is adapted from the Contributor Covenant, version 2.0, available at https://www.contributor-covenant.org/version/2/0/code_of_conduct.html and Conference Code of Conduct at http://confcodeofconduct.com/
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Contact</h3>
                <p className="text-gray-700">
                  For questions about this Code of Conduct, please contact us at conduct@taleofhumankind.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}