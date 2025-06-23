import { PlusIcon, MinusIcon } from "@phosphor-icons/react";

import AsidePanel from "./shared/AsidePanel";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What headsets are compatible?",
    answer:
      "Our service works with most major VR headsets, including Oculus, HTC Vive, and PlayStation VR.",
  },
  {
    id: 2,
    question: "Do I need to own VR gear?",
    answer: "Nope! Rent from us, or use your own—your choice.",
  },
  {
    id: 3,
    question: "How's the setup process?",
    answer:
      "Super simple. We include guides, and our optional in-home setup takes the hassle out.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-shade-4 py-24">
      <AsidePanel
        heading="Answers to your VR gaming questions"
        subheading="PulseVR Support"
        description="Find quick answers to common questions about our VR offerings to kickstart your PulseVR adventure."
      >
        <div>
          {questions.map(({ id, question, answer }) => (
            <div className="relative py-4 not-last:border-b-2 not-last:border-b-mono-2">
              <input
                type="radio"
                id={`faq${id}`}
                className="peer absolute -z-1 opacity-0 [&:checked~label_.minus-icon]:block [&:checked~label_.plus-icon]:hidden"
                name="faq"
                defaultChecked={id === 1}
              />
              <label
                htmlFor={`faq${id}`}
                className="flex cursor-pointer items-center justify-between transition-all duration-350 peer-checked:mb-4"
              >
                <span className="text-2xl">{question}</span>
                <PlusIcon size={28} className="plus-icon" />
                <MinusIcon size={28} className="minus-icon hidden" />
              </label>
              <div className="max-h-0 overflow-hidden transition-all duration-350 peer-checked:max-h-96">
                <p className="body-text">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </AsidePanel>
    </section>
  );
};

export default FAQ;
