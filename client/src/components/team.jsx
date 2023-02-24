import React from "react";
import Tureif from "../assets/team/Tureif.jpg";
import Amina from "../assets/team/Amina.jpg";
import Jordan from "../assets/team/Jordan.jpg";
import abbeir from "../assets/team/abbeir.jpg";
import Maryam from "../assets/team/Maryam.jpg";
import Layla from "../assets/team/Layla.jpg";
import Corey from "../assets/team/Corey.jpg";
import Tahlia from "../assets/team/Tahlia.jpg";
import Dancia from "../assets/team/Dancia.jpg";
import Zeinah from "../assets/team/Zeinah.jpg";

const Team = () => {
  return (
    <div className="grid grid-cols-4 w-[250px] gap-2">
      <img src={Tureif} alt="" className="w-[50px] rounded-full" />
      <img src={Amina} alt="" className="w-[50px] rounded-full" />
      <img src={Jordan} alt="" className="w-[50px] rounded-full" />
      <img src={abbeir} alt="" className="w-[50px] rounded-full" />
      <img src={Maryam} alt="" className="w-[50px] rounded-full" />
      <img src={Layla} alt="" className="w-[50px] rounded-full" />
      <img src={Corey} alt="" className="w-[50px] rounded-full" />
      <img src={Tahlia} alt="" className="w-[50px] rounded-full" />
      <img src={Dancia} alt="" className="w-[50px] h-[50px] rounded-full" />
      <img src={Zeinah} alt="" className="w-[50px] h-[50px]  rounded-full" />
    </div>
  );
};

export default Team;
