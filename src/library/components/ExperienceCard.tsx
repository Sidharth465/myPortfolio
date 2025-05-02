import { FC } from "react";
import AnimatedSection from "./AnimatedSection";

const ExperienceCard: FC<{
  item: Experience;
  isLast: boolean;
  index: number;
  isMobile: boolean;
}> = ({ item, index, isMobile, isLast }) => {
  return (
    <AnimatedSection key={item?.id}>
      <div className="flex flex-1  lg:mx-[15%] flex-col sm:flex-row  gap-16">
        <div
          className={`${
            index % 2 == 0 ? "order-1" : "order-3"
          }  flex-1 rounded-lg p-1 relative items-center flex  bg-linear2 mx-5 md:mx-0`}
        >
          <div className="flex w-full    p-2  flex-row  bg-black rounded-md shadow-lg items-center  justify-start    backdrop-opacity-10 backdrop-blur-md  ">
            <div
              key={item?.id}
              className="  flex items-center justify-start py-1 w-[130px] bg-background"
            >
              <img
                src={item?.image}
                alt="img"
                className="bg-background h-[90px] sm:h-[120px] w-[90px] sm:w-[120px] object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col  sm:text-sm rounded-br-full  text-[12px] ">
              <h3 className="font-Poppins bg-linear2 text-transparent bg-clip-text text-neutralgray text-base font-semibold">
                {item?.Company}
              </h3>
              <h3 className="font-Poppins text-white opacity-80 text-sm font-light">
                {item?.title}
              </h3>
              <h3 className="font-Poppins text-white opacity-80 text-sm font-light">
                {item?.location}
              </h3>
              <h3 className="font-Poppins text-white opacity-80 text-sm font-light">
                {item?.timeSpan}
              </h3>
              <h3 className="font-Poppins text-white opacity-80 text-sm font-light">
                {item?.type}
              </h3>
            </div>
          </div>
          {!isMobile && (
            <div
              className={`absolute  ${
                index % 2 == 0
                  ? "-right-4 border-l-secondary  border-l-[17px]"
                  : "-left-4 border-r-primary  border-r-[17px]"
              }  top-[50%] -translate-y-[50%] w-0 h-0 
                    border-t-[10px] border-t-transparent
                    border-b-[10px] border-b-transparent`}
            />
          )}
        </div>

        {!isMobile && (
          <div className=" flex  order-2   flex-col  relative items-center">
            <div className="h-full w-[10px]  bg-linear2" />
            <div className="h-[80px] absolute top-[50%] bottom-[50%]  -translate-y-[50%] w-[80px] flex items-center justify-center bg-linear2 rounded-full">
              <div className="h-[60px] flex shadow-lg w-[60px] rounded-full bg-white justify-center items-center">
                <img
                  style={{ borderRadius: "100%" }}
                  src={item?.image}
                  alt="img"
                  className="h-[50px] w-[50px]  object-contain rounded-full"
                />
              </div>

              {/* <div className='absolute -left-1 rotate-[45deg] h-[15px] shadow-lg w-[15px]  bg-linear' />
    <div className='absolute -right-1 rotate-[45deg] h-[15px] shadow-lg w-[15px]  bg-linear' /> */}
            </div>
            <div className="h-full w-[10px]  bg-linear2" />
          </div>
        )}
        {!isMobile && (
          <div
            className={`sm:flex hidden ${
              index % 2 == 0 ? "order-3" : "order-1"
            }  flex-1 rounded-lg p-1    `}
          >
            <div className="flex     p-2  flex-row  rounded-md shadow-lg items-center  justify-start    backdrop-opacity-10 backdrop-blur-md  ">
              <div
                style={{ height: 130, width: 130 }}
                key={item?.id}
                className="  flex items-center justify-center"
              ></div>
              <div className="flex flex-col  sm:text-sm rounded-br-full  text-[12px] "></div>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default ExperienceCard;

// to make border gradient
// style={{
//     border: "4px solid transparent",
//     borderImage: "linear-gradient(90deg, #D1FF1C 0%, #DBFF4E 37%, #EFFFB3 75%, #F4FFCC 100%) 1",
//     borderRadius:500
//   }} className='border  rounded-full p-1   '
