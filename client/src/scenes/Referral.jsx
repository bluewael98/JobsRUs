import React from "react";
import ndisreferral from "../assets/ndisreferral.png";
import useMediaQuery from "../hooks/useMediaQuery";
const Referral = () => {
  const isSmallDevice = useMediaQuery("(max-width: 650px)");
  return (
    <div
      className="w-screen bg-lavender h-[80px] bottom-0 z-50 fixed align-middle  flex"
      style={{ boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="flex justify-between w-full px-[8%] items-center align-middle">
        {isSmallDevice ? (
          ""
        ) : (
          <div className="fles justify-center md:w-[350px] xxs:w-[250px] ">
            <img src={ndisreferral} alt="" />
          </div>
        )}

        <div className="flex  xxs:justify-between ss:justify-center gap-5   items-center xxs:w-full ss:w-auto  ">
          <p className=" font-Bebas md:text-xl text-primary ">Need Support?</p>
          <a href="https://6gitozn79lt.typeform.com/to/c6p2y0pE?typeform-source=jobsrus.com.au">
            <button className="bg-primary text-lavender font-Bebas md:text-xl py-2 px-4 rounded-full hover:scale-105 transition duration-300 shadow-md   ">
              Make A Refferal
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Referral;
