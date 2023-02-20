import { React, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import group from "../assets/group.jpg";
import shape from "../assets/shape.svg";
import Tureif from "../assets/team/Tureif.jpg";
import Amina from "../assets/team/Amina.jpg";
import Jordan from "../assets/team/Jordan.jpg";
import Aleks from "../assets/team/Aleks.jpg";
import Brandon from "../assets/team/Brandon.jpg";
import Charlotte from "../assets/team/Charlotte.jpg";
import abbeir from "../assets/team/abbeir.jpg";
import Peter from "../assets/team/Peter.jpg";
import Agnes from "../assets/team/Agnes.jpg";
import Josephine from "../assets/team/Josephine.jpg";

const OurTeam = () => {
  const [open, setOpen] = useState(null);

  const openModal = (id) => {
    setOpen(id);
  };

  const closeModal = (id) => {
    setOpen(null);
  };
  return (
    <section className=" flex justify-center flex-col mt-[100px] pb-[200px] items-center font-Oswald">
      <div className="w-[100%] bg-primary relative flex justify-center items-center h-[220px] overflow-hidden">
        <div className="flex flex-col justify-center ">
          <h2 className=" text-6xl font-bold text-lavender ">OUR TEAM </h2>
        </div>
      </div>

      <div className="flex px-[200px] justify-center items-center w-full pt-10">
        <div className="w-[70%] flex flex-col gap-2">
          <h1 className="text-5xl font text-primary">
            Meet our team of{" "}
            <span className=" font-semibold opacity-100">HEROES.</span>
          </h1>
          <h1 className="text-5xl font text-primary">
            {" "}
            Honest, empathetic, reliable, and open-minded individuals.
          </h1>
          <p className="text-lg text-primary text-semibold">
            At Jobs R Us, we thoroughly screen our staff to ensure we hire
            HEROES - Honest, Empathetic, Reliable, and Open-minded individuals
            who meet and surpass your expectations. This involves two
            face-to-face interviews with their department heads and a final
            sign-off by the Managing Director on the third interview. We also
            assess both existing and new staff to ensure a suitable placement is
            catered to you based on your goals and the type of support you need.
            Our staff are then able to perform the role of a key support worker
            and be the main contact for you, ensuring effective coordination and
            communication across the board. Our priority is the quality of
            service you receive, and we've taken this approach to provide you
            with the best possible experience.
          </p>
        </div>
        <div div className="w-[30%] relative mt-[200px] ">
          <div className=" bg-primary flex justify-center items-center p-5 rounded-2xl z-10">
            <img src={group} alt="" className="rounded-2xl z-10 " />
          </div>
          <img
            src={shape}
            alt=""
            className="z-0 absolute w-[200px] right-[-80px] top-[-80px]"
          />
        </div>
      </div>

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
        <div className=" grid grid-cols-3 mt-16 gap-[200px]">
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

          {/* Aleks */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("aleks")}
              >
                <img
                  src={Aleks}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                ALEKSANDAR
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Support Worker
              </h2>
              <p className="w-[240px] text-alt2">
                Hi my name is Aleksandar and I am Macedonian. As a youthful
                support worker I am ambitious and optimistic...
              </p>
            </div>
            <Transition
              show={open === "aleks"}
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
                        ALEKSANDAR
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Support Worker.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col">
                      <p>
                        Hi my name is Aleksandar and I am Macedonian. As a
                        youthful support worker I am ambitious and optimistic.
                        My role in this field is to provide people with various
                        needs to the best of my ability and skills acquired and
                        developed. Such as team work and critical thinking. My
                        interests are sports such as soccer and athletics.
                        Currently I an still studying and am acquiring a
                        Bachelors in Social Science/Policing.
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

          {/* BRANDON */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("brandon")}
              >
                <img
                  src={Brandon}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                BRANDON
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Support Worker
              </h2>
              <p className="w-[240px] text-alt2">
                Hi, I'm Brandon a third-year Nursing student that loves to have
                fun and converse with everyone..
              </p>
            </div>
            <Transition
              show={open === "brandon"}
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
                        BRANDON
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Support Worker.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col">
                      <p>
                        Hi, I'm Brandon a third-year Nursing student that loves
                        to have fun and converse with everyone. As an aspiring
                        Nurse, I aim to positively impact the lives of those I
                        interact with and believe that working at Enaya is one
                        of the ways I will be able to enable and help
                        individuals.
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
                        love my family. And I love music anything related to
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

          {/* PETER */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("peter")}
              >
                <img
                  src={Peter}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                PETER
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Support Worker
              </h2>
              <p className="w-[240px] text-alt2">
                Hey my name is Peter and I am a support worker at Enaya. I've
                found my time here thus far educating...
              </p>
            </div>
            <Transition
              show={open === "peter"}
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
                        PETER
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Support Worker.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col">
                      <p>
                        Hey my name is Peter and I am a support worker at Enaya.
                        I've found my time here thus far educating especially
                        coming from a warehousing and logistics background. I
                        was confident in this career change because having 4
                        kids of my own has taught me a lot about patience and
                        what it takes to care for others. I enjoy watching rugby
                        league and taking my kids out to have fun.
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

          {/* Agnes */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("agnes")}
              >
                <img
                  src={Agnes}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                AGNES
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Support Worker
              </h2>
              <p className="w-[240px] text-alt2">
                ’m a Mother of 3 Beautiful Children. I love being part of ENAYA,
                and working with people who....
              </p>
            </div>
            <Transition
              show={open === "agnes"}
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
                        AGNES
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Support Worker.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>Hi, My name is Agnes Lia.</p>
                      <p>
                        I’m a Mother of 3 Beautiful Children. I love being part
                        of ENAYA, and working with people who have disabilities.
                        This experience is very special to me as I have a
                        5-year-old son who is Autistic. It’s a challenge but a
                        big blessing too.
                      </p>
                      <p>
                        I love comedy shows and am not going to lie- after
                        having 3 children I pretty much have memorised most of
                        my children’s tv shows. I’m a BUBBLY person and always
                        keen to help anyone and everyone in need.
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

          {/* JOSEPHINE */}
          <Fragment>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className="rounded-full  bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                onClick={() => openModal("josephine")}
              >
                <img
                  src={Josephine}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>
              <h2 className=" text-xl font-semibold text-primary mt-5">
                JOSEPHINE
              </h2>
              <h2 className=" text-lg font-semibold text-alt2 my-2">
                Support Worker
              </h2>
              <p className="w-[240px] text-alt2">
                Hi, my name is Josephine Brown. I am 21 years of age. I've
                worked in logistics for the past 3 years.....
              </p>
            </div>
            <Transition
              show={open === "josephine"}
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
                        JOSEPHINE BROWN
                      </p>
                      <p className=" text-alt2 font-semibold text-2xl">
                        Support Worker.
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-alt2 text-center flex flex-col gap-3">
                      <p>
                        Hi, my name is Josephine Brown. I am 21 years of age.
                        I've worked in logistics for the past 3 years and have
                        decided to give what I can to the disability community.
                        I am very grateful to be able to work with such a
                        diverse group and company like Enaya.
                      </p>
                      <p>
                        I look forward to enhancing people's quality of life and
                        providing the choice and control that we all deserve.
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
