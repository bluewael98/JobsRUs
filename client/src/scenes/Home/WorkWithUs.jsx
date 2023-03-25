import React from "react";
import WorkForm from "../../components/WorkForm";
import circles from "../../assets/circles.svg";
import { Helmet } from "react-helmet";

const WorkWithUs = () => {
  return (
    <section className="flex justify-center flex-col mt-[80px]  items-center font-Oswald overflow-hidden">
      <Helmet>
        <title>Work With Us</title>
        <meta
          name="description"
          content="Join our team and make a positive impact in the lives of people with disabilities. Explore our current job openings and apply today."
        />
      </Helmet>
      <div className="w-[100%] bg-primary relative flex justify-center items-center md:h-[220px] xxs:h-[150px] overflow-hidden z-10 mb-5">
        <div className="flex flex-col justify-center ">
          <h1 className="  xxs:text-5xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
            WORK WITH US
          </h1>
        </div>
        <img
          src={circles}
          alt=""
          className="absolute w-screen opacity-30 z-[5]"
        />
      </div>
      <div className="max-w-[1000px] text-alt2  py-4 text-xl flex justify-center flex-col items-center mx-2 text-center">
        <h1 className=" text-3xl text-primary font-bold pb-3">
          JOBS <span className=" text-alt2">R</span> US
        </h1>
        <h2>
          By joining our team, you will play a vital role in transforming the
          lives of people with disabilities, helping them overcome barriers and
          achieve their employment aspirations. At JobsRUs, we are more than
          just colleagues; we are a family united by our shared commitment to
          making a difference in the lives of those we serve.
        </h2>
        <h2>
          If you share our values and are passionate about making a positive
          impact in the lives of people with disabilities, we invite you to
          explore our current job openings and apply today. Together, we can
          empower individuals to reach their full potential and create a more
          inclusive, diverse, and caring world.
        </h2>
      </div>
      <WorkForm />
    </section>
  );
};

export default WorkWithUs;
