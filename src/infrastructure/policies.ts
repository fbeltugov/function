import Service from "@/domain/service/service";
import ServiceSteps from "@/domain/service/service-steps";

export interface Policy {
  title: string;
  slug: string;
  effectiveDate: string;
  description: string;
  steps: ServiceSteps[];
  /** Closing note rendered at the end of the page. */
  closing?: string;
}

const paragraphGap = 'style="display:block;margin-top:5px"';

export const privacyPolicy: Policy = {
  title: "Privacy Policy",
  slug: "privacy-policy",
  effectiveDate: "October 2026",
  description:
    "At Function Design Studio, we respect your privacy and collect only the information necessary to respond to your inquiries and provide our services. We never sell your personal information and are committed to handling it responsibly and transparently. This Privacy Policy explains what information we collect, how we use it, and how we protect your information when you use our website.",
  steps: [
    {
      name: ["Information", "We Collect"],
      description: `When you contact us through our website, we collect only the information you voluntarily provide, including your name, phone number, and email address.<span ${paragraphGap}>To ensure the security and reliability of our website, our infrastructure may also automatically process limited technical information such as your IP address, browser type, device information, and server logs. This information is used exclusively for technical and security purposes and is not used to identify you personally.</span>`,
    },
    {
      name: ["How We Use Your", "Information"],
      description: `The information you provide is used to respond to your inquiries, discuss requested services, prepare project proposals, and communicate throughout our collaboration. We may also process certain information to maintain the security, performance, and reliability of our website or to comply with applicable legal obligations.<span ${paragraphGap}>We never sell, rent, or share your personal information with third parties for advertising or marketing purposes.</span>`,
    },
    {
      name: ["Contact Forms"],
      description:
        "Information submitted through our contact forms is securely transmitted and stored within our internal business systems. Every inquiry is reviewed personally by Function Design Studio. We do not use automated decision-making systems or artificial intelligence to evaluate or process client requests.",
    },
    {
      name: ["Cookies"],
      description: `Our website uses cookies to ensure proper functionality, improve your browsing experience, and help us understand how visitors interact with our website. Depending on your preferences, cookies may include necessary, analytics, and functional categories.<span ${paragraphGap}>You can manage your cookie preferences at any time through our <a href="#" onclick="window.dispatchEvent(new Event('open-cookie-settings')); return false;" class="text-[#FF3F1A] underline">Cookie Settings</a>. Additional information about how cookies are used is available in our <a href="/cookie-policy" class="text-[#FF3F1A] underline">Cookie Policy</a>.</span>`,
    },
    {
      name: ["Analytics"],
      description: `To improve the quality, usability, and performance of our website, we may use privacy-focused analytics services. These tools help us understand general website traffic and visitor interactions without using your personal information for advertising purposes.<span ${paragraphGap}>Analytics cookies are only enabled according to the preferences you choose through our <a href="#" onclick="window.dispatchEvent(new Event('open-cookie-settings')); return false;" class="text-[#FF3F1A] underline">Cookie Settings</a>.</span>`,
    },
    {
      name: ["Third-Party", "Services"],
      description: `To operate our website and provide our services, we rely on a small number of trusted service providers. These providers support our website infrastructure, hosting, communication, analytics, internal business operations, and, where applicable, video hosting.<span ${paragraphGap}>Our current infrastructure includes services such as Cloudflare, Railway, Google Workspace, Google Sheets, and Vimeo when video content is published. These providers process information only as necessary to deliver their respective services.</span>`,
    },
    {
      name: ["International Data", "Transfers"],
      description: `Function Design Studio operates as a global remote-first brand identity studio. As a result, some of the trusted services we use may process information in countries outside your place of residence.<span ${paragraphGap}>Whenever personal information is transferred internationally, we rely on reputable service providers that implement appropriate technical and organizational safeguards to protect your data.</span>`,
    },
    {
      name: ["Data Retention"],
      description: `We retain your personal information only for as long as reasonably necessary to respond to your inquiry, communicate regarding our services, maintain legitimate business records, and comply with applicable legal obligations.<span ${paragraphGap}>If you request the deletion of your personal information, we will remove it unless we are legally required to retain certain records.</span>`,
    },
    {
      name: ["Your Rights"],
      description: `Depending on your location and applicable privacy laws, you may have the right to access, correct, update, or delete your personal information, withdraw previously given consent where applicable, or object to certain types of data processing.<span ${paragraphGap}>If you contact us regarding any privacy-related request, we aim to respond within 30 days.</span>`,
    },
    {
      name: ["Children's Privacy"],
      description: `Our website and services are intended for business use and are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.<span ${paragraphGap}>If you believe that personal information belonging to a child has been submitted through our website, please contact us and we will remove it as soon as reasonably possible.</span>`,
    },
    {
      name: ["Data Security"],
      description: `We take appropriate technical and organizational measures to protect the information you share with us. Our website uses secure encrypted connections (HTTPS), modern infrastructure, controlled access to stored information, and industry-standard security practices designed to protect personal data.<span ${paragraphGap}>Although no method of electronic transmission or storage can guarantee absolute security, we continuously work to maintain a secure and reliable environment.</span>`,
    },
    {
      name: ["Changes to This", "Privacy Policy"],
      description: `We may update this Privacy Policy from time to time to reflect changes to our services, website, technologies, or legal requirements.<span ${paragraphGap}>The most current version will always be published on this page together with its effective date.</span>`,
    },
    {
      name: ["Contact", "Information"],
      description: `If you have any questions about this Privacy Policy or would like to exercise your privacy rights, please contact us.<span ${paragraphGap}>Function Design Studio<br/><a href="mailto:hello@functiondesign.studio" class="text-[#FF3F1A]">hello@functiondesign.studio</a></span>`,
    },
  ],
  closing:
    "We believe transparency builds\u00A0trust. If\u00A0you have any questions about how we handle your information, we’re always happy to\u00A0help.",
};

export const cookiePolicy: Policy = {
  title: "Cookie Policy",
  slug: "cookie-policy",
  effectiveDate: "October 2026",
  description:
    "This Cookie Policy explains how Function Design Studio uses cookies to support website functionality, improve your browsing experience, and remember your preferences. You can manage your cookie preferences at any time through the Cookie Settings available on this website.",
  steps: [
    {
      name: ["What Are", "Cookies"],
      description: `Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember your preferences, and provide insights into how visitors use the site.<span ${paragraphGap}>Cookies cannot access other files on your device or run programs.</span>`,
    },
    {
      name: ["How We Use", "Cookies"],
      description: `We use cookies to ensure the proper functioning of our website, remember your preferences, and understand how visitors interact with our content.<span ${paragraphGap}>The information collected helps us maintain, improve, and optimize the website experience.</span>`,
    },
    {
      name: ["Cookie", "Categories"],
      description: `Our website uses two categories of cookies.<span ${paragraphGap}>Necessary cookies are essential for the website to function properly. They support core functionality, security, accessibility, and the management of your privacy preferences. These cookies are always active.</span><span ${paragraphGap}>Analytics cookies help us understand how visitors interact with our website and improve its content, performance, and usability. They are used only with your consent and can be disabled at any time through <a href="#" onclick="window.dispatchEvent(new Event('open-cookie-settings')); return false;" class="text-[#FF3F1A] underline">Cookie Settings</a>.</span>`,
    },
    {
      name: ["Managing Your", "Preferences"],
      description: `You can change your cookie preferences at any time through the <a href="#" onclick="window.dispatchEvent(new Event('open-cookie-settings')); return false;" class="text-[#FF3F1A] underline">Cookie Settings</a> available on our website.<span ${paragraphGap}>Necessary cookies always remain active because they are essential for the operation of the website.</span>`,
    },
    {
      name: ["Third-Party", "Services"],
      description: `We use Google Analytics to understand how visitors interact with our website and to improve its performance.<span ${paragraphGap}>Google Analytics is activated only after you give consent to analytics cookies. If you reject or withdraw consent, analytics tracking will be disabled.</span><span ${paragraphGap}>Google may process certain information in accordance with its own privacy policy.</span>`,
    },
    {
      name: ["Cookie Retention"],
      description: `Cookies may remain on your device for different periods, depending on their purpose and configuration. Some are deleted when you close your browser, while others may be retained for a limited period.<span ${paragraphGap}>You can manage your cookie preferences at any time through <a href="#" onclick="window.dispatchEvent(new Event('open-cookie-settings')); return false;" class="text-[#FF3F1A] underline">Cookie Settings</a>.</span>`,
    },
    {
      name: ["Changes to This", "Cookie Policy"],
      description: `We may update this Cookie Policy from time to time to reflect changes to our website, technologies, or legal requirements.<span ${paragraphGap}>The latest version will always be available on this page together with its effective date.</span>`,
    },
    {
      name: ["Contact"],
      description: `If you have any questions about how we use cookies or this Cookie Policy, please contact us.<span ${paragraphGap}>Function Design Studio<br/><a href="mailto:hello@functiondesign.studio" class="text-[#FF3F1A]">hello@functiondesign.studio</a></span>`,
    },
  ],
};

export const termsOfUse: Policy = {
  title: "Terms of Use",
  slug: "terms-of-use",
  effectiveDate: "October 2026",
  description: `These Terms of Use govern your access to and use of the Function Design Studio website. By using this website, you agree to these terms and acknowledge that they may be updated from time to time. Your use of this website is also subject to our <a href="/privacy-policy" class="text-[#FF3F1A] underline">Privacy Policy</a> and <a href="/cookie-policy" class="text-[#FF3F1A] underline">Cookie Policy</a>. If you do not agree with these Terms of Use, please discontinue using the website.`,
  steps: [
    {
      name: ["Website Use"],
      description: `This website is provided to present the work, services, and expertise of Function Design Studio. You may browse its content and contact us regarding potential projects or other legitimate business inquiries.<span ${paragraphGap}>You agree not to misuse the website, interfere with its operation, attempt unauthorized access, introduce malicious software, or use its content in violation of applicable laws.</span>`,
    },
    {
      name: ["Intellectual", "Property"],
      description: `Unless otherwise stated, all original content published on this website, including its design, text, graphics, visual identity, layouts, and other original materials, is the intellectual property of Function Design Studio and is protected by applicable copyright and intellectual property laws.<span ${paragraphGap}>No part of this website may be copied, reproduced, distributed, modified, or used for commercial purposes without prior written permission.</span>`,
    },
    {
      name: ["Client Work", "& Portfolio"],
      description: `This website may feature selected client projects for portfolio and presentation purposes.<span ${paragraphGap}>All client names, trademarks, and logos remain the property of their respective owners and are displayed solely to showcase completed work. Where required, portfolio materials are published with permission or in accordance with applicable agreements.</span>`,
    },
    {
      name: ["Third-Party Links"],
      description: `This website may contain links to third-party websites or services for your convenience.<span ${paragraphGap}>Function Design Studio is not responsible for the content, privacy practices, or availability of external websites and does not endorse their content unless explicitly stated.</span>`,
    },
    {
      name: ["Disclaimer"],
      description: `This website and its content are provided “as is,” without warranties of any kind, whether express or implied.<span ${paragraphGap}>The information provided on this website is intended for general informational purposes only. While we strive to keep all content accurate and up to date, we make no guarantees regarding the completeness, accuracy, or availability of the information presented.</span><span ${paragraphGap}>Website content may be updated, modified, or removed at any time without prior notice.</span>`,
    },
    {
      name: ["Limitation", "of Liability"],
      description: `To the fullest extent permitted by applicable law, Function Design Studio shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website.<span ${paragraphGap}>Your use of the website is entirely at your own discretion and risk.</span>`,
    },
    {
      name: ["Changes", "to These Terms"],
      description: `We may update these Terms of Use from time to time to reflect changes to our website, services, or legal requirements.<span ${paragraphGap}>The latest version will always be available on this page together with its effective date.</span>`,
    },
    {
      name: ["Contact"],
      description: `If you have any questions regarding these Terms of Use, please contact us.<span ${paragraphGap}>Function Design Studio<br/><a href="mailto:hello@functiondesign.studio" class="text-[#FF3F1A]">hello@functiondesign.studio</a></span>`,
    },
  ],
};

/** Plain object safe to pass from Server → Client Components. */
export function policyToService(policy: Policy): Service {
  return {
    title: policy.title,
    slug: policy.slug,
    description: policy.description,
    steps: policy.steps,
  };
}
