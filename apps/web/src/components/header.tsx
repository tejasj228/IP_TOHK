"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ycbLogo from "@/assets/YCB.png";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const heroSection = document.querySelector('#hero-section');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px" // Adjust based on header height
      }
    );

    observer.observe(heroSection);
    // Fallback: also listen to scroll to handle cases where IntersectionObserver
    // may behave differently across environments (or during rapid resizes).
    const onScroll = () => {
      const heroRect = heroSection.getBoundingClientRect();
      // If the bottom of the hero is above the header height (80px), consider it scrolled
      const headerHeight = 80; // keep in sync with header height
      setIsScrolled(heroRect.bottom <= headerHeight);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once to sync initial state
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
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
            ? "bg-[#050a30] shadow-lg" 
            : "bg-black/20 backdrop-blur-lg backdrop-saturate-150 border-b border-white/10"
        }`}
      >
        <div className="flex h-20 w-full items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex h-full items-center">
            <Link className="flex items-center smooth-hover hover:scale-105" href="/">
              <Image
                alt="YCB Logo"
                className="h-20 w-auto object-contain"
                height={80}
                src={ycbLogo}
                width={240}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <nav className="flex gap-8 text-lg">
              {links.map(({ to, label }) => {
                const isActive =
                  pathname === to || (to !== "/" && pathname.startsWith(to));
                return (
                  <Link
                    className={`relative font-bold text-[15px] leading-[24.32px] link-hover group ${
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
                      <div className="-bottom-1 absolute h-0.5 w-0 bg-[gold] group-hover:w-full transition-all duration-300" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop Apply Button and Profile - Hidden on mobile */}
          <div className="hidden md:flex h-full items-center gap-3">
            <Button
              asChild
              className="bg-white px-6 py-2 font-bold text-[#1a365d] btn-primary-hover hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link href="/">Apply</Link>
            </Button>
            
            <Button
              size="icon"
              className="rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 hover:shadow-lg smooth-hover w-10 h-10"
            >
              <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center transition-all duration-300">
                <svg 
                  className="w-4 h-4 text-gray-700 transition-transform duration-300 group-hover:scale-110" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-80 bg-[#050a30] transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6">
            {links.map(({ to, label }) => {
              const isActive =
                pathname === to || (to !== "/" && pathname.startsWith(to));
              return (
                <Link
                  className={`text-xl font-semibold transition-colors ${
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
              className="w-full bg-[gold] text-[#1a365d] font-bold hover:bg-[gold]/90"
            >
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Apply</Link>
            </Button>
            <Button
              size="icon"
              className="w-full rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white"
            >
              <div className="flex items-center justify-center">
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
