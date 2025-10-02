"use client";

import Image from "next/image";
import Link from "next/link";
import tohkLogo from "@/assets/tohk.jpg";

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#050a30] md:text-5xl">
              Privacy Notice
            </h1>
            <p className="text-lg text-gray-600">
              Your privacy matters to us. Learn how we protect and use your information.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-bold text-[#050a30]">Privacy Policy</h2>
              <p className="text-gray-700">
                At The Tale of Humankind, we respect the privacy of the users of our website. This Privacy Statement is intended to lay down the practices we follow for honoring the privacy preferences of the people visiting our website www.taleofhumankind.com. The Privacy Policy document also elaborates on our information collection and sharing practices. Irrespective of the mode in which we receive your personal information (whether via this website or over the phone or through any other means), we make all earnest attempts to honor your privacy. This document contains the requisite information about The Tale of Humankind's responsibilities, your rights, information which is collected by us, and how it is used.
              </p>
              <p className="mt-4 font-semibold text-gray-800">
                BY ACCESSING AND/OR USING THIS WEBSITE, YOU agree to abide by the practices described in this Privacy Statement which may be changed from time to time
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">WHERE AND WHEN WE COLLECT PERSONAL INFORMATION</h3>
                <p className="text-gray-700">
                  We seek your personal information when you make a donation, request a communication from us, register for an on-ground event, pledge support to our work and campaigns and apply for working or volunteering with The Tale of Humankind. This information may be sought over the phone, through the website, via email, or by the means of face-to-face interaction.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">INFORMATION SECURITY</h3>
                <p className="text-gray-700">
                  The Tale of Humankind has in place the necessary security mechanisms and only designated employees to have access to your personal information. All online transactions are done on a secure server. The information you provide on the donation transaction page is encrypted using SSL - Secure Sockets Layer (you will see a green padlock icon on the left-hand side of the address bar in your browser). At the same time, the website address in the address bar at the top of the browser screen starts with an "https" instead of an "http".
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">DND POLICY</h3>
                <p className="text-gray-700">
                  I agree and consent to receive all communications at the mobile number provided, even if this mobile number is registered under DND/NCPR list under TRAI regulations. And for that purpose, I further authorize Company to share/disclose the information to any third-party service provider or any affiliates, group companies, their authorized agents, or third-party service providers.
                  The Tale of Humankind or their third-party service provider or any affiliates will be making calls and sending SMS/Email through a third party platform.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">THE TALE OF HUMANKIND MAY SHARE YOUR PERSONAL INFORMATION</h3>
                <p className="mb-4 text-gray-700">
                  Except in the limited circumstances elicited below, The Tale of Humankind will never intentionally share your email addresses, phone numbers, or financial information.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li><strong>Credit/Debit Card Transactions, Electronic Fund Transfers, and Payments by Cheque:</strong> We avail the services of third parties to provide donation facilities by the means of cheque, credit/debit card payments, or electronic fund transfers. While your information may be shared with these third parties, we make stringent efforts to require all third party service-providers to hold personal information in strict confidence. However, since we do not have complete control over these third parties, we cannot guarantee your privacy.</li>
                  <li><strong>Necessity:</strong> If The Tale of Humankind is convinced that there has been some inappropriate activity with or on our website/webpages, communications, charitable services, or personal or real property or if we have reasons to believe that any using one of The Tale of Humankind website, our donors, employees, partners, vendors, etc. have been inflicted with any harm, we will disclose (we may or may not notify you) personal information as we deem appropriate.</li>
                  <li><strong>Required by Law:</strong> If any government or legal bodies require any information from us under the purview of a law or legal compliance, we may go ahead and disclose the same.</li>
                  <li><strong>Merger, Acquisition, or other Corporate Restructure:</strong> We also may transfer your personal information to a third party successor in interest if we are involved in an acquisition, merger, or other transfer of control or sale of assets.</li>
                  <li><strong>Requesting Communication:</strong> We have on board certain vendors who execute several donor (existing or potential)-related activities for us like send direct mails, emailers, greeting cards, making phone calls, and others. We may share your information like phone numbers, email addresses, etc. with these agencies so that they can perform these activities on behalf of The Tale of Humankind.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">Cookie Policy</h3>
                <p className="mb-4 text-gray-700">
                  Cookies are pieces of electronic information which will be sent by The Tale of Humankind when you log onto our web site. These will be placed in your computer's hard disk and enable us to recognize you as a user when you next visit.
                </p>
                <p className="mb-4 text-gray-700">
                  You can configure your browser so that it responds to cookies the way you deem fit. For example, you make want to accept all cookies, reject them all, or get notified when a cookie is sent. Please check your browser's settings to modify cookie behavior as per your individual behavior.
                </p>
                <p className="text-gray-700">
                  Please note that if you disable the use of cookies on your web browser or remove or reject specific cookies from our website or linked sites then you may not be able to use the website as it is intended.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-[#050a30]">CHANGES TO PRIVACY PRACTICES</h3>
                <p className="mb-4 text-gray-700">
                  As and when the need arises, The Tale of Humankind may alter its privacy practices in accordance with the latest technology and trends. We strive to provide you with timely notice of these changes. You may reach out to us if you have any queries about any changes made to our practices.
                </p>
                <p className="text-gray-700">
                  Send an email to team@taleofhumankind.com
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