import AmbientBackground from "@library/components/AmbientBackground";
import ScrollProgress from "@library/components/ScrollProgress";
import ContactUs from "@pages/contact-us";
import Experience from "@pages/experience";
import Home from "@pages/home";
import Projects from "@pages/projects";
import SkillsCard from "@pages/skills/Skills";
import DocumentSeo from "./seo/DocumentSeo";
import { FC } from "react";
import Navbar from "./library/components/Navbar";
import { NavProvider } from "@library/context/NavContext";

const App: FC = () => {
  return (
    <>
      <DocumentSeo page="home" />
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
