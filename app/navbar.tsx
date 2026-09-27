"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <Link
          href="/"
          className="logo"
          onClick={() => setOpen(false)}
        >
          Buzi<span>Growth</span>
        </Link>

        <nav className="desktopNav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
        </nav>

        <Link href="/services" className="navButton desktopCTA">
          Book a Service <span>↗</span>
        </Link>

        <button
          className={`menuButton ${open ? "open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobileMenu ${open ? "show" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link href="/services" onClick={() => setOpen(false)}>
          Services
        </Link>

        <Link href="/about" onClick={() => setOpen(false)}>
          About Us
        </Link>

        <Link
          href="/services"
          className="mobileMenuCTA"
          onClick={() => setOpen(false)}
        >
          Book an Automation Service
          <span>↗</span>
        </Link>
      </div>
    </>
  );
}