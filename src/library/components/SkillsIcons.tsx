import JsIcon from "@assets/icons/js.png";
import AndroidStudio from "@assets/icons2/Android Studio.svg";
import CssIcon from "@assets/icons2/CSS3.svg";
import HtmlIcon from "@assets/icons2/HTML5.svg";
import NodejsIcon from "@assets/icons2/Node.js.svg";
import PostgreIcon from "@assets/icons2/PostgresSQL.svg";
import ReactIcon from "@assets/icons2/React.svg";
import ReduxIcon from "@assets/icons2/Redux.svg";
import Xcode from "@assets/icons2/Xcode.svg";

const SkillsIcons = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-3 md:gap-5   mt-5 items-center">
    <img className=" h-[35px] object-contain " src={ReactIcon} />
    <img className="  h-[35px] object-contain " src={Xcode} />
    <img className=" h-[35px] object-contain " src={AndroidStudio} />
    <img className=" h-[35px]  object-contain " src={ReduxIcon} />

    <img className=" h-[35px]  object-contain " src={NodejsIcon} />
    {/* <img className="  object-contain  " src={ExpressIcon} /> */}
    <div className="flex flex-row items-center font-medium px-[2px] bg-cardbackground">
      <text className="text-white text-[12px]">
        Express.<span className="text-yellow-200">js</span>
      </text>
    </div>
    <img className=" h-[35px]  object-contain " src={PostgreIcon} />
    <img className=" h-[35px] object-contain " src={HtmlIcon} />
    <img className="  h-[35px] object-contain " src={CssIcon} />
    <img className="   object-contain   h-[35px]" src={JsIcon} />
  </div>
  )
}

export default SkillsIcons