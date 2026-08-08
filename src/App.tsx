import AmbientBackground from "@library/components/AmbientBackground";
import ScrollProgress from "@library/components/ScrollProgress";
import ContactUs from "@pages/contact-us";
import Experience from "@pages/experience";
import Home from "@pages/home";
import Projects from "@pages/projects";
import SkillsCard from "@pages/skills/Skills";
import { FC } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./library/components/Navbar";
import { NavProvider } from "@library/context/NavContext";

const App: FC = () => {
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
        <div className="relative min-h-[100svh] bg-[#050a14]">
          <AmbientBackground />
          <Navbar />
          <ScrollProgress />
          <div className="relative z-10 w-full pt-[3.5rem] sm:pt-16 lg:pt-20">
            <Home />
            <Experience />
            <SkillsCard />
            <Projects />
            <ContactUs />
          </div>
        </div>
      </NavProvider>
    </>
  );
};

export default App;
