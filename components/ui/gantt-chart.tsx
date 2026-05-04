import { cn } from "@/lib/utils";

interface GanttStepData {
  label: string;
  title: string;
  stat: string;
  statDescription: string;
}

interface GanttChartCardProps extends GanttStepData {
  className?: string;
}

function GanttChartCard({
  label,
  title,
  stat,
  statDescription,
  className,
}: GanttChartCardProps) {
  return (
    <div
      className={cn(
        "flex border border-white/30 min-h-32.5 bg-background",
        className,
      )}
    >
      <div className="flex items-center justify-center bg-white w-8 shrink-0">
        <span className="-rotate-90 whitespace-nowrap text-[10px] font-semibold text-black tracking-widest uppercase">
          {label}
        </span>
      </div>
      <div className="flex flex-col justify-center px-6 py-4 gap-2 text-start">
        <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
          {title}
        </h3>
        <p className="flex items-baseline gap-2">
          <span className="text-xl md:text-2xl font-bold text-white">
            {stat}
          </span>
          <span className="text-xs md:text-sm text-white/60">
            {statDescription}
          </span>
        </p>
      </div>
    </div>
  );
}

const STEPS: (GanttStepData & { colClass: string })[] = [
  {
    label: "Research",
    title: "ICP Alignment",
    stat: "32+",
    statDescription: "Audience Research Metrics",
    colClass: "col-start-1 col-end-5 row-start-1",
  },
  {
    label: "Positioning",
    title: "Strategy & Messaging",
    stat: "Top 4",
    statDescription: "Competitors gap mapped",
    colClass: "col-start-2 col-end-7 row-start-2",
  },
  {
    label: "Wireframe",
    title: "Conversion Design",
    stat: "20+",
    statDescription: "Structural design component",
    colClass: "col-start-4 col-end-9 row-start-3",
  },
  {
    label: "Development",
    title: "Precision Build",
    stat: "<1.2s",
    statDescription: "Average page load time",
    colClass: "col-start-5 col-end-11 row-start-4",
  },
  {
    label: "Production",
    title: "Launch & Iterate",
    stat: "3.1x",
    statDescription: "Average CVR lift post-launch",
    colClass: "col-start-7 col-end-11 row-start-5",
  },
];

function GanttChart({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop — staggered grid */}
      <div
        className="hidden md:grid grid-cols-10 grid-rows-5 *:my-2"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10%)",
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 130px)",
          ].join(", "),
        }}
      >
        {STEPS.map((step) => (
          <GanttChartCard
            key={step.label}
            label={step.label}
            title={step.title}
            stat={step.stat}
            statDescription={step.statDescription}
            className={step.colClass}
          />
        ))}
      </div>

      {/* Mobile — single column, no x offset */}
      <div className="flex flex-col md:hidden">
        {STEPS.map((step) => (
          <GanttChartCard
            key={step.label}
            label={step.label}
            title={step.title}
            stat={step.stat}
            statDescription={step.statDescription}
          />
        ))}
      </div>
    </div>
  );
}

export { GanttChart, GanttChartCard };
