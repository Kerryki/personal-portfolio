"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/nav-link";
import { siteConfig } from "@/config/site";
import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link
          href="/"
          className="hidden font-bold sm:block transition-all duration-300 hover:text-primary"
        >
          {siteConfig.name}
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="hidden md:flex md:items-center md:gap-6">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
          </div>
          <MobileNav />
          <nav className="flex items-center md:hidden">
            <Link
              href="/"
              className="flex items-center transition-all duration-300 hover:text-primary"
            >
              <span className="font-bold">Portfolio</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
