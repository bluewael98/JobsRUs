import React from "react";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";

const Heroes = () => {
  return (
    <section className="flex justify-center flex-col bg-lavender my-10 text-primary">
      <div className="flex flex-col  items-center text-primary font-Oswald">
        <h1 className="text-3xl font-bold">
          WE BELIEVE OUR CLIENTS ARE HEROES
        </h1>
        <h2 className="text-2xl text-gray-500 ">
          SO WE TRY TO BE HEROES TOO, HERE’S WHAT THAT MEANS TO US
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-10 my-10 ">
        <div className="max-w-[250px] w-auto flex flex-col items-end ">
          <img src={person1} alt="" />
          <p className="mt-5  font-Oswald text-2xl ">Honesty</p>
          <div className="w-[70px] h-[10px] bg-primary mt-3  rounded-sm opacity-70 "></div>
        </div>
        <div className="max-w-[250px] w-auto flex flex-col items-end">
          <img src={person2} alt="" />
          <p className="mt-5  font-Oswald text-2xl ">Empathy</p>
          <div className="w-[70px] h-[10px] bg-primary mt-3  rounded-sm opacity-70 "></div>
        </div>
        <div className="max-w-[250px] w-auto flex flex-col items-end">
          <img src={person3} alt="" />
          <p className="mt-5  font-Oswald text-2xl ">Reliability</p>
          <div className="w-[70px] h-[10px] bg-primary mt-3  rounded-sm opacity-70 "></div>
        </div>
        <div className="max-w-[250px] w-auto flex flex-col items-end">
          <img src={person4} alt="" />
          <p className="mt-5  font-Oswald text-2xl ">Open Mindedness</p>
          <div className="w-[70px] h-[10px] bg-primary mt-3  rounded-sm opacity-70 "></div>
        </div>
      </div>
    </section>
  );
};

export default Heroes;
