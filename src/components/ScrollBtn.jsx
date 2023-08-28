import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
// import { Tooltip } from "react-tooltip";

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

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setShowButton(!isTop);

      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / documentHeight) * 100;
      setScrollProgress(progress);
    };

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
      <AnimatePresence>
        {showButton && (
          // data-tooltip-id="scroll-top"
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3,ease:"easeIn" }}
            data-tooltip-id="scroll-top"
            className="fixed bottom-5 w-fit h-fit right-5"
          >
            <button onClick={scrollToTop}>
              <CircularProgressBar {...props} />
            </button>
            {/* <Tooltip id="scroll-top" place="top" content="Scroll To Top" /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollBtn;
