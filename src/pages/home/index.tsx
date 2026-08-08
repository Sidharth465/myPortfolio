import AnimatedAvatar from "@library/components/AnimatedAvatar";
import AnimatedSection from "@library/components/AnimatedSection";
import CustomButton from "@library/components/CustomButton";
import Page from "@library/components/Page";
import { DownloadSvg } from "@library/utils/Svgs";
import { fetchResume } from "@utils/service";
import { FC, useState } from "react";
import Heading from "./Heading";
import { Strings } from "@utils/constants";

const Home: FC = () => {
  const [processing, setProcessing] = useState(false);

  const downloadResume = async () => {
    setProcessing(true);
    try {
      await fetchResume("/resume");
    } catch (error) {
      alert(`Error Downloading Resume ${error} `);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <AnimatedSection id="home" variant="fade" delay={60} stagger>
      <Page
        showTopDivider={false}
        showBottomDivider={false}
        className="min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-5rem)] flex items-center justify-center py-6 sm:py-8 lg:py-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div className="flex-1 text-center lg:text-left w-full min-w-0 animate-fadeInUp">
              <Heading />

              <div
                className="mt-5 sm:mt-6 lg:mt-8 flex justify-center lg:justify-start px-2 sm:px-0 reveal-child"
                style={{ ["--reveal-i" as string]: 0 }}
              >
                <CustomButton
                  processing={processing}
                  onClick={downloadResume}
                  title="Download Resume"
                  IconLeft={() => <DownloadSvg />}
                  className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl max-w-full"
                />
              </div>

              <div className="mt-5 sm:mt-6 lg:mt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0">
                <div
                  className="text-center p-2.5 sm:p-4 rounded-xl glass-soft min-w-0 reveal-child"
                  style={{ ["--reveal-i" as string]: 1 }}
                >
                  <div className="text-lg sm:text-2xl font-bold text-white">
                    2+
                  </div>
                  <div className="text-[10px] sm:text-sm text-gray-400 leading-tight">
                    Years
                  </div>
                </div>
                <div
                  className="text-center p-2.5 sm:p-4 rounded-xl glass-soft min-w-0 reveal-child"
                  style={{ ["--reveal-i" as string]: 2 }}
                >
                  <div className="text-lg sm:text-2xl font-bold text-white">
                    {Strings.projectsData?.length}+
                  </div>
                  <div className="text-[10px] sm:text-sm text-gray-400 leading-tight">
                    Projects
                  </div>
                </div>
                <div
                  className="text-center p-2.5 sm:p-4 rounded-xl glass-soft min-w-0 reveal-child"
                  style={{ ["--reveal-i" as string]: 3 }}
                >
                  <div className="text-lg sm:text-2xl font-bold text-white">
                    {Strings.work?.length}
                  </div>
                  <div className="text-[10px] sm:text-sm text-gray-400 leading-tight">
                    Companies
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end w-full lg:w-auto shrink-0 animate-fadeInUp [animation-delay:120ms]">
              <div className="relative">
                <AnimatedAvatar />

                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                  <div className="absolute -top-4 -left-4 w-16 h-16 glass-soft rounded-full flex items-center justify-center animate-float">
                    <span className="text-xs text-white">React</span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 glass-soft rounded-full flex items-center justify-center animate-float [animation-delay:1s]">
                    <span className="text-xs text-white">Node.js</span>
                  </div>
                  <div className="absolute top-1/2 -right-8 w-12 h-12 glass-soft rounded-full flex items-center justify-center animate-float [animation-delay:0.5s]">
                    <span className="text-xs text-white">TS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </AnimatedSection>
  );
};

export default Home;
