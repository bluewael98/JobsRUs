import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Badge } from "@mui/icons-material";
import oneonone from "../assets/oneonone.JPG";
import { Link } from "react-router-dom";

import "./styles.css";

function Content({ data, showSubtitle = true }) {
  return (
    <motion.div className="content font-Oswald" layoutId="content">
      <motion.h1
        className="title justify-center flex items-center"
        layoutId="title"
      >
        {data.title}
      </motion.h1>
      {showSubtitle && (
        <motion.div
          className=" text-lavender text-opacity-80 flex flex-col font-serif"
          layoutId="subtitle"
        >
          {data.subtitle}
        </motion.div>
      )}
    </motion.div>
  );
}

function ExpandedCard({ children, onCollapse }) {
  return (
    <>
      <motion.div
        className="card expanded xxs:w-[370px] sm:w-[500px]  md:w-[700px] bg-primary  relative  content-center flex justify-center items-center top-[-300px] xxs:right-[18px] sm:right-[11  0px]"
        layoutId="expandable-card"
        onClick={onCollapse}
        style={{ justifyContent: "", zIndex: 40 }}
      >
        {children}
      </motion.div>
    </>
  );
}

function CompactCard({ children, onExpand, disabled, data }) {
  return (
    <motion.div
      className="card compact w-full object-contain md:w-[1000px] flex items-center content-center gap-2 text-primary mx-auto    "
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
    >
      {children}
      {data.image}
    </motion.div>
  );
}

function DataButton({ data, onCollapse, onExpand, disabled }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseData = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandData = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (
    <div className="card-container  ">
      <AnimateSharedLayout>
        {isExpanded ? (
          <ExpandedCard onCollapse={collapseData} data={data}>
            <Content data={data} disabled={disabled} />
          </ExpandedCard>
        ) : (
          <Link to="/ndis-services#spa" className="z-10">
            <CompactCard
              onExpand={expandData}
              onCollapse={collapseData}
              disabled={disabled}
              data={data}
            >
              <Content data={data} disabled={disabled} showSubtitle={false} />
              <img
                src={oneonone}
                className="h-[150px] w-[150px] rounded-full bg-primary p-2 shadow-lg object-cover"
                alt=""
              />
            </CompactCard>
          </Link>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export default function App() {
  const [expandedData, setCollapsedData] = useState();
  const data = [
    {
      title: "Specialised Employment Assistance",
      subtitle: (
        <div className="flex flex-col gap-5 font-Oswald">
          <p>
            At JobsRUs, we are dedicated to providing comprehensive employment
            assistance for individuals with disabilities, ensuring that each
            person is matched with a suitable and sustainable employment role.
          </p>
          <p>
            Our approach begins with Discovery, as we work with our clients to
            explore what work means to them, understanding both the potential
            benefits and challenges.
          </p>
          <p>
            From there, we move to Essentials, helping individuals build
            essential transferable skills that are necessary for all types of
            employment.
          </p>{" "}
          <p>
            Our Customisation services provide tailored job matching and
            specialized job customization based on individual abilities and
            interests, including ADE (Australian Disability Enterprise) support.
          </p>{" "}
          <p>
            We are committed to helping our clients achieve their career goals,
            and our Career services help develop, update, and maintain a career
            plan that reflects their aspirations.
          </p>
          <p>
            {" "}
            We recognize that there may be complex barriers to obtaining and
            sustaining employment, and our Management services provide support
            for managing these challenges.
          </p>
          <p>
            {" "}
            Finally, our Open services offer complete support for clients
            transitioning out of supportive employment and into open employment.
            At JobsRUs, we are here to support every step of the employment
            journey.
          </p>
        </div>
      ),
      image: <Badge />,
    },
  ];

  return (
    <div className="container ">
      <div className="grid sm:grid-cols-1  justify-items-center gap-5 w-full ">
        {data.map((item) => (
          <DataButton
            key={item.title}
            data={item}
            disabled={expandedData !== item && expandedData !== undefined}
            onExpand={() => setCollapsedData(item)}
            onCollapse={() => setCollapsedData()}
          />
        ))}
      </div>
    </div>
  );
}
