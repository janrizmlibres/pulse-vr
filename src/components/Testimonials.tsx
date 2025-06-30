import Banner from "./shared/Banner";
import user1 from "../assets/images/testimonials/user1.jpg";
import user2 from "../assets/images/testimonials/user2.jpg";
import user3 from "../assets/images/testimonials/user3.jpg";

interface UserProfile {
  name: string;
  title: string;
  image: string;
  quote: string;
}

const userProfiles: UserProfile[] = [
  {
    name: "Taylor K.",
    title: "Casual Gamer",
    image: user1,
    quote:
      "PulseVR has completely changed the way I experience gaming. The immersion is unreal!",
  },
  {
    name: "Jordan T.",
    title: "VR Enthusiast",
    image: user2,
    quote:
      "I appreciate how PulseVR keeps pushing the boundaries of virtual reality. Every session feels like a new adventure!",
  },
  {
    name: "Alex J.",
    title: "Hardcore Gamer",
    image: user3,
    quote:
      "I love the variety of games available. There's always something new to try!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-mono-4 py-24">
      <Banner
        heading="Hear from our VR community"
        subheading="Gamer Feedback"
        description="Hear from passionate gamers about how PulseVR transformed their VR gaming journey."
      />

      <div className="container-content grid gap-6 max-md:max-w-xl md:grid-cols-3">
        {userProfiles.map(({ name, title, image, quote }) => (
          <div
            key={name}
            className="rounded-xl border-2 border-shade-1 bg-testimonial-gradient p-4 lg:p-8"
          >
            <img
              src={image}
              alt={`${name} Profile`}
              className="mb-4 w-22 rounded-full"
            />
            <blockquote>
              <p className="mb-2 text-xl font-semibold">{name}</p>
              <p className="mb-4 body-text">{title}</p>
              <p className="text-lg">{quote}</p>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
