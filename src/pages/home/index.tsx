import Avatar from "@assets/images/avatar.png";
import Heading from "./Heading";
import AnimatedSection from "@library/components/AnimatedSection";
import CustomButton from "@library/components/CustomButton";
import { DownloadSvg } from "@library/utils/Svgs";
import { useState } from "react";

const Home = () => {
  const [processing, setProcessing] = useState(false);

  const DownloadResume = async () => {
    setProcessing(true);
    try {
      const link = document.createElement("a");
      link.href = `https://drive.google.com/uc?export=download&id=${
        import.meta.env.VITE_RESUME_ID
      }`;

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
      <div className="px-2 mt-5 bg-background justify-center items-centerjustify-center items-center">
        <div className="flex  flex-col sm:flex-row  justify-center items-center sm:gap-10 md:gap-32">
          <div className="order-2 sm:order-1   flex h-full  justify-center items-center sm:h-full sm:w-1/2">
            <Heading />
          </div>
          <div className=" order-1 flex justify-center items-center h-full">
            <img
              className="  object-contain h-[300px] sm:h-full min-w-[300px]"
              src={Avatar}
            />
          </div>
        </div>
        <div className="px-2 flex sm:inline-block justify-center items-center  sm:px-[20px] md:px-[155px]">
          <CustomButton
            processing={processing}
            onClick={DownloadResume}
            title="Resume"
            IconLeft={() => <DownloadSvg />}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Home;
