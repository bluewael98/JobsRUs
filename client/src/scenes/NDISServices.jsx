import React from "react";
import Box from "../components/Box";
import aboutus from "../assets/about-us.jpg";
import jobfinding from "../assets/jobfinding.svg";
import unique from "../assets/unique.svg";
import ndis from "../assets/ndis.svg";
import guidance from "../assets/guidance.svg";
import empowering from "../assets/empowering.svg";

const NDISServices = () => {
  return (
    <section className=" flex justify-center flex-col mt-[100px] pb-[200px] items-center">
      {/* HEADER */}
      <div className="w-[100%] bg-primary relative flex justify-between overflow-hidden  mb-[5rem]">
        <div className="flex flex-col justify-center ">
          <h2 className=" text-4xl font-bold text-lavender  ml-20">
            Empowering clients,
          </h2>
          <h2 className=" text-4xl font-bold text-lavender ml-20">
            through personalized opportunities.
          </h2>
          <button className="py-[0.5rem] px-[0.5rem] w-[150px] rounded-lg font-bold text-primary ml-[500px] mt-[20px] bg-lavender">
            Contact Us
          </button>
        </div>
        <div className="flex  z-20 top-[25px] justify-center items-center shadow-5xl overflow-hidden  w-[800px] h-[300px] ml-[100px] rounded-bl-[200px] pl-[25px] shadow--l5xl  whitespace-pre   bg-primary bg-opacity-80 ">
          <img
            src={aboutus}
            alt=""
            className="w-[800px] max-h-[300px] object-cover object-top  rounded-bl-[200px]"
          />
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="font-Oswald flex flex-row text-alt2 mx-[250px] ">
        <div className="pb-[50px] flex flex-col">
          <h1 className="text-[50px] font-Oswald text-primary">
            What do we offer at Jobs <span className=" text-alt2 ">R</span> Us?
          </h1>
          <div className=" text-lg  text-opacity-85 w-[700px] flex flex-col gap-6">
            <div className="flex align-middle items-center mt-5">
              <p>
                At Jobs R Us, we provide{" "}
                <span className="font-semibold">specialized </span> and
                <span className="font-semibold"> personalized</span> employment
                and job-finding support for people with disabilities.
              </p>
              <img src={jobfinding} alt="" className="w-[75px] ml-[50px]" />
            </div>

            <div className="flex align-top items-center">
              <p>
                We recognize that each individual has{" "}
                <span className="font-semibold">unique</span> strengths,
                challenges, and goals, and we work closely with our clients to
                understand their <span className="font-semibold">needs</span>{" "}
                and
                <span className="font-semibold"> aspirations.</span>
              </p>
              <img src={unique} alt="" className="w-[70px] ml-[50px]" />
            </div>

            <div className="flex align-top items-center">
              <p>
                Our approach includes{" "}
                <span className="font-semibold"> tailored</span> career
                guidance, job readiness training, and access to a wide network
                of employers, with the goal of placing our clients in
                meaningful, sustainable employment that aligns with their{" "}
                <span className="font-semibold">abilities</span> and{" "}
                <span className="font-semibold">interests.</span>
              </p>
              <img src={guidance} alt="" className="w-[75px] ml-[50px]" />
            </div>

            <div className="flex align-top items-center">
              <p>
                We are committed to{" "}
                <span className="font-semibold">empowering</span> people with
                disabilities to achieve their full potential in the workforce
                and beyond.
              </p>
              <img src={empowering} alt="" className="w-[75px] ml-[50px]" />
            </div>

            <div className="flex justify-center align-top items-center mt-1">
              <p>
                Our supports are delivered as part of the NDIS ‘finding and
                keeping a job’ category.
              </p>
              <img src={ndis} className="w-[100px] ml-[50px]  " alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Box />
      </div>
    </section>
  );
};

export default NDISServices;
