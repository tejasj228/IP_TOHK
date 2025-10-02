"use client";

import Image from "next/image";
import Link from "next/link";
import tohkLogo from "@/assets/tohk.jpg";

export default function TentativeCalendar() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#050a30] md:text-5xl">
              Tentative Calendar
            </h1>
            <p className="text-lg text-gray-600">
              Stay updated with our upcoming events, workshops, and important dates.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Current Program */}
            <section className="rounded-lg bg-gradient-to-r from-[#050a30] to-[#1a365d] p-8 text-white">
              <h2 className="mb-6 text-3xl font-bold">YCB Delhi 2025</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-4">
                  <h3 className="mb-2 text-xl font-semibold text-[gold]">Application Period</h3>
                  <p className="text-white/90">October 1 - November 15, 2025</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <h3 className="mb-2 text-xl font-semibold text-[gold]">Selection Process</h3>
                  <p className="text-white/90">November 16 - November 30, 2025</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <h3 className="mb-2 text-xl font-semibold text-[gold]">Program Dates</h3>
                  <p className="text-white/90">December 15-22, 2025</p>
                </div>
              </div>
            </section>

            {/* Detailed Calendar */}
            <section>
              <h2 className="mb-8 text-3xl font-bold text-[#050a30]">Detailed Schedule</h2>
              
              {/* October 2025 */}
              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-semibold text-[#050a30]">October 2025</h3>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-[#050a30]">October 1</h4>
                        <p className="text-gray-600">Applications Open</p>
                      </div>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Open</span>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-[#050a30]">October 15</h4>
                        <p className="text-gray-600">Information Webinar</p>
                      </div>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">Virtual Event</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-[#050a30]">October 31</h4>
                        <p className="text-gray-600">Early Bird Application Deadline</p>
                      </div>
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">Deadline</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* November 2025 */}
              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-semibold text-[#050a30]">November 2025</h3>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-[#050a30]">November 1-10</h4>
                        <p className="text-gray-600">Application Review Process</p>
                      </div>
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">Internal</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-[#050a30]">November 15</h4>
                        <p className="text-gray-600">Final Application Deadline</p>
                      </div>
                      <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">Final Deadline</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-[#050a30]">November 16-25</h4>
                        <p className="text-gray-600">Interviews & Selection Process</p>
                      </div>
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">Selection</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-[#050a30]">November 30</h4>
                        <p className="text-gray-600">Selection Results Announced</p>
                      </div>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Announcement</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* December 2025 */}
              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-semibold text-[#050a30]">December 2025</h3>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-[#050a30]">December 1-10</h4>
                        <p className="text-gray-600">Pre-program Preparation & Materials</p>
                      </div>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">Preparation</span>
                    </div>
                  </div>

                  <div className="rounded-lg border-2 border-[gold] bg-[gold]/5 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-[#050a30]">December 15-22</h4>
                        <p className="text-gray-600 font-medium">YCB Delhi 2025 - Main Program</p>
                      </div>
                      <span className="rounded-full bg-[gold] px-3 py-1 text-sm font-medium text-[#050a30]">Main Event</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Schedule Detail */}
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-[#050a30]">YCB Delhi 2025 - Daily Schedule</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="rounded border-l-4 border-[gold] bg-white p-3">
                      <h4 className="font-medium text-[#050a30]">Day 1 (Dec 15) - Orientation</h4>
                      <p className="text-sm text-gray-600">Welcome, Ice-breakers, Program Overview</p>
                    </div>
                    
                    <div className="rounded border-l-4 border-[gold] bg-white p-3">
                      <h4 className="font-medium text-[#050a30]">Day 2-3 (Dec 16-17) - Foundation</h4>
                      <p className="text-sm text-gray-600">Leadership Skills, Communication, Team Building</p>
                    </div>
                    
                    <div className="rounded border-l-4 border-[gold] bg-white p-3">
                      <h4 className="font-medium text-[#050a30]">Day 4-5 (Dec 18-19) - Innovation</h4>
                      <p className="text-sm text-gray-600">Design Thinking, Problem Solving, Project Work</p>
                    </div>
                    
                    <div className="rounded border-l-4 border-[gold] bg-white p-3">
                      <h4 className="font-medium text-[#050a30]">Day 6-7 (Dec 20-21) - Impact</h4>
                      <p className="text-sm text-gray-600">Project Presentations, Networking, Action Planning</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="rounded border-l-4 border-[gold] bg-white p-3">
                      <h4 className="font-medium text-[#050a30]">Day 8 (Dec 22) - Celebration</h4>
                      <p className="text-sm text-gray-600">Graduation Ceremony, Alumni Network Introduction</p>
                    </div>
                    
                    <div className="rounded bg-blue-50 p-3">
                      <h4 className="font-medium text-blue-800">Daily Schedule</h4>
                      <ul className="text-sm text-blue-700">
                        <li>9:00 AM - 12:30 PM: Morning Sessions</li>
                        <li>12:30 PM - 1:30 PM: Lunch Break</li>
                        <li>1:30 PM - 5:00 PM: Afternoon Sessions</li>
                        <li>5:00 PM - 6:00 PM: Reflection & Networking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Notes */}
            <section className="rounded-lg bg-yellow-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-[#050a30]">Important Notes</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-yellow-600">⚠️</span>
                  <span>All dates are tentative and subject to change based on circumstances and participant availability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">ℹ️</span>
                  <span>Selected participants will receive detailed schedules and preparation materials via email.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-600">✅</span>
                  <span>All events will follow current health and safety guidelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-600">📧</span>
                  <span>Updates and changes will be communicated via email and our website.</span>
                </li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="text-center">
              <h3 className="mb-4 text-xl font-semibold text-[#050a30]">Questions about the Schedule?</h3>
              <p className="mb-4 text-gray-600">
                For any questions regarding the program schedule or important dates, please contact us:
              </p>
              <a
                href="mailto:ycbootcamp@taleofhumankind.org"
                className="inline-flex items-center rounded-lg bg-[#050a30] px-6 py-3 font-medium text-white transition-colors hover:bg-[#050a30]/90"
              >
                Contact Program Team
              </a>
            </section>
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