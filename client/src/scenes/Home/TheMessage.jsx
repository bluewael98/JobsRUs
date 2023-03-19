import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import { motion } from "framer-motion";

const TheMessage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className=" bg-primary text-center  text-lavender font-Oswald flex xlg:text-start xlg:flex-row xxs:flex-col xxs:justify-center xxs:items-center py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className=" xlg:mr-[300px] xlg:ml-[100px] flex flex-col items-center xlg:items-start">
          <h1 className=" text-xl font-bold font-Oswald">WHAT WE DO.</h1>
          <h1 className=" text-3xl font-Oswald mt-2 xlg:max-w-[400px]">
            Empowering individuality through personalized NDIS solutions.
          </h1>
          <p className=" xlg:max-w-[300px] px-5 xlg:p-0 mt-5  ">
            Our goal is clear, to find creative, innovative, and exciting
            opportunities that empower our clients to thrive in a role that is
            both suitable and sustainable for them. By harnessing the power of
            each person's unique strengths and abilities, we help to build a
            brighter future for all.
          </p>
          <Link to="/contact">
            <button className=" shadow-md  bg-lavender text-primary font-bold   mt-5  rounded-lg py-2 px-4 flex justify-center items-center gap-3 hover:scale-105 transition duration-300">
              <p className=" font-Oswald text-lg">Contact Us Here</p>
              <img src={arrow} alt="" className="max-w-[25px]" />
            </button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className=" xlg:mr-10 flex-col opacity-90  text-alt2 mt-5 items-center flex justify-center px-5 xlg:px-0 "
      >
        <motion.div
          variants={variants}
          className=" shadow-md  bg-lavender w-full      xlg:max-w-[400px] py-[2rem] px-[4rem] font-semibold rounded-2xl"
        >
          <p>
            We’re Passionate about equal employment opportunities and creating
            unique opportunities for the community.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className="shadow-md bg-lavender  w-full      xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl"
        >
          We're personalised and tailored to the individual needs of the each
          client. No two people are the same and we understand that.
        </motion.div>
        <motion.div
          variants={variants}
          className="shadow-md bg-lavender w-full     xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl"
        >
          Your long term goals are our priority, and we'll strive in
          transitioning you into a role that is both suitable and sustainable
          for you.
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className=" xlg:mr-10 flex-col opacity-90 text-alt2 x-5 xlg:px-0 px-5"
      >
        <motion.div
          variants={variants}
          className="shadow-md bg-lavender w-full  xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl"
        >
          We're strong advocates of choice and control. You are in control of
          your own life, and we'll help you to make the right choices.
        </motion.div>
        <motion.div
          variants={variants}
          className="shadow-md bg-lavender w-full    xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl"
        >
          Our staff are our greatet asset. All our staff undergo a 3 step
          screening interview process to ensure they're the right fit for you.
        </motion.div>
        <motion.div
          variants={variants}
          className="shadow-md bg-lavender   w-full    xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl"
        >
          Once our staff are hired, they are provided with regular training to
          ensure your program is on track and is in line with your goals.
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TheMessage;
