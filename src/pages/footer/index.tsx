import { Github, Instagram, LinkedIn } from "@assets/index";
import ContactImageurlBox from "@library/components/ContactImageurlBox";
import { Strings } from "@utils/constants";

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

const Footer = () => {
  return (
    <footer className="mt-8 w-full border-t border-white/10 px-4 sm:px-6 pt-5 pb-4">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="font-playfair text-base font-semibold text-white sm:text-lg shrink-0">
            {Strings.personalDetail?.name}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-400 sm:text-sm">
            <a
              href={`mailto:${Strings.personalDetail?.mailId}`}
              className="break-all hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
            >
              {Strings.personalDetail?.mailId}
            </a>
            <span className="hidden text-white/20 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href={`tel:${Strings.personalDetail?.contact}`}
              className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
            >
              {Strings.personalDetail?.contact}
            </a>
          </div>

          <ul
            className="flex items-center justify-center gap-3 shrink-0"
            aria-label="Social media"
          >
            {socialLinks.map((social) => (
              <li key={social.label}>
                <ContactImageurlBox
                  image={social.image}
                  url={social.url}
                  label={social.label}
                  size={32}
                  bgColor={"bgColor" in social ? social.bgColor : undefined}
                />
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-[11px] text-gray-500 sm:text-xs">
          © {new Date().getFullYear()} {Strings.personalDetail?.name}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
