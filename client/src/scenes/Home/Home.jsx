import { React, useState } from "react";
import { motion } from "framer-motion";
import TheMessage from "./TheMessage";
import Heroes from "./Heroes";
import Reviews from "../../components/Reviews";
import ourteamheader from "../../assets/ourteamheader.JPG";
import ContactForm from "../../components/ContactForm";
import header2 from "../../assets/header2.jpg";
import useMediaQuery from "../../hooks/useMediaQuery";
import p1 from "../../assets/p1.png";
import p1mobile from "../../assets/p1mobile.png";
import oneonone from "../../assets/oneonone.JPG";
import phonebackground from "../../assets/phonebackground.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import jobsrus from "../../assets/jobsrus.png";
import Facts from "./Facts";
import circle from "../../assets/circles.svg";
import WeHaveMoved from "../../components/WeHaveMoved";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import group from "../../assets/group.jpg";
import Banner from "../../assets/Banner.png";

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #303FA1",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="  w-full bg-lavender font-Oswald overflow-hidden mt-[80px] ">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Empowering individuality through Personalised NDIS solutions."
        />
      </Helmet>
      {/* LANDING PAGE */}
      <WeHaveMoved />
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
            <div className="flex justify center items-center flex-col sm:pr-[70%] text-center">
              <h1 className="  xxs:text-5xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 w-max">
                JOBS R US
              </h1>
              <h2 className=" md:text-5xl xxs:text-4xl font-Oswald w-max">
                Your Goal,
              </h2>
              <h2 className=" md:text-5xl xxs:text-4xl font-Oswald w-max">
                Our Target.
              </h2>
              <div className="flex justify-center items-center flex-col gap-4">
                <Link to="/contact">
                  <button className="  rounded-lg items-center  flex justify-center md:py-4 md:px-10 xxs:py-2 xxs:px-6  font-extrabold hover:scale-105 transition duration-300 bg-lavender text-primary mt-5 ">
                    GET IN TOUCH
                  </button>
                </Link>
                <button
                  onClick={handleOpen}
                  className="  rounded-lg items-center  flex justify-center md:py-4 md:px-10 xxs:py-2 xxs:px-6  font-extrabold hover:scale-105 transition duration-300 bg-lavender text-primary  "
                >
                  WE HAVE MOVED!
                </button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{ mt: 2, color: "#303FA1", fontWeight: "bold" }}
                    >
                      Our new location:
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, color: "#303FA1", fontWeight: "bold" }}
                    >
                      Suite 902, L7, 66-72 Rickard Road Bankstown.
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>

            <img src={p1mobile} alt="" className="sm:pl-[30%] pt-5" />
          </motion.div>
          <img
            src={phonebackground}
            alt=""
            className="w-screen h-full object-cover absolute top-0 opacity-100  z-1 "
          />
        </div>
      ) : (
        // DESKTOP LANDING PAGE
        <div className="flex flex-col justify-center items-center py-10 font-Oswald font-semibold relative w-screen text-lavender  mb-[120px]">
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
            <div className="flex flex-col justify-center items-center">
              <img
                src={jobsrus}
                alt="jobsrus"
                className="w-[200px] opacity-100 h-full  object-cover"
              />
              <h2 className=" font-Bebas font-extrabold text-6xl text-lavender">
                JOBS R US
              </h2>
            </div>

            <h2 className=" md:text-3xl xs:text-2xl font-Oswald">Your Goal,</h2>
            <h2 className=" md:text-3xl xs:text-2xl font-Oswald">
              Our Target.
            </h2>
            <Link to="/contact">
              <button className="  rounded-lg items-center  flex justify-center md:py-4 md:px-10 xxs:py-2 xxs:px-6  font-extrabold hover:scale-105 transition duration-300 bg-lavender text-primary my-5 ">
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
              <Link to="/ndis-services#eso" className="z-10">
                <div className=" overflow-hidden cursor-pointer  flex justify-center items-centr w-full z-10 xlg:p-2 bg-lavender rounded-[20%] shadow-md hover:scale-105 transition duration-300 mt-[100px]  max-h-[250px] ">
                  <div className="bg-black  overflow-hidden rounded-[20%] relative flex justify-center items-center">
                    <img
                      src={group}
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
              <Link to="/ndis-services#spa" className="z-10">
                <div className=" overflow-hidden  flex justify-center items-centr w-full z-10 xlg:p-2 bg-lavender rounded-[20%] shadow-md hover:scale-105 transition duration-300  max-h-[250px]  ">
                  <div className="bg-black  overflow-hidden rounded-[20%] relative flex justify-center items-center">
                    <img
                      src={oneonone}
                      alt=""
                      className="w-screen  object-cover object-top opacity-60 z-[5]"
                    />
                    <h2 className=" xxl:text-3xl md:text-2xl font-Oswald text-center text-lavender opacity-90 z-10 absolute p-0 m-0">
                      1:1
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={variants}>
              <Link to="/ndis-services#sles" className="z-10">
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
              <Link to="ndis-services#group" className="z-10">
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
          <div className="w-screen h-3/4 absolute  top-0 opacity-100  z-[5] bg-primary overflow-hidden ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative"
            >
              <img src={p1} alt="" className="absolute w-[500px]  py-5 z-[7]" />
              <img
                src={circle}
                alt=""
                className=" w-screen h-screen object-cover translate-x-0 top-0 mx-auto  z-[6] opacity-30 mix-blend-darker"
              />
            </motion.div>
          </div>

          <img
            src={jobsrus}
            alt=""
            className="absolute w-[900px] translate-x-0 top-0 mx-auto  z-[6] opacity-5 mix-blend-darker"
          />
        </div>
      )}

      {/* EMPLOYMENT SUPPORT AS UNIQUE AS YOU ARE */}
      <Facts />

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
      <section className=" flex sm:flex-row xxs:flex-col justify-center font-Oswald text-primary gap-10 px-5 mb-20 py-5 items-start relative">
        <div className="flex flex-col sm:w-[500px] xxs:w-full my-5 z-10 bg-primary text-lavender rounded-lg pl-5 ">
          <h1 className="text-2xl font-bold  my-5">OUR DETAILS</h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold ">Our Address</h2>
            <p>
              <a
                href="https://goo.gl/maps/du94CGnpjmnUndcH8"
                className="cursor-pointer underline-offset-3"
              >
                Suite 902, L9, 66-72 Rickard Rd, Bankstown NSW 2200.
              </a>{" "}
            </p>
            <p className="mb-[30px]">
              Building is named Civic towers, located above the council.
            </p>
            <h2 className="text-xl font-bold ">Email</h2>
            <p className="mb-[30px]">info@jobsrus.com.au</p>
            <h2 className="text-xl font-bold ">Phone</h2>
            <p className="mb-[30px]">02 9703 5732</p>
            <h2 className="text-xl font-bold ">Mobile</h2>
            <p className="mb-[30px]">0450 518 508</p>
          </div>
        </div>
        <div className="flex flex-col sm:w-[500px] xxs:w-full mt-5 items-start z-10">
          <h1 className="text-2xl font-bold  my-5">CONTACT US HERE</h1>
          <ContactForm />
        </div>
      </section>
    </section>
  );
};

export default Home;
