import React from "react";
import jobsrus from "../assets/jobsrus.png";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-lavender flex justify-center items-center content-center">
      <img src={jobsrus} alt="" className="w-[screen]" />
    </div>
  );
};

export default Loading;
