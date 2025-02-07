
import Home from "@pages/home";
import Navbar from "./library/components/Navbar";
import Experience from "@pages/experience";
import { FC } from "react";

const App:FC = () => {
  const   isMobile = window.innerWidth <600;
  return (
    <div className="h-[100vh] w-[100vw]   bg-background  px-5 sm:px-10">
    
        <Navbar />
        <Home isMobile={isMobile} />
        <Experience  isMobile ={isMobile}/>
        {/* <ContactUs /> */}

    </div>
  );
};

export default App;
