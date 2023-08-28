import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const BurgerMenu = ({ isScrolled, sections, handleSetActive }) => {
  const [isActive, setIsActive] = useState(false);

  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.15,
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const childVariant = {
    hidden: { translateY: 30 },
    show: { translateY: 0, transition: { duration: 0.3 } },
  };
  return (
    <div className="sm:hidden relative w-[30px] aspect-square flex">
      <button
        onClick={() => setIsActive(!isActive)}
        className="absolute-center z-[100] group"
      >
        <div
          className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md ${
            isScrolled ? "bg-[#25262b]" : "bg-black"
          } ${isActive && "ring-4"} `}
        >
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${
              isActive && "-translate-x-1.5 rotate-180"
            }`}
          >
            <div
              className={`bg-rose h-[2px]  transform transition-all duration-300 origin-left ${
                isActive ? "rotate-[42deg] w-2/3 " : "w-7"
              } delay-150`}
            />
            <div
              className={`bg-rose h-[2px] w-7 rounded transform transition-all duration-300 ${
                isActive && "translate-x-10"
              }`}
            />
            <div
              className={`bg-rose h-[2px] transform transition-all duration-300 origin-left ${
                isActive ? "-rotate-[42deg] w-2/3" : "w-7"
              } delay-150`}
            />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={parentVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          >
            <ul className=" flex flex-col font-[400] items-center gap-y-7">
              <motion.div
                initial={{ translateX: "-100vw" }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => {
                  scrollTo(0, 0);
                  setIsActive(false);
                }}
                className="absolute top-10 left-10"
              >
                <div className="">
                  <h2 className="logo-font">Portfolio</h2>
                </div>
              </motion.div>
              {sections.map((section) => (
                <motion.li variants={childVariant} key={section}>
                  <Link
                    key={section}
                    onClick={() => setIsActive(false)}
                    className={`p-2  w-28 text-center uppercase select-none cursor-pointer transition duration-500 ease-out`}
                    to={section}
                    smooth={true}
                    spy={true}
                    duration={150}
                    activeClass="active-menu"
                    onSetActive={() => handleSetActive(section)}
                  >
                    {section}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
