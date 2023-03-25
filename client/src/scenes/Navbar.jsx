import React, { useState } from "react";
import jobsrus from "../assets/jobsrus.png";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { MenuRounded } from "@mui/icons-material";
import { CloseRounded } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { ArrowDropDown } from "@mui/icons-material";
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

  const buttonRef = useRef(null);
  const timeoutDuration = 200;
  let timeout;

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open) => {
    clearTimeout(timeout);
    if (open) return;
    return buttonRef.current?.click();
  };

  const onMouseLeave = (open) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };

  const navbarLarge = useMediaQuery("(min-width: 1310px)");

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1034px)");
  const navbarBackground = isTopOfPage
    ? "transition duration-500"
    : "bg-lavender transition duration-500 shadow-md";

  return (
    <nav
      className={`${navbarBackground} z-[80] w-full fixed top-0 pt-4 h-[80px]`}
    >
      {/* DESKTOP NAV */}
      {isDesktop ? (
        <div className="flex items-center align-middle justify-between mx-auto w-5/6">
          <Link to="/" onClick={handleClick}>
            <div className="flex flex-row  align-middle items-center font-semibold gap-2">
              <img
                src={jobsrus}
                alt="jobsrus"
                className="w-[70px] h-full  object-cover"
              />
              <h2 className=" font-Bebas font-extrabold text-xl text-primary">
                JOBS <span className=" text-alt2">R</span> US
              </h2>
              {navbarLarge ? (
                <h1 className="font-Bebas text-sm ml-4 text-primary font-extrabold">
                  Your Goal, Our Target.
                </h1>
              ) : (
                ""
              )}
            </div>
          </Link>

          <div className="navbar flex items-center gap-8 justify-between font-Bebas font-semibold  text-primary">
            <Link
              to="/"
              onClick={handleClick}
              className="group text-primary transition-all duration-300 ease-in-out"
            >
              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                HOME
              </h2>
            </Link>
            <Link
              to="/about"
              onClick={handleClick}
              className="group text-primary transition-all duration-300 ease-in-out"
            >
              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                ABOUT US
              </h2>
            </Link>

            <Link
              to="/our-team"
              className="group text-primary transition-all duration-300 ease-in-out"
              onClick={handleClick}
            >
              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                OUR TEAM
              </h2>
            </Link>
            <Popover className="relative">
              {({ open }) => {
                return (
                  <>
                    <div onMouseLeave={onMouseLeave.bind(null, open)}>
                      <Popover.Button
                        ref={buttonRef}
                        onMouseEnter={onMouseEnter.bind(null, open)}
                        onMouseLeave={onMouseLeave.bind(null, open)}
                        className="flex justify center items-center"
                      >
                        <p>NDIS</p>
                        <ArrowDropDown />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          className="absolute z-20 w-[200px] h-[200px] pt-5 left-[-50px] rounded-md"
                          onMouseEnter={onMouseEnter.bind(null, open)}
                          onMouseLeave={onMouseLeave.bind(null, open)}
                        >
                          <div className="grid grid-cols-1 bg-lavender  px-5  gap-3 shadow-md py-5 rounded-md">
                            <Link
                              to="/ndis-services"
                              onClick={handleClick}
                              className="group text-primary transition-all duration-300 ease-in-out"
                            >
                              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                                NDIS SERVICES
                              </h2>
                            </Link>
                            <Link
                              onClick={handleClick}
                              to="/ndis-pricing"
                              className="group text-primary transition-all duration-300 ease-in-out"
                            >
                              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                                NDIS PRICING
                              </h2>
                            </Link>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </div>
                  </>
                );
              }}
            </Popover>

            <Link
              to="/contact"
              className="group text-primary transition-all duration-300 ease-in-out"
              onClick={handleClick}
            >
              <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                CONTACT
              </h2>
            </Link>
            <Link
              to="/join-our-team"
              className="group text-lavender transition-all duration-300 ease-in-out"
              onClick={handleClick}
            >
              <h2 className="bg-left-bottom bg-primary bg-gradient-to-r from-lavender to-lavender bg-[length:0%_40px] bg-no-repeat group-hover:bg-[length:100%_40px] group-hover:opacity-80 group-hover:text-primary transition-all duration-500 ease-out py-2 px-3 rounded-full">
                JOIN OUR TEAM
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
              <Link to="/join-our-team" onClick={handleClick}>
                <h2>JOIN OUR TEAM</h2>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
