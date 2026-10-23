
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  BriefcaseBusiness,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What services does TECHNODATASERVICES provide?",
    answer:
      "We provide typing, data entry, data segregation, data processing, and freelancer-based execution services.",
    icon: Database,
  },
  {
    question: "Can you handle large projects?",
    answer:
      "Yes. Our in-house team and freelancer network allow us to scale resources according to project requirements.",
    icon: BriefcaseBusiness,
  },
  {
    question: "Is my data secure?",
    answer:
      "We prioritize confidentiality and follow data-handling and quality-control protocols throughout our workflow.",
    icon: ShieldCheck,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-[#0B1F4D] px-4 py-20 sm:px-6 md:px-8 md:py-28"
    >
      {/* Animated background */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-36 -top-36 h-[440px] w-[440px] rounded-full border border-blue-300/[0.10]"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full border border-dashed border-white/[0.09]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 22, 0],
          y: [0, -18, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-36 -left-24 h-96 w-96 rounded-full bg-blue-500/[0.12] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[9%] top-24 hidden text-blue-200/[0.12] lg:block"
      >
        <Sparkles size={58} strokeWidth={1} />
      </motion.div>

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-12 text-center md:mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative mx-auto flex h-16 w-16 items-center justify-center border border-blue-300/30 bg-white/[0.06] text-blue-200 shadow-[0_4px_0_rgba(96,165,250,0.18)]"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MessageCircle size={29} strokeWidth={1.5} />
            </motion.div>

            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-1 -top-1 h-3 w-3 border-2 border-[#0B1F4D] bg-cyan-300"
            />
          </motion.div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 28 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-blue-300/70"
            />

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-200 sm:text-xs">
              Here to Help
            </p>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 28 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-blue-300/70"
            />
          </div>

          <h2 className="mt-5 font-[var(--font-space-grotesk)] text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl md:text-5xl">
            Frequently Asked Questions
            <span className="mt-1 block text-blue-300">.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-100/75 sm:text-base sm:leading-8">
            Clear answers to help you understand our services and process.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const ItemIcon = faq.icon;

            return (
              <motion.div
                key={faq.question}
                layout
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                  layout: { duration: 0.3 },
                }}
                whileHover={{ y: isOpen ? 0 : -3 }}
                className={`relative border transition-colors duration-300 ${
                  isOpen
                    ? "border-blue-200/70 bg-white shadow-[0_4px_0_#93B8F5,0_14px_30px_rgba(0,0,0,0.16)]"
                    : "border-white/15 bg-white/[0.045] hover:border-blue-200/50 hover:bg-white/[0.075]"
                }`}
              >
                <motion.div
                  initial={false}
                  animate={{
                    scaleY: isOpen ? 1 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  style={{ originY: 0 }}
                  className="absolute bottom-0 left-0 top-0 w-1 bg-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center gap-3 px-4 py-5 text-left sm:gap-5 sm:px-7 sm:py-6"
                >
                  <motion.span
                    animate={{
                      backgroundColor: isOpen ? "#0B1F4D" : "#ffffff0a",
                      color: isOpen ? "#ffffff" : "#bfdbfe",
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 sm:h-12 sm:w-12"
                  >
                    <ItemIcon size={21} strokeWidth={1.7} />
                  </motion.span>

                  <span
                    className={`flex-1 font-[var(--font-space-grotesk)] text-sm font-medium leading-6 sm:text-base md:text-lg ${
                      isOpen ? "text-[#0B1F4D]" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      backgroundColor: isOpen ? "#2563eb" : "#ffffff0a",
                      color: isOpen ? "#ffffff" : "#bfdbfe",
                    }}
                    transition={{ duration: 0.28 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 sm:h-10 sm:w-10"
                  >
                    <ChevronDown size={19} strokeWidth={1.8} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.32, ease: "easeInOut" },
                        opacity: { duration: 0.22 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mx-4 h-px bg-slate-200 sm:mx-7" />

                      <motion.div
                        initial={{ y: -8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        transition={{ duration: 0.25, delay: 0.04 }}
                        className="flex gap-3 px-5 py-5 sm:gap-4 sm:px-8 sm:py-6"
                      >
                        <ArrowRight
                          size={18}
                          className="mt-1 shrink-0 text-blue-600"
                          strokeWidth={1.8}
                        />

                        <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center md:mt-14"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 border border-white/25 bg-white/[0.06] py-3 pl-5 pr-3 text-sm font-medium text-white transition-colors duration-300 hover:border-blue-200/70 hover:bg-white/[0.11] sm:pl-6"
          >
            <span className="text-white">
              Still have questions? Contact us
            </span>

            <motion.span
              whileHover={{ scale: 1.08 }}
              className="flex h-9 w-9 items-center justify-center bg-white text-[#0B1F4D] transition-colors duration-300 group-hover:bg-blue-200"
            >
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
