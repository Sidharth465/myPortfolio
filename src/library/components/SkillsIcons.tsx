import { AndroidStudio, CssIcon, ExpressIcon, Git, HtmlIcon, JsIcon, NodejsIcon, PostgreIcon, ReactIcon, ReduxIcon, Typescript, Xcode } from "@assets/index"


const SkillsIcons = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-3 md:gap-5   mt-5 items-center">
    <img className=" h-[35px] object-contain " src={ReactIcon} />
    <img className="  h-[35px] object-contain " src={Xcode} />
    <img className=" h-[35px] object-contain " src={AndroidStudio} />
    <img className=" h-[35px]  object-contain " src={ReduxIcon} />
    <img className=" h-[35px]  object-contain " src={Git} />

    <img className=" h-[35px]  object-contain " src={NodejsIcon} />
    <img className="h-[35px]  object-contain  " src={ExpressIcon} />
    
    <img className=" h-[35px]  object-contain " src={PostgreIcon} />
    <img className=" h-[35px]  object-contain " src={Typescript} />
    <img className=" h-[35px] object-contain " src={HtmlIcon} />
    <img className="  h-[35px] object-contain " src={CssIcon} />
    <img className="   object-contain   h-[34px]" src={JsIcon} />
  </div>
  )
}

export default SkillsIcons