"use client";
import { useThemeColors } from "@/components/common/use-theme-colors";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SubmitFormProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function SubmitForm({
  onClick,
  className,
  disabled = false,
}: SubmitFormProps) {
  const colors = useThemeColors();

  return (
    <div className={cn("flex flex-row items-center justify-start", className)}>
      <button
        {...colors.buttonProps}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-5 py-0.5 text-sm leading-8.5 font-normal tracking-[0%] text-nowrap transition-colors md:px-7.5 md:py-2.5 md:text-[1.375rem]",
          disabled ? colors.buttonDisabledBg : colors.buttonBg,
          // disabled ? colors.buttonDisabledText : colors.buttonText,
          colors.buttonText,
          colors.conditional(
            "hover:bg-[#FF3F1A] hover:text-[#151516]",
            "hover:bg-[#FF3F1A] hover:text-[#151516]",
            "hover:bg-[#151516] hover:text-[#F0EDE8]",
          ),
          disabled ? "cursor-not-allowed" : "",
          className,
        )}
        onClick={onClick}
        // disabled={disabled}
      >
        Send
      </button>
      <p
        className={cn(
          "xs:text-[0.5625rem] xs:leading-3.25 tracking-mid ml-5 text-[0.4375rem] leading-2.5 md:ml-7.5 md:text-sm md:leading-5",
          colors.textPrimary,
        )}
      >
        By submitting this form, <br />
        you agree to our{" "}
        <Link
          href="/privacy-policy"
          className="underline underline-offset-4 transition-colors duration-150 hover:text-[#FF3F1A]"
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
