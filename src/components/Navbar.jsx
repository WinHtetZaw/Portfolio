import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./activeBox.css";
import BurgerMenu from "./BurgerMenu";

const Navbar = ({isScrolled}) => {
  // * hooks
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  // const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sections = ["about", "skill", "project", "contact"];

  // * useEffects
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     //   const isScrollingUp = prevScrollPos > currentScrollPos;

  //     if (currentScrollPos > 1) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //     setPrevScrollPos(currentScrollPos);
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSetActive = (sectionId) => {
    setActiveSection(sectionId);
  };


  return (
    <>
      <div
        className={`${
          isScrolled ? " bg-opacity-100" : "bg-opacity-0"
        } w-full h-[70px] bg-black text-[#cccccc] transition duration-150 fixed top-0 z-50 flex items-center justify-between px-10`}
      >
        <div onClick={scrollToTop} className="">
          <div className="">
            <h2 className="logo-font">Portfolio</h2>
          </div>
        </div>

        {/* menu  */}
        {/* <div className="flex font-[400] items-center gap-3">
          {Object.keys(sections).map((el, index) => (
            <div className="" key={index}>
              <button
                onClick={() => handleMenuItemClick(el)}
                className={`uppercase ${activeMenuItem === el && "underline"}`}
              >
                {el}
              </button>
            </div>
          ))}
          <a
            className={`${location.hash == "#contact" && "underline"}`}
            href="/#contact"
          >
            <div>go-contact</div>
          </a>

        </div> */}
        <ul className="flex max-sm:hidden font-[400] items-center gap-3">
          {sections.map((section) => (
            <li key={section} className={` `}>
              <Link
                className=" p-2 rounded uppercase select-none cursor-pointer transition duration-500 ease-out"
                to={section}
                smooth={true}
                spy={true}
                duration={150}
                activeClass="active"
                onSetActive={() => handleSetActive(section)}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        <BurgerMenu isScrolled={isScrolled} sections={sections} handleSetActive={handleSetActive} />
      </div>
    </>
  );
};

export default Navbar;
