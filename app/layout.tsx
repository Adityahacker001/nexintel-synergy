"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "../components/ui/resizable-navbar";
import "./globals.css";

// import { Moon, Sun } from "lucide-react";

const navItems = [
  { name: "services", link: "#service" },
  { name: "about", link: "#about" },
  { name: "clients", link: "#clients" },
  { name: "team", link: "#team" },
  { name: "movement", link: "#movement" }
];



const LogoComponent = () => (
  <Link
    href="/"
    className="relative z-20 mr-4 flex flex-row items-center gap-2 px-2 py-1 text-sm font-normal whitespace-nowrap"
    style={{ minWidth: 'max-content' }}
  >
    <img src="/logo-3.png" alt="" className="w-8"/>
    <span className="font-bold text-lg text-black whitespace-nowrap">Nexintel Synergy</span>
  </Link>
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-2.png" type="image/png" />
      </head>
      <body className="min-h-screen bg-white ">
        <Navbar className="fixed top-5 left-0 right-0 z-50 ">
          {/* Desktop Navigation */}
          <NavBody className="bg-black/20">
            <LogoComponent />
            <NavItems  items={navItems} />
            <div className="flex items-center space-x-4">
              <NavbarButton
                  href="#contact"
                  variant="primary"
                  className="bg-black text-white rounded-[30px] "
                >
                  Contact
                </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <LogoComponent />
              <div className="flex items-center space-x-2">
                <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
              </div>
            </MobileNavHeader>

            <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="block w-full px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <NavbarButton
                  href="#contact"
                  variant="primary"
                  className="mt-4 bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300"
                >
                  Contact
                </NavbarButton>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
        {children}
      </body>
    </html>
  );
}