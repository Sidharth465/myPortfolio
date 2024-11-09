import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const navItem = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Contact-Us",
      slug: "/contact-us",
    },
    {
      name: "Experience",
      slug: "/experience",
    },
  ];
  return (
    <header className="py-3    bg-background">
      <nav className=" flex flex-row px-2">
        {/* logo section */}
        <div className="mr-4 hover:cursor-pointer items-center justify-center flex hover:scale-105 transition-all delay-100  px-2 rounded-md">
          <Link to={"/"}>
            <text className="text-2xl font-bold bg-linear text-transparent bg-clip-text">
              Hey!👋
            </text>
          </Link>
        </div>
        {/* menu */}
        <ul className="ml-auto hidden sm:flex">
          {navItem?.map((item) => (
            <li
              key={item?.name}
              className={` mx-2  animate-pulse  ${
                location.pathname == item?.slug
                  ? "bg-linear2"
                  : "bg-cardbackground"
              }   px-2 flex items-center hover:cursor-pointer hover:scale-105 transition-all delay-100 rounded-md`}
            >
              <Link to={item?.slug}>
                <div>
                  <text className="font-semibold text-white">{item?.name}</text>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {/* mobile menu */}
        <div
          className="ml-auto flex sm:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? (
            <svg
              className="h-8 w-8 animate-pulse text-neutral-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <div className="space-y-2">
              <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
            </div>
          )}
        </div>
      </nav>
      {isNavOpen && (
        <div className="flex sm:hidden   w-full justify-center items-center ">
          <ul className="flex  flex-col py-2  items-center justify-center rounded-md mx-2 w-full  gap-7 backdrop-blur-3xl bg-opacity-30 bg-gray-800 ">
            {navItem?.map((item) => (
              <li
                // onClick={() => setIsNavOpen((prev) => !prev)}
                key={item?.name}
                className=" mx-2 animate-pulse  px-2 flex items-center hover:cursor-pointer hover:scale-110 transition-all delay-100 rounded-md"
              >
                <Link to={item?.slug}>
                  <div className=" justify-center flex flex-col  ">
                    <text
                      className={` ${
                        location.pathname == item?.slug
                          ? "bg-linear2"
                          : "bg-white"
                      }     underline text-transparent bg-clip-text font-semibold `}
                    >
                      {item?.name}
                    </text>
                    <span
                      className={`w-full h-[1px]  ${
                        location.pathname == item?.slug
                          ? "bg-linear"
                          : "bg-white"
                      }   `}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
