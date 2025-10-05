"use client";

import Image from "next/image";
import { useState } from "react";
import tohkLogo from "@/assets/tohk.jpg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <>
      {/* Newsletter Subscription Section */}
      <section className="section-gradient-light relative w-full py-16 lg:py-20">
        {/* Optional radial spots overlay */}
        <div className="radial-spots-light" />

        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            
            {/* Heading */}
            <h3 className="mb-4 font-bold text-3xl text-[#050a30] lg:text-4xl">
              Stay Connected with YCB
            </h3>
            
            {/* Description */}
            <p className="mx-auto max-w-2xl text-lg text-[#718096] leading-relaxed">
              Get the latest updates on upcoming programs, application deadlines, success stories, and changemaking opportunities delivered straight to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleNewsletterSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-gray-300 bg-white px-6 py-4 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 shadow-sm"
                  required
                  disabled={isLoading || isSubscribed}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || isSubscribed}
                className="group hover:-translate-y-1 hover-glow flex h-12 w-full sm:w-fit mx-auto items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-6 py-3 font-bold text-[#050a30] text-sm leading-[22.4px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg sm:h-14 sm:px-10 sm:py-4 sm:text-base lg:px-12 lg:py-5 lg:text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="hidden sm:inline">Subscribing...</span>
                    <span className="sm:hidden">Subscribing...</span>
                  </>
                ) : isSubscribed ? (
                  <>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span className="hidden sm:inline">Subscribed!</span>
                    <span className="sm:hidden">Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Subscribe</span>
                    <span className="sm:hidden">Subscribe</span>
                    <svg
                      className="transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      height="18"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Subscribe</title>
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
            
            {/* Success Message */}
            {isSubscribed && (
              <div className="mt-4 flex items-center justify-center gap-2 text-yellow-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="text-sm font-medium">Thanks for subscribing! You'll hear from us soon.</span>
              </div>
            )}
          </form>

          {/* Privacy Note */}
          <p className="mt-6 text-sm text-gray-600">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Original Footer */}
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
            <p className="text-sm text-white/80">Young Changemaker Bootcamp</p>
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
                  href="/about"
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
                  href="/editions"
                >
                  Previous Editions
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-[gold]"
                  href="/featured"
                >
                  Featured
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-[gold]"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-[gold]"
                  href="/how-to-apply"
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
                  href="/refund-policy"
                >
                  Refund Policy
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
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
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
            © Copyright 2025 The Tale of Humankind . All Rights Reserved
          </p>
          <p className="mt-2 text-xs text-white/60">
            IIT-Delhi is not responsible for design & delivery of the program.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
