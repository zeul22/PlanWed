import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faq = [
    {
      question: "What services does PlanWed offer?",
      answer:
        "PlanWed offers a comprehensive range of wedding services including hotel bookings, decorations, fireworks, cakes, food, photography, entertainment, and more.",
    },
    {
      question: "How do I make a booking on PlanWed?",
      answer:
        "To make a booking on PlanWed, simply create an account, browse through the available services, select the ones you need, and proceed to checkout. You can also contact our customer support for assistance.",
    },
    {
      question: "Can I customize my wedding package?",
      answer:
        "Yes, PlanWed allows you to customize your wedding package to suit your preferences and budget. You can choose from a variety of services and vendors to create your perfect wedding.",
    },
    {
      question: "Are there any discounts available?",
      answer:
        "PlanWed offers various discounts and promotions throughout the year. Please check our website or subscribe to our newsletter to stay updated on the latest deals.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. All transactions are secure and encrypted.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking up to a certain period before the event date. Please refer to our cancellation policy for more details.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team via email at support@planwed.com or call us at 1-800-PLANWED. Our support team is available 24/7 to assist you.",
    },
    {
      question: "Do you offer services for destination weddings?",
      answer:
        "Yes, PlanWed offers services for destination weddings. We have a network of vendors and partners in various popular wedding destinations to help make your dream wedding a reality.",
    },
    {
      question: "How do I know if a vendor is reliable?",
      answer:
        "PlanWed carefully vets all vendors before listing them on our platform. We also provide customer reviews and ratings to help you make an informed decision.",
    },
    {
      question: "What if I am not satisfied with a service?",
      answer:
        "If you are not satisfied with a service, please contact our customer support team immediately. We will work with you to resolve the issue and ensure your satisfaction.",
    },
  ];
  return (
    <div>
      <div className="font-bold p-6 text-center text-2xl md:text-3xl lg:text-6xl uppercase">Frequently Asked Questions</div>
      <div className="p-4">
        {faq.map((item, index) => (
          <Accordion key={index}  type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
