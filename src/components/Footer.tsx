const Footer = () => {
  return (
    <footer className="bg-shade-4 py-12">
      <div className="container-content">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
              Contact PulseVR
            </h3>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Let's Connect
            </h2>
            <p className="mt-4 max-w-md text-gray-400">
              Reach out and join the VR revolution. Got questions? We're here to
              help you step into VR!
            </p>
          </div>

          <div className="lg:col-span-1 lg:justify-self-center">
            <h3 className="text-lg font-semibold tracking-tight">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-3">
                <svg
                  className="h-6 w-6 text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:hello@pulsevrgaming.com"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  hello@pulsevrgaming.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="h-6 w-6 text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
                  />
                </svg>
                <span className="text-gray-300">1-888-VR-PULSE</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:justify-self-end">
            <h3 className="text-lg font-semibold tracking-tight">Follow Us</h3>
            <p className="mt-2 text-gray-400">@PulseVRGaming</p>
            <div className="mt-4 flex space-x-5">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2.468c.28.005.561.009.842.014l.824.015c1.61.03 2.58.093 3.397.266.828.174 1.488.468 2.13.91.64.44 1.17.972 1.612 1.612.442.642.736 1.302.91 2.13.172.817.235 1.787.266 3.397l.015.824c.005.281.009.561.014.842l.015.824c.03 1.61.093 2.58.266 3.397.174.828.468 1.488.91 2.13.44.64.972 1.17 1.612 1.612.642.442 1.302.736 2.13.91.817.172 1.787.235 3.397.266l.824.015c.281.005.561.009.842.014l.824.015c1.61.03 2.58.093 3.397.266.828.174 1.488.468 2.13.91.64.44 1.17.972 1.612 1.612.442.642.736 1.302.91 2.13.172.817.235 1.787.266 3.397l.015.824c.005.281.009.561.014.842l.015.824c.03 1.61.093 2.58.266 3.397.174.828.468 1.488.91 2.13.44.64.972 1.17 1.612 1.612.642.442 1.302.736 2.13.91.817.172 1.787.235 3.397.266l.824.015c.281.005.561.009.842.014a12.034 12.034 0 0 1-8.54-8.54c-.005-.281-.009-.561-.014-.842l-.015-.824c-.03-1.61-.093-2.58-.266-3.397-.174-.828-.468-1.488-.91-2.13-.44-.64-.972-1.17-1.612-1.612-.642-.442-1.302-.736-2.13-.91-.817-.172-1.787-.235-3.397-.266l-.824-.015a12.034 12.034 0 0 1-8.54-8.54zM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm7.25-1.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Discord</span>
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.285 2.181a.87.87 0 0 0-.783-.562h-15.02a.87.87 0 0 0-.784.562.86.86 0 0 0 .093.896l2.45 3.033A13.42 13.42 0 0 0 2 13.72a13.59 13.59 0 0 0 5.49 10.32.86.86 0 0 0 .89.12.87.87 0 0 0 .6-.72v-2.345a.88.88 0 0 0-.21-.57 9.87 9.87 0 0 1-2.3-5.06.87.87 0 0 0-1.72-.08 11.64 11.64 0 0 0 2.22 6.27.87.87 0 0 0 1.43.2 11.4 11.4 0 0 0 11.23 0 .87.87 0 0 0 1.43-.2 11.64 11.64 0 0 0 2.22-6.27.87.87 0 0 0-1.72.08 9.87 9.87 0 0 1-2.3 5.06.88.88 0 0 0-.21.57v2.345a.87.87 0 0 0 .6.72.86.86 0 0 0 .89-.12A13.59 13.59 0 0 0 22 13.72a13.42 13.42 0 0 0-4.32-7.61l2.45-3.033a.86.86 0 0 0 .093-.896zM8.45 15.42a2.08 2.08 0 0 1-2.18-2.18 2.08 2.08 0 0 1 2.18-2.18 2.08 2.08 0 0 1 2.18 2.18 2.08 2.08 0 0 1-2.18 2.18zm7.1 0a2.08 2.08 0 0 1-2.18-2.18 2.08 2.08 0 0 1 2.18-2.18 2.08 2.08 0 0 1 2.18 2.18 2.08 2.08 0 0 1-2.18 2.18z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-base text-gray-500">
            &copy; 2024 PulseVR Gaming, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
