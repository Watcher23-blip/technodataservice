
import {
  FileText,
  Database,
  Users,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "Typing Centre",
    description:
      "High-volume document typing, digitization, and data entry with speed and precision.",
    icon: FileText,
  },
  {
    title: "Data Segregation",
    description:
      "Accurate classification and organization of business-critical data.",
    icon: Database,
  },
  {
    title: "Freelancer Network",
    description:
      "A trained workforce across India enabling flexible and scalable execution.",
    icon: Users,
  },
  {
    title: "Data Processing",
    description:
      "Clean, validated, and structured data ready for business use.",
    icon: Workflow,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B1F4D] px-5 py-20 sm:px-6 md:px-8 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
            What We Do
          </span>

          <h2 className="mt-4 font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl md:text-5xl">
            Our Services
          </h2>

          <p className="mt-5 text-sm leading-7 text-blue-100/80 sm:text-base md:text-lg">
            IT-enabled solutions tailored for modern businesses.
          </p>
        </div>

        {/* Service cards */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative flex min-h-[270px] flex-col items-center overflow-hidden border border-white/70 bg-white px-6 py-8 text-center shadow-[0_2px_0_rgba(255,255,255,0.9),0_5px_0_#B9D0F2,0_10px_22px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_2px_0_rgba(255,255,255,0.9),0_7px_0_#8FB4EE,0_20px_30px_rgba(0,0,0,0.2)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />

                {/* Icon */}
                <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-gradient-to-br from-white to-blue-100 text-blue-900 shadow-[inset_0_1px_0_white,0_3px_0_#C5D9F6,0_6px_12px_rgba(37,99,235,0.10)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-300 group-hover:shadow-[inset_0_1px_0_white,0_4px_0_#B6CEF2,0_9px_16px_rgba(37,99,235,0.18)] motion-reduce:transform-none">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-6 font-[var(--font-space-grotesk)] text-lg font-semibold tracking-[-0.035em] text-[#0B1F4D] transition-colors duration-300 group-hover:text-blue-700">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-[250px] text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-auto pt-5">
                  <div className="h-[2px] w-7 bg-blue-200 transition-all duration-300 group-hover:w-12 group-hover:bg-blue-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
