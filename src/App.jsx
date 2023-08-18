import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { Element } from "react-scroll";
import "./App.css";

const App = () => {
  return (
    <div className=" h-screen bg-fixed bg-[url(https://images.pexels.com/photos/7974/pexels-photo.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center"></div>
      {/* <div className=" absolute inset-0 bg-transparent overflow-y-scroll"> */}
        <Navbar />
        <Title />

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
      {/* </div> */}
    </div>
  );
};

export default App;
