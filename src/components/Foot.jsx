import { TbBrandGithubFilled } from "react-icons/tb";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";

const Foot = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center py-16 bg-[#25262b] text-[#ccc]">
      <p className=" flex items-center text-sm sm:text-base">
        <span className=" text-2xl font-mono mr-2">&copy; </span>Win Htet Zaw |
        All rights Reserved
      </p>

      <section className="flex gap-5 items-center h-[50px]">
        <a
          href="https://github.com/WinHtetZaw"
          rel="noreferrer"
          target="_blank"
          className="relative flex items-center justify-center group"
        >
          <span className="logo-border"></span>
          <TbBrandGithubFilled className="logo " />
        </a>

        <a
          href="https://www.facebook.com/winter.zach.7"
          rel="noreferrer"
          target="_blank"
          className="relative flex items-center justify-center group"
        >
          <span className="logo-border"></span>
          <RiFacebookFill className="logo " />
        </a>

        <a
          href="https://t.me/viadia1"
          rel="noreferrer"
          target="_blank"
          className="relative flex items-center justify-center group"
        >
          <span className="logo-border"></span>
          <BiLogoTelegram className="logo " />
        </a>

        <div className="relative flex items-center justify-center group">
          <span className="logo-border"></span>
          <AiOutlineTwitter className="logo " />
        </div>

        <div className="relative flex items-center justify-center group">
          <span className="logo-border"></span>
          <AiOutlineInstagram className="logo " />
        </div>
      </section>
    </div>
  );
};

export default Foot;
