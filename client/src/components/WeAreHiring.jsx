import React from "react";
import { motion } from "framer-motion";
import hiring from "../assets/hiring.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
const drawerVariants = {
  open: {
    x: "0%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  closed: {
    x: "-78%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const WeAreHiring = () => {
  const isDesktop = useMediaQuery("(min-width: 1420px)");
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <section>
      {isDesktop ? (
        <motion.div
          variants={drawerVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          onHoverStart={() => setIsOpen(true)}
          onHoverEnd={() => setIsOpen(false)}
          className="fixed flex justify-between items-center left-0 top-1/2 transform -translate-y-1/2 bg-primary h-[200px] px-5  rounded-r-full z-[60] border-4 border-l-0 border-lavender  shadow-md hover:scale-105 transition duration-300 cursor-pointer w-[640px]"
        >
          <div className="flex items-center justify-center  text-lavender text-xl font-Bebas font-bold  rounded-r-full ">
            <div className="flex justify-center text-center flex-col items-center max-w-[300px] gap-2">
              <p>We're hiring and we want you to join the team!</p>
              <Link to="/work-with-us">
                <button className="py-2 px-4 bg-lavender shadow-md hover:scale-105 transition duration-300 text-primary rounded-full max-w-[150px]">
                  Apply Now
                </button>
              </Link>
            </div>
            <img src={hiring} alt="" className="w-[150px] " />
          </div>
          <div className="flex justify-center items-center text-xl font-Bebas font-bold">
            <div className="w-[110px] h-[110px] rounded-full border-4 border-lavender flex justify-center items-center text-center text-lavender">
              Join our team!
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </section>
  );
};

export default WeAreHiring;
