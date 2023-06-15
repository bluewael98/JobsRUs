import React from "react";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";

const Heroes = () => {
  return (
    <section className="flex justify-center flex-col bg-lavender my-10 text-primary text-center">
      <div className="flex flex-col  items-center text-primary font-Oswald">
        <h1 className="text-5xl sm:text-4xl xxs:text-3xl font-bold">
          WE BELIEVE OUR CLIENTS ARE HEROES
        </h1>
        <h2 className="sm:text-4xl xxs:text-2xl text-gray-500 ">
          SO WE TRY TO BE HEROES TOO, HERE’S WHAT THAT MEANS TO US
        </h2>
      </div>
      <div className="flex ss:flex-row xxs:flex-col  gap-10 my-10 items-center justify-center ">
        <div className="group">
          <div className=" transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] flex flex-col items-end">
            <div className="flex  text-2xl font-bold text-lavender max-w-[250px] items-center justify-center overflow-hidden">
              <div class="flex   items-center justify-center">
                <img src={person3} alt="" className="w-[250px]" />
              </div>
            </div>
            <div class="absolute inset-0 flex justify-center h-full w-full rounded-lg items-center bg-primary  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
              <h1 class="text-xl font-bold text-lavender">
                Unwavering Integrity, Transparent Support for NDIS Empowerment.
              </h1>
            </div>
            <p className="mt-5  font-Oswald text-2xl ">Honesty</p>
            <div className="w-[70px] h-[10px] bg-primary mt-3  rounded-sm opacity-70 "></div>
          </div>
        </div>

        <div className="group">
          <div className=" transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] flex flex-col items-end">
            <div className="flex  text-2xl font-bold text-lavender max-w-[250px] items-center justify-center overflow-hidden">
              <div class="flex   items-center justify-center">
                <img src={person1} alt="" className="w-[250px]" />
              </div>
            </div>
            <div class="absolute inset-0 flex justify-center h-full w-full rounded-lg items-center bg-primary  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
              <h1 class="text-xl font-bold text-lavender">
                Compassionate Understanding, Embracing Your NDIS Journey.
              </h1>
            </div>
            <p className="mt-5  font-Oswald text-2xl ">Empathy</p>
            <div className="w-[70px] h-[10px] bg-primary mt-3  rounded-sm opacity-70 "></div>
          </div>
        </div>

        <div className="group">
          <div className=" transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] flex flex-col items-end">
            <div className="flex  text-2xl font-bold text-lavender max-w-[250px] items-center justify-center overflow-hidden">
              <div class="flex   items-center justify-center">
                <img src={person4} alt="" className="w-[250px]" />
              </div>
            </div>
            <div class="absolute inset-0 flex justify-center h-full w-full rounded-lg items-center bg-primary  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
              <h1 class="text-xl font-bold text-lavender">
                Trusted Commitment, Consistent NDIS Support You Can Rely On.
              </h1>
            </div>
            <p className="mt-5  font-Oswald text-2xl ">Reliability</p>
            <div className="w-[70px] h-[10px] bg-primary mt-3  rounded-sm opacity-70 "></div>
          </div>
        </div>

        <div className="group">
          <div className=" transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] flex flex-col items-end">
            <div className="flex  text-2xl font-bold text-lavender max-w-[250px] items-center justify-center overflow-hidden">
              <div class="flex   items-center justify-center">
                <img src={person2} alt="" className="w-[250px]" />
              </div>
            </div>
            <div class="absolute inset-0 flex justify-center h-full w-full rounded-lg items-center bg-primary  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
              <h1 class="text-xl font-bold text-lavender">
                Inclusive Perspectives, Embracing Diversity in NDIS Care.
              </h1>
            </div>
            <p className="mt-5  font-Oswald text-2xl ">Open Mindedness</p>
            <div className="w-[70px] h-[10px] bg-primary mt-3  rounded-sm opacity-70 "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroes;
