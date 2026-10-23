
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#080F1E] px-5 pt-10 text-white md:px-8">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Main footer row */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-center">
          <div>
            <Link
              href="#home"
              className="group inline-flex items-center gap-3"
              aria-label="TECHNODATA SERVICES — Back to home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-blue-300 transition-all duration-300 group-hover:border-blue-300/50 group-hover:bg-blue-500/20">
                <MoveUpRight size={22} strokeWidth={1.6} />
              </span>

              <span className="text-lg font-semibold tracking-[-0.04em]">
                TECHNODATA{" "}
                <span className="text-blue-400">SERVICES</span>
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Reliable typing, data entry and data segregation services.
            </p>
          </div>

         
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col items-start justify-between gap-4 py-5 sm:flex-row sm:items-center">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            © 2006–2026
            <span className="mx-2 text-slate-700">/</span>
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-400 sm:text-sm">
            <span>Typing</span>
            <span className="h-1 w-1 rounded-full bg-blue-500" />
            <span>Data Entry</span>
            <span className="h-1 w-1 rounded-full bg-blue-500" />
            <span>Data Segregation</span>
          </div>

          <Link
            href="#home"
            className="group inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors duration-300 hover:text-white sm:text-sm"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="mx-auto mt-1 h-px max-w-7xl bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </footer>
  );
}
