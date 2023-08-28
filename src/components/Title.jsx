import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Title = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["hi, i'm win htet zaw"
      ],
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 30, // Backspacing speed in milliseconds
      backDelay: 1000, // Delay before starting to backspace
      startDelay: 1000, // Delay before typing starts
      loop: true, // Loop the animation
      // showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className=" h-screen bg-transparent">
      <div className="h-full absolute inset-0 z-20 flex justify-center items-center">
        <div className="text-[#cccccc] font-1 font-[300]">
          {/* <h1>
            Welcome to <Typewriter text="My React App" delay={100} infinite />
          </h1> */}

          {/* <h1 className=" tracking-wider uppercase text-4xl mb-3">
            hi, i&apos;m win htet zaw
          </h1>
          <h2 className=" capitalize text-xl text-center">
            frontend developer
          </h2> */}

          <h1 className=" tracking-wider capitalize text-4xl mb-3">
            <span ref={typedRef}></span>
          </h1>
          <h2 className=" capitalize text-xl text-center">
            frontend developer
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Title;
