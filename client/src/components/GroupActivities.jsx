import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Diversity3 } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ourteamheader from "../assets/ourteamheader.JPG";
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
          <Link to="/ndis-services#group">
            <CompactCard
              onExpand={expandData}
              onCollapse={collapseData}
              disabled={disabled}
              data={data}
            >
              <Content data={data} disabled={disabled} showSubtitle={false} />
              <img
                src={ourteamheader}
                className="h-[150px] w-[150px] rounded-full bg-primary p-2 shadow-lg "
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
      title: "Group Activities",
      subtitle: (
        <div className="flex flex-col gap-5 font-Oswald">
          <p>
            Join us for a day of leisure and fun every Saturday with JobsRUs!
            Our group-based activities are designed to help you socialize, have
            a good time, and achieve group-based goals, all while exploring the
            beautiful sights and experiences that Sydney and its surroundings
            have to offer.
          </p>
          <p>
            In the summer, we explore places like the Blue Mountains, new
            beaches, go-karting, animal parks, waterfalls, and more, while
            winter days call for indoor activities such as shopping, cooking,
            making healthy snacks, arts and crafts, board games, and movies.
          </p>
          <p>
            Whatever the weather, we make sure to have a great time while also
            promoting social skills, team-building, and a sense of
            accomplishment. Join us for a memorable and enjoyable day out with
            our supportive and fun-loving team at JobsRUs!
          </p>
        </div>
      ),
      image: <Diversity3 />,
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
