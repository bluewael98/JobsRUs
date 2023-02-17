import React from "react";
import jobsrus from "../assets/jobsrus.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="z-40 w-full fixed top-0 pt-4 h-[80px] font-Oswald mb-5 text-primary">
      <div className="flex items-center align-middle justify-between mx-auto w-5/6">
        <div className="flex flex-row align-middle items-center font-semibold">
          <img
            src={jobsrus}
            alt="jobsrus"
            className="w-36 h-14 object-cover text-"
          />
          <h2 className="">YOUR GOAL, OUR TARGET.</h2>
        </div>
        <div className="flex gap-4">
          <Link to="/">
            <h2>HOME</h2>
          </Link>
          <Link to="/about">
            <h2>ABOUT US</h2>
          </Link>
          <Link to="/ndis-services">
            <h2>NDIS SERVICES</h2>
          </Link>
          <Link to="/ndis-pricing">
            <h2>NDIS PRICING</h2>
          </Link>
          <Link to="/our-team">
            <h2>OUR TEAM</h2>
          </Link>
          <Link to="/contact">
            <h2>CONTACT</h2>
          </Link>
          <Link to="/refer-client">
            <h2>REFER A CLIENT</h2>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
