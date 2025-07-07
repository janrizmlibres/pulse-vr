import type { RefObject } from "react";

import Button from "./shared/Button";

interface Props {
  ref: RefObject<HTMLElement | null>;
  isNavSticky: boolean;
}

const Hero = ({ ref, isNavSticky }: Props) => {
  return (
    <section
      ref={ref}
      className={`bg-hero-mobile bg-cover bg-center pt-24 pb-32 md:bg-hero md:pt-40 md:pb-48 ${isNavSticky && "mt-24"}`}
    >
      <div className="container-content grid-cols-3 md:grid lg:grid-cols-2 xl:container-hero">
        <div className="max-lg:col-span-2">
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
            className="mr-4 mb-4"
            href="#pricing"
          />
          <Button label="Explore Games &darr;" href="#showcase" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
