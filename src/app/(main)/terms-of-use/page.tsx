import PolicyClosingBlock from "@/components/blocks/policy/policy-closing-block";
import PolicyMainBlock from "@/components/blocks/policy/policy-main-block";
import ServiceStepsBlock from "@/components/blocks/service/2-steps/service-steps-block";
import { policyToService, termsOfUse } from "@/infrastructure/policies";

export default function TermsOfUsePage() {
  return (
    <main className="flex w-full flex-col items-start pt-32 pb-25.75 xs:pt-17.5 xs:pb-26 md:pt-25 md:pb-51.25">
      <PolicyMainBlock className="md:px-[9.6cqw]" policy={termsOfUse} />
      <ServiceStepsBlock
        className="mt-17.5 xs:mt-25 md:mt-37.5 md:px-[9.6cqw]"
        service={policyToService(termsOfUse)}
      />
      {termsOfUse.closing && (
        <PolicyClosingBlock
          className="mt-17.5 xs:mt-25 md:mt-37.5 md:px-[9.6cqw]"
          text={termsOfUse.closing}
        />
      )}
    </main>
  );
}
