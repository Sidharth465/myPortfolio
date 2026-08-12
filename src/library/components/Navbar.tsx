import { Github, Instagram, LinkedIn } from "@assets/index";
import { Strings } from "@utils/constants";
import { CloseIcon, MenuIcon } from "@utils/Svgs";
import { FC, useEffect, useId, useState } from "react";
import ContactImageurlBox from "./ContactImageurlBox";
import { useNavContext } from "@library/context/NavContext";
import { useScrollSpy } from "@library/hooks/useScrollSpy";

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

const socialLinks = [
  {
    image: Github,
    url: Strings.githubLink,
    label: "GitHub profile",
    bgColor: "#ffffff",
  },
  { image: LinkedIn, url: Strings.linkedInLink, label: "LinkedIn profile" },
  {
    image: Instagram,
    url: Strings.instagramLink,
    label: "Instagram profile",
  },
] as const;

const ICON_SIZE = 36;

const Navbar: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { activeSection, setActiveSection } = useNavContext();
  const menuId = useId();

  useScrollSpy(setActiveSection);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsNavOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const handleNavItemClick = (item: NavItem, e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(item.id);
    if (!target) return;

    const header = document.querySelector("header");
    const headerHeight = header?.offsetHeight || 64;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    setActiveSection(item.id);
    setIsNavOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] glass-nav supports-[backdrop-filter]:bg-black/40">
      <nav className="container  px-4 sm:px-6 lg:px-8 " aria-label="Primary">
        <div className="flex items-center justify-end h-14 sm:h-16 lg:h-20">
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-5 xl:gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      onClick={(e) => handleNavItemClick(item, e)}
                      href={item.slug}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative px-2 py-2 text-base xl:text-lg font-medium font-playfair transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm ${
                        isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0066ff] rounded-full"
                          aria-hidden
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul
              className="flex items-center gap-3 ml-2 xl:ml-4"
              aria-label="Social media"
            >
              <li>
                <ContactImageurlBox
                  image={Github}
                  url={Strings.githubLink}
                  label="GitHub profile"
                  size={ICON_SIZE}
                  bgColor="#ffffff"
                />
              </li>
              <li>
                <ContactImageurlBox
                  image={LinkedIn}
                  url={Strings.linkedInLink}
                  label="LinkedIn profile"
                  size={ICON_SIZE}
                />
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="p-2.5 rounded-lg text-gray-300 hover:text-white glass-chip transition-colors duration-300 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={isNavOpen}
              aria-controls={menuId}
            >
              {isNavOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {isNavOpen && (
          <div
            id={menuId}
            className="lg:hidden pb-4"
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-xl mt-1 max-h-[calc(100svh-4rem)] overflow-y-auto">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        onClick={(e) => handleNavItemClick(item, e)}
                        href={item.slug}
                        aria-current={isActive ? "page" : undefined}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${
                          isActive
                            ? "text-white bg-gradient-to-r from-white/10 to-white/5 border border-white/10"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <ul
                className="flex justify-center items-center gap-4 pt-4 border-t border-white/10"
                aria-label="Social media"
              >
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <ContactImageurlBox
                      image={social.image}
                      url={social.url}
                      label={social.label}
                      size={ICON_SIZE}
                      bgColor={"bgColor" in social ? social.bgColor : undefined}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
