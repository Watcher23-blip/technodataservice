
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faq" },
];

const menuTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...menuTransition, duration: 0.65 }}
        className="fixed inset-x-0 top-0 z-[60] px-4 pt-4 sm:px-6 sm:pt-5"
      >
        <nav className="relative mx-auto flex max-w-350 items-center justify-between rounded-2xl border border-blue-900/10 bg-white/90 px-4 py-3 shadow-[0_8px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:px-5">
          {/* Brand */}
          <Link
            href="#home"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2.5"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-blue-900 text-white">
              <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 font-serif text-xl transition-colors duration-300 group-hover:text-blue-900">
                T
              </span>
            </span>

            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-semibold tracking-[0.11em] text-blue-900 sm:text-sm">
                TECHNODATA
              </span>
              <span className="mt-1 text-[9px] font-medium tracking-[0.25em] text-blue-900/60">
                SERVICES
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-0.5 rounded-full border border-blue-900/10 bg-white p-1 lg:flex">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + index * 0.06,
                  duration: 0.4,
                }}
              >
                <Link
                  href={link.href}
                  className="group relative block overflow-hidden rounded-full px-3.5 py-2 text-[12px] font-medium text-blue-900/65 transition-colors duration-300  xl:px-4 xl:text-[13px]"
                >
                  <span className="absolute inset-0 scale-75 rounded-full bg-blue-900 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                  <span className="relative z-10 group-hover:text-white">{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop contact */}

          <Link
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-blue-900 py-2.5 pl-4 pr-2.5 text-[12px] font-medium text-white transition-colors duration-300 hover:bg-white hover:text-blue-900 hover:ring-1 hover:ring-blue-900 sm:flex"
          >
            <span className="transition-colors text-white duration-300 group-hover:text-blue-900">
              Contact
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors duration-300 group-hover:bg-blue-900/10">
              <ArrowUpRight
                size={15}
                className="text-blue-900 transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </Link>


          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-xl border border-blue-900/10 bg-white text-blue-900 transition-colors duration-300 hover:bg-blue-900 hover:text-white lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -70, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 70, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Full-screen mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={menuTransition}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white px-6 pb-8 pt-28 sm:px-10 lg:hidden"
          >
            <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col">
              {/* Mobile menu heading */}
              <div className="mb-7 flex items-center justify-between border-b border-blue-900/15 pb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-900/65">
                  Navigation
                </span>
                <span className="text-xs text-blue-900/50">
                  Explore our website
                </span>
              </div>

              {/* Animated links */}
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      delay: index * 0.055,
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-blue-900/10"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between py-4 text-3xl font-medium tracking-tight text-blue-900 transition-colors duration-300 hover:text-blue-900/65 sm:py-5 sm:text-4xl"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight
                        size={22}
                        strokeWidth={1.5}
                        className="text-blue-900/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-900"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile contact button */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="group flex w-full items-center justify-between rounded-full bg-blue-900 px-6 py-4 text-base font-medium text-white transition-colors duration-300 hover:bg-white hover:text-blue-900 hover:ring-1 hover:ring-blue-900"
                >
                  <span className="transition-colors text-white duration-300 group-hover:text-blue-900">
                    Contact
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors duration-300 group-hover:bg-blue-900/10">
                    <ArrowUpRight
                      size={15}
                      className="text-blue-900 transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </Link>
              </motion.div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between gap-4 pt-12 text-[10px] uppercase tracking-[0.16em] text-blue-900/50">
                <span>TechnoData Services</span>
                <span>Est. 2006</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
