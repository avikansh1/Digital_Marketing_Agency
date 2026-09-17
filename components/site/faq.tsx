import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQItem } from '@/lib/testimonials';
import { FaqJsonLd } from '@/components/site/json-ld';

export function FAQ({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQItem[]; title?: string }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl">
            {title}
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <FaqJsonLd faqs={faqs} />
    </section>
  );
}
