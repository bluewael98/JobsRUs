import React from "react";

const AboutUs = () => {
  return (
    <section className=" flex justify-center flex-col mt-[100px] pb-[200px] items-center font-Oswald">
      <div className="w-[100%] bg-primary relative flex justify-center items-center h-[220px] overflow-hidden  mb-[5rem]">
        <div className="flex flex-col justify-center ">
          <h2 className=" text-4xl font-bold text-lavender ">About Us </h2>
          <button className="py-[0.5rem] px-[0.5rem] w-[150px] rounded-lg font-bold text-primary  mt-[20px] bg-lavender">
            Learn More
          </button>
        </div>
      </div>
      {/* MAIN SECTION */}
      <div>
        <div className="flex flex-col justify-center font-Oswald">
          <h1 className=" text-3xl text-primary font-bold">ABOUT JOBS R US</h1>

          <p className="max-w-[600px] mt-2 text-alt2 ">
            An employment provider with a{" "}
            <span className=" font-semibold">difference.</span>
          </p>
          <p className="max-w-[600px] mt-2 text-alt2 ">
            We provide recruitment services for our clients at an affordable
            entry level price. We pride ourselves in matching the{" "}
            <span className=" font-semibold">right</span> person for the{" "}
            <span className=" font-semibold">right </span>
            job and invest the time needed to get to know you and your business.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
