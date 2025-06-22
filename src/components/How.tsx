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
    <section className="bg-mono-3 py-24">
      <div className="container-content grid grid-cols-2 gap-x-12">
        <div>
          <p className="mb-4 subheading">Getting Started with PulseVR</p>
          <h2 className="mb-8 heading-secondary">
            Jump into VR in three easy steps
          </h2>
          <p className="body-text">
            Ready to play? Sign up now and get your first week free!
          </p>
        </div>

        <ol className="flex flex-col gap-6">
          {steps.map(({ number, title, description }) => (
            <li
              key={number}
              className="flex cursor-default items-center gap-8 rounded-xl border-2 border-solid border-shade-3 p-8 transition-all duration-300 hover:shadow-step-item"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-mono-1 font-orbitron text-2xl font-semibold text-mono-3">
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
      </div>
    </section>
  );
};

export default How;
