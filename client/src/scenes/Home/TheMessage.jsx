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
    <section className=" bg-primary text-center  text-lavender font-Oswald flex xlg:text-start xlg:flex-row xxs:flex-col xxs:justify-center xxs:items-center">
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
            <button className=" shadow-md  bg-lavender text-primary font-bold   mt-5  rounded-full py-2 px-4 flex justify-center items-center gap-3 hover:scale-105 transition duration-300">
              <p className=" font-Oswald text-lg">Contact Us Here</p>
              <img src={arrow} alt="" className="max-w-[25px]" />
            </button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
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
          Suitable mainly for candidates unique and individual’s needs and
          requirements.
        </motion.div>
        <motion.div
          variants={variants}
          className="shadow-md bg-lavender w-full     xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl"
        >
          Two candidates can’t be the same, just like no two Jobs are the same.
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className=" xlg:mr-10 flex-col opacity-90 text-alt2 x-5 xlg:px-0 px-5"
      >
        <motion.div
          variants={variants}
          className="shadow-md bg-lavender w-full  xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl"
        >
          Our goal is clear and we always will strive in order to locate new
          creative, innovative and exciting opportunities to have our candidates
          in a role that’s suitable and sustainable for them.
        </motion.div>
        <motion.div
          variants={variants}
          className="shadow-md bg-lavender w-full    xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl"
        >
          Employers that are unique and for the individual role.
        </motion.div>
        <motion.div
          variants={variants}
          className="shadow-md bg-lavender   w-full    xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl"
        >
          Sustainable for the candidates financial circumstances, long term
          goals and attitude. Suitable as well for the employers budget, planned
          growth and work environment.
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TheMessage;
