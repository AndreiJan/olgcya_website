"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [navH, setNavH] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // show after slight scroll; hide only at very top
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // measure navbar height for spacer
  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavH(navRef.current.offsetHeight || 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // close on Esc or click outside
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!menuRef.current || !btnRef.current) return;
      if (!menuRef.current.contains(t) && !btnRef.current.contains(t)) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [mobileOpen]);

  // force-close dropdown when resizing to md+
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        ref={navRef as any}
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
          visible ? "bg-black/90 backdrop-blur shadow-sm" : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto pl-20! p-4 flex items-center justify-between relative">
          {/* left: brand */}
          <a href="#" className="flex items-center gap-3">
            <img src="/home/NavLogo.png" className="h-10" alt="Logo" />
            <span className="text-2xl font-semibold text-white whitespace-nowrap">OLGC YA</span>
          </a>

          {/* desktop menu */}
          <div className="hidden md:block">
            <ul className="font-medium flex items-center gap-8 text-white">
              <li><a href="/" className="py-2 md:p-0 hover:text-blue-400">Home</a></li>
              <li><a href="/AboutUs" className="py-2 md:p-0 hover:text-blue-400">About Us</a></li>
              <li><a href="/Ministry" className="py-2 md:p-0 hover:text-blue-400">Ministry</a></li>
              <li><a href="/ContactUs" className="py-2 md:p-0 hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>

          {/* mobile: hamburger */}
          <button
            ref={btnRef}
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            aria-haspopup="menu"
            aria-controls="mobile-dropdown"
            aria-expanded={mobileOpen}
            className="block md:!hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm
                       text-gray-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          {/* mobile dropdown (anchored to the right under button) */}
          <div
            ref={menuRef}
            id="mobile-dropdown"
            role="menu"
            className={`md:hidden absolute right-0 top-full mt-2 w-56 origin-top-right rounded-xl 
                        bg-neutral-900/95 text-white shadow-lg ring-1 ring-white/10
                        transition-all duration-200 ease-out
                        ${mobileOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            <nav className="py-2 left">
              <a role="menuitem" href="#" className="block px-4 py-2 hover:bg-white/10 rounded-lg">Home</a>
              <a role="menuitem" href="#" className="block px-4 py-2 hover:bg-white/10 rounded-lg">About</a>
              <a role="menuitem" href="#" className="block px-4 py-2 hover:bg-white/10 rounded-lg">Services</a>
              <a role="menuitem" href="#" className="block px-4 py-2 hover:bg-white/10 rounded-lg">Pricing</a>
              <a role="menuitem" href="#" className="block px-4 py-2 hover:bg-white/10 rounded-lg">Contact</a>
            </nav>
          </div>
        </div>
      </nav>

      {/* spacer to prevent content jump */}
      <div style={{ height: visible ? navH : 0 }} />
    </>
  );
}
