
import ContactUs from "@pages/contact-us";
import Experience from "@pages/experience";
import Home from "@pages/home";
import Navbar from "./library/components/Navbar";

const App = () => {
  return (
    <div className=" h-[100vh] w-[100vw] flex bg-background  ">
      <div className="flex-1   bg-black  ">
        <Navbar />
        <Home />
        {/* <Experience />
        <ContactUs /> */}
      </div>
    </div>
  );
};

export default App;
