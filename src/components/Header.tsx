import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";

import Button from "./shared/Button";
import logo from "../assets/images/logo.png";

const links = ["Features", "How it works", "Showcase", "Pricing", "FAQ"];

const Header = ({ shouldSticky }: { shouldSticky: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`relative flex h-24 items-center justify-between overflow-x-hidden bg-mono-4 px-8 shadow lg:px-12 ${shouldSticky && "fixed! top-0 bottom-0 z-10 h-20! w-full bg-mono-4/97 pt-0 pb-0 shadow-sticky backdrop-blur-xs"}`}
    >
      <a href="#">
        <img src={logo} alt="PulseVR Logo" className="h-7 lg:h-9" />
      </a>

      <nav
        className={`max-md:mobile-nav ${isOpen ? "nav-open" : "nav-close"} ${isOpen && !shouldSticky && "fixed"}`}
      >
        <ul className="flex items-center gap-4 max-md:flex-col lg:gap-8 xl:gap-12">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-medium text-white transition-all duration-300 hover:text-primary active:text-primary lg:text-lg"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <Button
              label="Sign In"
              iconName="UserCircle"
              type="gradient"
              href="#"
            />
          </li>
        </ul>
      </nav>

      <button
        className="z-10 md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <ListIcon size={32} className={`${isOpen && "hidden"}`} />
        <XIcon size={32} className={`${!isOpen && "hidden"}`} />
      </button>
    </header>
  );
};

export default Header;
