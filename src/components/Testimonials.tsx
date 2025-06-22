import Banner from "./shared/Banner";

const Testimonials = () => {
  return (
    <section className="bg-shade-3 py-12">
      <Banner
        heading="Hear from our VR community"
        subheading="Gamer Feedback"
        description="Hear from passionate gamers about how PulseVR’s immersive experiences and community events transformed their VR gaming journey."
      />

      <div className="container-content grid grid-cols-3">
        <img src="" alt="" />
        <blockquote>
          <p>
            "PulseVR has completely changed the way I experience gaming. The
            immersion is unreal!"
          </p>
          <p>— Alex, VR Enthusiast</p>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
