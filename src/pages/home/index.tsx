import AnimatedAvatar from "@library/components/AnimatedAvatar";
import AnimatedSection from "@library/components/AnimatedSection";
import CustomButton from "@library/components/CustomButton";
import SkillsIcons from "@library/components/SkillsIcons";
import { DownloadSvg } from "@library/utils/Svgs";
import { FC, useState } from "react";
import Heading from "./Heading";

const Home:FC<{isMobile:boolean}> = ({isMobile}) => {
  const [processing, setProcessing] = useState(false);


  // ${import.meta.env.VITE_RESUME_ID}

  const downloadResume = async () => {
    setProcessing(true);
    try {
      const link = document.createElement("a");
      link.href = `https://drive.google.com/uc?export=download&id=1HJEvZz7Rx5jCByGgBESwQuH8ByMOZpv7`;


        https://drive.google.com/file/d/1HJEvZz7Rx5jCByGgBESwQuH8ByMOZpv7/view?usp=sharing
      link.target = "#"
      link.download = "resume.pdf";
      link.click();
    } catch (error) {
      alert(`Error Downloading Resume ${error} `);
    } finally {
      setProcessing(false);
    }
  };
  return (
    <AnimatedSection>
      <div className="flex  flex-col ">
        <div className=" flex flex-col sm:flex-row justify-between items-center ">
          <div className="order-2 sm:order-1"><Heading /></div>
          <div className="sm:order-2"><AnimatedAvatar isMobile ={isMobile} /></div>
        </div>
        <div className=" flex flex-col sm:flex-row justify-between items-center ">
          <div className="order-2 sm:order-1 mt-5 sm:mt-0">
            <CustomButton
            processing={processing}
            onClick={downloadResume}
            title="Resume"
            IconLeft={() => <DownloadSvg />}
          />
          </div>
          {!isMobile && <div className="order-2 sm:order-4"><SkillsIcons /></div>}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Home;



