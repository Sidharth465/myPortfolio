import { Outlet } from "react-router-dom";

import Navbar from "./library/components/Navbar";

const App = () => {
  return (
    <div className=" h-[100vh] w-[100vw] flex bg-background  ">
      <div className="flex-1   bg-black  ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
