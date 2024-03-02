import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import { ArrowTopRightIcon } from "@radix-ui/react-icons"

  
  export function FAQAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What&apos;s next?</AccordionTrigger>
          <AccordionContent>
            In all honesty, I don&apos;t know. I&apos;ll certainly be keeping 
            this up to date as best as I can. Contributions are welcome and 
            encouraged, as I (usually) have no idea what I&apos;m doing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Why is this useful?</AccordionTrigger>
          <AccordionContent>
            These are the technologies I found myself reaching for the most,
            and what I&apos;ve found to be the easiest or most efficient to 
            work with. The tech is well-documented, supported, and 
            community driven. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How Do I Use Convex?</AccordionTrigger>
          <AccordionContent>
             On the command line, run&nbsp; 
             <code className="bg-neutral-300 dark:bg-[#222] py-0.5 px-1 rounded-sm">npx convex dev</code>. 
             It&apos;ll take you through a few set up options and initialize 
             your new project on their platform. Visit&nbsp; 
             <a href="https://docs.convex.dev/quickstart/nextjs" target="_blank" className="hover:text-white transition-colors duration-200">the Next.js Quickstart guide</a><ArrowTopRightIcon className="inline-flex" /> 
             to learn more. Visit&nbsp; 
             <a href="https://docs.convex.dev/auth/clerk" target="_blank" className="hover:text-white transition-colors duration-200">Convex & Clerk</a><ArrowTopRightIcon className="inline-flex" /> 
             &nbsp;to learn more about adding authentication to your app. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Who the heck are you?</AccordionTrigger>
          <AccordionContent>
            Well, I&apos;m&nbsp;
            <a href="https://github.com/knlrvr" target="_blank" className="hover:text-white transition-colors duration-200">
                knlrvr<ArrowTopRightIcon className="inline-flex" />
            </a>. I&apos;m a software developer based in the US, trying to make
            the web a better place. 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  