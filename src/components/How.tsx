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
    <section>
      <div>
        <p></p>
        <h2></h2>
        <p></p>
      </div>

      <ol>
        {steps.map(({ number, title, description }) => (
          <li key={number}>
            <div>{number}</div>
            <div>
              <p>{title}</p>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default How;
