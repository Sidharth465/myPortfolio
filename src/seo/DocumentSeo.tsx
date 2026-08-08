import { Helmet } from "react-helmet-async";
import {
  absoluteUrl,
  buildHomeJsonLd,
  ogImageUrl,
  pageSeo,
  SITE_NAME,
  type SeoPageKey,
} from "./siteSeo";

type DocumentSeoProps = {
  page: SeoPageKey;
};

/** Applies title, meta, canonical, social tags, and JSON-LD per route */
export default function DocumentSeo({ page }: DocumentSeoProps) {
  const seo = pageSeo[page];
  const url = absoluteUrl(seo.path === "/404" ? "/" : seo.path);
  const image = ogImageUrl();
  const jsonLd = page === "home" ? buildHomeJsonLd() : null;

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={seo.robots ?? "index, follow"} />
      <meta name="author" content="Siddharth Verma" />
      <meta
        name="keywords"
        content="Siddharth Verma, TechBySid, full-stack developer, React, React Native, Node.js, TypeScript, portfolio, Delhi"
      />
      <link rel="canonical" href={page === "notFound" ? absoluteUrl("/") : url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.type ?? "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
