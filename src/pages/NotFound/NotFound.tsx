import AnimatedSection from "@library/components/AnimatedSection";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full bg-white justify-center items-center ">
     <AnimatedSection>
     <div className="flex flex-col items-center gap-5">
      <h1 className="text-red-400 font-Poppins font-bold text-lg sm:text-4xl">404 Page not found</h1>
      <Link   className="text-blue-600 font-Poppins font-normal text-lg sm:text-2xl"  replace={true} to={"/"}> 👉 Go back to Home</Link>
      </div>
     </AnimatedSection>
    </div>
  );
};

export default NotFound;
