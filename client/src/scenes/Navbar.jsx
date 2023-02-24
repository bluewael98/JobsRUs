import React, { useState } from "react";
import jobsrus from "../assets/jobsrus.png";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { MenuRounded } from "@mui/icons-material";
import { CloseRounded } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { Popover } from "@headlessui/react";

const variants = {
  visible: { x: "0%" },
  hidden: { x: "-100%" },
  exit: { x: "-100%" },
  exitActive: { x: 0 },
};

const Navbar = ({ isTopOfPage }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1020px)");
  const navbarBackground = isTopOfPage
    ? "transition duration-500"
    : "bg-lavender transition duration-500 shadow-md";

  return (
    <nav
      className={`${navbarBackground} z-50 w-full fixed top-0 pt-4 h-[80px]`}
    >
      {/* DESKTOP NAV */}
      {isDesktop ? (
        <div className="flex items-center align-middle justify-between mx-auto w-5/6">
          <div className="flex flex-row align-middle items-center font-semibold">
            <img
              src={jobsrus}
              alt="jobsrus"
              className="w-[70px] h-full  object-cover"
            />
            <h2 className=" font-Bebas font-extrabold text-xl text-primary">
              JOBS <span className=" text-alt2">R</span> US
            </h2>
          </div>
          <div className="navbar flex gap-4 justify-between font-Bebas font-semibold  text-primary">
            <Link
              to="/"
              className="group text-primary transition-all duration-300 ease-in-out"
            >
              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                HOME
              </h2>
            </Link>
            <Link
              to="/about"
              className="group text-primary transition-all duration-300 ease-in-out"
            >
              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                ABOUT US
              </h2>
            </Link>

            <Popover className="relative">
              <Popover.Button>NDIS</Popover.Button>
              <Popover.Panel className="absolute z-20 w-[200px] h-[200px] pt-5 left-[-50px] rounded-md">
                <div className="grid grid-cols-1 bg-lavender  px-5  gap-3 shadow-md py-5 rounded-md">
                  <Link
                    to="/ndis-services"
                    className="group text-primary transition-all duration-300 ease-in-out"
                  >
                    <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                      NDIS SERVICES
                    </h2>
                  </Link>
                  <Link
                    to="/ndis-pricing"
                    className="group text-primary transition-all duration-300 ease-in-out"
                  >
                    <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                      NDIS PRICING
                    </h2>
                  </Link>
                </div>
              </Popover.Panel>
            </Popover>

            <Link
              to="/our-team"
              className="group text-primary transition-all duration-300 ease-in-out"
            >
              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                OUR TEAM
              </h2>
            </Link>
            <Link
              to="/contact"
              className="group text-primary transition-all duration-300 ease-in-out"
            >
              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                CONTACT
              </h2>
            </Link>
            <Link
              to="/refer-client"
              className="group text-primary transition-all duration-300 ease-in-out"
            >
              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                REFER A CLIENT
              </h2>
            </Link>
          </div>
        </div>
      ) : (
        <button
          className="rounded-full ml-5 mt-2"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          {" "}
          <MenuRounded />{" "}
        </button>
      )}
      <AnimatePresence>
        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 0.2 }}
            exit="exit"
            className="fixed left-0 top-0 bottom-0 height[100%] bg-lavender p-2 w-[300px] transition-300 shadow-md"
          >
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <CloseRounded />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div
              className="flex flex-col gap-10 ml-5 text-2xl  font-Bebas text-primary font-semibold "
              onClick={() => setIsMenuToggled(false)}
            >
              <Link to="/" onClick={handleClick}>
                <h2>HOME</h2>
              </Link>
              <Link to="/about" onClick={handleClick}>
                <h2>ABOUT US</h2>
              </Link>
              <Link to="/ndis-services" onClick={handleClick}>
                <h2>NDIS SERVICES</h2>
              </Link>
              <Link to="/ndis-pricing" onClick={handleClick}>
                <h2>NDIS PRICING</h2>
              </Link>
              <Link to="/our-team" onClick={handleClick}>
                <h2>OUR TEAM</h2>
              </Link>
              <Link to="/contact" onClick={handleClick}>
                <h2>CONTACT</h2>
              </Link>
              <Link to="/refer-client" onClick={handleClick}>
                <h2>REFER A CLIENT</h2>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
