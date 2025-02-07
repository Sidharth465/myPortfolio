import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  // const navItem = [
  //   {
  //     name: "Home",
  //     slug: "/",
  //   },

  //   {
  //     name: "Experience",
  //     slug: "/experience",
  //   },
  //   {
  //     name: "Contact-Us",Ø
  //     slug: "/contact-us",
  //   },
  // ];
  return (
    <header className= "py-1 sm:py-5 bg-background">
      <nav className=" flex flex-row px-2  ">
        {/* logo section */}
        <div className="mr-4  hover:cursor-pointer items-center justify-center flex hover:scale-105 transition-all delay-100   rounded-md">
          <Link to={"/"}>
            <text className="text-2xl font-poppins font-extrabold bg-linear2 text-transparent bg-clip-text">
              Portfolio.io👋
            </text>
          </Link>
        </div>
        {/* menu */}
        {/* <ul className="ml-auto hidden gap-1 sm:flex">
          {navItem?.map((item) => (
            <Link
              to={item?.slug}
              className={` mx-2    ${
                location.pathname == item?.slug
                  ? "bg-linear2"
                  : "bg-cardbackground"
              }   px-2 flex items-center hover:cursor-pointer hover:scale-105 transition-all delay-100 rounded-md`}
            >
              <li key={item?.name}>
                <div>
                  <text className="font-semibold text-white">{item?.name}</text>
                </div>
              </li>
            </Link>
          ))}
        </ul> */}
        {/* mobile menu */}
        {/* <div
          className="ml-auto  flex justify-center items-center sm:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? (
            <svg
              className={`${isNavOpen && "animate-rotateBackward"} h-8  w-8 `}
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)" // Apply gradient here
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FA5252" />
                  <stop offset="100%" stopColor="#DD2476" />
                </linearGradient>
              </defs>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <div className="space-y-2">
              <span className="block h-0.5 w-6  bg-linear2"></span>
              <span className="block h-0.5 w-6 animate-pulse bg-linear2"></span>
              <span className="block h-0.5 w-6  bg-linear2"></span>
            </div>
          )}
        </div> */}
      </nav>
      {/* {isNavOpen && (
        <div className="flex sm:hidden   overflow-hidden animate-spread justify-center items-center ">
          <ul className="flex   flex-col py-4  items-center justify-center rounded-md mx-2 w-full   gap-7 backdrop-blur-3xl bg-opacity-50 bg-gray-800 ">
            {navItem?.map((item) => (
              <li
                // onClick={() => setIsNavOpen((prev) => !prev)}
                key={item?.name}
                className=" mx-2    px-2 flex items-center hover:cursor-pointer hover:scale-110 transition-all delay-100 rounded-md"
              >
                <Link to={item?.slug} onClick={() => setIsNavOpen(false)}>
                  <div className=" justify-center flex flex-col  ">
                    <text
                      className={` ${
                        location.pathname == item?.slug
                          ? "bg-linear2 scale-110"
                          : "bg-neutral-400 scale-100"
                      }     underline text-transparent bg-clip-text font-semibold  `}
                    >
                      {item?.name}
                    </text>
                    <span
                      className={`w-full h-[2px]   ${
                        location.pathname == item?.slug
                          ? "bg-linear animate-extendX scale-110"
                          : "scale-100"
                      }   `}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </header>
  );
};

export default Navbar;
