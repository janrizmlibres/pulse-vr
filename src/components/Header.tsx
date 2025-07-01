import { ListIcon, XIcon } from "@phosphor-icons/react";

import Navbar from "./shared/Navbar";
import logo from "../assets/images/logo.png";

interface Props {
  isOpen: boolean;
  shouldSticky: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isOpen, shouldSticky, setIsOpen }: Props) => {
  return (
    <header
      className={`flex h-24 items-center justify-between overflow-x-hidden bg-mono-4 px-8 shadow lg:px-12 ${shouldSticky && "fixed top-0 bottom-0 z-2 h-20! w-full bg-mono-4/97 pt-0 pb-0 shadow-sticky backdrop-blur-xs"}`}
    >
      <a href="#">
        <img src={logo} alt="PulseVR Logo" className="h-7 lg:h-9" />
      </a>

      <Navbar setIsOpen={setIsOpen} />

      <button
        className={shouldSticky ? "hidden" : "z-3 md:hidden"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <ListIcon size={32} className={`${isOpen && "hidden"}`} />
        <XIcon size={32} className={`${!isOpen && "hidden"}`} />
      </button>
    </header>
  );
};

export default Header;
