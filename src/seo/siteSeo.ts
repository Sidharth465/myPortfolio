/** Canonical live domain — keep identical everywhere (meta, sitemap, OG, JSON-LD) */
export const SITE_URL = "https://techbysid.netlify.app";

export const SITE_NAME = "TechBySid";
export const PERSON_NAME = "Siddharth Verma";

export type SeoPageKey = "home" | "notFound";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  robots?: string;
  type?: "website" | "profile";
};

export const pageSeo: Record<SeoPageKey, PageSeo> = {
  home: {
    title: "Siddharth Verma | Full-Stack Developer (React, React Native, Node.js)",
    description:
      "Portfolio of Siddharth Verma — full-stack developer with 2+ years building scalable web and mobile apps using React, React Native, Node.js, TypeScript, and PostgreSQL.",
    path: "/",
    robots: "index, follow",
    type: "website",
  },
  notFound: {
    title: "Page Not Found | TechBySid",
    description: "The page you are looking for does not exist on TechBySid.",
    path: "/404",
    robots: "noindex, follow",
    type: "website",
  },
};

export const socialSameAs = [
  "https://github.com/Sidharth465",
  "https://www.linkedin.com/in/siddharth-verma-b323b1175/",
  "https://www.instagram.com/siddharthverma465/",
] as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export function ogImageUrl(): string {
  return `${SITE_URL}/thumbnail.png?v=3`;
}

/** Person + WebSite JSON-LD for Google rich results */
export function buildHomeJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: pageSeo.home.description,
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-IN",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: PERSON_NAME,
        url: SITE_URL,
        image: ogImageUrl(),
        jobTitle: "Full-Stack Developer",
        description: pageSeo.home.description,
        email: "mailto:siddharthverma465@gmail.com",
        telephone: "+91-8744098062",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Delhi",
          addressCountry: "IN",
        },
        sameAs: [...socialSameAs],
        knowsAbout: [
          "React",
          "React Native",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Full-stack development",
        ],
      },
    ],
  };
}
