'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const imageUrl =
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className=" px-4 pb-10 pt-32 text-[#1E2A44] sm:px-7 sm:pt-32 lg:px-12 lg:pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease: 'easeOut',
        }}
        className="relative mx-auto min-h-[500px] max-w-[1400px] overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(30,42,68,0.25)] sm:min-h-[560px] lg:min-h-[640px]"
      >
        {/* Workspace image */}
        <div className="absolute inset-0 lg:left-[20%]">
          <Image
            src={imageUrl}
            alt="A bright, modern professional workspace"
            fill
            priority
            unoptimized
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover object-center"
          />

          {/* Soft white and blue image treatment */}
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10 lg:via-white/65 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D]/20 via-transparent to-white/10" />
        </div>

        {/* Left content: heading and description only */}
        <div className="relative z-10 flex min-h-[500px] items-center px-6 py-14 sm:min-h-[560px] sm:px-10 lg:min-h-[640px] lg:px-16">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-700 sm:text-xs"
            >
              Reliable since 2006
            </motion.p>



            <motion.h1
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-none font-[var(--font-space-grotesk)] text-[clamp(2.5rem,5.5vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.055em] text-[#0B1F4D]"
            >
              <span className="block whitespace-nowrap">
                Reliable Typing and
              </span>

              <span className="block whitespace-nowrap">
                Data Segregation
              </span>

              <span className="block whitespace-nowrap">
                Solutions
              </span>
            </motion.h1>






            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-7 max-w-xl text-sm leading-7 text-slate-600 sm:mt-8 sm:text-base sm:leading-8"
            >
              A trusted IT-enabled service partner delivering
              precision-driven typing, data entry, and data segregation
              solutions for businesses across India.
            </motion.p>


           
<motion.div
  initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.45 }}
  className="mt-8"
>
  <Link
    href="#contact"
    className="group inline-flex items-center gap-4 rounded-full bg-blue-900 py-2 pl-6 pr-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-900/20"
  >
    <span className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-blue-100">
      Get Started
    </span>

    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-900 transition-all duration-300 group-hover:rotate-45 group-hover:bg-blue-100">
      <ArrowUpRight size={18} strokeWidth={2} />
    </span>
  </Link>
</motion.div>



          </div>

        </div>
      </motion.div>
    </section>
  );
}