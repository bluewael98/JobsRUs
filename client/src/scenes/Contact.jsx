import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import blobscatter from "../assets/blobscatter.svg";
import ContactForm from "../components/ContactForm";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import mobile from "../assets/mobile.svg";
import wearehere from "../assets/wearehere.JPG";
import circles from "../assets/circles.svg";
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
          <h1 className="  xxs:text-5xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
            CONTACT US
          </h1>
        </div>
        <img
          src={circles}
          alt=""
          className="absolute w-screen opacity-30 z-[5]"
        />
      </div>

      {/* CONTACT BOX */}
      <div className="z-10 relative w-full flex flex-col justify-center items-center md:px-10">
        <div className=" lg:px-20 lg:py-20 md:py-10 px:10  mt-[80px] flex flex-col items-center justify-center  z-40 rounded-3xl text-primary ">
          <div className="flex md:justify-between xxs:flex-col xxs:justify-center md:flex-row align-top items-center gap-10">
            <div className="flex flex-col xxs:justify-center xxs:items-center md:items-start min-w-[300px] max-w-[500px] py-5 px-5 bg-primary rounded-lg text-lavender ">
              <h1 className="md:text-2xl xxs:text-xl font-bold  my-5 mt-12">
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
                </p>
                <p> (Corner of 443 Chapel Rd Bankstown)</p>
                <p>
                  We are opposite Bankstown library, New Western Sydney
                  University & only 500m from Bankstown Tafe.
                </p>
                <Fragment>
                  <div
                    className="relative z-40 xxs:justify-center sm:justify-start "
                    onClick={() => openModal(location)}
                  >
                    <img
                      src={wearehere}
                      alt=""
                      className="w-[200px] shadow-sm rounded-3xl hover:scale-[200%] object-cover cursor-pointer transition-all ease-out duration-500"
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
                                  className="inline-flex justify-center px-4 py-2 text-sm font-medium  bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
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
              <h1 className="md:text-2xl xxs:text-xl font-bold  my-5">
                WE WOULD LOVE TO HEAR FROM YOU!
              </h1>
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
