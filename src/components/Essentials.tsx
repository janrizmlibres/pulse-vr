import Card from "./shared/Card";
import library from "../assets/images/essentials/library.png";
import multi from "../assets/images/essentials/multi.png";
import release from "../assets/images/essentials/release.png";

const features: {
  image: { src: string; alt: string };
  title: string;
  description: string;
}[] = [
  {
    image: { src: library, alt: "VR game discs" },
    title: "Massive Library",
    description:
      "Access over 500 VR titles, ranging from action to exploration games.",
  },
  {
    image: { src: release, alt: "Glowing calendar" },
    title: "Fresh Content",
    description: "New games drop every month to keep your adventures exciting.",
  },
  {
    image: { src: multi, alt: "Glowing gemstone" },
    title: "Multi-Platform",
    description: "Play on any compatible VR headset—yours or ours.",
  },
];

const Essentials = () => {
  return (
    <section className="bg-mono-3 py-24">
      <div className="container-content">
        <p className="mb-4 subheading">PulseVR Essentials</p>
        <h2 className="mb-16 heading-secondary">
          Your gateway to immersive VR gaming
        </h2>
      </div>

      <div className="container-content grid grid-cols-3 gap-x-12">
        {features.map(({ image, ...text }) => (
          <Card imageSrc={image.src} altText={image.alt} {...text} />
        ))}
      </div>
    </section>
  );
};

export default Essentials;
