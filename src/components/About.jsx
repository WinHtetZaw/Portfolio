import "@lottiefiles/lottie-player";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className=" min-h-screen pt-[70px] bg-white flex justify-center">
        <div className=" mt-[30px]">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1,delay:0.5 }}
            className="text-center uppercase text-4xl tracking-wide font-[300] mb-5"
          >
            about me
          </motion.h1>

          <div className="flex items-center w-[90%]">
            <div data-aos="fade-right" className=" w-1/2  mx-auto mb-5">
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
              data-aos-delay="300"
              className="font-2 w-1/2 font-[300] tracking-wider text-center"
            >
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
