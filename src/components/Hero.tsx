import Button from "./shared/Button";

const Hero = () => {
  return (
    <section className="bg-hero bg-cover pt-40 pb-48">
      <div className="container-hero grid grid-cols-2">
        <div>
          <h1 className="mb-8 heading-primary">
            Dive Into VR: Your Gaming Adventure Starts Here
          </h1>
          <p className="mb-12 text-xl leading-[1.7]">
            Experience virtual reality like never before with PulseVR Gaming.
            Join a vibrant community and step into epic worlds today&mdash;no
            hassle, just pure immersion.
          </p>
          <Button
            label="Start Your Free Week"
            type="plain"
            className="mr-4"
            href="#pricing"
          />
          <Button label="Explore Games &darr;" href="#showcase" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
