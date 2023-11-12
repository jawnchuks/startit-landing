"use client";
import HeroMasonry from "../../../../../public/images/hero-masonry.png";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import { TransitionStart } from "@/lib/utils/transition";
import Image from "next/image";
import Button from "@/components/Common/Button/Button";
import Icon from "@/components/Common/Icons/Icon";

import { inter, cormorantGaramond, vina, rubik } from "../../../../../fonts";

export default function Hero() {
  const words = ["Estate", "Gated Community", "Service Apartments"];

  const transition = { duration: 1, ease: "easeInOut" };

  const itemVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
        delay: 0.5, // Delay before new word appears
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition,
    },
  };

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Animate out the current word
      setCurrentWordIndex((prevIndex) => {
        return (prevIndex + 1) % words.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-1 w-full overflow-hidden h-full">
      <motion.div
        className="w-[97%] md:w-3/5  mx-auto h-full text-center flex flex-col items-center justify-center gap-3 md:gap-5 py-[3rem] relative z-10"
        initial={{ opacity: 0, scale: "50%" }}
        animate={{ opacity: 1, scale: "100%" }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <h1
          className={`text-[2rem] w-[90%] mx-auto md:text-5xl lg:text-[4.5rem] text-black-100  font-extrabold tracking-tight leading-tight ${rubik.className}`}
        >
          A Bridge for Social Impact Funding and Development in Africa
        </h1>
        <p className="text-gray-200 text-base w-5/6 md:w-2/3  mx-auto">
          Startit is an African reward-based crowd funding platform that allows
          African university students raise funding for social development
          project
        </p>

        <button className="px-8 py-3 font-medium bg-primaryGreen text-secondaryDarkGreen w-fit rounded-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Get started
        </button>
      </motion.div>

      <motion.div
        className="w-[210vw] overflow-x-scroll hide-scroll-bar block mt-6"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.9,
        }}
      >
        <Image
          src={HeroMasonry}
          alt="hero-masonry"
          className=" mx-auto relative z-10 w-full"
        />
      </motion.div>
    </div>
  );
}
