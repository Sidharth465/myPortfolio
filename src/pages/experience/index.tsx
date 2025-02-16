import AnimatedSection from "@library/components/AnimatedSection";
import ExperienceCard from "@library/components/ExperienceCard";
import { Strings as data } from "@utils/constants";
import React from "react";



const Experience: React.FC<{isMobile:boolean}> = ({isMobile}) => {


  return (
    <AnimatedSection >
      <div className="flex  mt-10 pt-10 relative flex-col  w-full py-5 justify-center    text-white">
      <div  className=" flex items-center justify-center mb-10 " ><h1 className="text-3xl text-transparent bg-linear2 font-bold  bg-clip-text"> Work Experience</h1></div>
    {/* {!isMobile &&  <div  className="absolute top-12 left-[60px]" ><Arrow height={195}  width={200} /> </div>} */}
       

        <div className="flex  flex-col gap-5 sm:gap-0 ">
          {data?.experieceData?.map((item:Experience,index:number) => (
            <ExperienceCard  item={item} index ={index} isMobile={isMobile} isLast={data?.experieceData?.length -1 ==index}/>
          ))}
        </div>


      </div>


    </AnimatedSection>
  );
};

export default Experience;
