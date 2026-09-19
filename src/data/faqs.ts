export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What happens during the first consultation?',
    answer:
      'Your consultation is a relaxed, no-pressure conversation. Your provider reviews your goals, assesses your skin or treatment area, discusses options, and builds a personalized plan. There is no obligation to book a treatment the same day.',
  },
  {
    question: 'How is my treatment plan created?',
    answer:
      'Every plan is tailored to your anatomy, timeline, and comfort level. Your provider maps each recommendation to a specific goal, explains the product or device used, and walks you through expected results and aftercare before anything begins.',
  },
  {
    question: 'How much do treatments cost?',
    answer:
      'Pricing depends on the treatment area, product selection, and number of sessions. We share transparent pricing during your consultation and offer flexible package options. You will never encounter hidden fees.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'You can request a consultation through the form on this page or use our online booking link. Once your request is received, our team reaches out within one business day to confirm a time that works for you.',
  },
  {
    question: 'What is the follow-up process after treatment?',
    answer:
      'We schedule a follow-up check-in based on your treatment — typically two weeks for injectables and midway through a laser package. Your provider is reachable between visits for any questions that come up.',
  },
];
