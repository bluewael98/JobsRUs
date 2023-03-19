import React from "react";
import personalised from "../../assets/personalised.svg";
import transition from "../../assets/transition.svg";
import choice from "../../assets/choice.svg";
import screenedstaff from "../../assets/screenedstaff.svg";
import { motion } from "framer-motion";
const Facts = () => {
  return (
    <section className=" w-screen px-2 py-20 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="w-full flex justify-center items-center flex-col">
          <div className="flex flex-col  items-center text-primary font-Oswald">
            <h1 className="text-5xl sm:text-4xl xxs:text-3xl font-bold text-center">
              EMPLOYMENT SUPPORT, AS UNIQUE AS YOU ARE.
            </h1>
          </div>
          <div className="w-3/4 grid lg:grid-cols-4 md:grid-cols-2 text-3xl sm:text-2xl xxs:text-xl font-bold text-lavender  my-8  gap-4 ">
            <div className="flex flex-col justify-between  text-center items-center gap-3  bg-primary p-4 rounded-lg hover:scale-105 tansition duration-300">
              <h2>Personalised, tailored plans.</h2>
              <img src={personalised} alt="" className="w-[200px]" />
            </div>
            <div className="flex flex-col  text-center justify-between items-center gap-3 bg-primary p-4 rounded-lg hover:scale-105 tansition duration-300">
              <h2>Transition into open employment.</h2>
              <img src={transition} alt="" className="w-[200px]" />
            </div>
            <div className="flex flex-col justify-between items-center text-center   border-opacity-50 bg-primary p-4 rounded-lg hover:scale-105 tansition duration-300">
              <h2>Live your own life. Choice and control.</h2>
              <img src={choice} alt="" className="w-[200px]" />
            </div>
            <div className="flex flex-col justify-between items-center text-center bg-primary p-4 rounded-lg hover:scale-105 tansition duration-300 ">
              <h2>3 step screened staff, at your help.</h2>
              <img src={screenedstaff} alt="" className="w-[200px]" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Facts;
