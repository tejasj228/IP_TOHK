"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Quotation from "@/assets/quotations.png";
import tohkLogo from "@/assets/tohk.jpg";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import WorldMap from "@/components/ui/world-map";

// Notification Banner Component
const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Only show if it hasn't been shown in this session
    if (!hasShown) {
      // Show notification after a short delay
      const showTimer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, 1000);

      // Auto-hide after 15 seconds
      const hideTimer = setTimeout(() => {
        handleClose();
      }, 16000); // 1 second delay + 15 seconds = 16 seconds total

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Animation duration
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-sm transition-all duration-300 ${
      isClosing 
        ? 'translate-x-full opacity-0' 
        : 'translate-x-0 opacity-100'
    } sm:max-w-md lg:max-w-lg`}>
      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white/95 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur">
        {/* Close button with larger hit area */}
        <button
          onClick={handleClose}
          className="absolute -top-1 -right-1 h-10 w-10 rounded-full p-2 text-gray-600 transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[gold]/50"
          aria-label="Close notification"
        >
          <span className="flex h-full w-full items-center justify-center rounded-full">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </span>
        </button>

        {/* Content */}
        <div className="relative pr-6">
          {/* Header */}
          <div className="mb-2 flex items-center gap-2">
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[gold]" />
            <h3 className="font-semibold text-[#050a30] text-sm sm:text-base">
              🎉 New Workshop Alert!
            </h3>
          </div>

          {/* Main message */}
          <p className="mb-3 text-gray-700 text-xs leading-relaxed sm:text-sm">
            <span className="font-semibold text-[#050a30]">YCB Delhi Workshop</span> is coming this November! 
            Join 200+ young changemakers for an intensive week of innovation, leadership, and 
            real-world problem solving.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <button 
              className="flex-1 rounded-md bg-[gold] px-3 py-1.5 font-medium text-[#050a30] text-xs transition-all duration-200 hover:bg-[gold]/90 hover:scale-105 sm:text-sm"
              onClick={() => {
                // Add registration link logic here
                window.open('#', '_blank');
                handleClose();
              }}
            >
              Register Now
            </button>
            <button 
              className="flex-1 rounded-md border border-gray-200 px-3 py-1.5 font-medium text-gray-700 text-xs transition-all duration-200 hover:bg-gray-50 sm:text-sm"
              onClick={handleClose}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
          <div 
            className="h-full w-full origin-left scale-x-0 bg-[gold] transition-transform duration-[15000ms] ease-linear"
            style={{ transform: isVisible && !isClosing ? 'scaleX(1)' : 'scaleX(0)' }}
          />
        </div>
      </div>
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ 
  target, 
  suffix = "", 
  duration = 2000 
}: { 
  target: number; 
  suffix?: string; 
  duration?: number; 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef}>
      <h3 className="mb-1 font-bold text-lg text-[gold] transition-all duration-300 sm:mb-2 sm:text-3xl lg:text-4xl">
        {count}{suffix}
      </h3>
    </div>
  );
};

// Hero slider images from Unsplash
const heroImages = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
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
  <div className="card-hover relative mx-2 h-[180px] w-[320px] flex-shrink-0 overflow-clip sm:h-[220px] sm:w-[480px] md:h-[280px] md:w-[620px]">
    {/* Card Background with gradient */}
    <div className="absolute inset-0 rounded-[12px] card-gradient-testimonial transition-all duration-300" />

    {/* Profile Image - positioned left with gradient border */}
    <div className="hover-scale absolute top-3 left-3 size-[50px] rounded-full border-[3px] border-[gold] bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] transition-all duration-300 sm:top-4 sm:left-4 sm:size-[60px] md:top-8 md:left-8 md:size-[74px]" />

    {/* Name and School Container */}
    <div className="absolute top-[20px] left-[75px] text-left sm:top-[30px] sm:left-[80px] md:top-[45px] md:left-[130px]">
      <h4 className="mb-1 font-bold text-[#1a365d] text-[14px] leading-[16px] transition-colors duration-300 sm:text-[16px] sm:leading-[20px] md:text-[20px] md:leading-[24px]">
        {name}
      </h4>
      <p className="font-normal text-[#718096] text-[12px] leading-[14px] transition-colors duration-300 sm:text-[14px] sm:leading-[18px] md:text-[16px] md:leading-[20px]">
        {school}
      </p>
    </div>

    {/* Quote Container */}
    <div className="relative mx-auto mt-[80px] max-w-[280px] px-3 sm:mt-[100px] sm:max-w-[360px] sm:px-4 md:mt-[136px] md:max-w-[465px] md:px-8">
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
      <p className="text-center font-normal text-[#2d3748] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[20px] md:text-[16px] md:leading-[24.32px]">
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

const HERO_IMAGE_SLIDE_DURATION = 5000;

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, HERO_IMAGE_SLIDE_DURATION); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Notification Banner */}
      <NotificationBanner />
      
      {/* Skip to main content */}
      <div className="sr-only absolute top-4 left-4 z-50 rounded bg-white px-4 py-2 text-black focus:not-sr-only">
        Skip to main content
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen overflow-hidden bg-[#050a30]"
        id="hero-section"
      >
        {/* Background image slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              key={index}
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

        <div className="relative z-10 h-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex h-full min-h-screen items-center">
            <div className="w-full py-20 lg:py-32">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                {/* Youth Changemaker Bootcamp Badge */}
                {/* <div className="w-fit rounded-full bg-[gold] px-4 py-2 sm:px-6 sm:py-3 lg:px-9 lg:py-4">
                  <span className="font-bold text-[#1a365d] text-sm sm:text-base lg:text-lg">
                    Young Changemaker Bootcamp
                  </span>
                </div> */}

                {/* Main Heading */}
                <h1 className="font-bold text-4xl text-white md:text-5xl lg:text-7xl leading-tight">
                  Equip young people with a{" "}
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent italic font-extrabold">
                    changemaking mindset.
                  </span>
                </h1>

                {/* Short description */}
                <p className="max-w-xl lg:max-w-2xl xl:max-w-3xl text-base text-white/90 leading-relaxed tracking-[0.005em] sm:text-lg lg:text-xl">
                  A one-week, residential bootcamp where high-schoolers learn to
                  identify real-world problems, design solutions, and lead with
                  empathy—through hands-on projects, mentorship, and a national
                  peer network.
                </p>
              </div>

              {/* Slider Indicators */}
              <div className="-translate-x-1/2 absolute bottom-8 left-1/2 z-20 hidden transform space-x-2 lg:flex">
                {heroImages.map((_, index) => (
                  <button
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-[gold] shadow-lg"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    key={`hero-image-indicator-${index}`}
                    onClick={() => setCurrentImageIndex(index)}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About YCB Section */}
  <section className="relative w-full overflow-hidden bg-soft-dark py-20">
        {/* Optional subtle overlay pattern */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* Section Title */}
            <div className="mb-12 text-center">
              <h2 className="font-bold text-4xl text-white">About YCB</h2>
              <div className="mx-auto mt-4 gradient-underline" />
            </div>

            <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2">
              {/* Left side - Clean Single Image */}
              <div className="relative h-[400px] overflow-hidden rounded-2xl sm:h-[500px] lg:h-[400px] group">
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#050a30]/20 via-transparent to-transparent rounded-2xl" />
                
                {/* Main image */}
                <div className="relative h-full w-full">
                  <Image
                    alt="Young changemakers collaborating and innovating"
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    fill
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                  
                  {/* Simple corner badge */}
                  <div className="absolute bottom-6 left-6 z-20 rounded-lg bg-[gold] px-3 py-2 shadow-lg">
                    <p className="font-bold text-[#050a30] text-sm"></p>
                  </div>
                </div>
              </div>

              {/* Right side - Content aligned with image height */}
              <div className="flex flex-col lg:h-[400px]">
                {/* Text content at the top */}
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-base text-gray-300 leading-relaxed sm:text-lg">
                    The Young Changemakers Bootcamp is a one-week, intensive
                    residential program for
                    <span className="font-semibold text-[gold]">
                      {" "}
                      high-school students{" "}
                    </span>
                    across India (grades 9-12). We equip young people with
                    <span className="font-semibold text-[gold]">
                      {" "}
                      real-world problem-solving, entrepreneurial, and
                      leadership skills{" "}
                    </span>
                    through hands-on, interdisciplinary learning.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed sm:text-lg">
                    Our program combines interactive workshops, real-world
                    projects, and mentorship from industry experts to create a
                    transformative learning experience. Students work in diverse
                    teams to tackle pressing social challenges while developing
                    crucial 21st-century skills.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed sm:text-lg">
                    Through collaborative projects,
                    expert mentorship, participants develop 
                    <span className="font-semibold text-[gold]">
                      {" "}
                      innovative solutions{" "}
                    </span>
                    to real-world problems affecting their communities. 
                  </p>
                  <div className="flex items-center space-x-6 pt-2">
                    
                  </div>
                </div>

                {/* Read More Button */}
                <div className="flex justify-start mt-6 lg:mt-auto">
                  <Button
                    className="group hover:-translate-y-1 hover-glow flex h-10 w-fit items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-4 py-2 font-bold text-[12px] text-[#050a30] leading-[20px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg sm:h-12 sm:px-8 sm:py-3 sm:text-[14px] sm:leading-[22.4px]"
                    size="lg"
                  >
                    <span className="hidden sm:inline">Read More About YCB</span>
                    <span className="sm:hidden">Read More</span>
                    <svg
                      className="transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Read More</title>
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Network Section */}
      <section className="relative w-full section-gradient-light py-8 sm:py-16 lg:py-20">
        {/* Optional radial spots overlay */}
        <div className="radial-spots-light"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl bg-transparent px-4 text-center">
            <h2 className="mb-4 font-bold text-4xl text-[#050a30]">
              Impact across <span className="gradient-text-gold">India</span>
            </h2>
            <div className="mx-auto mb-4 gradient-underline" />
            <p className="mx-auto mb-1 max-w-2xl text-[#718096] text-lg sm:mb-12 lg:mb-16">
              Bootcamp editions and partner schools across key cities.
            </p>

            {/* Stats Grid */}
            <div className="mx-auto mt-4 mb-12 flex max-w-4xl justify-center gap-2 sm:mt-6 sm:gap-6 lg:mb-16">
              {/* Cities */}
              <div
                className="stats-card-gradient hover-lift hover-glow smooth-hover relative w-24 overflow-hidden rounded-lg p-2 shadow-lg sm:w-32 sm:rounded-xl sm:p-4 lg:w-40 lg:p-6"
              >
                <div className="relative z-10 text-center">
                  <AnimatedCounter target={9} duration={1500} />
                  <p className="text-gray-600 text-xs sm:text-sm">Cities</p>
                </div>
              </div>

              {/* Partner Schools */}
              <div
                className="stats-card-gradient hover-lift hover-glow smooth-hover relative w-24 overflow-hidden rounded-lg p-2 shadow-lg sm:w-32 sm:rounded-xl sm:p-4 lg:w-40 lg:p-6"
              >
                <div className="relative z-10 text-center">
                  <AnimatedCounter target={25} suffix="+" duration={2000} />
                  <p className="text-gray-600 text-xs sm:text-sm">Partner Schools</p>
                </div>
              </div>

              {/* Students */}
              <div
                className="stats-card-gradient hover-lift hover-glow smooth-hover relative w-24 overflow-hidden rounded-lg p-2 shadow-lg sm:w-32 sm:rounded-xl sm:p-4 lg:w-40 lg:p-6"
              >
                <div className="relative z-10 text-center">
                  <AnimatedCounter target={500} suffix="+" duration={2500} />
                  <p className="text-gray-600 text-xs sm:text-sm">Students</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <WorldMap/>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full section-gradient-alt py-20">
        {/* Optional radial spots overlay */}
        <div className="radial-spots-light"></div>
        
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
            <div className="mx-auto mb-4 gradient-underline" />
            <p className="mx-auto mb-16 max-w-2xl text-[#718096] text-lg">
              Hear what our students have to say about their transformative
              journey.
            </p>

            {/* Testimonial Cards with Marquee */}
            <div className="-ml-[50vw] -mr-[50vw] relative right-[50%] left-[50%] w-[100vw]">
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
            <div className="mb-12 text-center">
              <h2 className="font-bold text-4xl text-[#050a30]">Featured</h2>
              <div className="mx-auto mt-4 h-1 w-24 bg-[#d9d9d9]" />
              <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                Some of the top stories from our featured Partners
              </p>
            </div>

            {/* Featured Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                {/* white overlay behind image + content */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 h-[200px] overflow-hidden">
                  <Image
                    alt="Student speaking at conference"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                </div>
                <div className="relative z-20 flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                    Ananya Gupta
                  </h3>
                  <p className="mb-4 text-[#718096]">
                    On a mission to build support network for Women Social
                    Entrepreneurs and Changemakers.
                  </p>
                  <div className="mt-auto">
                    <a
                      className="link-hover group flex items-center gap-1 font-semibold text-[gold] transition-all duration-300 hover:text-[gold]/80"
                      href="/stories/ananya-gupta"
                    >
                      Read more{" "}
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 h-[200px] overflow-hidden">
                  <Image
                    alt="Students collaborating"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                </div>
                <div className="relative z-20 flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                    Rural Education Initiative
                  </h3>
                  <p className="mb-4 text-[#718096]">
                    YCB alumni launch program to bring quality education to 15
                    rural schools in Maharashtra.
                  </p>
                  <div className="mt-auto">
                    <a
                      className="link-hover group flex items-center gap-1 font-semibold text-[gold] transition-all duration-300 hover:text-[gold]/80"
                      href="/stories/rural-education"
                    >
                      Read more{" "}
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 h-[200px] overflow-hidden">
                  <Image
                    alt="Tech workspace"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                </div>
                <div className="relative z-20 flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                    Tech for Change
                  </h3>
                  <p className="mb-4 text-[#718096]">
                    Student startup develops app to connect local farmers
                    directly with urban consumers.
                  </p>
                  <div className="mt-auto">
                    <a
                      className="link-hover group flex items-center gap-1 font-semibold text-[gold] transition-all duration-300 hover:text-[gold]/80"
                      href="/stories/tech-for-change"
                    >
                      Read more{" "}
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 h-[200px] overflow-hidden">
                  <Image
                    alt="Environmental project"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                </div>
                <div className="relative z-20 flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                    Green Campus Movement
                  </h3>
                  <p className="mb-4 text-[#718096]">
                    YCB participants lead successful campaign to make 25 schools
                    plastic-free zones.
                  </p>
                  <div className="mt-auto">
                    <a
                      className="link-hover group flex items-center gap-1 font-semibold text-[gold] transition-all duration-300 hover:text-[gold]/80"
                      href="/stories/green-campus"
                    >
                      Read more{" "}
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 h-[200px] overflow-hidden">
                  <Image
                    alt="Community event"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                </div>
                <div className="relative z-20 flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                    Mental Health Advocacy
                  </h3>
                  <p className="mb-4 text-[#718096]">
                    Student-led mental health awareness program reaches over
                    1000 teenagers across Delhi.
                  </p>
                  <div className="mt-auto">
                    <a
                      className="link-hover group flex items-center gap-1 font-semibold text-[gold] transition-all duration-300 hover:text-[gold]/80"
                      href="/stories/mental-health"
                    >
                      Read more{" "}
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 h-[200px] overflow-hidden">
                  <Image
                    alt="Leadership workshop"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                </div>
                <div className="relative z-20 flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                    Youth Leadership Summit
                  </h3>
                  <p className="mb-4 text-[#718096]">
                    YCB alumni organize first-ever pan-India youth leadership
                    summit with 500+ participants.
                  </p>
                  <div className="mt-auto">
                    <a
                      className="link-hover group flex items-center gap-1 font-semibold text-[gold] transition-all duration-300 hover:text-[gold]/80"
                      href="/stories/leadership-summit"
                    >
                      Read more{" "}
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
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
