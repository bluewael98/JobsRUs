import React from "react";
import team from "../../assets/team.svg";
import stackedwave from "../../assets/stackedwave.svg";
import stackedwavetop from "../../assets/stackedwavetop.svg";
import TheMessage from "./TheMessage";
import Heroes from "./Heroes";
import Reviews from "../../components/Reviews";
import ContactForm from "../../components/ContactForm";

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

      <section>
        <Heroes />
      </section>

      <section>
        <Reviews />
      </section>

      <section className="bg-primary flex justify-center font-Oswald text-lavender gap-10">
        <div className="flex flex-col w-[500px] my-5">
          <h1 className="text-2xl font-bold  my-5">OUR DETAILS</h1>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold ">Our Address</h2>
            <p>
              Suite 6, 75 Rickard Rd, Bankstown corner (Corner of 443 Chapel Rd
              Bankstown) NSW 2200.
            </p>
            <h2 className="text-xl font-bold ">Email</h2>
            <p>info@jobsrus.com.au</p>
            <h2 className="text-xl font-bold ">Phone</h2>
            <p>02 9703 5732</p>
            <h2 className="text-xl font-bold ">Mobile</h2>
            <p>0450 518 508</p>
          </div>
        </div>
        <div className="flex flex-col w-[500px] my-5">
          <h1 className="text-2xl font-bold  my-5">CONTACT FORM</h1>
          <ContactForm />
        </div>
      </section>
    </section>
  );
};

export default Home;
