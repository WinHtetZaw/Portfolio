import "@lottiefiles/lottie-player";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className=" min-h-screen py-[70px]  flex justify-center">
        <div className=" mt-[30px]">
          <h1 data-aos="fade-down" data-aos-delay="150" data-aos-duration="500"
            className="text-center capitalize text-4xl tracking-wide font-[300] my-10"
          >
            about me
          </h1>

          <div className="flex items-center overflow-x-hidden w-[90%]">
            <div data-aos="fade-right" data-aos-duration="500" className=" w-1/2  mx-auto mb-5">
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://lottie.host/787342bd-7e47-4f21-b60f-2feb7642d6b5/fHOAjf52OT.json"
                style={{ width: "100%" }}
              ></lottie-player>
            </div>
            <p data-aos="fade-left" data-aos-delay="100" data-aos-duration="500" className="font-2 w-1/2 font-[300] tracking-wider text-center">
              Passionate about crafting captivating web experiences, I am a
              dedicated React.js developer with a keen eye for detail and a
              penchant for turning complex problems into elegant solutions. With
              a strong foundation in modern web technologies and a drive to stay
              at the forefront of industry trends, I strive to create
              user-centric applications that not only meet but exceed
              expectations. Beyond coding, I am an enthusiastic learner, a
              collaborator, and a creative thinker, continuously seeking
              opportunities to push the boundaries of what&apos;s possible in
              the digital realm.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
