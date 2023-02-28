import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import blobscatter from "../assets/blobscatter.svg";
import ContactForm from "../components/ContactForm";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import mobile from "../assets/mobile.svg";
import wearehere from "../assets/wearehere.png";
const Contact = () => {
  const [open, setOpen] = useState(null);
  const openModal = (id) => {
    setOpen(id);
  };

  const closeModal = (id) => {
    setOpen(null);
  };
  return (
    <section className=" flex justify-center flex-col mt-[80px]  items-center font-Bebas xxs:text ">
      <div className="w-[100%] bg-primary relative flex justify-center items-center md:h-[220px] xxs:h-[150px] overflow-hidden z-10">
        <div className="flex flex-col justify-center ">
          <h2 className=" md:text-6xl xxs:text-3xl font-bold text-lavender ">
            CONTACT US
          </h2>
        </div>
      </div>

      {/* CONTACT BOX */}
      <div className="z-10 relative w-full flex flex-col justify-center items-center md:px-10">
        <div className=" lg:px-20 lg:py-20 md:py-10 px:10 bg-primary mt-[80px] flex flex-col items-center justify-center  z-40 rounded-3xl shadow-xl">
          <h1 className="md:text-5xl xxs:text-2xl font text-lavender my-5">
            We'd love to here from{" "}
            <span className=" font-semibold opacity-100">you.</span>
          </h1>
          <div className="flex md:justify-between xxs:flex-col xxs:justify-center md:flex-row align-top items-center gap-10">
            <div className="flex flex-col xxs:justify-center xxs:items-center md:items-start min-w-[300px] max-w-[500px] py-5 px-5 text-lavender">
              <h1 className="md:text-2xl xxs:text-xl font-bold  my-5">
                OUR DETAILS
              </h1>
              <div className="flex flex-col sm:gap-3 xxs:gap-5 xxs:text-center md:text-start xxs:justify-center md:justify-start xxs:items-center md:items-start">
                <div className="flex items-center  xxs:justify-center sm:justify-start  gap-2">
                  <img src={location} alt="" className="w-[30px]" />
                  <h2 className="text-xl font-bold ">Our Address</h2>
                </div>

                <p>
                  <a
                    href="https://goo.gl/maps/du94CGnpjmnUndcH8"
                    className="cursor-pointer underline-offset-3"
                  >
                    Suite 6, 75 Rickard Rd, Bankstown corner NSW 2200.
                  </a>{" "}
                  (Corner of 443 Chapel Rd Bankstown. Opposite Bankstown library
                  & New Western Sydney University. Only 500m from Bankstown
                  tafe.)
                </p>
                <Fragment>
                  <div
                    className="relative z-40 xxs:justify-center sm:justify-start "
                    onClick={() => openModal(location)}
                  >
                    <img
                      src={wearehere}
                      alt=""
                      className="w-[200px] shadow-sm bg-lavender rounded-3xl hover:scale-105 object-cover cursor-pointer transition-all ease-out duration-500"
                    />
                    <Transition
                      show={open === "location"}
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
                        className="fixed inset-0 z-[60] overflow-y-auto"
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
                                OUR LOCATION
                              </p>
                            </Dialog.Title>
                            <div className="mt-2 text-center text-xl text-alt2 gap-4 flex flex-col">
                              <img src={wearehere} alt="" className="w-full" />

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
                        </div>
                      </Dialog>
                    </Transition>
                  </div>
                </Fragment>
                <div className="flex items-center gap-2 xxs:justify-center sm:justify-start">
                  <img src={email} alt="" className="w-[30px]" />
                  <h2 className="text-xl font-bold ">Email</h2>
                </div>
                <p>info@jobsrus.com.au</p>
                <div className="flex items-center gap-2 xxs:justify-center xxs:content-center sm:justify-start">
                  <img src={phone} alt="" className="w-[30px]" />
                  <h2 className="text-xl font-bold ">Phone</h2>
                </div>

                <p>02 9703 5732</p>
                <div className="flex items-center gap-2">
                  <img src={mobile} alt="" className="w-[30px]" />
                  <h2 className="text-xl font-bold ">Mobile</h2>
                </div>

                <p>0450 518 508</p>
              </div>
            </div>
            <div className="px-5 py-5">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="py-10"></div>

        <img
          src={blobscatter}
          className="w-screen h-1/2 absolute bottom-0 opacity-60  z-10  "
          alt=""
        />
      </div>
    </section>
  );
};

export default Contact;
