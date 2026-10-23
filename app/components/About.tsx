
import {
  ShieldCheck,
  Clock3,
  Layers3,
  BriefcaseBusiness,
} from "lucide-react";

const highlights = [
  {
    title: "18+ Years Experience",
    icon: Clock3,
  },
  {
    title: "Data Security",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Delivery",
    icon: BriefcaseBusiness,
  },
  {
    title: "Flexible Scale",
    icon: Layers3,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F7F9FC] px-4 py-20 sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700 sm:text-xs">
            About Us
          </span>

          <h2 className="mt-4 font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.055em] text-[#0B1F4D] sm:text-4xl md:text-5xl">
            TECHNODATA SERVICES
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 tracking-[0.005em] text-slate-600 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
            Established in 2006, TECHNODATASERVICSE delivers reliable typing,
            data entry, and data segregation solutions for businesses across
            India.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden border border-slate-200/90 bg-white px-2 py-7 text-center shadow-[0_1px_0_rgba(255,255,255,1),0_4px_0_#D8E5F6,0_7px_12px_rgba(11,31,77,0.05)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_1px_0_rgba(255,255,255,1),0_6px_0_#B9D2F5,0_16px_24px_rgba(11,31,77,0.12)] sm:min-h-[220px] sm:px-5 sm:py-8 motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Subtle top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

                {/* Icon tile */}
                <div className="relative flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-lg border border-blue-200/90 bg-gradient-to-br from-white via-[#F0F6FF] to-[#DBEAFE] text-[#123B7A] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_3px_rgba(37,99,235,0.05),0_3px_0_#C5D9F6,0_6px_10px_rgba(37,99,235,0.10)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-300 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_0_#C5D9F6,0_9px_15px_rgba(37,99,235,0.17)] sm:h-[72px] sm:w-[72px] motion-reduce:transform-none">
                  <Icon
                    size={30}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 max-w-full font-[var(--font-space-grotesk)] text-[13px] font-semibold leading-5 tracking-[-0.035em] text-[#0B1F4D] transition-colors duration-300 group-hover:text-blue-700 sm:text-base sm:leading-6 lg:text-[17px]">
                  {item.title}
                </h3>

                {/* Accent line */}
                <div className="mt-4 h-[3px] w-7 shrink-0 bg-blue-200 transition-all duration-300 group-hover:w-12 group-hover:bg-blue-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
