
import Home from "@pages/home";
import Navbar from "./library/components/Navbar";
import Experience from "@pages/experience";
import { FC } from "react";
import Meteor from "@library/components/Meteor";

const App: FC = () => {
  const isMobile = window.innerWidth < 600;
  return (
    <div className="h-[100vh] w-[100vw]   bg-background  px-5 sm:px-10">
      <Meteor />
      <Navbar />
      <Home isMobile={isMobile} />
      <Experience isMobile={isMobile} />
      {/* <ContactUs /> */}

    </div>
  );
};

export default App;
