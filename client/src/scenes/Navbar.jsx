import React, { useState } from "react";
import jobsrus from "../assets/jobsrus.png";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { MenuRounded } from "@mui/icons-material";
import { CloseRounded } from "@mui/icons-material";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Navbar = ({ isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1020px)");
  const navbarBackground = isTopOfPage
    ? "transition duration-500"
    : "bg-lavender transition duration-500 shadow-md";

  return (
    <nav
      className={`${navbarBackground} z-30 w-full fixed top-0 pt-4 h-[80px]`}
    >
      {/* DESKTOP NAV */}
      {isDesktop ? (
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
      ) : (
        <button
          className="rounded-full"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          {" "}
          <MenuRounded />{" "}
        </button>
      )}
      {/* MOBILE MENU POPUP */}
      {isDesktop && isMenuToggled && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="fixed right-0 top-0 bottom-0 height[100%] bg-secondary p-2 w-[300px] transition-500"
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <CloseRounded />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-10 ml-[33%] text-2xl">
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
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
