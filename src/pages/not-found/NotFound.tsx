import AnimatedSection from "@library/components/AnimatedSection";
import DocumentSeo from "../../seo/DocumentSeo";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-[100svh] w-full items-center justify-center bg-[#050a14] px-4">
      <DocumentSeo page="notFound" />
      <AnimatedSection variant="scale">
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-gradient text-4xl font-bold sm:text-6xl">
            404
          </h1>
          <p className="text-base text-gray-400 sm:text-xl">Page not found</p>
          <Link
            replace
            to="/"
            className="rounded-2xl btn-electric px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 sm:text-base"
          >
            Go back home
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default NotFound;
