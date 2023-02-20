import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      id="contact"
      className="flex justify-center items-center flex-col font-Oswald text-xl"
    >
      {/* CONTACT FORM */}
      <form
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/e562502946854997d37372895dcbfc61"
        method="POST"
      >
        <div className="flex flex-row justify-center items-center  gap-2 ">
          <div className="w-full flex flex-col gap-5">
            <p className="font-semibold text-lavender text-opacity-90">
              Your Name
            </p>
            <input
              className="w-full bg-lavender text-black placeholder-opaque-black p-3"
              type="text"
              placeholder="Name."
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className=" text-lavender font-semibold ">
                {errors.name.type === "required" && "**This field is required."}
                {errors.name.type === "maxLength" &&
                  "**Max length is 100 characters."}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-5">
            <p className="font-semibold text-lavender text-opacity-90">
              Your Email
            </p>
            <input
              className="w-full bg-lavender text-black placeholder-opaque-black p-3 "
              type="text"
              placeholder="Email."
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className=" text-lavender font-semibold ">
                {errors.email.type === "required" &&
                  "**This field is required."}
                {errors.email.type === "pattern" && "**Invalid email address."}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 gap-5 flex flex-col">
          <p className="font-semibold text-lavender text-opacity-90">
            Your Message
          </p>
          <textarea
            className="w-full bg-lavender text-black placeholder-opaque-black p-3"
            type="text"
            placeholder="Enter your message."
            rows="4"
            cols="50"
            {...register("message", {
              required: true,
            })}
          />
          {errors.message && (
            <p className=" text-lavender font-semibold ">
              {errors.message.type === "required" &&
                "**This field is required."}
            </p>
          )}
        </div>

        <div className="flex justify-between">
          <div></div>
          <button
            type="submit"
            className="p-3 bg-lavender shadow-xl font-semibold text-primary mt-5 rounded-full  hover:bg-alt2 hover:text-lavender
              transition duration-500 "
          >
            SEND A MESSAGE
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
