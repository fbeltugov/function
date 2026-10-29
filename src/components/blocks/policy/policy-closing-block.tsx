import { cn } from "@/lib/utils";

export default function PolicyClosingBlock({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <section className={cn("fluid-container @container w-full", className)}>
      <p className="tracking-mid text-[1.5rem] leading-[2rem] font-medium md:max-w-[79.5cqw] md:text-[clamp(1.5rem,3.2cqw,1.875rem)] md:leading-[clamp(2rem,4.2cqw,2.8125rem)]">
        {text}
      </p>
    </section>
  );
}
