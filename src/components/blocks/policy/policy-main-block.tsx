"use client";

import { Policy } from "@/infrastructure/policies";
import { cn } from "@/lib/utils";
import { animate, onScroll, stagger } from "animejs";
import { useEffect, useRef } from "react";

export default function PolicyMainBlock({
  policy,
  className,
}: {
  policy: Policy;
  className?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = [headerRef.current, paragraphRef.current].filter(
      (el) => el !== null,
    );

    animate(elements, {
      opacity: [0, 1],
      translateX: ["-10vw", 0],
      duration: 800,
      easing: "easeOutQuad",
      delay: stagger(200),
      autoplay: onScroll({
        target: section,
        container: document.body,
      }),
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        `fluid-container @container flex w-full flex-row`,
        className,
      )}
    >
      <div className="flex w-full flex-col">
        <div
          ref={headerRef}
          className="mb-7.5 flex flex-col items-start gap-4 md:flex-row md:justify-between"
        >
          <h1 className="xs:text-[3.125rem] text-[2.75rem] leading-[1] font-medium tracking-[0%] md:text-[clamp(3.125rem,6.6cqw,5rem)]">
            {policy.title}
          </h1>
          <p className="tracking-mid flex shrink-0 flex-row gap-x-1 text-[16px] leading-6.5 text-[#727272] md:flex-col md:gap-x-0 md:pt-2 md:text-right lg:text-[22px] lg:leading-8.75">
            Effective date
            <br className="hidden md:block" />
            {` `}
            {policy.effectiveDate}
          </p>
        </div>
        <p
          ref={paragraphRef}
          className="tracking-mid text-[1.5rem] leading-[2rem] font-medium md:max-w-[79.5cqw] md:text-[clamp(1.5rem,3.2cqw,1.875rem)] md:leading-[clamp(2rem,4.2cqw,2.8125rem)]"
          dangerouslySetInnerHTML={{ __html: policy.description }}
        />
      </div>
    </section>
  );
}
