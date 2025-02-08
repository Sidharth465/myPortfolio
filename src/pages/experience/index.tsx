import AnimatedSection from "@library/components/AnimatedSection";
import Arrow from "@library/components/Arrow";
import ExperienceCard from "@library/components/ExperienceCard";
import { Strings as data } from "@utils/constants";
import React from "react";



const Experience: React.FC<{isMobile:boolean}> = ({isMobile}) => {


  return (
    <AnimatedSection >
      <div className="flex mt-10 pt-10 relative flex-col  w-full py-5 justify-center  items-center text-white">
      <div  className="absolute top-5 left-0" ><h1 className="text-2xl text-transparent bg-linear2 font-bold  bg-clip-text"> Work Experience</h1></div>
    {!isMobile &&  <div  className="absolute top-12 left-[60px]" ><Arrow height={200}  width={200} /> </div>}
       

        <div className="pt-10  grid grid-cols-1 sm:grid-cols-2 place-items-center gap-5">
          {data?.experieceData?.map((item:Experience,index:number) => (
            <ExperienceCard  item={item} index={index}/>
          ))}
        </div>


      </div>


    </AnimatedSection>
  );
};

export default Experience;
