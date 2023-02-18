import React from "react";
import team from "../../assets/team.svg";
import stackedwave from "../../assets/stackedwave.svg";
import stackedwavetop from "../../assets/stackedwavetop.svg";
import TheMessage from "./TheMessage";
import Heroes from "./Heroes";
import Reviews from "../../components/Reviews";

const Home = () => {
  return (
    <section className=" pt-[100px] w-full bg-lavender font-Oswald  ">
      {/* LANDING PAGE */}
      <div className="flex justify-between items-center py-10">
        <div className=" ml-[300px]">
          <h1 className=" text-primary font-Oswald text-7xl bottom-4 w-[600px]">
            JOBS R US
          </h1>
          <h2 className=" text-primary font-Oswald text-4xl w-[600px]">
            Employment support as unique as{" "}
            <span className=" font-extrabold text-4xl">you</span> are.
          </h2>
        </div>
        <img src={team} alt="Team" className="w-[350px] mr-[300px] mt-10" />
      </div>
      <div className="flex content-center items-center justify-start ml-[300px] my-10 gap-10 text-lavender font-semibold">
        <div className=" bg-primary h-[50px] w-[150px] rounded-tl-3xl rounded-br-3xl items-center flex justify-center">
          ABOUT US
        </div>
        <div className=" bg-primary h-[50px] w-[150px] rounded-tl-3xl rounded-br-3xl items-center flex justify-center">
          OUR SERVICES
        </div>
        <div className=" bg-primary h-[50px] w-[150px] rounded-tl-3xl rounded-br-3xl items-center flex justify-center">
          GET IN TOUCH
        </div>
      </div>
      <img src={stackedwave} alt="" />
      <TheMessage />
      <img src={stackedwavetop} alt="" />
      <Heroes />
      <Reviews />
    </section>
  );
};

export default Home;
