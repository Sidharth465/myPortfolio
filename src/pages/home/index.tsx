import AnimatedAvatar from "@library/components/AnimatedAvatar";
import AnimatedSection from "@library/components/AnimatedSection";
import CustomButton from "@library/components/CustomButton";
import SkillsIcons from "@library/components/SkillsIcons";
import { DownloadSvg } from "@library/utils/Svgs";
import { useState } from "react";
import Heading from "./Heading";

const Home = () => {
  const [processing, setProcessing] = useState(false);

  const   isMobile = window.innerWidth <600;

  const downloadResume = async () => {
    setProcessing(true);
    try {
      const link = document.createElement("a");
      link.href = `https://drive.google.com/uc?export=download&id=${import.meta.env.VITE_RESUME_ID
        }`;
      // link.target = "#"

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
      <div className="flex  flex-col bg-background">
        <div className=" flex flex-col sm:flex-row justify-between items-center px-5 sm:px-10">
          <div className="order-2 sm:order-1"><Heading /></div>
          <div className="sm:order-2"><AnimatedAvatar isMobile ={isMobile} /></div>
        </div>
        <div className=" flex flex-col sm:flex-row justify-between items-center px-10">
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



