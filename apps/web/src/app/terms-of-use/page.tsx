"use client";

import Image from "next/image";
import Link from "next/link";
import tohkLogo from "@/assets/tohk.jpg";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#050a30] md:text-5xl">
              Terms of Use
            </h1>
            <p className="text-lg text-gray-600">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-bold text-[#050a30]">Terms and Conditions</h2>
              <p className="text-gray-700">
                Welcome to the Young Changemaker Bootcamp website. These terms and conditions outline the rules and regulations for the use of The Tale of Humankind's Website, located at www.taleofhumankind.com.
              </p>
              <p className="mt-4 font-semibold text-gray-800">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use the website if you do not agree to take all of the terms and conditions stated on this page.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Acceptance of Terms</h3>
                <p className="text-gray-700">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Use License</h3>
                <p className="mb-4 text-gray-700">
                  Permission is granted to temporarily download one copy of the materials on The Tale of Humankind's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by The Tale of Humankind at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Disclaimer</h3>
                <p className="text-gray-700">
                  The materials on The Tale of Humankind's website are provided on an 'as is' basis. The Tale of Humankind makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Limitations</h3>
                <p className="text-gray-700">
                  In no event shall The Tale of Humankind or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Tale of Humankind's website, even if The Tale of Humankind or a The Tale of Humankind authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Accuracy of Materials</h3>
                <p className="text-gray-700">
                  The materials appearing on The Tale of Humankind's website could include technical, typographical, or photographic errors. The Tale of Humankind does not warrant that any of the materials on its website are accurate, complete, or current. The Tale of Humankind may make changes to the materials contained on its website at any time without notice. However, The Tale of Humankind does not make any commitment to update the materials.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Links</h3>
                <p className="text-gray-700">
                  The Tale of Humankind has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Tale of Humankind of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Modifications</h3>
                <p className="text-gray-700">
                  The Tale of Humankind may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Governing Law</h3>
                <p className="text-gray-700">
                  These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Contact Information</h3>
                <p className="text-gray-700">
                  If you have any questions about these Terms of Use, please contact us at team@taleofhumankind.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-soft-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
            {/* Column 1 - Brand */}
            <div className="flex flex-col items-center space-y-4 md:items-start">
              {/* TOHK Logo at top */}
              <Image
                alt="TOHK logo"
                className="h-16 w-16 rounded-full object-cover"
                height={64}
                priority
                src={tohkLogo}
                width={64}
              />
              {/* TOH title below logo */}
              <h3 className="font-bold text-2xl">TOH</h3>
              {/* YCB subtitle below TOH */}
              <p className="text-sm text-white/80">
                Young Changemaker Bootcamp
              </p>
            </div>

            {/* Column 2 - Program */}
            <div className="space-y-4">
              <h4 className="font-bold text-[gold] text-lg">Program</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="transition-colors hover:text-[gold]" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="#about"
                  >
                    About YCB
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/network"
                  >
                    Our Network
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="#editions"
                  >
                    Previous Editions
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="#featured"
                  >
                    Featured
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/apply"
                  >
                    Apply
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Legal */}
            <div className="space-y-4">
              <h4 className="font-bold text-[gold] text-lg">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/privacy-notice"
                  >
                    Privacy Notice
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/terms-of-use"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/code-of-conduct"
                  >
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/safeguarding-policy"
                  >
                    Safeguarding Policy
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/tentative-calendar"
                  >
                    Tentative Calendar
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Connect */}
            <div className="space-y-4">
              <h4 className="font-bold text-[gold] text-lg">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="break-all transition-colors hover:text-[gold]"
                    href="mailto:ycbootcamp@taleofhumankind.org"
                  >
                    ycbootcamp@taleofhumankind.org
                  </a>
                </li>
                <li className="flex items-center justify-center space-x-2 md:justify-start">
                  <div className="h-4 w-4 rounded bg-[#d9d9d9]" />
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/instagram"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-white/10 border-t pt-8 text-center">
            <p className="text-sm text-white/70">
              © 2025 The Tale of Humankind. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}