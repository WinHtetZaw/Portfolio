import "./skill.css";
import { BiLogoReact } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { backend, frontend, languages } from "../data/data";
import { FaLaravel } from "react-icons/fa";

const Skill = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center bg-[#333] items-center">
        <h1 className=" capitalize font-[300] text-4xl text-[#ccc]">
          Here are my skills!
        </h1>

        <div className="w-full flex justify-around items-center">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <BsCodeSlash className="text-[80px] text-white mx-auto" />
                {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" /> */}
                <h3 className=" select-none">Languages</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <div className=" flex flex-wrap gap-3">
                  {languages.map((el, index) => (
                    <div className="capitalize" key={index}>
                      #{el}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <BiLogoReact className="text-[80px] text-white mx-auto" />
                {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" /> */}
                <h3 className=" select-none">Frontend</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <div className=" flex flex-wrap gap-3">
                  {frontend.map((el, index) => (
                    <div className="capitalize" key={index}>
                      #{el}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" /> */}
                <FaLaravel className="text-[80px] text-white mx-auto" />
                <h3 className=" select-none">Backend</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <div className=" flex flex-wrap gap-3">
                  {backend.map((el, index) => (
                    <div className=" capitalize" key={index}>
                      #{el}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" w-[200px] h-[300px]"></div> */}
      </div>
    </>
  );
};

export default Skill;
