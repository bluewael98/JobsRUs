import React, { useState } from "react";
import blobscatter from "../assets/blobscatter.svg";
import ContactForm from "../components/ContactForm";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import mobile from "../assets/mobile.svg";
import wearehere from "../assets/wearehere.png";
const Contact = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className=" flex justify-center flex-col mt-[80px]  items-center font-Bebas xxs:text ">
      <div className="w-[100%] bg-primary relative flex justify-center items-center md:h-[220px] xxs:h-[150px] overflow-hidden z-10">
        <div className="flex flex-col justify-center ">
          <h2 className=" md:text-6xl xxs:text-3xl font-bold text-lavender ">
            CONTACT US
          </h2>
        </div>
      </div>

      {/* CONTACT BOX */}
      <div className="z-10 relative w-full flex flex-col justify-center items-center md:px-10">
        <div className=" lg:px-20 lg:py-20 md:py-10 px:10 bg-primary mt-[80px] flex flex-col items-center justify-center  z-40 rounded-3xl shadow-xl">
          <h1 className="md:text-5xl xxs:text-2xl font text-lavender my-5">
            We'd love to here from{" "}
            <span className=" font-semibold opacity-100">you.</span>
          </h1>
          <div className="flex md:justify-between xxs:flex-col xxs:justify-center md:flex-row align-top items-center gap-10">
            <div className="flex flex-col xxs:justify-center xxs:items-center md:items-start min-w-[300px] max-w-[500px] py-5 px-5 text-lavender">
              <h1 className="md:text-2xl xxs:text-xl font-bold  my-5">
                OUR DETAILS
              </h1>
              <div className="flex flex-col sm:gap-3 xxs:gap-5 xxs:text-center md:text-start xxs:justify-center md:justify-start xxs:items-center md:items-start">
                <div className="flex items-center  xxs:justify-center sm:justify-start  gap-2">
                  <img src={location} alt="" className="w-[30px]" />
                  <h2 className="text-xl font-bold ">Our Address</h2>
                </div>

                <p>
                  <a
                    href="https://goo.gl/maps/du94CGnpjmnUndcH8"
                    className="cursor-pointer underline-offset-3"
                  >
                    Suite 6, 75 Rickard Rd, Bankstown corner NSW 2200.
                  </a>{" "}
                  (Corner of 443 Chapel Rd Bankstown, please take stairs or
                  elevator to level 1 & take first left through the outdoor
                  corridor - entry is on your left.)
                </p>
                <div className="relative z-40 xxs:justify-center sm:justify-start ">
                  <img
                    src={wearehere}
                    alt=""
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`${
                      isExpanded
                        ? "w-full h-full"
                        : "w-[200px] shadow-sm bg-lavender rounded-3xl hover:scale-105"
                    } object-cover cursor-pointer transition-all ease-out duration-500`}
                  />
                </div>
                <div className="flex items-center gap-2 xxs:justify-center sm:justify-start">
                  <img src={email} alt="" className="w-[30px]" />
                  <h2 className="text-xl font-bold ">Email</h2>
                </div>
                <p>info@jobsrus.com.au</p>
                <div className="flex items-center gap-2 xxs:justify-center xxs:content-center sm:justify-start">
                  <img src={phone} alt="" className="w-[30px]" />
                  <h2 className="text-xl font-bold ">Phone</h2>
                </div>

                <p>02 9703 5732</p>
                <div className="flex items-center gap-2">
                  <img src={mobile} alt="" className="w-[30px]" />
                  <h2 className="text-xl font-bold ">Mobile</h2>
                </div>

                <p>0450 518 508</p>
              </div>
            </div>
            <div className="px-5 py-5">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="py-10"></div>

        <img
          src={blobscatter}
          className="w-screen h-1/2 absolute bottom-0 opacity-60  z-10  "
          alt=""
        />
      </div>
    </section>
  );
};

export default Contact;
