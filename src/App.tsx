import { Outlet } from "react-router-dom";

import Navbar from "./library/components/Navbar";

const App = () => {
  return (
    <div className=" h-[100vh] w-full flex bg-background  ">
      <div className="w-full block ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
