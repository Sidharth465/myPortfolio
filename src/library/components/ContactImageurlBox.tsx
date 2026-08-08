import { FC } from "react";

interface SocialIconLinkProps {
  image: string;
  url: string;
  label: string;
  /** Outer square size in px — same for every icon */
  size?: number;
  /** Optional background; defaults to a uniform glass chip */
  bgColor?: string;
}

/**
 * Equal-sized social icon button following a11y + external-link standards.
 */
const ContactImageurlBox: FC<SocialIconLinkProps> = ({
  image,
  url,
  label,
  size = 36,
  bgColor,
}) => {
  const iconSize = Math.round(size * 0.56);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex items-center justify-center rounded-md shrink-0 touch-manipulation transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        backgroundColor: bgColor ?? "rgba(255, 255, 255, 0.08)",
      }}
    >
      <img
        src={image}
        alt=""
        width={iconSize}
        height={iconSize}
        decoding="async"
        className="pointer-events-none select-none object-contain"
        style={{
          width: iconSize,
          height: iconSize,
          maxWidth: iconSize,
          maxHeight: iconSize,
        }}
      />
    </a>
  );
};

export default ContactImageurlBox;
