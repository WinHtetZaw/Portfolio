import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { Element } from "react-scroll";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import ScrollBtn from "./components/ScrollBtn";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  // const ref = useRef();

  // const handleScroll = () => {
  //   const rect = ref.current.getBoundingClientRect();
  //   const distanceFromTop = rect.top;

  //   // console.log("Distance from top:", distanceFromTop);
  //   if (distanceFromTop == 0) {
  //     setIsScrolled(false);
  //   } else {
  //     setIsScrolled(true);
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (currentScrollPos > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div className=" relative h-screen bg-fixed bg-[url(https://images.pexels.com/photos/7974/pexels-photo.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center"></div>
      <Navbar isScrolled={isScrolled} />
      <div className="">
        <Title />
      </div>

      <Element name="about">
        <About />
      </Element>
      <Element name="skill">
        <Skill />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <ScrollBtn/>
    </div>
  );
};

export default App;
