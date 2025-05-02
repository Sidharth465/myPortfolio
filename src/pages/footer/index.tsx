import { Github, Instagram, LinkedIn } from "@assets/index";
import ContactImageurlBox from "@library/components/ContactImageurlBox";
import { Strings } from "@utils/constants";

const Footer = () => {
  return (
    <div className="flex flex-1  flex-col items-center py-8 px-6 gap-3 justify-end ">
      <h2 className="bg-linear2 text-transparent bg-clip-text font-semibold text-3xl">
        {Strings.personalDetail?.name}
      </h2>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 items-center">
        <h2 className="bg-linear2 text-transparent bg-clip-text  text-lg">
          {Strings.personalDetail?.mailId}
        </h2>
        <h2 className="bg-linear2 text-transparent bg-clip-text text-lg ">
          {Strings.personalDetail?.contact}
        </h2>
      </div>

      <div className="flex justify-center gap-5 pt-4">
        <ContactImageurlBox
          image={Github}
          bgColor="#fff"
          url={Strings.githubLink}
        />
        <ContactImageurlBox image={LinkedIn} url={Strings.linkedInLink} />
        <ContactImageurlBox image={Instagram} url={Strings.instagramLink} />
      </div>
      <div className="pt-4  text-white justify-center items-center">
        <h4 className="text-lg text-center">
          © Copyright 2025 {Strings.personalDetail?.name}. All Rights Reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
