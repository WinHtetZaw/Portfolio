import { BsGithub, BsArrowRight } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Project = () => {
  return (
    <>
      <div className="h-screen bg-transparent pt-[70px]">
        <div className=" w-full h-full flex justify-center items-center py-10 px-10">
          <div className="relative flex flex-wrap justify-around gap-y-10 rounded-lg  w-full">
            {/* card 1 */}
            <div className="group card-container">
              <div className="relative  h-full ">
                <img
                  className="card-img"
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <div className="card-cover-container">
                  <h3 className="card-cover-title">e-commerce</h3>
                </div>
              </div>

              <div className="card-body-container">
                <h2 className="card-body-title">
                  Explore a diverse array of products and trends on our
                  e-commerce site, all just a click away.
                </h2>
                <button className="card-body-btn peer/link">
                  <a
                    href="https://e-commerce-whz.vercel.app"
                    rel="noreferrer"
                    target="_blank"
                  >
                    visit website
                  </a>
                </button>
                <BsGithub className="absolute top-5 text-rose-600 right-5 text-[20px] cursor-pointer peer/link" />
                <FaLongArrowAltRight className="absolute bottom-5 right-5 text-rose-600 text-[20px] -translate-x-10 peer-hover/link:translate-x-0 transition-all duration-200" />
              </div>
            </div>

            {/* card 2 */}
            <div className="group card-container">
              <div className="relative  h-full ">
                <img
                  className="card-img"
                  src="https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div className="card-cover-container">
                  <h3 className="card-cover-title">Movie App</h3>
                </div>
              </div>

              <div className="card-body-container">
                <h2 className="card-body-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, provident.
                </h2>
                <button className="card-body-btn peer/link">
                  <a
                    href="https://movie-app-winhtetzaw.vercel.app"
                    rel="noreferrer"
                    target="_blank"
                  >
                    visit website
                  </a>
                </button>
                <BsGithub className="absolute top-5 right-5 text-rose-600 text-[20px] cursor-pointer peer/link" />
                <FaLongArrowAltRight className="absolute bottom-5 right-5 text-rose-600 text-[20px] -translate-x-10 peer-hover/link:translate-x-0 transition-all duration-200" />
              </div>
            </div>

            {/* card 3 */}
            <div className="group card-container">
              <div className="relative  h-full ">
                <img
                  className="card-img"
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div className="card-cover-container">
                  <h3 className="card-cover-title">company portfolio</h3>
                </div>
              </div>

              <div className="card-body-container">
                <h2 className="card-body-title">
                  Explore a diverse array of products and trends on our
                  e-commerce site, all just a click away.
                </h2>
                <button className="card-body-btn peer/link">
                  <a
                    href="https://company-portfolio-pied.vercel.app"
                    rel="noreferrer"
                    target="_blank"
                  >
                    visit website
                  </a>
                </button>
                <BsGithub className="absolute top-5 text-rose-600 right-5 text-[20px] cursor-pointer peer/link" />
                <FaLongArrowAltRight className="absolute bottom-5 right-5 text-rose-600 text-[20px] -translate-x-10 peer-hover/link:translate-x-0 transition-all duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
