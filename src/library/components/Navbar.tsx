import { Github, Instagram, LinkedIn } from "@assets/index";
import { Strings } from "@utils/constants";
import { CloseIcon, MenuIcon } from "@utils/Svgs";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import ContactImageurlBox from "./ContactImageurlBox";
import { useNavContext } from "@library/context/NavContext";

interface NavItem {
  id: string;
  name: string;
  slug: string;
}

const navItems: NavItem[] = [
  { id: "home", name: "Home", slug: "#home" },
  { id: "experience", name: "Experience", slug: "#experience" },
  { id: "skills", name: "Skills", slug: "#skills" },
  { id: "projects", name: "Projects", slug: "#projects" },
  { id: "contactus", name: "Contact", slug: "#contactus" },
];

const Navbar: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { activeSection, setActiveSection } = useNavContext();

  const handleNavItemClick = (item: NavItem, e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(item.id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;

      // Scroll to the target section, considering the header height as an offset
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: "smooth",
      });

      setActiveSection(item.id);
      setIsNavOpen(false); // Close mobile menu
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to={"/"} className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl font-bold bg-linear2 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    onClick={(e) => handleNavItemClick(item, e)}
                    href={item.slug}
                    className={`relative px-3 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 ${
                      activeSection === item?.id
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {activeSection === item?.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-8">
              <ContactImageurlBox
                image={Github}
                bgColor="#fff"
                url={Strings.githubLink}
              />
              <ContactImageurlBox image={LinkedIn} url={Strings.linkedInLink} />
              <ContactImageurlBox
                image={Instagram}
                url={Strings.instagramLink}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isNavOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-700/50 mt-2">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      onClick={(e) => handleNavItemClick(item, e)}
                      href={item.slug}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                        activeSection === item?.id
                          ? "text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                          : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-700/50">
                <ContactImageurlBox
                  image={Github}
                  bgColor="#fff"
                  url={Strings.githubLink}
                />
                <ContactImageurlBox
                  image={LinkedIn}
                  url={Strings.linkedInLink}
                />
                <ContactImageurlBox
                  image={Instagram}
                  url={Strings.instagramLink}
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
