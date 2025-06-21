import logo from "../assets/images/logo.png";

const links = ["Features", "How it works", "Showcase", "Pricing", "FAQ"];

const Header = () => {
  return (
    <header className="flex h-24 items-center justify-between bg-mono-3">
      <a href="#">
        <img src={logo} alt="PulseVR Logo" className="h-9" />
      </a>

      <nav>
        <ul className="flex items-center gap-12">
          {links.map((link) => (
            <li>
              <a
                href="#"
                className="text-lg font-medium text-white transition-all duration-300 hover:text-primary active:text-primary"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a href="#">
              <span>Sign In</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
