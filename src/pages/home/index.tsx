import CssIcon from "@assets/icons/css.png";
import HtmlIcon from "@assets/icons/html.png";
import JsIcon from "@assets/icons/js.png";
import NodejsIcon from "@assets/icons/nodejs.png";
import PostgreIcon from "@assets/icons/postgre.png";
import ReactIcon from "@assets/icons/react.png";
import ReduxIcon from "@assets/icons/redux.png";
import Avatar from "@assets/images/avatar.png";
import AnimatedSection from "@library/components/AnimatedSection";
import CustomButton from "@library/components/CustomButton";
import { DownloadSvg } from "@library/utils/Svgs";
import { useState } from "react";
import Heading from "./Heading";

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
        <div className="flex md:px-10 lg:px-20 flex-col sm:flex-row  justify-between items-center sm:gap-10 md:gap-32">
          <div className="order-2 sm:order-1 flex-col  w-full flex h-full  justify-center items-center ">
            <Heading />
          </div>
          <div className=" order-1 flex-col  w-full   relative  flex justify-center items-center h-full">
            <img
              className="  object-contain h-[280px] sm:h-[350px] md:h-full min-w-[300px]"
              src={Avatar}
            />
            <div className="flex flex-row  transition-all duration-200 gap-2 sm:gap-3  md:gap-4 lg:gap-5  mt-5 items-center">
              <img
                className="  object-contain h-[24px] w-[24px]"
                src={ReactIcon}
              />
              <img
                className="  object-contain h-[24px] w-[24px]"
                src={ReduxIcon}
              />

              <img
                className="  object-contain h-[24px] w-[24px]"
                src={NodejsIcon}
              />
              {/* <img className="  object-contain  " src={ExpressIcon} /> */}
              <div className="flex flex-row items-center font-medium px-[2px] ">
                <text className="text-white text-[12px]">
                  Express.<span className="text-yellow-200">js</span>
                </text>
              </div>
              <img
                className="  object-contain h-[24px] w-[24px]"
                src={PostgreIcon}
              />
              <img
                className="  object-contain h-[24px] w-[24px]"
                src={HtmlIcon}
              />
              <img
                className="  object-contain h-[24px] w-[24px]"
                src={CssIcon}
              />
              <img className="  object-contain  h-[24px]" src={JsIcon} />
            </div>
          </div>
        </div>
        <div className="md:px-10 lg:px-20  sm:mt-0 flex  sm:justify-start justify-center items-center   pb-5">
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
