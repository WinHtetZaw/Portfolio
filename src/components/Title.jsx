import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setTitleTopScroll } from "../rtk/features/scrollSlice";

const Title = () => {
  return (
    // <section className=" h-screen bg-[url(https://images.pexels.com/photos/7974/pexels-photo.jpg)] bg-no-repeat bg-cover bg-center">
    <section className=" h-screen bg-transparent">
      <div className="h-full absolute inset-0 z-20 flex justify-center items-center">
        <div className="text-[#cccccc] font-1 font-[300]">
          <h1 className=" tracking-wider uppercase text-4xl mb-3">
            hi, i&apos;m win htet zaw
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
