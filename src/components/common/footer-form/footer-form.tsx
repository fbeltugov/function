"use client";
import Form from "next/form";
import formatPhoneNumber from "@/lib/phone-format";
import { InputField } from "../input-field";
import { useEffect, useRef, useState } from "react";
import useToast from "../use-toast";
import submitCommercialOffer, {
  CommercialOfferFormData,
} from "@/lib/submit-commercial-offer";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FooterForm({ className }: { className?: string }) {
  const [sent, setSent] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Создаем экземпляр view model
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [invalidSend, setInvalidSend] = useState(false);

  useEffect(() => {
    console.log(emailValid, phoneValid, nameValid);
    setIsValid(emailValid && phoneValid && nameValid);
  }, [emailValid, phoneValid, nameValid]);

  const handleSubmit = async () => {
    if (isSubmitting || !formRef.current) return;

    setIsSubmitting(true);

    if (!isValid) {
      setInvalidSend(true);
      showToast("Please fill in all required fields correctly.", true);
      setIsSubmitting(false);
      return;
    }
    setInvalidSend(false);

    try {
      const formData = new FormData(formRef.current);
      setSent(true);
      const result = await submitCommercialOffer(
        Object.fromEntries(
          formData.entries(),
        ) as unknown as CommercialOfferFormData,
      );
      showToast(result.message, !result.success);
      if (result.success) {
        setName("");
        setPhone("");
        setEmail("");
        formRef.current?.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast("Failed to send. Please try again.", true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${className} @container w-full`}>
      {!sent ? (
        <Form noValidate ref={formRef} action={() => {}}>
          <div className="xs:pr-[20%] pr-0 md:pr-0">
            <input type="hidden" name="source" value={"footer"} />
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
            />
            {/* Name */}
            <InputField
              value={name}
              onChange={setName}
              onValidChange={setNameValid}
              autocomplete="name"
              type="text"
              showRequiredHint={invalidSend}
              required
              pattern="\s*\S+.*"
              name="name"
              placeholder="Name"
            />
            <InputField
              value={phone}
              onChange={setPhone}
              onValidChange={setPhoneValid}
              pattern="\+[0-9\s]{10,17}"
              autocomplete="tel tel-country-code tel-national"
              type="tel"
              showRequiredHint={invalidSend}
              required
              name="phone"
              className="mt-5 md:mt-9.5"
              formatFn={formatPhoneNumber}
              placeholder="Phone"
            />
            <InputField
              value={email}
              autocomplete="email"
              onChange={setEmail}
              onValidChange={setEmailValid}
              type="email"
              name="email"
              required
              showRequiredHint={invalidSend}
              className="mt-5 md:mt-9.5"
              placeholder="Email"
            />
          </div>
          <div className="mt-7.5 flex flex-row items-center space-x-5 md:mt-12.5 md:space-x-7.5">
            <button
              onClick={handleSubmit}
              className={cn(
                isValid ? "bg-[#F0EDE8] hover:bg-[#FF3F1A]" : "bg-[#727272]",
                "rounded-full px-5 py-0.5 text-[0.875rem] leading-[2.125rem] text-[#151516] transition-colors duration-150 md:px-7.5 md:py-2.5 md:text-[4.7cqw]",
              )}
            >
              Send
            </button>
            <p className="xs:text-[0.563rem] tracking-mid overflow-visible text-[0.438rem] text-[#B6BAAF] md:text-[0.875rem]">
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
        </Form>
      ) : (
        <div className="tracking-mid text-2xl font-medium text-[white]">
          Thank you. <br />
          Your message has been received
          <br />
          <br />
          <button
            className="text-left font-normal underline underline-offset-6 hover:text-[#FF3F1A]"
            onClick={() => setSent(false)}
          >
            Send another message
          </button>
        </div>
      )}
    </div>
  );
}
