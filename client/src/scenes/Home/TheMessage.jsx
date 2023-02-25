import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";

const TheMessage = () => {
  return (
    <section className=" bg-primary text-center  text-lavender font-Oswald flex xlg:text-start xlg:flex-row xxs:flex-col xxs:justify-center xxs:items-center">
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
          <button className=" shadow-5xl  bg-lavender text-primary font-bold   mt-5  rounded-full py-2 px-4 flex justify-center items-center gap-3 hover:scale-105 transition duration-300">
            <p className=" font-Oswald text-lg">Contact Us Here</p>
            <img src={arrow} alt="" className="max-w-[25px]" />
          </button>
        </Link>
      </div>
      <div className=" xlg:mr-10 flex-col opacity-90  text-alt2 mt-5 items-center flex justify-center px-5 xlg:px-0 ">
        <div className=" shadow-5xl  bg-lavender w-full      xlg:max-w-[400px] py-[2rem] px-[4rem] font-semibold rounded-2xl">
          <p>
            We’re Passionate about equal employment opportunities and creating
            unique opportunities for the community.
          </p>
        </div>
        <div className="shadow-5xl bg-lavender  w-full      xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl">
          Suitable mainly for candidates unique and individual’s needs and
          requirements.
        </div>
        <div className="shadow-5xl bg-lavender w-full     xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl">
          Two candidates can’t be the same, just like no two Jobs are the same.
        </div>
      </div>
      <div className=" xlg:mr-10 flex-col opacity-90 text-alt2 x-5 xlg:px-0 px-5">
        <div className="shadow-5xl bg-lavender w-full  xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl">
          Our goal is clear and we always will strive in order to locate new
          creative, innovative and exciting opportunities to have our candidates
          in a role that’s suitable and sustainable for them.
        </div>
        <div className="shadow-5xl bg-lavender w-full    xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl">
          Employers that are unique and for the individual role.
        </div>
        <div className="shadow-5xl bg-lavender   w-full    xlg:max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl">
          Sustainable for the candidates financial circumstances, long term
          goals and attitude. Suitable as well for the employers budget, planned
          growth and work environment.
        </div>
      </div>
    </section>
  );
};

export default TheMessage;
