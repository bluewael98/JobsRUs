import PricingTable from "../components/PricingTable";
import React from "react";

const NDISPricing = () => {
  return (
    <section className="py-24 flex items-center justify-center flex-col font-Oswald">
      <div className="w-[100%] bg-primary relative flex justify-center items-center h-[220px] overflow-hidden">
        <div className="flex flex-col justify-center ">
          <h2 className=" text-6xl font-bold text-lavender ">PRICING </h2>
        </div>
      </div>
      <div className="max-w-[1000px] text-alt2  py-10 text-xl flex justify-center flex-col items-center">
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

      <div className="w-[1000px]">
        <PricingTable />
      </div>
    </section>
  );
};

export default NDISPricing;
