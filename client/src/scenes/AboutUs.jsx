import React from "react";
import dogood from "../assets/dogood.svg";
import giveourbest from "../assets/giveourbest.svg";
import standtogether from "../assets/standtogether.svg";
import caring from "../assets/caring.svg";
import arrowdown from "../assets/arrowdown.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import Team from "../components/team";

const AboutUs = () => {
  const isSmallDevice = useMediaQuery("(max-width: 1020px)");
  return (
    <section className=" flex justify-center flex-col mt-[100px] pb-[200px] items-center font-Oswald overflow-hidden">
      <div className="w-screen bg-primary relative flex justify-center items-center h-[220px] overflow-hidden  mb-[5rem]">
        <div className="flex flex-col justify-center ">
          <h2 className=" text-4xl font-bold text-lavender ">About Us </h2>
          <button className="py-[0.5rem] px-[0.5rem] w-[150px] rounded-lg font-bold text-primary  mt-[20px] bg-lavender">
            Learn More
          </button>
        </div>
      </div>
      {/* MAIN SECTION */}
      <div>
        {isSmallDevice ? (
          <div className="flex flex-col justify-center font-Oswald items-center">
            <h1 className=" text-3xl text-primary font-bold">
              JOBS <span className=" text-alt2">R</span> US
            </h1>

            <p className=" w-screen px-2 mt-10 text-alt2 text-xl text-center">
              An employment provider, with a{" "}
              <span className="font-semibold">difference.</span>{" "}
            </p>
            <div className="flex flex-col justify-center items-center gap-8 mt-10">
              <div className="flex flex-row justify-center items-center gap-8">
                {" "}
                <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                  <p>INTEGRITY</p>
                </div>
                <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                  <p>PASSION</p>
                </div>{" "}
              </div>
              <div className="flex flex-row justify-center items-center gap-8">
                <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                  <p>TRUST</p>
                </div>
                <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                  <p>DIVERISTY</p>
                </div>{" "}
              </div>
              <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                <p>CARE</p>
              </div>
            </div>
            <p className="max-w-[800px] text-alt2 text-xl text-center mt-10 w-screen px-2">
              Our core values shape the way our mission is carried out.
            </p>
            <img src={arrowdown} alt="" className="w-[100px] mt-10" />
          </div>
        ) : (
          <div className="flex flex-col justify-center font-Oswald items-center">
            <h1 className=" text-3xl text-primary font-bold">
              JOBS <span className=" text-alt2">R</span> US
            </h1>

            <p className="max-w-[800px] mt-10 text-alt2 text-2xl">
              An employment provider, with a{" "}
              <span className="font-semibold">differnce.</span>{" "}
            </p>
            <div className="flex justify-center items-center gap-8 mt-10">
              <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                <p>INTEGRITY</p>
              </div>
              <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                <p>PASSION</p>
              </div>
              <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                <p>TRUST</p>
              </div>
              <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                <p>DIVERISTY</p>
              </div>
              <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                <p>CARE</p>
              </div>
            </div>
            <p className="max-w-[800px] text-alt2 text-2xl mt-10">
              Our core values shape the way our mission is carried out.
            </p>
            <img src={arrowdown} alt="" className="w-[100px] mt-10" />
          </div>
        )}

        {isSmallDevice ? (
          // SMALL DEVICES
          <div className="flex flex-col w-screen px-5 justify-center items-center">
            <div className="flex flex-col w-screen ">
              {/* DO GOOD */}
              <div className="flex flex-col items-center justify-center relative mt-[150px] h-[50%]">
                <p className="text-3xl font-semibold">WE DO GOOD</p>
                <div className="flex justify-center flex-col align-top w-screen relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-t-2xl">
                    <p className=" text-center">
                      We believe that doing the right thing for our clients, our
                      employees, and our planet is not only the ethical choice,
                      but also the best business strategy.
                    </p>
                  </div>
                  <div className="bg-primary w-screen flex justify-center items-center p-5 rounded-b-2xl h-[50%]">
                    <img src={dogood} alt="" className="w-[250px]" />
                  </div>
                </div>
              </div>
              {/* WE GIVE OUT BEST */}

              <div className="flex flex-col items-center justify-center relative mt-[150px] h-[50%]">
                <p className="text-3xl font-semibold">WE GIVE OUR BEST</p>
                <div className="flex justify-center flex-col align-top w-screen relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-t-2xl">
                    <p className=" text-center">
                      We are passionate about our mission to make a positive
                      impact on the world, and we bring our best efforts to
                      every client.
                    </p>
                  </div>
                  <div className="bg-primary w-screen flex justify-center items-center p-5 rounded-b-2xl h-[50%]">
                    <img src={giveourbest} alt="" className="w-[250px]" />
                  </div>
                </div>
              </div>
              {/* WE STAND TOGETHER */}
              <div className="flex flex-col items-center justify-center relative mt-[150px] h-[50%]">
                <p className="text-3xl font-semibold">WE STAND TOGETHER</p>
                <div className="flex justify-center flex-col align-top w-screen relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-t-2xl">
                    <p className=" text-center">
                      We value collaboration, respect, and positive intentions
                      in all our interactions, and we believe that working
                      together is key to achieving success.
                    </p>
                  </div>
                  <div className="bg-primary w-screen flex justify-center items-center p-5 rounded-b-2xl h-[50%]">
                    <img src={standtogether} alt="" className="w-[250px]" />
                  </div>
                </div>
              </div>
              {/* WE EMBRACE DIVERSITY */}
              <div className="flex flex-col items-center justify-center relative mt-[150px] h-[50%]">
                <p className="text-3xl font-semibold">WE EMBRACE DIVERSITY</p>
                <div className="flex justify-center flex-col align-top w-screen relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-t-2xl">
                    <p className=" text-center">
                      We recognize that our differences make us stronger, and we
                      welcome diversity of experience, background, and thinking
                      in our team and clients.
                    </p>
                  </div>
                  <div className="bg-primary w-screen flex justify-center items-center p-5 rounded-b-2xl h-[50%]">
                    <Team />
                  </div>
                </div>
              </div>
              {/* WE CARE */}
              <div className="flex flex-col items-center justify-center relative mt-[150px] h-[50%]">
                <p className="text-3xl font-semibold">WE CARE</p>
                <div className="flex justify-center flex-col align-top w-screen relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-t-2xl">
                    <p className=" text-center">
                      We prioritize the well-being and support of our people,
                      celebrating each other's successes and offering help
                      during tough times.
                    </p>
                  </div>
                  <div className="bg-primary w-screen flex justify-center items-center p-5 rounded-b-2xl h-[50%]">
                    <img src={caring} alt="" className="w-[250px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // LARGE DEVICES
          <div className="flex flex-col">
            <div className="flex flex-col">
              {/* DO GOOD */}
              <div className="flex flex-col items-center justify-center relative mt-[150px] mr-[60px]">
                <p className="absolute top-0 left-[135px] text-3xl font-semibold">
                  WE DO GOOD
                </p>
                <div className="flex justify-center align-top w-[600px] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl">
                    <p className=" max-w-[500px] mr-10">
                      We believe that doing the right thing for our clients, our
                      employees, and our planet is not only the ethical choice,
                      but also the best business strategy.
                    </p>
                  </div>
                  <div className="bg-primary w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                    <img src={dogood} alt="" className="w-[250px]" />
                  </div>
                </div>
              </div>
              {/* WE GIVE OUT BEST */}
              <div className="flex flex-col items-center justify-center relative mt-[150px] ml-[60px]">
                <p className="absolute top-0 right-[135px] text-3xl font-semibold">
                  WE GIVE OUR BEST
                </p>
                <div className="flex justify-center align-top w-[600px] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl">
                    <p className=" max-w-[500px] ml-10">
                      We are passionate about our mission to make a positive
                      impact on the world, and we bring our best efforts to
                      every client.
                    </p>
                  </div>
                  <div className="bg-primary w-[300px] h-[300px] rounded-full z-10 absolute left-[-240px] top-[-20px] flex justify-center items-center">
                    <img src={giveourbest} alt="" className="w-[250px]" />
                  </div>
                </div>
              </div>
              {/* WE STAND TOGETHER */}
              <div className="flex flex-col items-center justify-center relative mt-[150px] mr-[60px]">
                <p className="absolute top-0 left-[135px] text-3xl font-semibold">
                  WE STAND TOGETHER
                </p>
                <div className="flex justify-center align-top w-[600px] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl">
                    <p className=" max-w-[500px] mr-10">
                      We value collaboration, respect, and positive intentions
                      in all our interactions, and we believe that working
                      together is key to achieving success.
                    </p>
                  </div>
                  <div className="bg-primary w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                    <img src={standtogether} alt="" className="w-[250px]" />
                  </div>
                </div>
              </div>
              {/* WE EMBRACE DIVERSITY */}
              <div className="flex flex-col items-center justify-center relative mt-[150px] ml-[60px]">
                <p className="absolute top-0 right-[135px] text-3xl font-semibold">
                  WE EMBRACE DIVERSITY
                </p>
                <div className="flex justify-center align-top w-[600px] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald  rounded-2xl">
                    <p className=" max-w-[500px] ml-10">
                      We recognize that our differences make us stronger, and we
                      welcome diversity of experience, background, and thinking
                      in our team and clients.
                    </p>
                  </div>
                  <div className="bg-primary w-[300px] h-[300px] rounded-full z-10 absolute left-[-240px] top-[-20px] flex justify-center items-center">
                    <Team />
                  </div>
                </div>
                {/* WE CARE */}
                <div className="flex flex-col items-center justify-center relative mt-[150px] mr-[125px] ">
                  <p className="absolute top-0 left-0 text-3xl font-semibold">
                    WE CARE
                  </p>
                  <div className="flex justify-center align-top w-[600px] relative">
                    <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl ">
                      <p className=" max-w-[500px] mr-10">
                        We prioritize the well-being and support of our people,
                        celebrating each other's successes and offering help
                        during tough times.
                      </p>
                    </div>
                    <div className="bg-primary w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                      <img src={caring} alt="" className="w-[250px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
