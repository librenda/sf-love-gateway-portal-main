
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How is RizzMCP different from other dating apps?",
    answer: "RizzMCP is specially designed for busy professionals in San Francisco. We use a proprietary matching algorithm that considers career compatibility, education, and lifestyle preferences to create meaningful connections."
  },
  {
    question: "How much does a subscription cost?",
    answer: "We offer various subscription tiers starting at $19.99 per month. Check out our pricing section for detailed information on all our plans and features."
  },
  {
    question: "Is RizzMCP only for people working in tech?",
    answer: "While we have a strong tech community, RizzMCP is open to all professionals in San Francisco looking for meaningful connections. Our diverse user base includes people from many different industries."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your premium features will remain active until the end of your current billing period."
  },
  {
    question: "How do you ensure user safety and privacy?",
    answer: "We employ strict verification processes, profile screening, and end-to-end encryption for all messages. We never share your personal information with third parties without your consent."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-sfdating-red">
        Frequently Asked Questions
      </h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
