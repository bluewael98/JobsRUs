import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { SensorOccupied } from "@mui/icons-material";
import header3 from "../assets/header3.jpg";
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
      className="card compact w-full object-contain md:w-[1000px] flex items-center content-center gap-2 text-primary mx-auto  "
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
          <CompactCard
            onExpand={expandData}
            onCollapse={collapseData}
            disabled={disabled}
            data={data}
          >
            <Content data={data} disabled={disabled} showSubtitle={false} />
            <img
              src={header3}
              className="h-[150px] w-[150px] rounded-full bg-primary p-2 shadow-lg "
              alt=""
            />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export default function App() {
  const [expandedData, setCollapsedData] = useState();
  const data = [
    {
      title: "  Employment Support Officer",
      subtitle: (
        <div className="flex flex-col gap-5 font-Oswald">
          <p>
            At JobRUs, we are committed to assisting you in building your
            strengths, skills, and independence, tailored specifically to your
            personal employment goals.
          </p>
          <p>
            We understand that every individual is unique, with their own
            personality, perceptions, self-taught skills, strengths, and comfort
            levels. That's why we provide customized support to meet your
            individual needs through our Employment Support Officer.
          </p>
          <p>
            Our comprehensive employment support covers a wide range of areas,
            including budgeting, money skills, legal responsibilities, cooking
            skills, driving skills, social skills, work etiquette, job
            searching, cover letter training, resume writing, interview skills,
            handling feedback, career goals, work exposure, work trials, work
            experience, and easy-to-learn workshops.
          </p>
          <p>
            With our personalized support, you can gain the confidence and
            skills you need to succeed in the workplace and beyond.
          </p>
        </div>
      ),
      image: <SensorOccupied />,
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
