import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { School } from "@mui/icons-material";
import header2 from "../assets/header2.jpg";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

import "./styles.css";

function Content({ data, showSubtitle = true }) {
  return (
    <motion.div className="content font-Oswald" layoutId="content">
      <motion.h1
        className="title justify-center flex items-center "
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
        className="card expanded xxs:w-[370px] sm:w-[500px]  md:w-[700px] bg-primary  relative  content-center flex justify-center items-center top-[-300px]  "
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
      className="card compact w-full object-contain md:w-[1000px] flex items-center content-center gap-2 text-primary mx-auto   "
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
  const isLargeDevice = useMediaQuery("(min-width: 1440px)");

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
          <Link
            to={isLargeDevice ? "/ndis-services#sles" : "/ndis-services#top"}
            className="z-10"
          >
            <CompactCard
              onExpand={expandData}
              onCollapse={collapseData}
              disabled={disabled}
              data={data}
            >
              <Content data={data} disabled={disabled} showSubtitle={false} />
              <img
                src={header2}
                className="h-[150px] w-[150px] rounded-full bg-primary p-2 shadow-lg"
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
      title: "SLES (School Leavers Employment Supports)",
      subtitle: (
        <div className="flex flex-col gap-5 font-Oswald">
          <p>
            Our transition program (School Leavers Employment Supports) is
            designed to help you seamlessly transition from school to employment
            by finding and keeping a job.{" "}
          </p>
          <p>
            We provide a supportive and personalized approach that is flexible
            and tailored to you at your home, in our classroom, in the
            community, 1;1, a small group or a big group, whatever is needed, we
            can provide.
          </p>
          <p>
            Through our program, you'll have access to industry visits, work
            experience, and both assistive and open employment opportunities.
          </p>
          <p>
            Our model ensures that all skills learned are transferable, meaning
            that you can easily adapt them to new goals and career paths.
          </p>
          <p>
            With our support, you can confidently navigate any changes or
            challenges that may arise, and continue to grow and develop your
            skills.
          </p>
        </div>
      ),
      image: <School />,
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
