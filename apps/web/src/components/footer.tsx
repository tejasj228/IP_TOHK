import Image from "next/image";
import tohkLogo from "@/assets/tohk.jpg";

export default function Footer() {
  return (
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
                  href="/editions"
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
  );
}
