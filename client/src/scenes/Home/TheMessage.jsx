import React from "react";
import arrow from "../../assets/arrow.svg";

const TheMessage = () => {
  return (
    <section className=" bg-primary  text-lavender font-Oswald   flex">
      <div className=" mr-[300px] ml-[100px] flex flex-col">
        <h1 className=" text-xl font-bold font-Oswald">WHAT WE DO.</h1>
        <h1 className=" text-3xl font-Oswald mt-2 max-w-[400px]">
          Empowering individuality through personalized NDIS solutions.
        </h1>
        <p className=" max-w-[300px] mt-5 ">
          Our goal is clear, to find creative, innovative, and exciting
          opportunities that empower our clients to thrive in a role that is
          both suitable and sustainable for them. By harnessing the power of
          each person's unique strengths and abilities, we help to build a
          brighter future for all.
        </p>
        <button className=" shadow-5xl  bg-lavender text-primary   mt-5 max-w-[200px] rounded-full py-2 px-4 flex justify-center items-center gap-3">
          <p className=" font-Oswald text-lg">Contact Us Here</p>
          <img src={arrow} alt="" className="max-w-[25px]" />
        </button>
        <button className="shadow-5xl  bg-lavender text-primary mt-2 max-w-[200px] rounded-full py-2 px-4 flex justify-center items-center gap-3">
          <p className=" font-Oswald text-lg">Refer A Client</p>
          <img src={arrow} alt="" className="max-w-[25px]" />
        </button>
      </div>
      <div className=" mr-10 flex-col opacity-90  text-alt2">
        <div className=" shadow-5xl  bg-lavender   max-w-[400px] py-[2rem] px-[4rem] font-semibold rounded-2xl">
          <p>
            We’re Passionate about equal employment opportunities and creating
            unique opportunities for the community.
          </p>
        </div>
        <div className="shadow-5xl bg-lavender    max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl">
          Suitable mainly for candidates unique and individual’s needs and
          requirements.
        </div>
        <div className="shadow-5xl bg-lavender  max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl">
          Two candidates can’t be the same, just like no two Jobs are the same.
        </div>
      </div>
      <div className=" mr-10 flex-col opacity-90 text-alt2">
        <div className="shadow-5xl bg-lavender    max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl">
          Our goal is clear and we always will strive in order to locate new
          creative, innovative and exciting opportunities to have our candidates
          in a role that’s suitable and sustainable for them.
        </div>
        <div className="shadow-5xl bg-lavender    max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl">
          Employers that are unique and for the individual role.
        </div>
        <div className="shadow-5xl bg-lavender    max-w-[400px] py-[2rem] px-[4rem] mt-5 font-semibold rounded-2xl">
          Sustainable for the candidates financial circumstances, long term
          goals and attitude. Suitable as well for the employers budget, planned
          growth and work environment.
        </div>
      </div>
    </section>
  );
};

export default TheMessage;
