"use client";

import Image from "next/image";
import imageBg from "@/assets/image.png";
import Quotation from "@/assets/quotations.png";
import tohLogo from "@/assets/toh-logo.jpg";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import WorldMap from "@/components/ui/world-map";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Working with mentors and peers from across India opened my eyes to diverse perspectives. The collaborative environment was truly inspiring.",
    name: "Priya Patel",
    school: "Kendriya Vidyalaya, Mumbai",
  },
  {
    id: 2,
    quote:
      "The program transformed my understanding of social impact and gave me the tools to make a real difference in my community.",
    name: "Arjun Singh",
    school: "Delhi Public School, Delhi",
  },
  {
    id: 3,
    quote:
      "YCB connected me with like-minded changemakers and helped me develop a clear vision for my social enterprise.",
    name: "Meera Iyer",
    school: "St. Xavier's College, Mumbai",
  },
  {
    id: 4,
    quote:
      "The hands-on approach and real-world projects gave me confidence to tackle complex social challenges.",
    name: "Rahul Kumar",
    school: "DAV Public School, Bangalore",
  },
  {
    id: 5,
    quote:
      "Being part of YCB opened doors to a network of young leaders who continue to inspire and support each other.",
    name: "Sneha Sharma",
    school: "Miranda House, Delhi University",
  },
];

// Testimonial Card Component
const TestimonialCard = ({
  quote,
  name,
  school,
}: {
  quote: string;
  name: string;
  school: string;
}) => (
  <div className="relative mx-4 h-[280px] w-[620px] flex-shrink-0 overflow-clip">
    {/* Card Background */}
    <div className="absolute inset-0 rounded-[12px] bg-[#f6f6f6] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />

    {/* Profile Image - positioned left */}
    <div className="absolute top-8 left-8 size-[74px] rounded-full border-[3px] border-[gold] bg-[#d9d9d9]" />

    {/* Name and School Container */}
    <div className="absolute top-[45px] left-[130px] text-left">
      <h4 className="mb-1 font-bold text-[#1a365d] text-[20px] leading-[24px]">
        {name}
      </h4>
      <p className="font-normal text-[#718096] text-[16px] leading-[20px]">
        {school}
      </p>
    </div>

    {/* Quote Container */}
    <div className="relative mx-auto mt-[136px] max-w-[465px] px-8">
      {/* Opening Quotation Mark */}
      <div className="-left-[40px] -top-[31px] absolute">
        <Image
          alt=""
          className="h-[62px] w-[62px]"
          height={62}
          src={Quotation}
          width={62}
        />
      </div>

      {/* Quote Text */}
      <p className="text-center font-normal text-[#2d3748] text-[16px] leading-[24.32px]">
        {quote}
      </p>

      {/* Closing Quotation Mark */}
      <div className="-right-[40px] -bottom-[31px] absolute scale-x-[-1] scale-y-[-1]">
        <Image
          alt=""
          className="h-[62px] w-[62px]"
          height={62}
          src={Quotation}
          width={62}
        />
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content */}
      <div className="sr-only absolute top-4 left-4 z-50 rounded bg-white px-4 py-2 text-black focus:not-sr-only">
        Skip to main content
      </div>

      {/* Hero Section */}
      <section className="relative h-[588px] overflow-hidden bg-[#050a30]">
        {/* Background image with proper fallback */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${imageBg.src})`,
          }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000d9] from-[29.808%] via-[#20202080] via-[74.038%] to-[#1514143d] opacity-[0.86]" />

        <div className="relative z-10 mx-auto h-full max-w-7xl px-4">
          <div className="grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Left Content */}
            <div className="pt-20">
              {/* Youth Changemaker Bootcamp Badge */}
              <div className="mb-8 inline-block rounded-full bg-[gold] px-6 py-3">
                <span className="font-bold text-[#1a365d] text-lg">
                  Youth Changemaker Bootcamp
                </span>
              </div>

              {/* Main Heading */}

              <h1 className="mb-8 font-bold text-3xl text-white md:text-4xl lg:text-6xl">
                Equip young people with a{" "}
                <span className="text-[gold]">changemaking mindset.</span>
              </h1>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  className="h-12 rounded-[12px] bg-[gold] px-8 py-3 font-bold text-[#1a365d] text-[14px] leading-[22.4px] hover:bg-[gold]/90"
                  size="lg"
                >
                  Apply
                </Button>
                <Button
                  className="h-12 rounded-[12px] border-2 border-white bg-[rgba(0,0,0,0.43)] px-8 py-3 font-bold text-[#f2f2f2] text-[14px] leading-[22.4px] hover:bg-white/10"
                  size="lg"
                  variant="outline"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About YCB Section */}
      <section className="relative w-full bg-white py-20">
        {/* Grid Background */}
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

        {/* Content */}
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-4 font-bold text-4xl text-[#050a30]">
              About YCB
            </h2>
            <div className="mx-auto mb-12 h-1 w-24 bg-[#d9d9d9]" />

            <div className="mx-auto max-w-4xl">
              <p className="text-[#718096] text-lg leading-relaxed">
                The Youth Changemaker Bootcamp (YCB) is a transformative program
                designed to empower young people with the skills, mindset, and
                network needed to create positive change in their communities
                and beyond. Through immersive learning experiences, mentorship,
                and collaborative projects, participants develop critical
                thinking, leadership, and social innovation capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Network Section */}
      <section className="w-full bg-white py-20">
        {/* Content */}
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-4 font-bold text-4xl text-[#050a30]">
              Impact across India
            </h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-[#d9d9d9]" />
            <p className="mx-auto mb-16 max-w-2xl text-[#718096] text-lg">
              Bootcamp editions and partner schools across key cities.
            </p>
            <div className="mt-8">
              <WorldMap lineColor="#FFD700" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full bg-white py-20">
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
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-4 font-bold text-4xl text-[#050a30]">
              Testimonials
            </h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-[#d9d9d9]" />
            <p className="mx-auto mb-16 max-w-2xl text-[#718096] text-lg">
              Hear what our students have to say about their transformative
              journey.
            </p>

            {/* Testimonial Cards with Marquee */}
            <Marquee className="[--duration:60s]" pauseOnHover>
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  quote={testimonial.quote}
                  school={testimonial.school}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050a30] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Column 1 - Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  alt="TOH Logo"
                  className="h-12 w-12 rounded-full"
                  src={tohLogo}
                />
                <div>
                  <h3 className="font-bold text-2xl">TOH</h3>
                  <p className="text-sm">Youth Changemaker Bootcamp</p>
                </div>
              </div>
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
                    href="#network"
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
                    href="/privacy"
                  >
                    Privacy Notice
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/terms"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/conduct"
                  >
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/safeguarding"
                  >
                    Safeguarding Policy
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/calendar"
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
                    className="transition-colors hover:text-[gold]"
                    href="mailto:ycbootcamp@taleofhumankind.org"
                  >
                    ycbootcamp@taleofhumankind.org
                  </a>
                </li>
                <li className="flex items-center space-x-2">
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
