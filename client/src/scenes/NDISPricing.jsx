import PricingTable from "../components/PricingTable";
import React from "react";

const NDISPricing = () => {
  return (
    <section className="mt-[80px] pb-[280px] flex items-center justify-center flex-col font-Oswald mx-2">
      <div className="w-screen bg-primary relative flex justify-center items-center h-[220px] overflow-hidden">
        <div className="flex flex-col justify-center ">
          <h2 className=" md:text-6xl xxs:text-4xl sm:text-5xl font-bold text-lavender ">
            PRICING{" "}
          </h2>
        </div>
      </div>
      <div className="max-w-[1000px] text-alt2  py-10 text-xl flex justify-center flex-col items-center mx-2 text-center">
        <h2>
          We provide multiple services to assist you in accessing your desired
          employment goals.
        </h2>
        <h2>
          {" "}
          Also provided by JobsRUs is a Saturday leisure day, a day where you
          can enjoy the hard work and studies that you’ve been doing during the
          week and have some fun in the community. The following prices are for
          national participants, as we currently do not provide services to
          remote and very remote participants
        </h2>
      </div>
      <div className="xxs:w-[370px] ss:w-[500px] xs:w-[440px] sm:w-[700px] md:w-[1000px] ">
        <PricingTable />
      </div>
      <div className="flex justify-center items-center mt-10">
        <a href="https://kor01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.ndis.gov.au%2Fmedia%2F4540%2Fdownload%3Fattachment&data=05%7C01%7C%7C1ad00d356f9e4f589c3b08db17941eab%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638129697157750333%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=qPO7NIY6aahGQc6h2aoFRZyx5jZwyHCspcWkK61QR1I%3D&reserved=0">
          <button className="py-2 px-4 bg-primary rounded-full shadow-md text-lavender text-xl hover:scale-105 transition duration-300">
            Click to view NDIS Price Catalogue
          </button>
        </a>
      </div>
    </section>
  );
};

export default NDISPricing;
