"use client";

import type React from "react";

import Link from "next/link";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Get the target element
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without page reload
      window.history.pushState(null, "", href);
    }

    // Call the onClick handler if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="relative px-2 py-1 transition-all duration-300 hover:text-primary group"
    >
      {children}
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
    </Link>
  );
}
