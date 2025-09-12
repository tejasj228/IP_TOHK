"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoWhite from "@/assets/logo-white.png";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const links = [
    { to: "/", label: "Home" },
    { to: "#about", label: "About YCB" },
    { to: "#network", label: "Our Network" },
    { to: "#editions", label: "Previous Editions" },
    { to: "#featured", label: "Featured" },
  ] as const;

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex h-full items-center">
          <Link className="flex items-center" href="/">
            <Image
              alt="Youth Changemaker Bootcamp"
              className="h-30 w-auto object-contain"
              height={80}
              src={logoWhite}
              width={60}
            />
          </Link>
        </div>

        {/* Centered Navigation */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
          <nav className="hidden gap-8 text-lg md:flex">
            {links.map(({ to, label }) => {
              const isActive =
                pathname === to || (to !== "/" && pathname.startsWith(to));
              return (
                <Link
                  className={`relative font-bold text-[15px] leading-[24.32px] transition-colors ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                  href={to}
                  key={to}
                >
                  {label}
                  {isActive && (
                    <div className="-bottom-1 absolute h-0.5 w-full bg-[gold]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Apply Button */}
        <div className="flex h-full items-center">
          <Button
            asChild
            className="bg-white px-6 py-2 font-bold text-[#1a365d] hover:bg-white/90"
          >
            <Link href="/">Apply</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
