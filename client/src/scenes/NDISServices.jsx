import React, { useEffect } from "react";
import EmploynentAssistance from "../components/EmploymentAssistance";
import EmploymentSupport from "../components/EmploymentSupport";
import GroupActivities from "../components/GroupActivities";
import SLES from "../components/SLES";
import aboutus from "../assets/about-us.jpg";
import jobfinding from "../assets/jobfinding.svg";
import unique from "../assets/unique.svg";
import ndis from "../assets/ndis.svg";
import guidance from "../assets/guidance.svg";
import empowering from "../assets/empowering.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import arrowdown from "../assets/arrowdown.svg";
import { useLocation } from "react-router-dom";
import circles from "../assets/circles.svg";

const NDISServices = () => {
  const isLargeDevice = useMediaQuery("(min-width: 1440px)");
  const isSmallDevice = useMediaQuery("(max-width: 1090px)");

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        const topOffset = elem.getBoundingClientRect().top;
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const newScrollTop =
          scrollTop +
          topOffset -
          window.innerHeight / 4 +
          elem.offsetHeight / 2;
        document.documentElement.scrollTop = newScrollTop;
        window.scrollTo({
          top: newScrollTop,
          left: 0,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <section className=" flex justify-center flex-col mt-[80px] pb-[200px] items-center overflow-hidden relative">
      {/* HEADER */}
      {isLargeDevice ? (
        <div className="w-screen  bg-primary relative flex justify-between overflow-hidden  mb-[5rem]">
          <div className="flex flex-col justify-center pl-10 ">
            <h1 className="  xxs:text-4xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
              Empowering clients,
            </h1>
            <h1 className="  xxs:text-4xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
              through personalized programs.
            </h1>
            <button className="py-[0.5rem] px-[0.5rem] w-[150px] rounded-lg font-bold text-primary ml-[500px] mt-[20px] bg-lavender hover:scale-105 transition duration-200 z-10">
              Contact Us
            </button>
          </div>
          <div className="flex  z-20 top-[25px] justify-center items-center shadow-5xl overflow-hidden  w-[600px]  ml-[100px] rounded-bl-[200px] pl-[25px] shadow--l5xl  whitespace-pre   bg-primary bg-opacity-80 ">
            <img
              src={aboutus}
              alt=""
              className="w-[600px] object-cover object-top  rounded-bl-[200px]"
            />
          </div>
          <img
            src={circles}
            alt=""
            className="absolute w-screen opacity-30 z-[5]"
          />
        </div>
      ) : (
        <div className="w-screen xxs:max-h-[240px] xs:max-h-[500px]  bg-primary relative flex justify-center items-center overflow-hidden py-20  mb-[5rem]">
          <div className="flex flex-col justify-center items-center text-center z-10 font-Bebas">
            <h1 className="  xxs:text-3xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
              Empowering clients,
            </h1>
            <h1 className="  xxs:text-3xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
              through personalized programs.
            </h1>
          </div>
          <img
            src={circles}
            alt=""
            className="absolute w-screen opacity-30 z-[5] xs:h-[300px] xxs:h-[240px] object-cover"
          />
        </div>
      )}

      {/* MAIN SECTION */}
      {isSmallDevice ? (
        <div className="font-Oswald flex flex-col items-center justify-center text-alt2 ">
          <div className="pb-[50px] flex flex-col justify-center items-center text-center ">
            <h1 className="text-2xl font-bold text-center font-Oswald text-primary px-5">
              WHAT DO WE OFFER AT JOBS <span className=" text-alt2 ">R</span>{" "}
              US?
            </h1>
            <div className=" text-lg  text-opacity-85  flex flex-col gap-6 px-10">
              <div className="flex flex-col justify-center items-center mt-5">
                <h1 className="text-2xl font-bold text-lavender">
                  SLES{" "}
                  <span className=" font-medium">
                    &#40;School Leavers Employment Support&#41;{" "}
                  </span>
                </h1>
                <p className="">
                  A 2 year program that provides the opportunity to zone on and
                  target key employability outcomes and gain direction.
                </p>
                <img src={jobfinding} alt="" className="w-[75px] mb-10 mt-3" />
                <SLES />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-lavender">
                  Specialised Employment Assistance
                </h1>
                <p className="">
                  From SLES regardless of your transition you will have an
                  Employment specialist help tailor a capacity building program
                  for your continued supports in employment.
                </p>
                <img src={unique} alt="" className="w-[70px] mb-10 mt-3 " />
                <EmploynentAssistance />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-lavender">
                  Employment Support Officer
                </h1>
                <p className="">
                  A cost-effective way to help you follow through with the
                  employment specialist tailored program to achieve whatever
                  your employment goals are.
                </p>
                <img src={guidance} alt="" className="w-[70px]  mb-10 mt-3" />
                <EmploymentSupport />
              </div>

              <div className="flex flex-col  items-center">
                <h1 className="text-2xl font-bold text-lavender">
                  Group Activities
                </h1>
                <p className="">
                  Can’t be all work and no play, we have our leisure days on
                  Saturday’s fortnightly so you can unwind from your capacity
                  building goals..
                </p>
                <img src={empowering} alt="" className="w-[75px] mb-10 mt-3" />
                <GroupActivities />
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
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-4xl font-Bebas text-primary font-bold">
              WHAT DO WE OFFER AT JOBS <span className=" text-alt2 ">R</span>{" "}
              US?
            </h1>
            {/* p1` */}
            <section
              className="flex flex-col items-center justify-center relative my-[50px]"
              id="sles"
            >
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl pr-[100px]">
                  <h1 className="text-2xl font-bold text-lavender">
                    SLES{" "}
                    <span className=" font-medium">
                      &#40;School Leavers Employment Support&#41;{" "}
                    </span>
                  </h1>
                  <p className="mr-10">
                    A 2 year program that provides the opportunity to zone on
                    and target key employability outcomes and gain direction.
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                  <img src={jobfinding} alt="" className="w-[180px]" />
                </div>
              </div>
            </section>
            <SLES />
            <div className="flex justify-center items-center mt-10">
              <img src={arrowdown} alt="" className="w-[100px]" />
            </div>

            {/* p2 */}
            <section
              className="flex flex-col items-center justify-center relative my-[50px] "
              id="spa"
            >
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl pl-[100px]">
                  <h1 className="text-2xl font-bold text-lavender">
                    Specialised Employment Assistance
                  </h1>
                  <p className="mr-10">
                    From SLES regardless of your transition you will have an
                    Employment specialist help tailor a capacity building
                    program for your continued supports in employment.
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute left-[-240px] top-[-20px] flex justify-center items-center">
                  <img src={unique} alt="" className="w-[180px]" />
                </div>
              </div>
            </section>
            <EmploynentAssistance />
            <div className="flex justify-center items-center mt-10">
              <img src={arrowdown} alt="" className="w-[100px]" />
            </div>
            {/* p3 */}
            <section
              className="flex flex-col items-center justify-center relative my-[50px]"
              id="eso"
            >
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl pr-[100px]">
                  <h1 className="text-2xl font-bold text-lavender">
                    Employment Support Officer
                  </h1>
                  <p className="mr-10">
                    A cost-effective way to help you follow through with the
                    employment specialist tailored program to achieve whatever
                    your employment goals are.
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                  <img src={guidance} alt="" className="w-[200px]" />
                </div>
              </div>
            </section>
            <EmploymentSupport />
            <div className="flex justify-center items-center mt-10">
              <img src={arrowdown} alt="" className="w-[100px]" />
            </div>
            {/* p4 */}
            <div
              className="flex flex-col items-center justify-center relative my-[50px]"
              id="group"
            >
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl pl-[100px]">
                  <h1 className="text-2xl font-bold text-lavender">
                    Group Activities
                  </h1>
                  <p className="mr-10">
                    Can’t be all work and no play, we have our leisure days on
                    Saturday’s fortnightly so you can unwind from your capacity
                    building goals..
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute left-[-240px] top-[-20px] flex justify-center items-center">
                  <img src={empowering} alt="" className="w-[200px]" />
                </div>
              </div>
            </div>
            <GroupActivities />

            <div className=" text-xl font-bold  text-opacity-85  my-[50px] max-w-[660px] mx-[100px]">
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
    </section>
  );
};

export default NDISServices;
