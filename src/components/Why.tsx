import TitleBlock from "./shared/TitleBlock";
import whyImg from "../assets/images/why.jpg";

const items: { title: string; description: string }[] = [
  {
    title: "Unrivaled Variety",
    description:
      "Hundreds of games, with exclusive titles you won't find elsewhere.",
  },
  {
    title: "Premium Hardware",
    description: "Rent the best VR tech without the upfront cost.",
  },
  {
    title: "Plug-and-Play",
    description: "Seamless integration for a frustration-free experience.",
  },
  {
    title: "Community Vibes",
    description:
      "Connect with other VR gamers through events and multiplayer action.",
  },
];

const Why = () => {
  return (
    <section className="bg-shade-4 py-24">
      <TitleBlock
        heading="Unmatched VR experiences for every gamer"
        subheading="Why Choose PulseVR"
      />

      <div className="container-content grid items-center justify-center gap-12 md:grid-cols-2">
        <ul className="space-y-8 md:w-7/10 md:pl-6">
          {items.map(({ title, description }) => (
            <li key={title}>
              <h3 className="mb-2 heading-tertiary-sm">{title}</h3>
              <p className="body-text">{description}</p>
            </li>
          ))}
        </ul>

        <img
          src={whyImg}
          alt="Mannequin head wearing a VR headset"
          className="w-full rounded-xl max-md:row-start-1"
        />
      </div>
    </section>
  );
};

export default Why;
