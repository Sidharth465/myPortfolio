import { Github, Instagram, LinkedIn } from "@assets/index";
import { Strings } from "@utils/constants";
import { Link } from "react-router-dom";
import ContactImageurlBox from "./ContactImageurlBox";

const Navbar = () => {
  return (
    <header className="py-1 sm:py-5 sticky">
      <nav className=" flex flex-row px-2  items-center justify-between">
        {/* logo section */}
        <div className="mr-4  hover:cursor-pointer items-center justify-center flex hover:scale-105 transition-all delay-100   rounded-md">
          <Link to={"/"}>
            <text className="text-2xl font-poppins font-extrabold bg-linear2 text-transparent bg-clip-text">
              Portfolio
            </text>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-5 ">
          <ContactImageurlBox
            image={Github}
            bgColor="#ffff"
            url={Strings.githubLink}
          />
          <ContactImageurlBox image={LinkedIn} url={Strings.linkedInLink} />
          <ContactImageurlBox image={Instagram} url={Strings.instagramLink} />
        </div>
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
