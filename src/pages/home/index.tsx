import Avatar from "@assets/images/avatar.png";
import Heading from "./Heading";
import AnimatedSection from "@library/components/AnimatedSection";
const Home = () => {
  return (
    <AnimatedSection>
      <div className="px-2 mt-5 bg-background justify-center items-center">
        <div className="flex flex-col sm:flex-row  justify-center items-center sm:gap-10 md:gap-32">
          <div className="order-2 sm:order-1   flex h-full  justify-center items-center sm:h-full sm:w-1/2">
            <Heading />
          </div>
          <div className=" order-1 flex justify-center items-center h-full">
            <img className="  object-contain h-[300] w-[300]" src={Avatar} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Home;
