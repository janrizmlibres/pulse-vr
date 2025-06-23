import Button from "./shared/Button";
import logo from "../assets/images/logo.png";

const links = ["Features", "How it works", "Showcase", "Pricing", "FAQ"];

const Header = () => {
  return (
    <header className="flex h-24 items-center justify-between bg-mono-4 px-12">
      <a href="#">
        <img src={logo} alt="PulseVR Logo" className="h-9" />
      </a>

      <nav>
        <ul className="flex items-center gap-12">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-lg font-medium text-white transition-all duration-300 hover:text-primary active:text-primary"
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
              isLink
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
