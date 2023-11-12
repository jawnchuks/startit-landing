"use client";
import HeroMasonry from "../../../../../public/images/hero-masonry.png";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ItemContainer, {
  BridgeResourceGap,
  EmpowerVisionaries,
  FosterCollaboration,
  PromoteEngagement,
  SupportDevelopment,
} from "@/components/UI/Cards/ItemContainer";
import { FeatureTitleContainer } from "@/components/UI/Cards/FeatureTitleContainer";

const objectivesData = [
  {
    id: "1",
    component: EmpowerVisionaries,
    title: "Empower Visionaries",
    description:
      "Our foremost objective is to empower visionary individuals and social entrepreneurs. We aim to provide them with the resources, tools, and support they need to turn their innovative ideas into actionable solutions that address pressing social challenges in Africa.",
  },
  {
    id: "2",
    component: BridgeResourceGap,
    title: "Bridge the Resource Gap",
    description:
      "We aspire to bridge the resource gap that often hinders impactful initiatives. By connecting project initiators with contributors, investors, and mentors, our platform facilitates access to the funding and expertise required to bring social development projects to life.",
  },
  {
    id: "3",
    component: FosterCollaboration,
    title: "Foster Collaboration",
    description:
      "We are dedicated to fostering a collaborative spirit within our community. Our objective is to create an environment where like-minded individuals and organizations can come together to share knowledge, experiences, and resources. This collaborative approach magnifies the impact of social initiatives.",
  },
  {
    id: "4",
    component: PromoteEngagement,
    title: "Promote Youth Engagement",
    description:
      "We believe that young people are a driving force for change. Our objective is to actively engage and empower the youth of Africa, encouraging them to leverage their creativity, skills, and passion to serve a greater good profitably.",
  },
  {
    id: "5",
    component: SupportDevelopment,
    title: "Support Sustainable Development",
    description:
      "Our platform promotes the concept of sustainability in social development. We aim to support initiatives that not only create immediate impact but also have a long-lasting effect, contributing to the long-term well-being of communities and the environment.",
  },
];

export default function OurObjectives() {
  const transition = { duration: 1, ease: "easeInOut" };

  return (
    <div className="w-[100%] h-full relative  flex flex-col items-center justify-center py-[0.5rem]">
      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "20%" }}
        className="md:w-[90%] flex flex-col justify-start gap-5 relative z-10 text-left"
      >
        <h6 className="text-3xl md:text-4xl lg:text-5xl uppercase text-primaryGreen tracking-tight relative font-bold">
          Our Objectives
        </h6>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "20%" }}
        className="md:w-[90%] mt-[2rem] flex flex-col md:flex-row items-start gap-20 relative z-10 px-4 "
      >
        <div className="hidden lg:flex items-center w-full md:h-screen sticky top-0 p-8">
          <div className="relative w-full h-full top-[10%]">
            {objectivesData.map((item) => (
              <ItemContainer id={item.id} key={item.id}>
                <item.component id={item.id} />
              </ItemContainer>
            ))}
          </div>
        </div>
        <div className="w-full lg:py-[20vh]">
          <ul className="">
            {objectivesData.map((item, index) => (
              <div key={item.id}>
                <div className="lg:hidden block my-4">
                  <item.component id={item.id} />
                </div>
                <li key={item.id}>
                  <FeatureTitleContainer id={item.id}>
                    <h5 className="text-gray-100 font-semibold md:text-3xl text-xl">
                      {item.title}
                    </h5>
                    <p className="text-gray-200 text-base lg:text-lg font-light">
                      {item.description}
                    </p>
                  </FeatureTitleContainer>
                </li>
                
              </div>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
