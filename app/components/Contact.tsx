
import {
  Mail,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  "Quick response",
  "Professional support",
  "Secure communication",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F7F9FC] px-4 py-20 sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden border border-[#18366B] bg-[#0B1F4D] shadow-[0_5px_0_#D5E2F5,0_20px_50px_rgba(11,31,77,0.12)]">
          {/* Background details */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/[0.07]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-white/[0.08]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-tl from-blue-500/[0.12] to-transparent"
          />

          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Original text */}
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-300" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-200 sm:text-xs">
                  Get in Touch
                </span>
              </div>

              <h2 className="mt-6 font-[var(--font-space-grotesk)] text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
                Contact Us
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-blue-100/80 sm:text-base sm:leading-8">
                Send your requirement — we’ll reply on email.
              </p>

              <div className="mt-9 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      strokeWidth={1.7}
                      className="shrink-0 text-blue-300"
                    />
                    <span className="text-sm text-white/90 sm:text-[15px]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Email card */}
            <div className="flex items-center px-5 pb-7 sm:px-10 sm:pb-10 lg:px-8 lg:py-10 lg:pr-10">
              <div className="relative w-full border border-slate-200 bg-white p-6 shadow-[0_3px_0_#CBDCF5,0_12px_30px_rgba(0,0,0,0.16)] sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100 bg-gradient-to-br from-white to-blue-100 text-blue-900 shadow-[inset_0_1px_0_white,0_3px_0_#D3E2F7] sm:h-16 sm:w-16">
                    <Mail size={29} strokeWidth={1.6} />
                  </div>

                  <span className="border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-blue-800 sm:text-[11px]">
                    Email
                  </span>
                </div>

                <h3 className="mt-8 font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.04em] text-[#0B1F4D] sm:text-3xl">
                  Email
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                  For quotations, partnerships, and project discussions:
                </p>

                <Link
                  href="mailto:support@technodataservices.in"
                  className="group mt-7 flex w-full items-center justify-between gap-3 border border-blue-900 bg-blue-900 p-2 pl-4 text-white transition-colors duration-300 hover:bg-white hover:text-blue-900 sm:pl-5"
                >
                  <span className="min-w-0 break-all text-xs font-medium text-white  group-hover:text-blue-900 sm:text-sm">
                    support@technodataservices.in
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-blue-900 transition-colors duration-300 group-hover:bg-blue-900 group-hover:text-white">
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </Link>

                <div className="my-7 h-px bg-slate-200" />

                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={21}
                    className="mt-0.5 shrink-0 text-blue-700"
                    strokeWidth={1.7}
                  />
                  <p className="text-xs leading-6 text-slate-500 sm:text-sm">
                    Contact our team to discuss your requirements and explore
                    suitable service solutions.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-1/3 bg-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
