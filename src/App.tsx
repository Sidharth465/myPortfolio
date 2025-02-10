
import Home from "@pages/home";
import Navbar from "./library/components/Navbar";
import Experience from "@pages/experience";
import { FC } from "react";
import Meteor from "@library/components/Meteor";
import { Helmet } from "react-helmet-async";

const App: FC = () => {
  const isMobile = window.innerWidth < 600;
  return (
    <>
     <Helmet>
        <title>TechBySid - Your Tech Hub</title>
        <meta name="description" content="Explore the latest in technology, coding, and software development." />
        <meta property="og:title" content="TechBySid - Your Tech Hub" />
        <meta property="og:description" content="Explore the latest in technology, coding, and software development." />
        <meta property="og:image" content="https://techbysid.netlify.app/thumbnail.jpg?v=2" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://techbysid.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="h-[100vh] w-[100vw]   bg-background  px-5 sm:px-10">
      <Meteor />
      <Navbar />
      <Home isMobile={isMobile} />
      <Experience isMobile={isMobile} />
      {/* <ContactUs /> */}

    </div>
    </>
   
  );
};

export default App;
