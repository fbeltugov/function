"use client";
import { cn } from "@/lib/utils";
import ChipRow from "@/components/common/chip-row";
import { InputField } from "@/components/common/input-field";
import React, { useState, useRef, useEffect } from "react";
import SubmitForm from "./submit-form";
import { IFormViewModel } from "@/domain/form-view-model.interface";
import { useThemeColors } from "@/components/common/use-theme-colors";
import formatPhoneNumber from "@/lib/phone-format";
import submitCommercialOffer, {
  CommercialOfferFormData,
} from "@/lib/submit-commercial-offer";
import useToast from "@/components/common/use-toast";

export default function CommercialOfferForm({
  viewModel,
  className,
}: {
  viewModel: IFormViewModel;
  onSubmit?: () => void;
  className?: string;
}) {
  const emailRef = useRef<HTMLInputElement>(null);
  const colors = useThemeColors();
  const formRef = useRef<HTMLFormElement>(null);

  // Создаем экземпляр view model
  const [sent, setSent] = useState(false);
  const [selectedBranding, setSelectedBranding] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSecondRowVisible, setIsSecondRowVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [invalidSend, setInvalidSend] = useState(false);

  // Простая проверка валидности при автозаполнении
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const checkValidity = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (!target || target.tagName !== "INPUT") return;

      const isValid = target.validity.valid && target.value.trim().length > 0;

      if (target.name === "name") {
        setNameValid(isValid);
      } else if (target.name === "phone") {
        setPhoneValid(isValid);
      } else if (target.name === "email") {
        setEmailValid(isValid);
      }
    };

    // Событие animationstart срабатывает при автозаполнении в Chrome
    form.addEventListener("animationstart", checkValidity, true);

    return () => {
      form.removeEventListener("animationstart", checkValidity, true);
    };
  }, []);

  const handleBrandingSelect = async (brandingId: string) => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (isSecondRowVisible) {
      setIsSecondRowVisible(false);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    viewModel.selectBranding(brandingId);
    setSelectedBranding(viewModel.selectedBranding);
    setSelectedServices([...viewModel.selectedServices]);
    setIsSecondRowVisible(viewModel.isSecondRowVisible);

    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleServiceToggle = (serviceId: string) => {
    viewModel.toggleService(serviceId);
    setSelectedServices([...viewModel.selectedServices]);
  };

  const handleSubmit = async () => {
    if (isSubmitting || !formRef.current) return;

    setIsSubmitting(true);
    if (!(nameValid && phoneValid && emailValid)) {
      setInvalidSend(true);
      showToast(
        "Some fields are missing or invalid. Please check and try again.",
        true,
      );
      setIsSubmitting(false);
      return;
    }
    setInvalidSend(false);

    try {
      const formData = Object.fromEntries(
        new FormData(formRef.current).entries(),
      ) as unknown as CommercialOfferFormData;
      const result = await submitCommercialOffer(formData);

      showToast(result.message, !result.success);
      if (result.success) {
        formRef.current.reset();
        setName("");
        setPhone("");
        setEmail("");
        setSelectedBranding(null);
        setSelectedServices([]);
        setIsSecondRowVisible(false);
        setSent(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast("Failed to submit the form. Please try again later.", true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-start justify-start sm:flex-row",
        className,
      )}
    >
      {/* Left container */}
      <div className="grow-0 items-start justify-start text-[#151516]">
        <p
          className={cn(
            "font-cera-pro text-[1.5625rem] leading-7.5 font-medium tracking-normal text-nowrap sm:text-[1.625rem] sm:leading-8 md:text-[2.5rem] md:leading-[3.125rem]",
            colors.textPrimary,
          )}
        >
          Request for <br />a commercial <br className="hidden sm:block" />
          offer
        </p>
      </div>
      <div className="w-7.5 shrink-0 grow-0 sm:w-[11cqw]"></div>
      {/* Right container */}
      <div className="flex grow-1 flex-col items-center">
        {!sent ? (
          <form
            ref={formRef}
            className="max-w-[30.3125rem] grow-1 flex-col pt-7.5 sm:pt-1.25"
            action={() => {}}
          >
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
            />
            <div>
              <h3
                className={cn(
                  "font-cera-pro mb-5 text-[1.125rem] font-medium text-nowrap sm:mb-4.5 md:mb-5 md:text-[1.875rem]",
                  colors.textPrimary,
                )}
              >
                What&apos;s Your Branding?
              </h3>
              <ChipRow
                name="branding"
                chipOptions={viewModel.brandingOptions}
                selectedIds={selectedBranding ? [selectedBranding] : []}
                onChipClick={handleBrandingSelect}
                singleSelection={true}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out ${
                isSecondRowVisible
                  ? "max-h-96 translate-y-0 opacity-100"
                  : "max-h-0 translate-y-4 overflow-hidden opacity-0"
              }`}
            >
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <h3
                  className={cn(
                    "font-cera-pro mb-4.25 pt-7 text-[1.125rem] font-medium text-nowrap sm:mb-4.5 sm:pt-7 md:text-[1.875rem]",
                    colors.textPrimary,
                  )}
                >
                  What We Offer
                </h3>
                <ChipRow
                  name="services"
                  chipOptions={viewModel.currentServiceOptions}
                  selectedIds={selectedServices}
                  onChipClick={handleServiceToggle}
                  singleSelection={false}
                />
              </div>
            </div>

            <div className="h-12.5 sm:h-10"></div>
            <div className="xs:max-w-60.75 max-w-67.5 pr-10 sm:pr-0 md:max-w-full">
              <div className="flex flex-col items-stretch justify-start">
                {/* Spacer between containers */}
                <div>
                  <input type="hidden" name="source" value={"header"} />
                  <InputField
                    name="name"
                    value={name}
                    autocomplete="name"
                    onChange={setName}
                    onValidChange={setNameValid}
                    showRequiredHint={invalidSend}
                    placeholder="Full Name"
                    className="mb-5.5 md:mb-12.5"
                    required={true}
                  />
                  <InputField
                    name="phone"
                    value={phone}
                    autocomplete="tel tel-country-code tel-national"
                    onChange={setPhone}
                    formatFn={formatPhoneNumber}
                    onValidChange={setPhoneValid}
                    showRequiredHint={invalidSend}
                    pattern="\+[0-9\s]{10,17}"
                    placeholder="Phone"
                    type="tel"
                    className="mb-5.5 md:mb-12.5"
                    required={true}
                  />
                  <InputField
                    name="email"
                    value={email}
                    autocomplete="email"
                    onChange={setEmail}
                    ref={emailRef}
                    onValidChange={setEmailValid}
                    showRequiredHint={invalidSend}
                    placeholder="Email"
                    type="email"
                    className="mb-7.5 md:mb-12.5"
                    required={true}
                  />
                  <SubmitForm
                    className=""
                    disabled={
                      !(nameValid && phoneValid && emailValid) || isSubmitting
                    }
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div
            className={cn(
              colors.textPrimary,
              "tracking-mid text-2xl font-medium",
            )}
          >
            Thank you. <br />
            Your message has been received.
            <br />
            <br />
            <button
              className="font-normal underline underline-offset-6 hover:text-[#FF3F1A]"
              onClick={() => setSent(false)}
            >
              Send another message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
