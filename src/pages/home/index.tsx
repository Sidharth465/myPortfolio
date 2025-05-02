import AnimatedAvatar from "@library/components/AnimatedAvatar";
import AnimatedSection from "@library/components/AnimatedSection";
import CustomButton from "@library/components/CustomButton";
import Page from "@library/components/Page";
import { DownloadSvg } from "@library/utils/Svgs";
import { fetchResume } from "@utils/service";
import { FC, useState } from "react";
import Heading from "./Heading";

const Home: FC<{
  isMobile: boolean;
}> = ({ isMobile }) => {
  const [processing, setProcessing] = useState(false);

  // ${import.meta.env.VITE_RESUME_ID}

  const downloadResume = async () => {
    setProcessing(true);
    try {
      fetchResume("/resume");
    } catch (error) {
      alert(`Error Downloading Resume ${error} `);
    } finally {
      setProcessing(false);
    }
  };
  return (
    <AnimatedSection id="home">
      <Page>
        <div className="flex h-full flex-col   ">
          <div className=" flex   flex-col sm:flex-row justify-center items-center ">
            <div className="order-2 sm:order-1">
              <Heading />
            </div>
            <div className="sm:order-2">
              <AnimatedAvatar isMobile={isMobile} />
            </div>
          </div>
          <div className=" flex h-full flex-col sm:flex-row justify-center items-center  ">
            <div className="order-2 sm:order-1 mt-5 sm:mt-0">
              <CustomButton
                processing={processing}
                onClick={downloadResume}
                title="Resume"
                IconLeft={() => <DownloadSvg />}
              />
            </div>
            {!isMobile && (
              <div className="order-2 sm:order-4">{/* <SkillsIcons /> */}</div>
            )}
          </div>
        </div>
      </Page>
    </AnimatedSection>
  );
};

export default Home;
