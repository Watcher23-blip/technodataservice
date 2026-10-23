
import {
  ChartNoAxesCombined,
  Headset,
  CalendarClock,
  UsersRound,
} from "lucide-react";

const features = [
  {
    title: "Performance Reports",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Dedicated Support",
    icon: Headset,
  },
  {
    title: "Application Timeline",
    icon: CalendarClock,
  },
  {
    title: "Referral System",
    icon: UsersRound,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#F7F9FC] px-4 py-20 sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700 sm:text-xs">
            Freelancer Benefits
          </span>

          <h2 className="mt-4 font-[var(--font-space-grotesk)] text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#0B1F4D] sm:text-4xl md:text-5xl">
            The Features Every Freelancer Needs
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
            Everything required to work smoothly and get paid on time.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden border border-slate-200/90 bg-white px-2 py-7 text-center shadow-[0_1px_0_rgba(255,255,255,1),0_4px_0_#D8E5F6,0_7px_12px_rgba(11,31,77,0.05)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_1px_0_rgba(255,255,255,1),0_6px_0_#B9D2F5,0_16px_24px_rgba(11,31,77,0.12)] sm:min-h-[220px] sm:px-5 sm:py-8 motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />

                {/* Icon tile */}
                <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-lg border border-blue-200/90 bg-gradient-to-br from-white via-[#F0F6FF] to-[#DBEAFE] text-[#123B7A] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_3px_rgba(37,99,235,0.05),0_3px_0_#C5D9F6,0_6px_10px_rgba(37,99,235,0.10)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-300 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_0_#C5D9F6,0_9px_15px_rgba(37,99,235,0.17)] sm:h-[72px] sm:w-[72px] motion-reduce:transform-none">
                  <Icon
                    size={29}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
                  />
                </div>

                {/* Feature title */}
                <h3 className="mt-5 max-w-full font-[var(--font-space-grotesk)] text-[13px] font-semibold leading-5 tracking-[-0.035em] text-[#0B1F4D] transition-colors duration-300 group-hover:text-blue-700 sm:mt-6 sm:text-base sm:leading-6 lg:text-[17px]">
                  {feature.title}
                </h3>

                {/* Bottom accent */}
                <div className="mt-4 h-[3px] w-7 shrink-0 bg-blue-200 transition-all duration-300 group-hover:w-12 group-hover:bg-blue-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
