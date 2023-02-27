import React from "react";
import Box from "../components/Box";
import aboutus from "../assets/about-us.jpg";
import jobfinding from "../assets/jobfinding.svg";
import unique from "../assets/unique.svg";
import ndis from "../assets/ndis.svg";
import guidance from "../assets/guidance.svg";
import empowering from "../assets/empowering.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import arrowdown from "../assets/arrowdown.svg";

const NDISServices = () => {
  const isLargeDevice = useMediaQuery("(min-width: 1440px)");
  const isSmallDevice = useMediaQuery("(max-width: 1090px)");
  return (
    <section className=" flex justify-center flex-col mt-[80px] pb-[200px] items-center overflow-hidden">
      {/* HEADER */}
      {isLargeDevice ? (
        <div className="w-[100%] bg-primary relative flex justify-between overflow-hidden  mb-[5rem]">
          <div className="flex flex-col justify-center ">
            <h2 className=" text-4xl font-bold text-lavender  ml-20">
              Empowering clients,
            </h2>
            <h2 className=" text-4xl font-bold text-lavender ml-20">
              through personalized opportunities.
            </h2>
            <button className="py-[0.5rem] px-[0.5rem] w-[150px] rounded-lg font-bold text-primary ml-[500px] mt-[20px] bg-lavender hover:scale-105 transition duration-200">
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
      ) : (
        <div className="w-screen xxs:max-h-[240px] xs:max-h-[500px]  bg-black relative flex justify-center items-center overflow-hidden py-20  mb-[5rem]">
          <div className="flex flex-col justify-center items-center text-center z-10 font-Bebas">
            <h2 className=" text-2xl sm:text-3xl font-bold text-lavender">
              Empowering clients,
            </h2>
            <h2 className=" text-2xl sm:text-3xl font-bold text-lavender">
              through personalized opportunities.
            </h2>
          </div>

          <img
            src={aboutus}
            alt=""
            className="w-screen  xxs:max-h-[240px] xs:max-h-[300px] sm:max-h-[270px] md:max-h-[400px] lg:max-h-[500px] object-cover object-top absolute z-0 opacity-70 "
          />
        </div>
      )}

      {/* MAIN SECTION */}
      {isSmallDevice ? (
        <div className="font-Oswald flex flex-col items-center justify-center text-alt2 ">
          <div className="pb-[50px] flex flex-col justify-center items-center text-center">
            <h1 className="text-[30px] font-Oswald text-primary">
              WHAT DO WE OFFER AT JOBS <span className=" text-alt2 ">R</span>{" "}
              US?
            </h1>
            <div className=" text-lg  text-opacity-85 w-screen flex flex-col gap-6 px-10">
              <div className="flex align-middle items-center mt-5 flex-col">
                <p>
                  At Jobs R Us, we provide{" "}
                  <span className="font-semibold">specialized </span> and
                  <span className="font-semibold"> personalized</span>{" "}
                  employment and job-finding support for people with
                  disabilities.
                </p>
                <img src={jobfinding} alt="" className="w-[75px]" />
              </div>

              <div className="flex flex-col justify-center items-center">
                <p>
                  We recognize that each individual has{" "}
                  <span className="font-semibold">unique</span> strengths,
                  challenges, and goals, and we work closely with our clients to
                  understand their <span className="font-semibold">needs</span>{" "}
                  and
                  <span className="font-semibold"> aspirations.</span>
                </p>
                <img src={unique} alt="" className="w-[70px] " />
              </div>

              <div className="flex flex-col items-center">
                <p>
                  Our approach includes{" "}
                  <span className="font-semibold"> tailored</span> career
                  guidance, job readiness training, and access to a wide network
                  of employers, with the goal of placing our clients in
                  meaningful, sustainable employment that aligns with their{" "}
                  <span className="font-semibold">abilities</span> and{" "}
                  <span className="font-semibold">interests.</span>
                </p>
                <img src={guidance} alt="" className="w-[70px] " />
              </div>

              <div className="flex flex-col  items-center">
                <p>
                  We are committed to{" "}
                  <span className="font-semibold">empowering</span> people with
                  disabilities to achieve their full potential in the workforce
                  and beyond.
                </p>
                <img src={empowering} alt="" className="w-[75px] " />
              </div>

              <div className="flex flex-col justify-center align-top items-center mt-1">
                <p>
                  Our supports are delivered as part of the NDIS ‘finding and
                  keeping a job’ category.
                </p>
                <img src={ndis} className="w-[100px]  " alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // DESKTOP
        <div className="font-Oswald flex flex-row text-alt2 mx-10 ">
          <div className=" flex flex-col">
            <h1 className="text-4xl font-Bebas text-primary font-bold">
              WHAT DO WE OFFER AT JOBS <span className=" text-alt2 ">R</span>{" "}
              US?
            </h1>
            {/* p1` */}
            <div className="flex flex-col items-center justify-center relative mt-[50px]">
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl">
                  <p className="mr-10">
                    At Jobs R Us, we provide{" "}
                    <span className="font-semibold">specialized </span> and
                    <span className="font-semibold"> personalized</span>{" "}
                    employment and job-finding support for people with
                    disabilities.
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                  <img src={jobfinding} alt="" className="w-[180px]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <img src={arrowdown} alt="" className="w-[100px]" />
            </div>

            {/* p2 */}
            <div className="flex flex-col items-center justify-center relative ">
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl">
                  <p className="ml-10">
                    We recognize that each individual has{" "}
                    <span className="font-semibold">unique</span> strengths,
                    challenges, and goals, and we work closely with our clients
                    to understand their{" "}
                    <span className="font-semibold">needs</span> and
                    <span className="font-semibold"> aspirations.</span>
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute left-[-240px] top-[-20px] flex justify-center items-center">
                  <img src={unique} alt="" className="w-[180px]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <img src={arrowdown} alt="" className="w-[100px]" />
            </div>
            {/* p3 */}
            <div className="flex flex-col items-center justify-center relative ">
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl">
                  <p className="mr-10">
                    Our approach includes{" "}
                    <span className="font-semibold"> tailored</span> career
                    guidance, job readiness training, and access to a wide
                    network of employers, with the goal of placing our clients
                    in meaningful, sustainable employment that aligns with their{" "}
                    <span className="font-semibold">abilities</span> and{" "}
                    <span className="font-semibold">interests.</span>
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                  <img src={guidance} alt="" className="w-[200px]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <img src={arrowdown} alt="" className="w-[100px]" />
            </div>
            {/* p4 */}
            <div className="flex flex-col items-center justify-center relative ">
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl">
                  <p className="ml-10">
                    We are committed to{" "}
                    <span className="font-semibold">empowering</span> people
                    with disabilities to achieve their full potential in the
                    workforce and beyond.
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute left-[-240px] top-[-20px] flex justify-center items-center">
                  <img src={empowering} alt="" className="w-[200px]" />
                </div>
              </div>
            </div>

            <div className=" text-lg  text-opacity-85 mt-[150px] mb-[50px] max-w-[660px] mx-[100px]">
              <div className="flex justify-center align-top items-center mt-1">
                <p>
                  Our supports are delivered as part of the NDIS ‘finding and
                  keeping a job’ category.
                </p>
                <img src={ndis} className="w-[100px] ml-[10px]  " alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center items-center">
        <Box />
      </div>
    </section>
  );
};

export default NDISServices;
