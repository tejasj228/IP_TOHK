"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ycbLogo from "@/assets/YCB.png";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    // Observe the start of the "Impact across India" section instead of hero
    const impactSentinel = document.querySelector("#impact-sentinel");
    if (!impactSentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Turn header navy when the Impact section enters the viewport
        setIsScrolled(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px", // matches header height for precise trigger
      }
    );

    observer.observe(impactSentinel);
    // Fallback: also listen to scroll to handle cases where IntersectionObserver
    // may behave differently across environments (or during rapid resizes).
    const onScroll = () => {
      const rect = (impactSentinel as HTMLElement).getBoundingClientRect();
      // If the top of the Impact section passes the header, switch to navy
      const headerHeight = 80; // keep in sync with header height
      setIsScrolled(rect.top <= headerHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once to sync initial state
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "#about", label: "About YCB" },
    { to: "#network", label: "Our Network" },
    { to: "#editions", label: "Previous Editions" },
    { to: "#featured", label: "Featured" },
  ] as const;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-soft-dark shadow-lg"
            : "border-white/10 border-b bg-black/20 backdrop-blur-lg backdrop-saturate-150"
        }`}
      >
        <div className="flex h-20 w-full items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="relative z-70 flex h-full items-center justify-center overflow-hidden">
            <Link
              className="smooth-hover flex items-center justify-center hover:scale-105 mt-3"
              href="/"
            >
              <Image
                alt="YCB Logo"
                className="h-32 w-auto object-contain lg:h-38 xl:h-42"
                height={112}
                priority
                src={ycbLogo}
                width={336}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 hidden md:block">
            <nav className="flex items-center gap-4 text-lg lg:gap-6 xl:gap-8">
              {links.map(({ to, label }) => {
                const isActive =
                  pathname === to || (to !== "/" && pathname.startsWith(to));
                return (
                  <Link
                    className={`link-hover group relative font-bold text-[12px] leading-[18px] lg:text-[13px] lg:leading-[20px] xl:text-[15px] xl:leading-[24.32px] ${
                      isActive ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                    href={to}
                    key={to}
                  >
                    {label}
                    {isActive && (
                      <div className="-bottom-1 absolute h-0.5 w-full bg-[gold] transition-all duration-300" />
                    )}
                    {!isActive && (
                      <div className="-bottom-1 absolute h-0.5 w-0 bg-[gold] transition-all duration-300 group-hover:w-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop Apply Button and Profile - Hidden on mobile */}
          <div className="hidden h-full items-center gap-2 md:flex lg:gap-3">
            <Button
              asChild
              className="btn-primary-hover hover:-translate-y-0.5 bg-white px-3 py-1.5 font-bold text-[#1a365d] text-xs transition-all duration-300 hover:bg-white/90 hover:shadow-lg lg:px-4 lg:py-2 lg:text-sm xl:px-6 xl:text-base"
            >
              <Link href="/">Apply</Link>
            </Button>

            <Button
              className="smooth-hover h-8 w-8 rounded-full border border-white/20 bg-white/10 hover:scale-110 hover:bg-white/20 hover:shadow-lg lg:h-10 lg:w-10"
              size="icon"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/80 transition-all duration-300 lg:h-6 lg:w-6">
                <svg
                  className="h-3 w-3 text-gray-700 transition-transform duration-300 group-hover:scale-110 lg:h-4 lg:w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <title>Profile</title>
                  <path
                    clipRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </Button>
          </div>

          {/* Mobile Profile Button and Hamburger Menu */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Profile Button */}
            <Button
              className="smooth-hover h-8 w-8 rounded-full border border-white/20 bg-white/10 hover:scale-110 hover:bg-white/20 hover:shadow-lg"
              size="icon"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/80 transition-all duration-300">
                <svg
                  className="h-3 w-3 text-gray-700 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <title>Profile</title>
                  <path
                    clipRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </Button>

            {/* Mobile Hamburger Menu Button */}
            <button
              aria-label="Toggle mobile menu"
              className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
            >
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-60 w-80 transform bg-soft-dark transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6">
          {/* Logo Section at Top */}
          <div className="flex h-20 items-center py-4">
            <Link
              className="smooth-hover flex items-center hover:scale-105"
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                alt="YCB Logo"
                className="h-16 w-auto object-contain"
                height={64}
                priority
                src={ycbLogo}
                width={192}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6">
            {links.map(({ to, label }) => {
              const isActive =
                pathname === to || (to !== "/" && pathname.startsWith(to));
              return (
                <Link
                  className={`font-semibold text-xl transition-colors ${
                    isActive ? "text-[gold]" : "text-white hover:text-[gold]"
                  }`}
                  href={to}
                  key={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Action Buttons */}
          <div className="mt-8 space-y-4">
            <Button
              asChild
              className="w-full bg-[gold] font-bold text-[#1a365d] hover:bg-[gold]/90"
            >
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Apply
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <button
          aria-label="Close mobile menu"
          className="fixed inset-0 z-55 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          type="button"
        />
      )}
    </>
  );
}
