import { React, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import group from "../assets/group.jpg";
import shape from "../assets/shape.svg";
import Tureif from "../assets/team/Tureif.jpg";
import Amina from "../assets/team/Amina.jpg";
import Jordan from "../assets/team/Jordan.jpg";
import Charlotte from "../assets/team/Charlotte.jpg";
import abbeir from "../assets/team/abbeir.jpg";
import Maryam from "../assets/team/Maryam.jpg";
import Layla from "../assets/team/Layla.jpg";
import Corey from "../assets/team/Corey.jpg";
import Tahlia from "../assets/team/Tahlia.jpg";
import Dancia from "../assets/team/Dancia.jpg";
import Zeinah from "../assets/team/Zeinah.jpg";
import Alfred from "../assets/team/Alfred.jpg";
import Fish from "../assets/team/Fish.jpg";
import useMediaQuery from "../hooks/useMediaQuery";

const OurTeam = () => {
  const [open, setOpen] = useState(null);
  const isDesktop = useMediaQuery("(min-width: 1300px)");
  const isSmallDevice = useMediaQuery("(max-width: 768px)");
  const openModal = (id) => {
    setOpen(id);
  };

  const closeModal = (id) => {
    setOpen(null);
  };
  return (
    <section className=" flex justify-center flex-col mt-[100px] pb-[200px] items-center font-Oswald">
      <div className="w-full bg-primary relative flex justify-center items-center h-[220px] overflow-hidden">
        <div className="flex flex-col justify-center ">
          <h2 className=" text-6xl font-bold text-lavender ">OUR TEAM </h2>
        </div>
      </div>

      {isSmallDevice ? (
        <div className="flex xxs:p-10 sm:px-20 md:px-[100px] xlg:px-[200px] xxs:flex-col xlg:flex-row gap-3 justify-center items-center w-full pt-10">
          <div className="lg:w-[70%] md:w-[100%] flex flex-col gap-3">
            <h1 className="md:text-5xl xxs:text-2xl font text-primary">
              Meet our team of{" "}
              <span className=" font-semibold opacity-100">HEROES.</span>
            </h1>
            <h1 className="md:text-5xl xxs:text-2xl  font text-primary">
              {" "}
              Honest, empathetic, reliable, and open-minded individuals.
            </h1>
            <div
              div
              className="xlg:w-[30%] xxs:w-[90%]  relative xlg:mt-[200px] xxs:my-10 "
            >
              <img src={group} alt="" className="rounded-2xl z-10 w-full " />
            </div>
            <p className="text-lg text-primary text-semibold">
              At Jobs R Us, we thoroughly screen our staff to ensure we hire
              HEROES - Honest, Empathetic, Reliable, and Open-minded individuals
              who meet and surpass your expectations.
            </p>
            <p className="text-lg text-primary text-semibold">
              This involves two face-to-face interviews with their department
              heads and a final sign-off by the Managing Director on the third
              interview. We also assess both existing and new staff to ensure a
              suitable placement is catered to you based on your goals and the
              type of support you need.
            </p>
            <p className="text-lg text-primary text-semibold">
              Our staff are then able to perform the role of a key support
              worker and be the main contact for you, ensuring effective
              coordination and communication across the board. Our priority is
              the quality of service you receive, and we've taken this approach
              to provide you with the best possible experience.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex xxs:p-10 sm:px-20 md:px-[100px] xlg:px-[200px] xxs:flex-col xlg:flex-row gap-3 justify-center items-center w-full pt-10">
          <div className="xlg:w-[70%] md:w-[100%] flex flex-col xxs:justify-center xxs:items-center xxs:text-center xlg:justify-start xlg:items-start xlg:text-left gap-2">
            <h1 className="md:text-5xl xxs:text-2xl font text-primary">
              Meet our team of{" "}
              <span className=" font-semibold opacity-100">HEROES.</span>
            </h1>
            <h1 className="md:text-5xl xxs:text-2xl  font text-primary">
              {" "}
              Honest, empathetic, reliable, and open-minded individuals.
            </h1>
            <p className="text-lg text-primary text-semibold">
              At Jobs R Us, we thoroughly screen our staff to ensure we hire
              HEROES - Honest, Empathetic, Reliable, and Open-minded individuals
              who meet and surpass your expectations.
            </p>
            <p className="text-lg text-primary text-semibold">
              This involves two face-to-face interviews with their department
              heads and a final sign-off by the Managing Director on the third
              interview. We also assess both existing and new staff to ensure a
              suitable placement is catered to you based on your goals and the
              type of support you need.
            </p>
            <p className="text-lg text-primary text-semibold">
              Our staff are then able to perform the role of a key support
              worker and be the main contact for you, ensuring effective
              coordination and communication across the board. Our priority is
              the quality of service you receive, and we've taken this approach
              to provide you with the best possible experience.
            </p>
          </div>
          <div
            div
            className="xlg:w-[30%] xxs:w-[90%]  relative xlg:mt-[200px] xxs:mt-20 flex justify-center items-center"
          >
            <div className=" bg-primary flex justify-center items-center p-5 rounded-2xl z-10 max-w-[700px]">
              <img src={group} alt="" className="rounded-2xl z-10 " />
            </div>
            {isDesktop ? (
              <img
                src={shape}
                alt=""
                className="z-0 absolute w-[200px] right-[-80px] top-[-80px]"
              />
            ) : null}
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
              className="fixed inset-0 z-10 overflow-y-auto"
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
                  className="fixed inset-0 z-10 overflow-y-auto"
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
                className="fixed inset-0 z-10 overflow-y-auto"
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

          {/* CHARLOTTE */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("charlotte")}
              >
                <img
                  src={Charlotte}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                CHARLOTTE
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Support Worker
              </h2>
              <p className="w-[240px] text-alt2">
                I'm Charlotte, a Support Worker and emerging yoga teacher based
                in Western Sydney. I strive to...
              </p>
            </div>
            <Transition
              show={open === "charlotte"}
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
                className="fixed inset-0 z-10 overflow-y-auto"
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
                        CHARLOTTE
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Support Worker.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col">
                      <p>
                        I'm Charlotte, a Support Worker and emerging yoga
                        teacher based in Western Sydney. I strive to infuse my
                        work with a sense of fun and joy. I graduated from The
                        University of Sydney in 2020 with a Bachelor of Arts
                        (English & Psychology), and this year completed 200-HR
                        Yoga Teacher Training Course with Nin Yoga. In my spare
                        time I enjoy baking, bushwalking, art, photography,
                        listening to indie pop music, video games and
                        op-shopping (I love vintage finds!).
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
                  src={abbeir}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                ABEIR
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Support Worker
              </h2>
              <p className="w-[240px] text-alt2">
                My Name is Abeir but most call me Abbey. I'm a proud Support
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
                className="fixed inset-0 z-10 overflow-y-auto"
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
                        ABEIR
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Support Worker.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>
                        My Name is Abeir but most call me Abbey. I'm a proud
                        Support Worker who loves being a part of the community,
                        not just my own but all communities. I work in this
                        field because I have a passion for people and I want to
                        put that passion into helping others fulfil their goals
                        in life. And for myself, I couldn't ask for a better
                        place than Enaya to do this. Having this job is also a
                        goal for me to push myself in life and do what I love
                        and learn and grow. I learn something every day from
                        both my co-workers and clients. I would love to expand
                        my knowledge in this field so I can one day become a
                        Support Coordinator.
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
                className="fixed inset-0 z-10 overflow-y-auto"
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
              <p className="w-[240px] text-alt2">
                Becoming an employment specialist for people with disabilities
                allowed me to discover my passion...
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
                className="fixed inset-0 z-10 overflow-y-auto"
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
              <p className="w-[240px] text-alt2">
                Hi, im Corey, and my background is in counselling and music. I
                have a passion for bringing....
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
                className="fixed inset-0 z-10 overflow-y-auto"
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
              <p className="w-[240px] text-alt2">Hi, I'm Tahlia..</p>
              <p>&#8203;</p>
              <p>&#8203;</p>
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
                className="fixed inset-0 z-10 overflow-y-auto"
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
                className="fixed inset-0 z-10 overflow-y-auto"
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
              <p className="w-[240px] text-alt2">Hi, I'm Zeinah...</p>
              <p>&#8203;</p>
              <p>&#8203;</p>
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
                className="fixed inset-0 z-10 overflow-y-auto"
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
                className="fixed inset-0 z-10 overflow-y-auto"
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
                className="fixed inset-0 z-10 overflow-y-auto"
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
    </section>
  );
};

export default OurTeam;
