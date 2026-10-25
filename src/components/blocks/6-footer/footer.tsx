"use client";
import BehanceIcon from "@/components/common/behance-icon";
import FooterForm from "@/components/common/footer-form/footer-form";
import InstagramIcon from "@/components/common/instagram-icon";
import TelegramCircleIcon from "@/components/common/telegram-circle-icon";
import DribbleIcon from "@/components/common/unknown-cw";
import WhatsappCircleIcon from "@/components/common/whatsapp-circle-icon";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { ThemeProvider } from "@/components/common/theme-context";
import GlowEffect from "./glow-effect";
import { useContacts } from "@/hooks/use-contacts";

export default function Footer({ className }: { className: string }) {
  const contacts = useContacts();
  return (
    <footer
      className={cn(
        className,
        "@container relative w-full overflow-hidden bg-black pt-11.5 **:transition-colors md:pt-25",
      )}
    >
      <div className="fluid-container @container relative z-5">
        <Link
          href={"mailto:" + contacts.email}
          target="_blank"
          // было 7.495cqw, но на хроме из-за этого вылезал, не понятно в чем дело
          className="tracking-mid mx-auto block text-center text-[7.32cqw] font-medium whitespace-nowrap text-[#F0EDE8] underline decoration-solid underline-offset-[1.9cqw] duration-150 hover:text-[#FF3F1A] md:text-[7cqw]"
        >
          {contacts.email}
        </Link>
        <div className="xs:text-[0.875rem] tracking-mid xs:mt-7.75 mt-4.25 flex flex-row items-center justify-center space-x-5 text-[0.75rem] md:mt-12.5">
          <div className="xs:text-[1.9cqw] text-[3cqw] text-nowrap md:text-[1.25rem]">
            Contact via Messenger:
          </div>
          <Link
            className="flex flex-row items-center space-x-2.5 fill-[#F0EDE8] font-medium duration-150 hover:fill-[#FF3F1A] hover:text-[#FF3F1A] md:text-[1.25rem]"
            href={contacts.socialLinks.whatsapp ?? "#"}
            target="_blank"
          >
            <WhatsappCircleIcon className="mr-2.5 h-6.25 w-6.25 overflow-visible md:h-8.75 md:w-8.75" />
            WhatsApp
          </Link>
          <Link
            className="flex flex-row items-center space-x-2.5 fill-[#F0EDE8] font-medium duration-150 hover:fill-[#FF3F1A] hover:text-[#FF3F1A] md:text-[1.25rem]"
            href={contacts.socialLinks.telegram ?? "#"}
            target="_blank"
          >
            <TelegramCircleIcon className="mr-2.5 h-6.25 w-6.25 overflow-visible md:h-8.75 md:w-8.75" />
            Telegram
          </Link>
        </div>
        <div className="xs:px-16 xs:mt-15 mt-12.25 flex flex-col px-8.75 md:mt-25 md:px-[8.5cqw]">
          <div className="flex w-full flex-row">
            <p className="xs:text-[4.8cqw] xs:leading-[6.1cqw] w-[42.2cqw] text-[1.563rem] leading-[1.938rem] font-medium md:text-[3.8cqw] md:leading-[4.7cqw]">
              Order
              <br />
              a&nbsp;service
            </p>

            <ThemeProvider theme="dark">
              <FooterForm className="max-xs:ml-9.5 xs:w-1/2 xs:max-w-[98cqw] md:w-38cqw xs:mt-2 flex w-[58cqw] flex-row md:mt-1 md:max-w-[28.313rem]" />
            </ThemeProvider>
          </div>
          <div className="xs:mt-17 mt-12.5 flex w-full flex-row items-start pb-12.5 md:mt-20 md:items-center">
            <div className="xs:flex-row xs:flex-wrap xs:w-1/2 xs:items-center xs:gap-y-3 tracking-mid flex w-[42cqw] flex-col space-x-2.5 pr-[6.3cqw] md:space-x-5 lg:pr-0">
              <p className="xs:text-[0.875rem] tracking-mid text-[2.7cqw] whitespace-nowrap md:text-[clamp(0.875rem,2.4cqw,1.25rem)]">
                Discover our work on:
              </p>
              <div className="flex flex-row space-x-2.5 sm:space-x-5">
                <Link
                  href={contacts.socialLinks.instagram ?? "#"}
                  target="_blank"
                >
                  <InstagramIcon className="w-6.25 fill-[#F0EDE8] transition-colors duration-150 hover:fill-[#FF3F1A] md:h-8.75 md:w-8.75" />
                </Link>
                <Link
                  href={contacts.socialLinks.behance ?? "#"}
                  target="_blank"
                >
                  <BehanceIcon className="w-6.25 fill-[#F0EDE8] transition-colors duration-150 hover:fill-[#FF3F1A] md:h-8.75 md:w-8.75" />
                </Link>
                <Link
                  href={contacts.socialLinks.dribbble ?? "#"}
                  target="_blank"
                >
                  <DribbleIcon className="w-6.25 fill-[#F0EDE8] transition-colors duration-150 hover:fill-[#FF3F1A] md:h-8.75 md:w-8.75" />
                </Link>
              </div>
            </div>
            <div className="tracking-mid xs:w-1/2 xs:text-[0.563rem] flex w-[58cqw] flex-col gap-2.5 pt-1 text-[0.438rem] text-[#727272] md:text-[0.875rem] lg:gap-5">
              <p>
                © Function Design Studio is a global remote-first brand identity
                studio. All{`\u00A0`}rights reserved
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2 transition-colors duration-150 hover:text-[#FF3F1A]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/cookie-policy"
                  className="underline underline-offset-2 transition-colors duration-150 hover:text-[#FF3F1A]"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/terms-of-use"
                  className="underline underline-offset-2 transition-colors duration-150 hover:text-[#FF3F1A]"
                >
                  Terms of Use
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(new Event("open-cookie-settings"))
                  }
                  className="underline underline-offset-2 transition-colors duration-150 hover:text-[#FF3F1A]"
                >
                  Cookie Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GlowEffect />
    </footer>
  );
}
