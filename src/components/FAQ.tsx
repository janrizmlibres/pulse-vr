import { PlusIcon } from "@phosphor-icons/react";

import AsidePanel from "./shared/AsidePanel";

const questions = [
  {
    id: "1",
    question: "What headsets are compatible?",
    answer:
      "Our service works with most major VR headsets, including Oculus, HTC Vive, and PlayStation VR.",
  },
  {
    id: "2",
    question: "Do I need to own VR gear?",
    answer: "Nope! Rent from us, or use your own—your choice.",
  },
  {
    id: "3",
    question: "How's the setup process?",
    answer:
      "Super simple. We include guides, and our optional in-home setup takes the hassle out.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-mono-3 py-24">
      <AsidePanel
        heading="Answers to your VR gaming questions"
        subheading="PulseVR Support"
        description="Find quick answers to common questions about our VR offerings to kickstart your PulseVR adventure."
      >
        <div>
          {questions.map(({ id, question, answer }) => (
            <div className="relative py-4 not-last:border-b-2 not-last:border-b-mono-2">
              <input
                type="checkbox"
                id={`faq${id}`}
                className="peer absolute -z-1 opacity-0"
              />
              <label
                htmlFor={`faq${id}`}
                className="flex cursor-pointer items-center justify-between transition-all duration-350 peer-checked:mb-4"
              >
                <span className="text-2xl">{question}</span>
                <PlusIcon size={28} />
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
