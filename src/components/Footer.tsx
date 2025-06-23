import {
  DiscordLogoIcon,
  EnvelopeIcon,
  InstagramLogoIcon,
  PhoneIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-mono-4 py-12">
      <div className="container-content">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h3 className="subheading">Contact PulseVR</h3>
            <h2 className="mt-2 heading-tertiary">Let's Connect</h2>
            <p className="mt-4 max-w-md body-text">
              Reach out and join the VR revolution. Got questions? We're here to
              help you step into VR!
            </p>
          </div>

          <div className="lg:col-span-1 lg:justify-self-center">
            <h3 className="heading-tertiary-sm">Get in Touch</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-3">
                <EnvelopeIcon
                  size={32}
                  weight="fill"
                  className="text-primary"
                />
                <a
                  href="mailto:hello@pulsevrgaming.com"
                  className="body-text transition-colors hover:text-white"
                >
                  hello@pulsevrgaming.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon size={32} weight="fill" className="text-primary" />
                <span className="body-text">1-888-VR-PULSE</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:justify-self-end">
            <h3 className="heading-tertiary-sm">Follow Us</h3>
            <p className="mt-2 body-text">@PulseVRGaming</p>
            <div className="mt-4 flex gap-5">
              <a
                href="#"
                className="text-mono-2 transition-colors hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <XLogoIcon size={32} weight="fill" />
              </a>

              <a
                href="#"
                className="text-mono-2 transition-colors hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <InstagramLogoIcon size={32} weight="fill" />
              </a>

              <a
                href="#"
                className="text-mono-2 transition-colors hover:text-white"
              >
                <span className="sr-only">Discord</span>
                <DiscordLogoIcon size={32} weight="fill" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-mono-2 pt-8">
          <p className="text-center body-text">
            &copy; 2024 PulseVR Gaming, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
