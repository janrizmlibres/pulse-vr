import { ListIcon, XIcon } from "@phosphor-icons/react";

import Button from "./Button";

const links = ["Features", "How it works", "Showcase", "Pricing", "FAQ"];

interface Props {
  isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNavSticky?: boolean;
}

const Navbar = ({ isOpen, setIsOpen, isNavSticky }: Props) => {
  return (
    <>
      <nav
        className={
          isOpen === undefined
            ? "max-md:hidden"
            : `max-md:mobile-nav md:hidden ${isOpen ? "max-md:nav-open" : "max-md:nav-close"}`
        }
      >
        <ul className="flex items-center gap-x-4 gap-y-8 max-md:flex-col lg:gap-x-8 xl:gap-x-12">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-medium text-white transition-all duration-300 hover:text-primary active:text-primary max-md:text-2xl lg:text-lg"
                onClick={() => setIsOpen(false)}
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
              href="#pricing"
              className="max-md:text-2xl"
              onClick={() => setIsOpen(false)}
            />
          </li>
        </ul>
      </nav>

      {isNavSticky && (
        <button
          className={"fixed top-6 right-8 z-2 md:hidden"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <ListIcon size={32} className={`${isOpen && "hidden"}`} />
          <XIcon size={32} className={`${!isOpen && "hidden"}`} />
        </button>
      )}
    </>
  );
};

export default Navbar;
