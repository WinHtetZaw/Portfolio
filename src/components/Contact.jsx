import React, { useState } from "react";
import ReactLoading from "react-loading";
import MessageSvg from "./MessageSvg";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "../emailjs-config";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // * handles
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: `Message --> ${data.message} . Email --> ${data.email}`,
        },
        EMAILJS_USER_ID
      );

      console.log("Email sent successfully");
      setIsLoading(false);
      reset(); // Clear the form after successful submission
    } catch (error) {
      setIsLoading(false);
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-white flex justify-center items-center py-[100px] ">
      <div className="relative overflow-hidden w-11/12  min-h-[80vh] h-fit border-4 py-7">
        <h2
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="150"
          className=" text-2xl w-fit mx-auto font-light my-10 capitalize"
        >
          message to me
        </h2>

        <div className="relative mb-10 w-full h-full flex justify-center items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className=" w-full md:w-1/2 h-full"
          >
            <MessageSvg />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="500"
            className="max-md:absolute inset-0 w-full min-h-[60vh] h-full max-md:bg-glass-1 md:w-1/2 flex justify-center items-center"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-y-5"
            >
              {/* name  */}
              <div className="flex flex-col gap-1">
                <input
                  {...register("name", { required: true, minLength: 3 })}
                  className="form-input"
                  type="text"
                  placeholder="Name"
                />
                {errors.name && errors.name.type === "required" && (
                  <span className=" text-red-600 text-sm">
                    Last Name is required
                  </span>
                )}

                {errors.name && errors.name.type === "minLength" && (
                  <span className=" text-red-600 text-sm">
                    Name must be at least 3 characters
                  </span>
                )}
              </div>

              {/* email  */}
              <div className="flex flex-col gap-1">
                <input
                  {...register("email", { required: true })}
                  className="form-input"
                  type="email"
                  placeholder="E-mail"
                />
                {errors.email && (
                  <span className=" text-red-600 text-sm">
                    The email field is required
                  </span>
                )}
              </div>

              {/* message */}
              <div className="flex flex-col gap-1">
                <input
                  {...register("message", { required: true })}
                  className="form-input"
                  type="text"
                  placeholder="Message"
                />
                {errors.message && (
                  <span className=" text-red-600 text-sm">
                    The message field is required
                  </span>
                )}
              </div>

              {/* submit button  */}
              <div className=" md:w-[300px] text-end mt-5">
                <button
                  disabled={isLoading}
                  className="btn-2 w-[140px] h-[40px] ml-auto"
                >
                  {isLoading ? (
                    <ReactLoading
                      className="mx-auto"
                      type={"spinningBubbles"}
                      color={"#fff"}
                      height={20}
                      width={20}
                    />
                  ) : (
                    <span>send message</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="absolute shadow-3 top-[45px] -right-[35px] rotate-45 w-[200px] flex gap-2 justify-center items-center py-1 rounded bg-[#25262b] text-[#ccc]">
          <AiOutlineMail />
          <span className=" text-[12px]">win1htet1@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
