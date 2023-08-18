import "@lottiefiles/lottie-player";

const About = () => {
  return (
    <>
      <div className=" h-screen pt-[70px] flex justify-center">
        <div className=" mt-[30px] w-[70%]">
          <h1 className="text-center uppercase text-4xl tracking-wide font-[300] mb-5">
            about me
          </h1>
          <div className=" w-[200px] mx-auto mb-5">
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/52c269f7-0dc8-405b-908d-2d057adaeec9/tLpTGugZBK.json"
              style={{ width: "100%" }}
            ></lottie-player>
          </div>
          <p className="font-2 font-[300] tracking-wider text-center">
            Passionate about crafting captivating web experiences, I am a
            dedicated React.js developer with a keen eye for detail and a
            penchant for turning complex problems into elegant solutions. With a
            strong foundation in modern web technologies and a drive to stay at
            the forefront of industry trends, I strive to create user-centric
            applications that not only meet but exceed expectations. Beyond
            coding, I am an enthusiastic learner, a collaborator, and a creative
            thinker, continuously seeking opportunities to push the boundaries
            of what&apos;s possible in the digital realm.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
