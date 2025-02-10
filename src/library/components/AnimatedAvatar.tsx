import LottieFile from "@assets/images/lottieBg.json";
import Avatar from "@assets/images/avatar.png";
import Lottie from 'lottie-react';
import { FC } from "react";
import SkillsIcons from "./SkillsIcons";



const AnimatedAvatar:FC<{isMobile:boolean}> = ({isMobile}) => {
    
  return (

    <div className='relative  pb-5 sm:pb-0 w-full flex flex-col items-center justify-center'><Lottie style={{height:400,width:"100%"}} animationData={LottieFile}   autoPlay ={false} loop={false} />
    <img
      className=" absolute   object-contain h-[200px] sm:h-[250px]   min-w-[300px]"
      src={Avatar}
    />
     {isMobile && <div className="absolute bottom-0" ><SkillsIcons/></div>}
    
    </div>
   

  )
}

export default AnimatedAvatar