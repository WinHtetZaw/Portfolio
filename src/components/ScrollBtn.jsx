import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

const ScrollBtn = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  //   const controls = useAnimation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const isTop = window.scrollY === 0;
    setShowButton(!isTop);

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / documentHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    // controls.start({ opacity: showButton ? 1 : 0 });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showButton]);

  const props = {
    percent: Math.round(scrollProgress), // is require
    colorSlice: "#333",
    colorCircle: "#333",
    fontColor: "#365b74",
    fontSize: "1.6rem",
    fontWeight: 400,
    size: 70,
    stroke: 7,
    strokeBottom: 5,
    speed: 200,
    cut: 0,
    rotation: -90,
    // fill: "#25262b",
    fill: "#fff",
    unit: "%",
    textPosition: "0.35em",
    animationOff: true,
    strokeDasharray: "10,1",
    inverse: false,
    round: true,
    number: true,
    // linearGradient: ["#fbc2eb", "#a6c1ee"],
    linearGradient: ["#ff0057", "#fbc2eb"],
    styles: {
      borderRadius: "50%",
      //   boxShadow: "inset 0 0 25px 10px #a2caff",
      boxShadow: "inset 0 0 25px 10px #a6c1ee",
    },
  };

  return (
    <>
      {/* <motion.button
        className="fixed bottom-5 right-5 bg-blue-500 p-3 rounded-full"
        onClick={scrollToTop}
        animate={controls}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button> */}

      {/* <div className="fixed bottom-5 right-5 flex flex-col items-center">
        <motion.button
          className={`bg-blue-500 p-3 rounded-full ${
            showButton ? "block" : "hidden"
          }`}
          onClick={scrollToTop}
          animate={controls}
        >
          <motion.div
            className="w-6 h-6 bg-white rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        <div className="relative mt-2 w-10 h-10">
          <div className="absolute top-0 left-0 w-full h-full transform origin-center">
            <motion.div
              className="w-full h-full bg-blue-300 rounded-full"
              //   style={{
              //     transform: `rotate(${scrollProgress * 3.6}deg)`, // Convert progress to degrees
              //   }}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <span>{Math.round(scrollProgress)}%</span>
          </div>
        </div>
      </div> */}

      {showButton && (
        <div className="fixed bottom-5 w-fit h-fit bg-red-300 group right-5">
          <button onClick={scrollToTop}>
            <CircularProgressBar {...props} />
          </button>
          <div className="absolute hidden group-hover:block bg-black">Scroll to top</div>
        </div>
      )}
    </>
  );
};

export default ScrollBtn;
