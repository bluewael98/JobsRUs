import { React, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import group from "../assets/group.jpg";
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
import Alfred from "../assets/team/Alfred.jpg";
import Khadeja from "../assets/team/Khadeja.jpg";
import Fish from "../assets/team/Fish.jpg";
import screening from "../assets/screening.svg";
import support from "../assets/support.svg";
import standtogether from "../assets/standtogether.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import WeAreHiring from "../components/WeAreHiring";
import circles from "../assets/circles.svg";
import cpi from "../assets/cpi.jpg";
import user from "../assets/user.svg";
import ContactTransition from "../components/ContactTransition";
import { Helmet } from "react-helmet";

const OurTeam = () => {
  const [open, setOpen] = useState(null);

  const isLargeDevice = useMediaQuery("(min-width: 1440px)");
  const isSmallDevice = useMediaQuery("(max-width: 768px)");
  const openModal = (id) => {
    setOpen(id);
  };

  const closeModal = (id) => {
    setOpen(null);
  };
  return (
    <section className=" flex justify-center flex-col mt-[80px] items-center font-Oswald">
      <Helmet>
        <title>Our Team</title>
        <meta
          name="description"
          content="Honest, Empathetic, Reliable, and Open-minded
                    individuals who meet and surpass your expectations."
        />
      </Helmet>
      <WeAreHiring />
      {/* HEADER */}
      {isLargeDevice ? (
        <div className="w-screen  bg-primary relative flex justify-between overflow-hidden  mb-[5rem]">
          <div className="flex flex-col justify-center pl-10 ">
            <h1 className="  xxs:text-4xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
              OUR TEAM OF HEROES
            </h1>
          </div>
          <div className="flex  z-20 top-[25px] justify-center items-center shadow-5xl overflow-hidden  w-[600px]  ml-[100px] rounded-bl-[200px] pl-[25px] shadow--l5xl  whitespace-pre   bg-primary bg-opacity-80 ">
            <img
              src={group}
              alt=""
              className="w-[600px] object-cover object-top  rounded-bl-[200px]"
            />
          </div>
          <img
            src={circles}
            alt=""
            className="absolute w-screen min-h-[150px] object-cover opacity-30 z-[5]"
          />
        </div>
      ) : (
        <div className="w-screen xxs:max-h-[240px] xs:max-h-[500px]  bg-primary relative flex justify-center items-center overflow-hidden py-20  mb-[5rem]">
          <div className="flex flex-col justify-center items-center text-center z-10 font-Bebas">
            <h1 className="  xxs:text-3xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
              OUR TEAM
            </h1>
          </div>
          <img
            src={circles}
            alt=""
            className="absolute w-screen opacity-30 z-[5] xs:h-[300px] xxs:h-[240px] object-cover"
          />
        </div>
      )}

      {isSmallDevice ? (
        <div className="flex sm:px-20 md:px-[100px] xlg:px-[200px] xxs:flex-col xlg:flex-row gap-3 justify-center items-center w-full pt-10 mx-auto text-opacity-90 ">
          <div className=" flex flex-col justify-center text-center gap-3">
            <div div className="w-screen ">
              <img src={group} alt="" className=" z-10 w-screen " />
            </div>
            {/* P1*/}
            <div className="flex flex-col items-center justify-between relative ">
              <div className="flex justify-center items-center align-top w-[screen] relative ">
                <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl flex flex-col gap-5 justify-center items-center font-Oswald rounded-2xl text-center">
                  <p className=" max-w-screen">
                    At Jobs R Us, we thoroughly screen our staff to ensure we
                    hire HEROES - Honest, Empathetic, Reliable, and Open-minded
                    individuals who meet and surpass your expectations.
                  </p>
                  <img
                    src={standtogether}
                    alt=""
                    className="min-w-[100px] max-w-[200px]"
                  />
                </div>
              </div>
            </div>
            {/* P2 */}
            <div className="flex flex-col items-center justify-between relative ">
              <div className="flex justify-center items-center align-top w-[screen] relative ">
                <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl flex flex-col gap-5 justify-center items-center font-Oswald rounded-2xl text-center">
                  <p className=" max-w-screen">
                    This involves two face-to-face interviews with their
                    department heads and a final sign-off by the Managing
                    Director on the third interview. We also assess both
                    existing and new staff to ensure a suitable placement is
                    catered to you based on your goals and the type of support
                    you need.
                  </p>
                  <img
                    src={screening}
                    alt=""
                    className="min-w-[100px] max-w-[200px]"
                  />
                </div>
              </div>
            </div>
            {/* P3*/}
            <div className="flex flex-col items-center justify-between relative ">
              <div className="flex justify-center items-center align-top w-[screen] relative ">
                <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl flex flex-col gap-5 justify-center items-center font-Oswald rounded-2xl text-center">
                  <p className=" max-w-screen">
                    Our staff are then able to perform the role of a key support
                    worker and be the main contact for you, ensuring effective
                    coordination and communication across the board.
                  </p>
                  <p>
                    Our priority is the quality of service you receive, and
                    we've taken this approach to provide you with the best
                    possible experience.
                  </p>
                  <img
                    src={support}
                    alt=""
                    className="min-w-[100px] max-w-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex xxs:p-10 sm:px-20 md:px-[100px] xlg:px-[200px] xxs:flex-col xlg:flex-row gap-3 justify-center items-center w-full pt-10">
          <div className="xlg:w-[70%] md:w-[100%] flex flex-col xxs:justify-center xxs:items-center xxs:text-center xlg:justify-start xlg:items-start xlg:text-left gap-2">
            <h1 className="md:text-5xl xxs:text-2xl font text-primary">
              Meet our team of{" "}
              <span className=" font-semibold opacity-100 italic">HEROES.</span>
            </h1>
            <h1 className="md:text-5xl xxs:text-2xl  font text-primary">
              {" "}
              Honest, Empathetic, Reliable, and Open-minded individuals.
            </h1>
            <p className="text-lg text-alt2 text-semibold font-Oswald ">
              At Jobs R Us, we thoroughly screen our staff to ensure we hire
              HEROES - Honest, Empathetic, Reliable, and Open-minded individuals
              who meet and surpass your expectations.
            </p>
            <p className="text-lg text-alt2 text-semibold">
              This involves two face-to-face interviews with their department
              heads and a final sign-off by the Managing Director on the third
              interview. We also assess both existing and new staff to ensure a
              suitable placement is catered to you based on your goals and the
              type of support you need.
            </p>
            <p className="text-lg text-alt2 text-semibold">
              Once our staff are hired, they are provided with regular training
              to ensure your program is on track and is in line with your goals.
              This provides our team the opportunity to seek guidance from a
              superior to ensure you are always getting the higheset level of
              support regardless if you are seen by the managing director or a
              newly hired employment support officer.
            </p>
          </div>
        </div>
      )}

      {/* TEAM */}
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-semibold text-4xl text-primary mt-[100px] mb-10">
          OUR TEAM
        </h1>
        {/* TURIEF */}
        <Fragment>
          <div className="flex justify-center items-center flex-col text-center">
            <div
              className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
              onClick={() => openModal("tureif")}
            >
              <img
                src={Tureif}
                alt=""
                className="rounded-full w-[200px] h-[200px] object-cover"
              />
            </div>
            <h2 className=" text-xl font-semibold text-primary mt-5">
              Turief Hourani
            </h2>
            <h2 className=" text-lg font-semibold text-alt2 my-2">
              Managing Director
            </h2>

            <div className="flex justify-center items-center gap-2 ">
              <h2 className=" text-lg font-semibold text-alt2 ">
                CPI Safety Intervention Trainer
              </h2>
              <img src={cpi} alt="cpi" className="w-[30px] rounded-full" />
            </div>
            <p className="w-[240px] text-alt2 font-semibold">
              Fluent in Arabic.
            </p>
            <p className="w-[240px] text-alt2">
              Hi, I’m Tureif. I have experience in working with complex
              behaviours and in implementing...
            </p>
          </div>
          <Transition
            show={open === "tureif"}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-100 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-80 opacity-0"
            as={Fragment}
          >
            <Dialog
              as="div"
              className="fixed inset-0 z-50 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                  >
                    <p className=" text-primary font-semibold text-3xl">
                      Turief
                    </p>
                    <p className=" text-alt2 font-semibold text-2xl">
                      Managing Director
                    </p>
                    <p className="w-[240px] text-alt2 font-semibold text-center">
                      Fluent in Arabic.
                    </p>
                  </Dialog.Title>
                  <div className="mt-2 text-center text-xl text-alt2 gap-4 flex flex-col">
                    <p>
                      Hi, I’m Tureif. I have experience in working with complex
                      behaviours and in implementing behaviour support plans.
                      People say I’m very patient and headstrong, referred to as
                      intense and tiring but eventually, people see it’s for
                      everyone’s best interest.
                    </p>
                    <p>
                      I’m very passionate about my work and I love to lead my
                      team by example. I believe a good leader always pushes his
                      team to their limits and shows them what they can achieve
                      and this is exactly what I try to do.
                    </p>
                    <p>
                      I enjoy spending time with my family, and going for long
                      quiet drives or being alone in the wilderness surrounded
                      by nothing but nature to appreciate the real beauty we
                      have on this earth.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition>
        </Fragment>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 xxs:grid-cols-1 mt-[200px] gap-[200px]">
          {/* AMINA */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("amina")}
              >
                <img
                  src={Amina}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                Amina
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">Manager</h2>
              <div className="flex justify-center items-center ">
                <h2 className=" text-lg font-semibold text-alt2 gap-2 ">
                  CPI Safety Intervention Trained
                </h2>
                <img src={cpi} alt="cpi" className="w-[30px] rounded-full" />
              </div>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                Fluent in Arabic.
              </p>
              <p className="w-[240px] text-alt2">
                I am a mother of two who has completed a Bachelor of Arts,
                Pathway to a Master of Teaching and...
              </p>
              <Transition
                show={open === "amina"}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-100 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-100 opacity-0"
                as={Fragment}
              >
                <Dialog
                  as="div"
                  className="fixed inset-0 z-50 overflow-y-auto"
                  onClose={closeModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>

                    <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title
                        as="h3"
                        className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                      >
                        <p className=" text-primary font-semibold text-3xl">
                          AMINA
                        </p>
                        <p className=" text-alt2 font-semibold text-2xl">
                          Head of employment.
                        </p>
                        <p className="w-[240px] text-alt2 font-semibold text-center">
                          Fluent in Arabic.
                        </p>
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-xl text-alt2">
                          I am a mother of two who has completed a Bachelor of
                          Arts, Pathway to a Master of Teaching and a Diploma of
                          Financial services. I have over 11 years of experience
                          working with children of all ages and various needs. I
                          enjoy creative projects, animals and nature. My
                          favourite quote is “Aerodynamically, the bumble bee
                          shouldn’t be able to fly, but it doesn’t know it, so
                          it flies anyway”
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                          onClick={() => setOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </Fragment>

          {/* Jordan */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("jordan")}
              >
                <img
                  src={Jordan}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                Jordan
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Team Leader
              </h2>
              <div className="flex justify-center items-center gap-2 ">
                <h2 className=" text-lg font-semibold text-alt2 ">
                  CPI Safety Intervention Trained
                </h2>
                <img src={cpi} alt="cpi" className="w-[30px] rounded-full" />
              </div>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                Fluent in Samoan.
              </p>
              <p className="w-[240px] text-alt2">
                Hi my name is Jordan, I come from a Pacific island background. I
                have completed my Diploma of community...
              </p>
            </div>
            <Transition
              show={open === "jordan"}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-100 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        JORDAN
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Team Leader.
                      </p>
                      <p className="w-[240px] text-alt2 font-semibold text-center">
                        Fluent in Samoan.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col">
                      <p>Hi, my name is Jordan.</p>
                      <p className="text-xl text-alt2 text-center">
                        I come from a Pacific Island background. I have
                        completed my Diploma in Community Service and am
                        currently undergoing my Bachelor's of Psychology at
                        ACAP. I have worked in community service for a total of
                        5 years, and I believe I am a huge advocate for all
                        those who are unfamiliar with services that could
                        potentially better their quality of life. And being
                        employed by Enaya, I have been given that platform to
                        provide those services.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>

          {/* ABBEIR */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("abeir")}
              >
                <img
                  src={user}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                ABBEY
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Support Worker
              </h2>
              <div className="flex justify-center items-center gap-2  ">
                <h2 className=" text-lg font-semibold text-alt2 ">
                  CPI Safety Intervention Trained
                </h2>
                <img src={cpi} alt="cpi" className="w-[30px] rounded-full" />
              </div>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                Limited Arabic.
              </p>
              <p className="w-[240px] text-alt2">
                My Name is Abbey but most call me Abbey. I'm a proud Support
                Worker who loves being a part of the...
              </p>
            </div>
            <Transition
              show={open === "abeir"}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-100 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        Abbey
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Support Worker.
                      </p>
                      <p className="w-[240px] text-alt2 font-semibold text-center">
                        Limited Arabic.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>
                        My Name is Abbey. I'm a proud Support Worker who loves
                        being a part of the community, not just my own but all
                        communities. I work in this field because I have a
                        passion for people and I want to put that passion into
                        helping others fulfil their goals in life. And for
                        myself, I couldn't ask for a better place than Enaya to
                        do this. Having this job is also a goal for me to push
                        myself in life and do what I love and learn and grow. I
                        learn something every day from both my co-workers and
                        clients. I would love to expand my knowledge in this
                        field so I can one day become a Support Coordinator.
                      </p>
                      <p>
                        I love my family. And I love music anything related to
                        water. I consider myself a handywoman as well. I've
                        always loved helping everyone; I believe it to be my
                        path in life. I have a big bubbly personality. I will
                        always strive for the best in life and myself.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>
          {/* KHADEEJA */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("khadeeja")}
              >
                <img
                  src={Khadeja}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover onk"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                KHADEJA
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Employment Specialist
              </h2>
              <div className="flex justify-center items-center gap-2  ">
                <h2 className=" text-lg font-semibold text-alt2 ">
                  CPI Safety Intervention Trained
                </h2>
                <img src={cpi} alt="cpi" className="w-[30px] rounded-full" />
              </div>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                Fluent in Arabic.
              </p>
              <p className="w-[240px] text-alt2">
                Hi, my name is Khadeja, and I am currently studying a Bachelor
                of Primary and Special Education...
              </p>
            </div>
            <Transition
              show={open === "khadeeja"}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-100 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        KHADEJA
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Employment Specialist
                      </p>
                      <p className="w-[240px] text-alt2 font-semibold text-center">
                        Fluent in Arabic.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>
                        Hi, my name is Khadeja, and I am currently studying a
                        Bachelor of Primary and Special Education. I have a
                        passion to make a difference in the education system and
                        I aspire to make a change. I believe in equality for all
                        individuals regardless of their abilities. Working with
                        JobsRus will allow me to work further towards my goals
                        and aspirations.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>

          {/* MARYAM */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("maryam")}
              >
                <img
                  src={Maryam}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                MARYAM
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Employment Specialist
              </h2>
              <div className="flex justify-center items-center gap-2 ">
                <h2 className=" text-lg font-semibold text-alt2 ">
                  CPI Safety Intervention Trained
                </h2>
                <img src={cpi} alt="cpi" className="w-[30px] rounded-full" />
              </div>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                Fluent in Arabic.
              </p>
              <p className="w-[240px] text-alt2">
                Hi, my name is Maryam Hussein, I am 21 years old. I have a
                degree in Bachelor of Science and am...
              </p>
              <p>&#8203;</p>
            </div>
            <Transition
              show={open === "maryam"}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-100 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        MARYAM
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Employment Specialist.
                      </p>
                      <p className="w-[240px] text-alt2 font-semibold text-center">
                        Fluent in Arabic.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>
                        Hi, my name is Maryam Hussein, I am 21 years old. I have
                        a degree in Bachelor of Science and am currently
                        undergoing my Masters in Education at the University of
                        Western Sydney. My goal has always been to help others.
                        I enjoy sports, adventure and creative work. I feel
                        optimistic about everything I do or about any
                        challenging situation that life throws at me; this is
                        something I learned through taekwondo which I practised
                        for 5 years. It portrayed the importance of persistence
                        and resilience.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>

          {/* LAYLA */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("layla")}
              >
                <img
                  src={Layla}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                LAYLA
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Employment Specialist
              </h2>
              <div className="flex justify-center items-center gap-2 ">
                <h2 className=" text-lg font-semibold text-alt2 ">
                  CPI Safety Intervention Trained
                </h2>
                <img src={cpi} alt="cpi" className="w-[30px] rounded-full" />
              </div>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                Fluent in Arabic.
              </p>
              <p className="w-[240px] text-alt2">
                Becoming an employment specialist for people with disabilities
                allowed me to discover my passion...
              </p>
              <p>
                <p className="w-[240px] text-alt2 font-semibold text-center">
                  &nbsp;
                </p>
              </p>
            </div>
            <Transition
              show={open === "layla"}
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        LAYLA
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Employment Specialist.
                      </p>
                      <p className="w-[240px] text-alt2 font-semibold text-center">
                        Fluent in Arabic.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>
                        Becoming an employment specialist for people with
                        disabilities allowed me to discover my passion for
                        helping others. Studying Social Sciences (Psychology)
                        paved the way for gaining the opportunity to work for
                        Enaya and building on the fundamentals I knew.
                      </p>
                      <p>
                        Other than that, I consider myself to be an independent
                        and punctual person who likes to push my limits and
                        achieve new goals. In my spare time I enjoy shopping,
                        driving and going to the movies or spending quality time
                        with friends and family.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>

          {/* COREY */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("corey")}
              >
                <img
                  src={Corey}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                COREY
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Employment Specialist
              </h2>
              <div className="flex justify-center items-center gap-2 ">
                <h2 className=" text-lg font-semibold text-alt2 ">
                  CPI Safety Intervention Trained
                </h2>
                <img src={cpi} alt="cpi" className="w-[30px] rounded-full" />
              </div>
              <p className="w-[240px] text-alt2">
                Hi, im Corey, and my background is in counselling and music. I
                have a passion for bringing....
              </p>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                &nbsp;
              </p>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                &nbsp;
              </p>
            </div>
            <Transition
              show={open === "corey"}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-100 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        COREY
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Employment Specialist.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>
                        Hi, im Corey, and my background is in counselling and
                        music. I have a passion for bringing the best out of
                        people, and motivating them to be their best version of
                        themselves.
                      </p>
                      <p>
                        I love bushwalking, spending time with my partner and
                        daughter, playing guitar and trying out new and exciting
                        food.
                      </p>
                      <p>
                        Through Enaya, i hope to bring my skills in counselling,
                        mental health, motivation and problem solving to help
                        people achieve their goals and live a happier healthier
                        life.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>

          {/* TAHLIA */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("tahlia")}
              >
                <img
                  src={Tahlia}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                TAHLIA
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Employment Specialist
              </h2>
              <div className="flex justify-center items-center gap-2 ">
                <h2 className=" text-lg font-semibold text-alt2 ">
                  CPI Safety Intervention Trained
                </h2>
                <img src={cpi} alt="cpi" className="w-[30px] rounded-full" />
              </div>
              <p className="w-[240px] text-alt2">Hi, I'm Tahlia..</p>
              <p>&#8203;</p>
              <p>&#8203;</p>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                &nbsp;
              </p>
            </div>
            <Transition
              show={open === "tahlia"}
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        Tahlia
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Employment Specialist.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>Hi, I'm Tahlia.</p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>

          {/* DANCIA */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("dancia")}
              >
                <img
                  src={Dancia}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                DANCIA
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Employment Specialist
              </h2>
              <div className="flex justify-center items-center gap-2 ">
                <h2 className=" text-lg font-semibold text-alt2 ">
                  CPI Safety Intervention Trainer
                </h2>
                <img src={cpi} alt="cpi" className="w-[30px] rounded-full" />
              </div>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                Fluent in Filipino.
              </p>
              <p className="w-[240px] text-alt2">
                My name is Danica, I have a background in psychology and I’m
                working towards....
              </p>
            </div>
            <Transition
              show={open === "dancia"}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-100 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        DANCIA
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Employment Specialist.
                      </p>
                      <p className="w-[240px] text-alt2 font-semibold text-center">
                        Fluent in Filipino.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col">
                      <p>
                        My name is Danica, I have a background in psychology and
                        I’m working towards becoming a registered psychologist.
                        I have almost finished my Certificate IV in Disability
                        Support Work and have marveled at the knowledge and
                        experience I have gained through my studies and working
                        with JobsRUs.
                      </p>
                      <p>
                        I am highly passionate about learning about the human
                        psyche and what makes people “tick”. Supporting people
                        with disabilities provides me with valuable insight into
                        their world, which in turn allows me to learn and
                        flourish as a person and future practitioner. In my
                        spare time, I love spending time at the beach, both
                        swimming and lounging in the shade with some fish and
                        chips. I am obsessed with playing escape rooms with my
                        friends, and I believe this is where the leader in me
                        truly shines through. I also have 3 beautiful cats in my
                        little apartment (Sabrina, Heidi and Sebastian) who
                        bring me such joy when I come home from a long day at
                        work.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>

          {/* ZEINAH */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("zeinah")}
              >
                <img
                  src={Zeinah}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                ZEINAH
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Employment Support Officer
              </h2>
              <p className="w-[240px] text-alt2 font-semibold text-center">
                Fluent in Arabic.
              </p>
              <p className="w-[240px] text-alt2">Hi, I'm Zeinah...</p>
              <p>&#8203;</p>
              <p>&#8203;</p>
              <p>&nbsp;</p>
            </div>
            <Transition
              show={open === "zeinah"}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-100 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        ZEINAH
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Employment Support Officer.
                      </p>
                      <p className="w-[240px] text-alt2 font-semibold text-center">
                        Fluent in Arabic.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>Hi, I'm Zeinah...</p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>

          {/* ALFRED */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("alfred")}
              >
                <img
                  src={Alfred}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                ALFRED
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Team Member.
              </h2>
              <p className="w-[240px] text-alt2">
                Alfred, or Alfie, is based at our classroom in Bankstown, he is
                loads of fluffy fun and just...
              </p>
            </div>
            <Transition
              show={open === "alfred"}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-100 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        ALFRED
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Team Member.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>
                        Alfred, or Alfie, is based at our classroom in
                        Bankstown, he is loads of fluffy fun and just adorable
                        to look at and feed.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>

          {/* FISH */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("fish")}
              >
                <img
                  src={Fish}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">FISH</h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Team Member
              </h2>
              <p className="w-[240px] text-alt2">
                Our fish tank is also based at home base in Greenacre. It is
                full of personalised fish....
              </p>
            </div>
            <Transition
              show={open === "fish"}
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-100 opacity-0"
              as={Fragment}
            >
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                    >
                      <p className=" text-primary font-semibold text-3xl">
                        FISH
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Team Member.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>
                        Our fish tank is also based at home base in Greenacre.
                        It is full of personalised fish from our amazing
                        participants, you can add one in too!
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>
        </div>
      </div>
      <ContactTransition />
    </section>
  );
};

export default OurTeam;
