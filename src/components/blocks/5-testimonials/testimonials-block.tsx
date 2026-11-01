"use client";

import { useRef } from "react";
import SectionHeader from "@/components/common/section-header";
import ArrowSVG from "@/components/common/arrow";
import { useScrollReveal } from "@/components/common/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  title: string;
  company: string;
  text: string;
  linkedinUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Nikias Kray",
    title: "Founder & CMO",
    company: "CRM Magnetics",
    text: "We worked with Fedor on our brand identity, and it was a great experience. He brought structure and clarity to how we present ourselves, while helping us define our positioning. Smooth, collaborative, and highly efficient.",
    linkedinUrl:
      "https://www.linkedin.com/in/fedor-beltugov™-a6896a37/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    name: "Anton Efremov",
    title: "Founder & CEO",
    company: "Akvilon",
    text: "Before working with Fedor, our brand lacked a clear visual system. He built a modern identity that strengthened our perception and made communication with clients and partners much clearer, including for the European market.",
    linkedinUrl:
      "https://www.linkedin.com/in/fedor-beltugov™-a6896a37/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    name: "Daniel Iurev",
    title: "CEO & Founder",
    company: "IVA endo",
    text: "Fedor created a clear, trustworthy identity for IVA endo, immersing himself in our AI-driven medtech field and delivering precise, thoughtful work that supports our mission.",
    linkedinUrl:
      "https://www.linkedin.com/in/fedor-beltugov™-a6896a37/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    name: "Andrew Kormysh",
    title: "Marketing Director",
    company: "AIM Property Development",
    text: "AIM Property Development and OZ Mall received clear, well-structured branding, with Fedor bringing creative direction and strategic insight to the process. His work was reliable, effective, and easy to collaborate on.",
    linkedinUrl:
      "https://www.linkedin.com/in/fedor-beltugov™-a6896a37/details/recommendations/?detailScreenTabIndex=0",
  },

  {
    name: "Nick Morozov",
    title: "CEO",
    company: "Atelier Morozov",
    text: "Fedor created the corporate identity and website for my menswear brand Morozov, delivering strong, precise branding and managing the full process professionally. Highly recommended.",
    linkedinUrl:
      "https://www.linkedin.com/in/fedor-beltugov™-a6896a37/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    name: "Pavel Avriskin",
    title: "CPO",
    company: "CALM",
    text: "Strong concepts made the final direction difficult to choose. A structured approach led to a clear and effective identity system. Reliable and highly professional.",
    linkedinUrl:
      "https://www.linkedin.com/in/fedor-beltugov™-a6896a37/details/recommendations/?detailScreenTabIndex=0",
  },

  {
    name: "Dmitry Plushevsky",
    title: "CEO & Co-Founder",
    company: "GOLDEX",
    text: "The identity work for GOLDEX was handled professionally and smoothly. The result is precise, memorable, and fully aligned with the company’s vision. Strongly recommended.",
    linkedinUrl:
      "https://www.linkedin.com/in/fedor-beltugov™-a6896a37/details/recommendations/?detailScreenTabIndex=0",
  },

  {
    name: "Kirill Tishchenko",
    title: "Founder",
    company: "MyCouture",
    text: "The MyCouture project was delivered thoughtfully and with a clear creative approach. The branding and website gave the brand individuality and helped it connect with its audience. Highly recommended.",
    linkedinUrl:
      "https://www.linkedin.com/in/fedor-beltugov™-a6896a37/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    name: "Alexander Cherny",
    title: "Head of Marketing",
    company: "Belagra Group",
    text: "My company ordered a rebranding from Fedor, and he delivered the project professionally, efficiently, and on time. He listens carefully to client needs and implements them fully. I confidently recommend him.",
    linkedinUrl:
      "https://www.linkedin.com/in/fedor-beltugov™-a6896a37/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    name: "Denis Makhalov",
    title: "Entrepreneur & Founder",
    company: "",
    text: "Over many years of collaboration, Fedor has delivered strong, reliable work across multiple branding projects. He quickly understands business needs, offers thoughtful solutions, and remains a trusted partner I can fully rely on.",
    linkedinUrl:
      "https://www.linkedin.com/in/fedor-beltugov™-a6896a37/details/recommendations/?detailScreenTabIndex=0",
  },
];

export default function TestimonialsBlock({
  className,
}: {
  className?: string;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef } = useScrollReveal({ threshold: 0.1 });

  const goToNext = () => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.firstElementChild as HTMLElement | null;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const marginRight =
          parseFloat(window.getComputedStyle(firstCard).marginRight) || 0;
        const scrollAmount = cardWidth + marginRight;

        const currentScroll = sliderRef.current.scrollLeft;
        const maxScroll =
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        const atEnd = currentScroll >= maxScroll - 1;

        if (atEnd) {
          sliderRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          // Reach the last cards first; only wrap on the next click
          sliderRef.current.scrollTo({
            left: Math.min(currentScroll + scrollAmount, maxScroll),
            behavior: "smooth",
          });
        }
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className={cn("fluid-container w-full", className)}
    >
      <SectionHeader>Testimonials</SectionHeader>

      <div className="xs:mt-5 relative mt-7.5">
        <div
          ref={sliderRef}
          className="no-scrollbar xs:-mr-2.5 -mr-5 flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="xs:pr-2.5 xs:min-h-[22.5rem] xs:w-1/3 flex h-full min-h-[22rem] w-2/3 flex-shrink-0 snap-start flex-col justify-between pt-5 pr-11.25 lg:min-h-[28.75rem] lg:pt-13.5 lg:pr-34"
            >
              <div className="flex h-full flex-col text-base leading-6.5 tracking-[-3%] text-[#F0EDE8] lg:text-[1.375rem] lg:leading-8.5">
                <h3 className="mb-1 text-2xl leading-[100%] font-medium lg:text-3xl">
                  {testimonial.name}
                </h3>
                <p className="mb-1">{testimonial.title}</p>
                <p className="mb-5 font-medium">{testimonial.company}</p>
                {testimonial.text && <p className="">{testimonial.text}</p>}
              </div>

              <a
                href={testimonial.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="xs:text-sm mt-auto text-xs text-[#727272] underline decoration-[#727272] decoration-[0.065em] underline-offset-[0.25cqw] transition-colors duration-200 hover:text-[#FF3F1A] hover:underline hover:decoration-[#FF3F1A] active:text-[#FF3F1A] active:underline active:decoration-[#FF3F1A] md:text-sm"
              >
                Full review on LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7.5 flex items-center justify-end lg:mt-10">
        <button
          onClick={goToNext}
          className="xs:gap-1.5 group flex cursor-pointer items-center gap-2 lg:gap-5"
        >
          <span className="mr-5 text-sm font-medium text-[#F0EDE8] transition-colors duration-300 group-hover:text-[#FF3F1A] md:text-lg">
            Next Testimonials
          </span>
          <ArrowSVG className="w-20! fill-[#F0EDE8] transition-all duration-300 group-hover:translate-x-1 group-hover:fill-[#FF3F1A] md:w-28.5!" />
        </button>
      </div>
    </section>
  );
}
