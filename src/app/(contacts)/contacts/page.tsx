"use client";

import ContactsHeadBlock from "@/components/blocks/7-contacts/contacts-head-block";
import CommercialOfferForm from "@/components/blocks/form/commercial-offer-form";
import WebGLBlurEffect from "@/components/blur/webgl-blur-component";
import BehanceIcon from "@/components/common/behance-icon";
import InstagramIcon from "@/components/common/instagram-icon";
import { ThemeProvider } from "@/components/common/theme-context";
import DribbleIcon from "@/components/common/unknown-cw";
import { FormViewModel } from "@/domain/form-view-model";
import Link from "next/link";
import { useState } from "react";
import { useContacts } from "@/hooks/use-contacts";

// export const dynamic = "force-dynamic";

export default function ContactsPage() {
  const [formViewModel] = useState(() => new FormViewModel());
  const contacts = useContacts();
  return (
    <main className="bg-[#F0EDE8] pt-32 xs:pt-17.5 md:pt-25 pb-5 md:pb-15 xl:pb-20">
      <ContactsHeadBlock />
      <WebGLBlurEffect className="xl:mt-51 xs:mt-25 mt-16.25 pb-8.5 md:pb-14 xl:pb-27 bg-[#F0EDE8]">
        <div className="max-xs:px-2.5 font-bold xs:text-[18.23cqw] text-[17.44cqw]  md:text-[18.75cqw] text-[#FF3F1A]  leading-[14.65cqw] xs:leading-[15.36cqw] md:leading-[15.28cqw] tracking-mid capitalize">
          Start your <br /> project
        </div>
      </WebGLBlurEffect>
      <section className="fluid-container pl-8.75 xs:pl-18.25 md:px-[7.6cqw]">
        <ThemeProvider theme="orange">
          <CommercialOfferForm viewModel={formViewModel} />
        </ThemeProvider>
        <div className="flex flex-row w-full items-start md:items-center md:mt-20 xs:mt-17 mt-12.5 space-x-6">
          <div className="flex flex-col xs:flex-row xs:flex-wrap w-[42cqw] xs:w-1/2 xs:items-center md:space-x-5 space-x-2.5 pr-[6.3cqw] md:pr-0 tracking-mid ">
            <p className="text-[2.7cqw] xs:text-[0.875rem] md:text-[clamp(0.875rem,2.4cqw,1.25rem)] mb-2.5 xs:mb-0 whitespace-nowrap tracking-mid text-[#FF3F1A]">
              Discover our work on:
            </p>
            <div className="flex flex-row space-x-2.5 md:space-x-5">
              <Link
                href={contacts.socialLinks.instagram}
                target="_blank"
                custom-cursor="black"
              >
                <InstagramIcon className="w-6.25 md:w-8.75 md:h-8.75 fill-[#FF3F1A] transition-colors duration-150 hover:fill-[#151516]" />
              </Link>
              <Link
                href={contacts.socialLinks.behance}
                target="_blank"
                custom-cursor="black"
              >
                <BehanceIcon className="w-6.25 md:w-8.75 md:h-8.75  fill-[#FF3F1A] transition-colors duration-150 hover:fill-[#151516]" />
              </Link>
              <Link
                href={contacts.socialLinks.dribbble}
                target="_blank"
                custom-cursor="black"
              >
                <DribbleIcon className="w-6.25 md:w-8.75 md:h-8.75   fill-[#FF3F1A] transition-colors duration-150 hover:fill-[#151516]" />
              </Link>
            </div>
          </div>
          <div className="tracking-mid flex w-[58cqw] flex-col gap-2.5 pt-1 text-[0.438rem] text-[#FF3F1A] xs:w-1/2 xs:text-[0.563rem] md:text-[0.875rem] lg:gap-5">
            <p>
              © Function Design Studio is a global remote-first brand identity
              studio. All{`\u00A0`}rights reserved
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link
                href="/privacy-policy"
                className="underline underline-offset-2 transition-colors duration-150 hover:text-[#151516]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="underline underline-offset-2 transition-colors duration-150 hover:text-[#151516]"
              >
                Cookie Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="underline underline-offset-2 transition-colors duration-150 hover:text-[#151516]"
              >
                Terms of Use
              </Link>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("open-cookie-settings"))
                }
                className="underline underline-offset-2 transition-colors duration-150 hover:text-[#151516]"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
