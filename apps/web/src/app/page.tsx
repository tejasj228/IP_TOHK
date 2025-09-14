"use client";

import Image from "next/image";
import imageBg from "@/assets/image.png";
import Quotation from "@/assets/quotations.png";
import mapImage from "@/assets/mapmap.png";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import tohkLogo from "@/assets/tohk.jpg";
import { useState, useEffect } from "react";

// Hero slider images from Unsplash
const heroImages = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
];

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
  <div className="relative mx-2 h-[180px] w-[320px] sm:h-[220px] sm:w-[480px] md:h-[280px] md:w-[620px] flex-shrink-0 overflow-clip card-hover">
    {/* Card Background */}
    <div className="absolute inset-0 rounded-[12px] bg-[#f6f6f6] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300" />

    {/* Profile Image - positioned left */}
    <div className="absolute top-3 left-3 size-[50px] sm:top-4 sm:left-4 sm:size-[60px] md:top-8 md:left-8 md:size-[74px] rounded-full border-[3px] border-[gold] bg-[#d9d9d9] hover-scale transition-all duration-300" />

    {/* Name and School Container */}
    <div className="absolute top-[20px] left-[75px] sm:top-[30px] sm:left-[80px] md:top-[45px] md:left-[130px] text-left">
      <h4 className="mb-1 font-bold text-[#1a365d] text-[14px] sm:text-[16px] md:text-[20px] leading-[16px] sm:leading-[20px] md:leading-[24px] transition-colors duration-300">
        {name}
      </h4>
      <p className="font-normal text-[#718096] text-[12px] sm:text-[14px] md:text-[16px] leading-[14px] sm:leading-[18px] md:leading-[20px] transition-colors duration-300">
        {school}
      </p>
    </div>

    {/* Quote Container */}
    <div className="relative mx-auto mt-[80px] sm:mt-[100px] md:mt-[136px] max-w-[280px] sm:max-w-[360px] md:max-w-[465px] px-3 sm:px-4 md:px-8">
      {/* Opening Quotation Mark */}
      <div className="-left-[20px] -top-[15px] sm:-left-[25px] sm:-top-[20px] md:-left-[40px] md:-top-[31px] absolute">
        <Image
          alt=""
          className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[62px] md:w-[62px]"
          height={62}
          src={Quotation}
          width={62}
        />
      </div>

      {/* Quote Text */}
      <p className="text-center font-normal text-[#2d3748] text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[20px] md:leading-[24.32px]">
        {quote}
      </p>

      {/* Closing Quotation Mark */}
      <div className="-right-[20px] -bottom-[15px] sm:-right-[25px] sm:-bottom-[20px] md:-right-[40px] md:-bottom-[31px] absolute scale-x-[-1] scale-y-[-1]">
        <Image
          alt=""
          className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[62px] md:w-[62px]"
          height={62}
          src={Quotation}
          width={62}
        />
      </div>
    </div>
  </div>
);

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Skip to main content */}
      <div className="sr-only absolute top-4 left-4 z-50 rounded bg-white px-4 py-2 text-black focus:not-sr-only">
        Skip to main content
      </div>

      {/* Hero Section */}
      <section id="hero-section" className="relative min-h-screen overflow-hidden bg-[#050a30]">
        {/* Background image slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </div>
        
        {/* Enhanced gradient overlay - darker on left, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000e6] from-[0%] via-[#000000cc] via-[35%] to-[#00000066] to-[70%] opacity-90" />
        
        {/* Additional overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000040] via-transparent to-[#00000040]" />

        <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full min-h-screen items-center">
            <div className="grid w-full grid-cols-1 gap-8 py-20 lg:grid-cols-2 lg:py-32">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
                {/* Youth Changemaker Bootcamp Badge */}
                <div className="w-fit rounded-full bg-[gold] px-4 py-2 sm:px-6 sm:py-3 lg:px-9 lg:py-4">
                  <span className="font-bold text-[#1a365d] text-sm sm:text-base lg:text-lg">
                    Young Changemaker Bootcamp
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="font-bold text-white tracking-[0.01em] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
                  Equip young people with a{" "}
                  <span className="text-[gold]">changemaking mindset.</span>
                </h1>

                {/* Short description */}
                <p className="max-w-2xl text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed tracking-[0.005em]">
                  A one-week, residential bootcamp where high-schoolers learn to identify real-world
                  problems, design solutions, and lead with empathy—through hands-on projects,
                  mentorship, and a national peer network.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button
                    className="h-10 sm:h-12 w-full sm:w-auto rounded-[12px] bg-[gold] px-6 sm:px-8 py-2 sm:py-3 font-bold text-[#1a365d] text-sm sm:text-[14px] leading-[22.4px] hover:bg-[gold]/90 btn-primary-hover hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover-glow"
                    size="lg"
                  >
                    Apply
                  </Button>
                  <Button
                    className="h-10 sm:h-12 w-full sm:w-auto rounded-[12px] border-2 border-white bg-[rgba(0,0,0,0.43)] px-6 sm:px-8 py-2 sm:py-3 font-bold text-[#f2f2f2] text-sm sm:text-[14px] leading-[22.4px] hover:bg-white/10 smooth-hover hover:border-[gold] hover:text-[gold] hover:-translate-y-1"
                    size="lg"
                    variant="outline"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              
              {/* Slider Indicators */}
              <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-[gold] shadow-lg' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About YCB Section */}
      <section className="relative w-full bg-[#050a30] py-20">
        {/* Base navy background */}
        <div className="absolute inset-0 bg-[#050a30]" />
        {/* Grid Background with lighter navy */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(80, 100, 160, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(80, 100, 160, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div className="relative z-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-white">About YCB</h2>
              <div className="mx-auto mt-4 h-1 w-24 bg-[gold]" />
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 items-center">
              {/* Left side - Image */}
              <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right side - Content */}
              <div className="flex flex-col justify-between space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    The Young Changemakers Bootcamp is a one-week, intensive residential program for
                    <span className="text-[gold] font-semibold"> high-school students </span>
                    across India (grades 9-12). We equip young people with
                    <span className="text-[gold] font-semibold"> real-world problem-solving, entrepreneurial, and
                    leadership skills </span>
                    through hands-on, interdisciplinary learning.
                  </p>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Our program combines interactive workshops, real-world projects, and mentorship from industry experts to create a transformative learning experience. Students work in diverse teams to tackle pressing social challenges while developing crucial 21st-century skills.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {/* Cities */}
                  <div className="rounded-xl p-4 sm:p-6 shadow-lg border force-bg relative overflow-hidden hover-lift hover-glow smooth-hover" style={{ borderColor: 'rgba(255,215,0,0.15)' }}>
                    {/* solid inner layer to fully obscure background grid */}
                    <div aria-hidden className="absolute inset-0 bg-[#071036]" style={{ zIndex: 0 }} />
                    <div className="relative z-10 text-center sm:text-left">
                      <h3 className="font-bold text-3xl sm:text-4xl text-[gold] mb-1 sm:mb-2 transition-all duration-300">9</h3>
                      <p className="text-gray-300 text-sm">Cities</p>
                    </div>
                  </div>

                  {/* Partner Schools */}
                  <div className="rounded-xl p-4 sm:p-6 shadow-lg border force-bg relative overflow-hidden hover-lift hover-glow smooth-hover" style={{ borderColor: 'rgba(255,215,0,0.15)' }}>
                    {/* solid inner layer to fully obscure background grid */}
                    <div aria-hidden className="absolute inset-0 bg-[#071036]" style={{ zIndex: 0 }} />
                    <div className="relative z-10 text-center sm:text-left">
                      <h3 className="font-bold text-3xl sm:text-4xl text-[gold] mb-1 sm:mb-2 transition-all duration-300">25+</h3>
                      <p className="text-gray-300 text-sm">Partner Schools</p>
                    </div>
                  </div>

                  {/* Students */}
                  <div className="rounded-xl p-4 sm:p-6 shadow-lg border force-bg relative overflow-hidden hover-lift hover-glow smooth-hover" style={{ borderColor: 'rgba(255,215,0,0.15)' }}>
                    {/* solid inner layer to fully obscure background grid */}
                    <div aria-hidden className="absolute inset-0 bg-[#071036]" style={{ zIndex: 0 }} />
                    <div className="relative z-10 text-center sm:text-left">
                      <h3 className="font-bold text-3xl sm:text-4xl text-[gold] mb-1 sm:mb-2 transition-all duration-300">500+</h3>
                      <p className="text-gray-300 text-sm">Students Impacted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <div className="mt-12 sm:mt-16 flex justify-center">
              <Button
                className="h-10 sm:h-12 w-full sm:w-auto max-w-sm rounded-[12px] border-2 border-[gold] bg-transparent px-6 sm:px-8 py-2 sm:py-3 font-bold text-[gold] text-sm sm:text-[14px] leading-[22.4px] hover:bg-[gold] hover:text-[#050a30] transition-all duration-300 group flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg hover-glow"
                size="lg"
                variant="outline"
              >
                Read More About YCB
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Network Section */}
      <section className="relative w-full bg-white py-8 sm:py-16 lg:py-20">
        {/* Content */}
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 text-center bg-white">
            <h2 className="mb-4 font-bold text-4xl text-[#050a30]">
              Impact across India
            </h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-[#d9d9d9]" />
            <p className="mx-auto mb-1 sm:mb-12 lg:mb-16 max-w-2xl text-[#718096] text-lg">
              Bootcamp editions and partner schools across key cities.
            </p>
            <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
              {/* India map image */}
              <div className="relative w-[900px] h-[600px] max-w-full">
                <Image
                  src={mapImage}
                  alt="Map of YCB's impact across India"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>
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
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-[#050a30]">
              Testimonials
            </h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-[#d9d9d9]" />
            <p className="mx-auto mb-16 max-w-2xl text-[#718096] text-lg">
              Hear what our students have to say about their transformative
              journey.
            </p>

            {/* Testimonial Cards with Marquee */}
            <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
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
        </div>
      </section>

      {/* Featured Section */}
      <section className="relative w-full bg-[#f7fafc] py-20">
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-[#050a30]">Featured</h2>
              <div className="mx-auto mt-4 h-1 w-24 bg-[#d9d9d9]" />
              <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                Some of the top stories from our featured Partners
              </p>
            </div>

            {/* Featured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative flex flex-col card-hover" style={{ backgroundColor: '#ffffff' }}>
                {/* white overlay behind image + content */}
                <div aria-hidden className="absolute inset-0 bg-white" style={{ zIndex: 0 }} />
                <div className="relative h-[200px] z-10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Student speaking at conference"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 relative z-20 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-[#050a30] mb-2">Ananya Gupta</h3>
                  <p className="text-[#718096] mb-4">
                    On a mission to build support network for Women Social Entrepreneurs and Changemakers.
                  </p>
                  <div className="mt-auto">
                    <a href="/stories/ananya-gupta" className="text-[gold] hover:text-[gold]/80 font-semibold flex items-center gap-1 link-hover group transition-all duration-300">
                      Read more <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative flex flex-col card-hover" style={{ backgroundColor: '#ffffff' }}>
                <div aria-hidden className="absolute inset-0 bg-white" style={{ zIndex: 0 }} />
                <div className="relative h-[200px] z-10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Students collaborating"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 relative z-20 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-[#050a30] mb-2">Rural Education Initiative</h3>
                  <p className="text-[#718096] mb-4">
                    YCB alumni launch program to bring quality education to 15 rural schools in Maharashtra.
                  </p>
                  <div className="mt-auto">
                    <a href="/stories/rural-education" className="text-[gold] hover:text-[gold]/80 font-semibold flex items-center gap-1 link-hover group transition-all duration-300">
                      Read more <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative flex flex-col card-hover" style={{ backgroundColor: '#ffffff' }}>
                <div aria-hidden className="absolute inset-0 bg-white" style={{ zIndex: 0 }} />
                <div className="relative h-[200px] z-10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Tech workspace"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 relative z-20 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-[#050a30] mb-2">Tech for Change</h3>
                  <p className="text-[#718096] mb-4">
                    Student startup develops app to connect local farmers directly with urban consumers.
                  </p>
                  <div className="mt-auto">
                    <a href="/stories/tech-for-change" className="text-[gold] hover:text-[gold]/80 font-semibold flex items-center gap-1 link-hover group transition-all duration-300">
                      Read more <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative flex flex-col card-hover" style={{ backgroundColor: '#ffffff' }}>
                <div aria-hidden className="absolute inset-0 bg-white" style={{ zIndex: 0 }} />
                <div className="relative h-[200px] z-10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Environmental project"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 relative z-20 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-[#050a30] mb-2">Green Campus Movement</h3>
                  <p className="text-[#718096] mb-4">
                    YCB participants lead successful campaign to make 25 schools plastic-free zones.
                  </p>
                  <div className="mt-auto">
                    <a href="/stories/green-campus" className="text-[gold] hover:text-[gold]/80 font-semibold flex items-center gap-1 link-hover group transition-all duration-300">
                      Read more <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative flex flex-col card-hover" style={{ backgroundColor: '#ffffff' }}>
                <div aria-hidden className="absolute inset-0 bg-white" style={{ zIndex: 0 }} />
                <div className="relative h-[200px] z-10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Community event"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 relative z-20 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-[#050a30] mb-2">Mental Health Advocacy</h3>
                  <p className="text-[#718096] mb-4">
                    Student-led mental health awareness program reaches over 1000 teenagers across Delhi.
                  </p>
                  <div className="mt-auto">
                    <a href="/stories/mental-health" className="text-[gold] hover:text-[gold]/80 font-semibold flex items-center gap-1 link-hover group transition-all duration-300">
                      Read more <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative flex flex-col card-hover" style={{ backgroundColor: '#ffffff' }}>
                <div aria-hidden className="absolute inset-0 bg-white" style={{ zIndex: 0 }} />
                <div className="relative h-[200px] z-10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Leadership workshop"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 relative z-20 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-[#050a30] mb-2">Youth Leadership Summit</h3>
                  <p className="text-[#718096] mb-4">
                    YCB alumni organize first-ever pan-India youth leadership summit with 500+ participants.
                  </p>
                  <div className="mt-auto">
                    <a href="/stories/leadership-summit" className="text-[gold] hover:text-[gold]/80 font-semibold flex items-center gap-1 link-hover group transition-all duration-300">
                      Read more <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050a30] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
            {/* Column 1 - Brand */}
            <div className="space-y-4 flex flex-col items-center md:items-start">
              {/* TOHK Logo at top */}
              <Image
                src={tohkLogo}
                alt="TOHK logo"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
                priority
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
                    className="transition-colors hover:text-[gold] break-all"
                    href="mailto:ycbootcamp@taleofhumankind.org"
                  >
                    ycbootcamp@taleofhumankind.org
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
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
