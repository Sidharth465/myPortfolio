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
  { id: "contactus", name: "Contact-us", slug: "#contactus" },
];

const Navbar: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { activeSection, setActiveSection } = useNavContext();
  console.log("activeSection", activeSection);

  return (
    <header className="py-3 sm:py-5 sticky top-0 bg-black z-40">
      <nav className="flex px-4 items-center justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <span className="text-2xl font-poppins font-extrabold bg-linear2 text-transparent bg-clip-text">
            Portfolio
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul
          className={`hidden sm:flex justify-center items-center text-xl gap-10 `}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item.id);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(item.id);
                  }
                }}
                href={item.slug}
                className={`${
                  activeSection == item?.id
                    ? "text-white transition-all scale-105"
                    : "text-transparent bg-clip-text bg-linear2"
                }`}
                // className="hover:scale-105 transition-all duration-100"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Links */}
        <div className="hidden sm:flex flex-row items-center gap-4">
          <ContactImageurlBox
            image={Github}
            bgColor="#fff"
            url={Strings.githubLink}
          />
          <ContactImageurlBox image={LinkedIn} url={Strings.linkedInLink} />
          <ContactImageurlBox image={Instagram} url={Strings.instagramLink} />
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="text-white text-3xl"
          >
            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isNavOpen && (
        <div className="sm:hidden flex flex-col items-center py-4 px-4 gap-5 bg-gray-900/80 backdrop-blur-md rounded-b-md animate-spread">
          <ul className="flex flex-col gap-5 text-lg  w-full text-start">
            {navItems.map((item) => (
              <li key={item.name} onClick={() => setIsNavOpen(false)}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(item.id);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                      setActiveSection(item.id);
                    }
                  }}
                  href={item.slug}
                  className={`hover:scale-105 transition ${
                    activeSection == item?.slug
                      ? "text-white transition-all scale-105"
                      : "text-transparent bg-clip-text bg-linear2"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-4 pt-4">
            <ContactImageurlBox
              image={Github}
              bgColor="#fff"
              url={Strings.githubLink}
            />
            <ContactImageurlBox image={LinkedIn} url={Strings.linkedInLink} />
            <ContactImageurlBox image={Instagram} url={Strings.instagramLink} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
