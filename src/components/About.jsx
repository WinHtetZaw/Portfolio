import "@lottiefiles/lottie-player";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className=" min-h-screen py-[70px]  flex justify-center">
        <div className=" mt-[30px]">
          <h1
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-duration="500"
            className="text-center capitalize text-4xl tracking-wide font-[300] my-10"
          >
            about me
          </h1>

          <div className="flex max-sm:flex-col items-center overflow-x-hidden w-[90%] mx-auto">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className=" sm:w-1/2  mx-auto mb-5"
            >
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://lottie.host/787342bd-7e47-4f21-b60f-2feb7642d6b5/fHOAjf52OT.json"
                style={{ width: "100%" }}
              ></lottie-player>
            </div>
            <p
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="500"
              className="font-2 sm:w-1/2 font-[300] tracking-wider text-center"
            >
              {/* Passionate React.js developer with a knack for elegant solutions
              and captivating user experiences. I embrace industry trends and
              create applications that exceed expectations. A lifelong learner,
              collaborator, and creative thinker, pushing digital boundaries. */}
              As a frontend developer with a deep passion for the web
              development field, I am driven by a relentless curiosity for
              learning and adapting to new technologies. I am known for my
              strong work ethic and dedication, striving to deliver exceptional
              results in every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
