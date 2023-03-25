import React from "react";
import { Link } from "react-router-dom";
import contactphone from "../assets/contact-phone.svg";

const ContactTransition = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to="/contact" onClick={handleClick}>
      <div className="flex flex-col justify-between  text-center items-center gap-3 text-lg text-lavender font-bold  bg-primary p-4 rounded-lg hover:scale-105 tansition duration-300 my-20 cursor-pointer">
        <h2>Want to get in touch?</h2>
        <img src={contactphone} alt="" className="w-[100px]" />
        <h2>Contact us here!</h2>
      </div>
    </Link>
  );
};

export default ContactTransition;
