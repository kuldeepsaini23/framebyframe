"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    section: "General",
    qa: [
      {
        question: "What types of motion graphics services do you offer?",
        answer: (
          <span>
           {`At FrameByFrame, we specialize in creating dynamic motion graphics that include, Explainers, animated logos, infographics, title sequences, and promotional videos. Our team can bring your brand to life with custom animations tailored to your specific needs.`}
          </span>
        ),
      },
      {
        question: "How does the video editing process work?",
        answer: (
          <span>
           {`Our video editing process starts with an initial consultation to understand your project requirements. Once we have your raw footage, our skilled editors will craft a compelling narrative, enhance the visual quality, add special effects, and finalize the video with professional-grade audio and color correction. We'll keep you updated with drafts and incorporate your feedback to ensure the final product meets your expectations.`} 
          </span>
        ),
      },
      {
        question: "What are explainer videos and how can they benefit my business?",
        answer: (
          <span>
           {`Explainer videos are short, engaging videos that explain your product, service, or concept in a clear and concise manner. They can help simplify complex ideas, capture your audience's attention, and increase engagement. These videos are perfect for marketing, training, onboarding, and more. FrameByFrame creates customized explainer videos that align with your brand and communicate your message effectively.`} 
          </span>
        ),
      },
      {
        question: "Can you create short-form content for social media platforms?",
        answer: (
          <span>
           {`Yes, we specialize in creating short-form content optimized for various social media platforms like Instagram, TikTok, Facebook, and YouTube. Whether you need attention-grabbing ads, quick tips, or engaging stories, our team can produce content that resonates with your audience and boosts your online presence.`} 
          </span>
        ),
      },
      {
        question: "How long does it typically take to complete a project?",
        answer: (
          <span>
           {`The timeline for completing a project varies depending on the complexity and scope. On average, a simple video edit may take 3-7 days, while more intricate projects like motion graphics or explainer videos can take 10-15 days. We always strive to meet your deadlines and will provide a more accurate timeline after discussing your specific requirements.`} 
          </span>
        ),
      },
      {
        question: "What file formats will I receive upon project completion?",
        answer: (
          <span>
           {`Upon completion of your project, we will deliver the final video in the format of your choice, typically in high-definition MP4 or MOV formats. If you have specific format requirements for different platforms or purposes, please let us know, and we'll accommodate your needs. Additionally, we can provide raw files and other assets upon request.`} 
          </span>
        ),
      },
    ],
  },


];

export function FAQ() {
  return (
    <section id="faq" className="w-full">
      <div className="py-14 w-full">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto w-full text-center">
            <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
              FAQs
            </h4>
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
              Need help with something? Here are some of the most common
              questions we get.
            </p>
          </div>
          <div className="container mx-auto my-12 space-y-12 px-10">
            {faqs.map((faq, idx) => (
              <section key={idx} id={"faq-" + faq.section}>
                {/* <h2 className="mb-4 text-left text-lg font-semibold tracking-tight text-foreground/60">
                  {faq.section}
                </h2> */}
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col items-center justify-center"
                >
                  {faq.qa.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={faq.question}
                      className="w-full "
                    >
                      <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
          <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
            Still have questions? Email us at{" "}
            <a href="mailto:contact@framebyframe.media" className="underline">
              contact@framebyframe.media
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
}
