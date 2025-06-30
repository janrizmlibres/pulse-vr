import FeatureCard from "./shared/FeatureCard";
import TitleBlock from "./shared/TitleBlock";
import library from "../assets/images/essentials/library.png";
import multi from "../assets/images/essentials/multi.png";
import release from "../assets/images/essentials/release.png";

interface Feature {
  image: { src: string; alt: string };
  title: string;
  description: string;
}

const features: Feature[] = [
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
    <section id="features" className="bg-mono-4 py-24">
      <TitleBlock
        heading="Your gateway to immersive VR gaming"
        subheading="PulseVR Essentials"
      />

      <div className="container-content grid justify-center gap-x-8 gap-y-8 max-md:max-w-lg md:grid-cols-3 lg:gap-x-12">
        {features.map(({ image, title, description }) => (
          <FeatureCard
            key={title}
            imageSrc={image.src}
            altText={image.alt}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Essentials;
