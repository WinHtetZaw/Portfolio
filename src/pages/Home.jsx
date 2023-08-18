import About from "../components/About";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Title from "../components/Title";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Title />
      <About />
      <Project />
    </div>
  );
};

export default Home;
