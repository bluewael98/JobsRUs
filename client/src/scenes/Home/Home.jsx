import React from "react";
import { motion } from "framer-motion";
import stackedwave from "../../assets/stackedwave.svg";
import stackedwavetop from "../../assets/stackedwavetop.svg";
import TheMessage from "./TheMessage";
import Heroes from "./Heroes";
import Reviews from "../../components/Reviews";
import ourteamheader from "../../assets/ourteamheader.JPG";
import ContactForm from "../../components/ContactForm";
import header2 from "../../assets/header2.jpg";
import header3 from "../../assets/header3.jpg";
import useMediaQuery from "../../hooks/useMediaQuery";
import p1 from "../../assets/p1.png";
import oneonone from "../../assets/oneonone.JPG";
import phonebackground from "../../assets/phonebackground.svg";
import { Link } from "react-router-dom";
const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1080px)");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="  w-full bg-lavender font-Oswald overflow-hidden mt-[80px] ">
      {/* LANDING PAGE */}

      {/* MOBILE LANDING PAGE */}
      {isSmallScreen ? (
        <div className="flex flex-col justify-center items-center pt-10 font-Oswald font-semibold relative w-screen text-lavender mb-[100px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-center xxs:items-center  xxs:flex-col sm:flex-row-reverse sm:justify-center w-screen flex-col z-10 font-Oswald font-extrabold mt-10 text-center "
          >
            <div className="flex justify center items-center flex-col sm:pr-[70%] sm:items-start sm:text-start">
              <h1 className="  xxs:text-5xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10">
                JOBS R US
              </h1>
              <h2 className=" md:text-5xl xxs:text-4xl font-Oswald">
                EMPLOYMENT SUPPORT,
              </h2>
              <h2 className=" md:text-5xl xxs:text-4xl font-Oswald">
                AS UNIQUE AS{" "}
                <span className=" font-extrabold xxs:text-4xl md:text-5xl">
                  YOU
                </span>{" "}
                ARE.
              </h2>
              <Link to="/contact">
                <button className="  rounded-3xl items-center  flex justify-center md:py-4 md:px-10 xxs:py-2 xxs:px-6  font-extrabold hover:scale-105 transition duration-300 bg-lavender text-primary my-5 ">
                  GET IN TOUCH
                </button>
              </Link>
            </div>

            <img src={p1} alt="" className="sm:pl-[30%]" />
          </motion.div>
          <img
            src={phonebackground}
            alt=""
            className="w-screen h-full object-cover absolute top-0 opacity-100  z-1 "
          />
        </div>
      ) : (
        // DESKTOP LANDING PAGE
        <div className="flex flex-col justify-center items-center py-10 font-Oswald font-semibold relative w-screen text-lavender  mb-[220px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-center items-center w-screen flex-col z-10 font-Oswald font-extrabold mt-10 "
          >
            <h1 className="  xs:text-5xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10">
              JOBS R US
            </h1>
            <h2 className=" md:text-5xl xs:text-4xl font-Oswald">
              EMPLOYMENT SUPPORT,
            </h2>
            <h2 className=" md:text-5xl xs:text-4xl font-Oswald">
              AS UNIQUE AS{" "}
              <span className=" font-extrabold xs:text-4xl md:text-5xl">
                YOU
              </span>{" "}
              ARE.
            </h2>
            <Link to="/contact">
              <button className="  rounded-3xl items-center  flex justify-center md:py-4 md:px-10 xxs:py-2 xxs:px-6  font-extrabold hover:scale-105 transition duration-300 bg-lavender text-primary my-5 ">
                GET IN TOUCH
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex items-center justify-center w-3/4  gap-10 z-[10]  "
          >
            <motion.div variants={variants}>
              <Link to="/ndis-services" className="z-10">
                <div className=" overflow-hidden cursor-pointer  flex justify-center items-centr w-full z-10 xlg:p-2 bg-lavender rounded-[20%] shadow-md hover:scale-105 transition duration-300 mt-[100px]  max-h-[250px] ">
                  <div className="bg-black  overflow-hidden rounded-[20%] relative flex justify-center items-center">
                    <img
                      src={header3}
                      alt=""
                      className="w-screen  object-cover object-top opacity-60 z-[5]"
                    />
                    <div className=" xxl:text-3xl md:text-2xl font-Oswald text-center text-lavender opacity-90 z-10 absolute p-0 m-0">
                      <p>Employment</p> <p>Support</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={variants}>
              <Link to="/ndis-services" className="z-10">
                <div className=" overflow-hidden  flex justify-center items-centr w-full z-10 xlg:p-2 bg-lavender rounded-[20%] shadow-md hover:scale-105 transition duration-300  max-h-[250px]  ">
                  <div className="bg-black  overflow-hidden rounded-[20%] relative flex justify-center items-center">
                    <img
                      src={oneonone}
                      alt=""
                      className="w-screen  object-cover object-top opacity-60 z-[5]"
                    />
                    <h2 className=" xxl:text-3xl md:text-2xl font-Oswald text-center text-lavender opacity-90 z-10 absolute p-0 m-0">
                      1:1 Training
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={variants}>
              <Link to="/ndis-services" className="z-10">
                <div className=" overflow-hidden  flex justify-center items-centr w-full z-10 xlg:p-2 bg-lavender rounded-[20%] shadow-md hover:scale-105 transition duration-300 mt-[100px]  max-h-[250px]  ">
                  <div className="bg-black  overflow-hidden rounded-[20%] relative flex justify-center items-center">
                    <img
                      src={header2}
                      alt=""
                      className="w-screen  object-cover object-top opacity-60 z-[5]"
                    />
                    <div className=" xxl:text-3xl md:text-2xl font-Oswald text-center text-lavender opacity-90 z-10 absolute p-0 m-0">
                      <p>SLES</p> <p>Training</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={variants}>
              <Link to="/ndis-services" className="z-10">
                <div className=" overflow-hidden  flex justify-center items-centr  w-full   z-10 xlg:p-2 bg-lavender relative rounded-[20%] shadow-md hover:scale-105 transition duration-300 max-h-[250px]">
                  <div className="bg-black  overflow-hidden rounded-[20%] flex justify-center  items-center   w-full">
                    <img
                      src={ourteamheader}
                      alt=""
                      className="w-screen  object-cover object-top opacity-60 z-[5]"
                    />
                    <div className=" xxl:text-3xl md:text-2xl  font-Oswald text-center text-lavender opacity-90 z-10 absolute p-0 m-0 w-full">
                      <p>Weekend</p> <p>Activities</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          <div className="w-screen h-3/4 absolute top-0 opacity-100  z-[5] bg-primary overflow-hidden ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img
                src={p1}
                alt=""
                className="absolute w-[900px] xlg:left-[-200px] lg:left-[-280px] md:left-[-290px]  z-[7]"
              />
            </motion.div>
          </div>
        </div>
      )}

      {/* HEROES SECTION */}
      <section>
        <Heroes />
      </section>

      {/* OUR MESSAGE SECTION */}

      <TheMessage />

      {/* REVIEWS SECTION */}
      <section>
        <Reviews />
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-primary flex sm:flex-row xxs:flex-col justify-center font-Oswald text-lavender gap-10 px-5 mb-20 py-5 items-start">
        <div className="flex flex-col sm:w-[500px] xxs:w-full my-5">
          <h1 className="text-2xl font-bold  my-5">OUR DETAILS</h1>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold ">Our Address</h2>
            <p>
              Suite 6, 75 Rickard Rd, Bankstown corner (Corner of 443 Chapel Rd
              Bankstown) NSW 2200.
            </p>
            <h2 className="text-xl font-bold ">Email</h2>
            <p>info@jobsrus.com.au</p>
            <h2 className="text-xl font-bold ">Phone</h2>
            <p>02 9703 5732</p>
            <h2 className="text-xl font-bold ">Mobile</h2>
            <p>0450 518 508</p>
          </div>
        </div>
        <div className="flex flex-col sm:w-[500px] xxs:w-full mt-5 items-start">
          <h1 className="text-2xl font-bold  my-5">CONTACT FORM</h1>
          <ContactForm />
        </div>
      </section>
    </section>
  );
};

export default Home;
