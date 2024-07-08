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
        question: "Why wouldn't I just hire a full-time designer?",
        answer: (
          <span>
           {`Good question. For starters, the annual cost of a full-time senior-level designer is around $100,000 plus benefits. (And trying to find one available is a hassle in itself.) Aside from that, you may not always have enough work to keep them busy all the time, so you;re stuck paying for time you aren't able to utilize.   With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.`}
          </span>
        ),
      },
      {
        question: "Is there a limit to how many requests I can have?",
        answer: (
          <span>
           {`Nope! When we say unlimited, we mean unlimited. Once you've susbcribed, you can add as many design requests to your queue as you'd like and they'll be delivered one by one.`} 
          </span>
        ),
      },
      {
        question: "How fast will I receive my designs?",
        answer: (
          <span>
           {`On average, most requests are completed in 2-3 days. However, mroe complex requests can take longer.`} 
          </span>
        ),
      },
      {
        question: "Who are the designers?",
        answer: (
          <span>
           {`You'll be working directly with me, Hamza Ehsan, founder of Productize. However, special requests such as animations or custom illustrations are provided by partner designers.`} 
          </span>
        ),
      },
      {
        question: "What if I don't like the design?",
        answer: (
          <span>
           {`No worries! We'll continue to revise the design until you're 100% satisfied.`} 
          </span>
        ),
      },
      {
        question: "Are there any refunds if I don't like the service?",
        answer: (
          <span>
           {`Due to the high-quality nature of the work, there will be no refunds issued.`} 
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
