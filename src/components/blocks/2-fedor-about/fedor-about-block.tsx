"use client";

import Image from "next/image";
import fedorImage from "../../../../public/ava_1.jpg";
import { useEffect, useRef, useState } from "react";
import { animate, onScroll, stagger } from "animejs";
import pushIfNotNull from "@/lib/push-if-not-null";
import Link from "next/link";

export default function FedorAboutBlock({
  className,
  openModal,
}: {
  className?: string;
  openModal?: () => void;
}) {
  const elementsRef = useRef<HTMLElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [isImageTouched, setIsImageTouched] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    animate(elementsRef.current, {
      opacity: [0, 1],
      scale: [0.8, 1],
      translateY: { from: stagger(["50px", "-50px"]), to: "0" },
      duration: 1000,
      easing: "easeInOutQuad",
      delay: 0,
      autoplay: onScroll({
        target: section,
        container: document.body,
      }),
    });
  }, []);

  return (
    <section ref={sectionRef} className={`${className} w-full overflow-hidden`}>
      <div className="@container">
        {/* Image with overlaid title */}
        <div className="xs:mb-8.75 relative mb-4 w-full lg:mb-7.5">
          <Image
            ref={pushIfNotNull(elementsRef.current)}
            src={fedorImage}
            alt="Fedor Beltiugov"
            className={`xs:w-[31.64cqw] h-full w-[38.37cqw] rounded-[0.313rem] object-cover object-center lg:w-[31.53cqw] ${isImageTouched ? "grayscale-0" : "grayscale"} xs:ml-18.25 ml-11.25 transition-[filter] duration-350 ease-in hover:grayscale-0 lg:ml-34.5`}
            layout="cover"
            onTouchStart={() => setIsImageTouched(!isImageTouched)}
            onTouchEnd={() => {}}
          />

          {/* Overlaid title */}
          <h1 className="font-cera xs:text-[11.5cqw] tracking-mid xs:mt-[-0.82em] xs:ml-2.5 xs:mr-0 relative z-10 mt-[-0.81em] mr-5.25 ml-2.5 text-left text-[11.5cqw] leading-none font-bold text-[#F0EDE8] lg:mt-[-0.72em] lg:mr-19.75 lg:ml-0 lg:text-[11.1cqw] lg:leading-[9.03cqw]">
            {" "}
            Behind the&nbsp;Studio
          </h1>
        </div>

        {/* Content section below image */}
        <div className="xs:mb-4 mb-2">
          {/* Description */}
          <div
            ref={pushIfNotNull(elementsRef.current)}
            className="xs:mb-7.5 mb-5.5 lg:mb-12.5"
          >
            <p className="font-cera xs:text-[2.60cqw] xs:leading-[3.39cqw] xs:pl-2.5 xs:pr-34 pr-11.25 pl-2.5 text-left text-[3.26cqw] leading-[4.42cqw] font-normal tracking-[0%] text-[#F0EDE8] not-italic lg:pr-[23.4375rem] lg:pl-5 lg:text-[2.08cqw] lg:leading-[2.71cqw]">
              Fedor Beltiugov, the founder of Function Design Studio,
              is an art director, designer, and strategist. Since 2008,
              I’ve been crafting brand identities that drive business goals
              and elevate brand value. I personally oversee every project from
              concept to completion. My experience spans working with global
              corporations, local businesses, and personal brands.
            </p>
          </div>

          {/* CTA Links */}
          <div
            ref={pushIfNotNull(elementsRef.current)}
            className="xs:pl-2.5 xs:pr-0 xs:text-[4.69cqw] xs:underline-offset-[1.2cqw] pr-2.5 pl-2.5 text-[4.65cqw] leading-none font-medium text-[#F0EDE8] decoration-[#F0EDE8] underline-offset-[1.2cqw] *:hover:decoration-[#FF3F1A] lg:pr-0 lg:pl-5 lg:text-[3.75cqw] lg:leading-[4.58cqw] lg:underline-offset-[1cqw]"
          >
            <button
              onClick={openModal}
              className="inline underline decoration-[0.085em] transition-colors duration-200 hover:text-[#FF3F1A] lg:decoration-[0.065em]"
            >
              Get Price
            </button>
            <span> or </span>
            <Link
              href="/projects"
              className="inline underline decoration-[0.085em] transition-colors duration-200 hover:text-[#FF3F1A] lg:decoration-[0.065em]"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
