import AsidePanel from "./shared/AsidePanel";

const steps = [
  {
    number: "01",
    title: "Pick Your Plan",
    description: "Choose a subscription that matches your gaming style.",
  },
  {
    number: "02",
    title: "Grab Your Gear",
    description: "Rent our hardware or use your own—we'll ship it fast.",
  },
  {
    number: "03",
    title: "Jump In",
    description: "Download the PulseVR app, sign in, and start exploring.",
  },
];

const How = () => {
  return (
    <section id="how-it-works" className="bg-mono-4 py-24">
      <AsidePanel
        heading="Jump into VR in three easy steps"
        subheading="Getting Started with PulseVR"
        description="Ready to play? Sign up now and get your first week free!"
      >
        <ol className="flex flex-col gap-6">
          {steps.map(({ number, title, description }) => (
            <li
              key={number}
              className="flex cursor-default items-center gap-4 rounded-xl border-2 border-solid border-shade-4 p-4 transition-all duration-300 hover:shadow-step-item sm:gap-8 sm:p-8"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-mono-1 font-orbitron text-2xl font-semibold text-mono-4 sm:size-16">
                {number}
              </div>
              <div>
                <p className="mb-3 text-xl font-semibold text-mono-1">
                  {title}
                </p>
                <p className="body-text">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </AsidePanel>
    </section>
  );
};

export default How;
