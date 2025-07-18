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
    <AnimatedSection id="home">
      <Page className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left w-full lg:w-auto ">
              <Heading />

              {/* CTA Button */}
              <div className="mt-8 lg:mt-12 flex justify-center lg:justify-start">
                <CustomButton
                  processing={processing}
                  onClick={downloadResume}
                  title="Download Resume"
                  IconLeft={() => <DownloadSvg />}
                  className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                />
              </div>

              {/* Quick Stats */}
              <div className="mt-8 lg:mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="text-2xl font-bold bg-linear2 bg-clip-text text-transparent">
                    2+
                  </div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="text-2xl font-bold bg-linear2 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="text-2xl font-bold bg-linear2 bg-clip-text text-transparent">
                    4
                  </div>
                  <div className="text-sm text-gray-400">Companies</div>
                </div>
              </div>
            </div>

            {/* Right Content - Avatar */}
            <div className=" flex justify-center lg:justify-end w-full lg:w-auto">
              <div className="relative">
                <AnimatedAvatar isMobile={isMobile} />

                {/* Floating Tech Stack Icons for Desktop */}
                {!isMobile && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-xs text-white">React</span>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center animate-pulse delay-1000">
                      <span className="text-xs text-white">Node.js</span>
                    </div>
                    <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center animate-pulse delay-500">
                      <span className="text-xs text-white">TS</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Page>
    </AnimatedSection>
  );
};

export default Home;
