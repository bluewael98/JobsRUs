import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { SensorOccupied, School, Badge, Diversity3 } from "@mui/icons-material";

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
      className="card compact xxs:w-[350px] sm:w-[500px] md:w-[1000px] flex items-center content-center gap-2 text-primary  "
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
      title: "Employment Assistance",
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
            At [Company Name], we are here to support every step of the
            employment journey.
          </p>
        </div>
      ),
      image: <Badge />,
    },
    {
      title: "Employment Support",
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
            individual needs.
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
    {
      title: "SLES",
      subtitle: (
        <div className="flex flex-col gap-5 font-Oswald">
          <p>
            Our transition program (School Leavers Employment Supports) is
            designed to help you seamlessly transition from school to employment
            by finding and keeping a job.{" "}
          </p>
          <p>
            We provide a supportive and personalized approach to help you build
            independence, confidence, social skills, and professional skills
            that are tailored to your individual goals.
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
