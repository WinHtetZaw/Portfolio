import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <>
      <div className="min-h-screen py-[70px]">
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="150"
          className="text-center capitalize text-4xl tracking-wide font-[300] my-10"
        >
          some of my projects
        </div>
        <div className=" w-full h-full flex flex-col justify-center items-center py-10 px-3 md:px-10">
          <div className="relative flex flex-wrap justify-around gap-y-16 rounded-lg  w-full">
            {/* card 1 */}
            <ProjectCard
              data={{
                cover:
                  "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D",
                title: "Contact App",
                paragraph: `Stay connected and organized with our user-friendly contact app website, making managing your contacts a breeze.`,
                projectLink: "https://contact-app-kappa-one.vercel.app",
                githubLink: "https://github.com/WinHtetZaw/contact_whz",
              }}
            />

            {/* card 2 */}
            <ProjectCard
              data={{
                cover:
                  "https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
                title: "Movie App",
                paragraph: `Bringing cinematic stories to life through captivating designs
                and immersive experiences on the silver screen.`,
                projectLink: "https://movie-app-winhtetzaw.vercel.app",
                githubLink: "https://github.com/WinHtetZaw/Movie-app",
              }}
            />

            {/* card 3 */}
            <ProjectCard
              data={{
                cover:
                  "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "e-commerce",
                paragraph: `Explore a diverse array of products and trends on our
                e-commerce site, all just a click away.`,
                projectLink: "https://e-commerce-whz.vercel.app",
                githubLink: "https://github.com/WinHtetZaw/e-commerce",
              }}
            />

            {/* <ProjectCard
              data={{
                cover:
                  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
                title: "company portfolio",
                paragraph: `Elevating brands through innovative solutions, our company
                portfolio showcases a tapestry of successful collaborations
                and impactful projects.`,
                projectLink: "https://company-portfolio-pied.vercel.app",
                githubLink: "",
              }}
            /> */}

            {/* card 4 */}
            <ProjectCard
              data={{
                cover:
                  "https://images.pexels.com/videos/11612324/pexels-photo-11612324.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2",
                title: "food show",
                paragraph: `Explore the delectable world of culinary delights on our food
                show website, where flavors come to life and every bite tells
                a story.`,
                projectLink: "https://food-one-omega.vercel.app",
                githubLink: "https://github.com/WinHtetZaw/Food",
              }}
            />

            {/* card 5  */}
            <ProjectCard
              data={{
                cover:
                  "https://images.pexels.com/photos/5081386/pexels-photo-5081386.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "music app",
                paragraph: `Immerse yourself in the world of music with our website, where you can listen, explore, and stay updated on all things musical.`,
                projectLink: "https://music-app-six-olive.vercel.app",
                githubLink: "https://github.com/WinHtetZaw/music-app",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
