import Meteor from "@library/components/Meteor";
import ContactUs from "@pages/contact-us";
import Experience from "@pages/experience";
import Home from "@pages/home";
import Projects from "@pages/projects";
import SkillsCard from "@pages/skills/Skills";
import { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./library/components/Navbar";
import { NavProvider } from "@library/context/NavContext";

const App: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Check on mount
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Helmet>
        <title>TechBySid - Your Tech Hub</title>
        <meta
          name="description"
          content="Explore the latest in technology, coding, and software development."
        />
        <meta property="og:title" content="TechBySid - Your Tech Hub" />
        <meta
          property="og:description"
          content="Explore the latest in technology, coding, and software development."
        />
        <meta
          property="og:image"
          content="https://techbysid.netlify.app/thumbnail.png?v=2"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://techbysid.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <NavProvider>
        <div className="bg-background">
          <Meteor />
          <Navbar />
          <Home isMobile={isMobile} />
          <Experience isMobile={isMobile} />
          <SkillsCard />
          <Projects />
          <ContactUs />
          {/* <Footer /> */}
        </div>
      </NavProvider>
    </>
  );
};

export default App;
