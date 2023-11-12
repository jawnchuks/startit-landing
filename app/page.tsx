"use client";
import React from "react";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";
import HeroLanding from "@/components/UI/Screens/Landing/Hero";
import CTAOne from "@/components/UI/Screens/Landing/CTAOne";
import OurObjectives from "@/components/UI/Screens/Landing/OurObjectives";
import Features from "@/components/UI/Screens/Landing/Features";
import CTATwo from "@/components/UI/Screens/Landing/CTATwo";
import AboutUs from "@/components/UI/Screens/Landing/AboutUs";
import OurStory from "@/components/UI/Screens/Landing/OurStory";

import { inter, cormorantGaramond, vina, rubik } from "../fonts"



const Page = () => {
  return (
    <TransitionElement>
      <div className={` w-full mx-auto mt-8 min-h-screen relative ${inter.className}`}>
        <HeroLanding />
        <CTAOne />
        <AboutUs />
        <OurObjectives />
        <Features />
        <OurStory />
        <CTATwo />

        {/* lines bg */}
        <div className="w-full fixed z-2 inset-0 grid lg:grid-cols-9 md:grid-cols-7 grid-cols-5 place-items-center mx-auto">
          <div className="col-span-1 w-[1px] h-full bg-gray-500/60" />
          <div className="col-span-1 w-[1px] h-full bg-gray-500/60" />
          <div className="col-span-1 w-[1px] h-full bg-gray-500/60" />
          <div className="col-span-1 w-[1px] h-full bg-gray-500/60" />
          <div className="col-span-1 w-[1px] h-full bg-gray-500/60" />
          <div className=" hidden col-span-1 w-[1px] h-full bg-gray-500/60 md:block lg:block" />
          <div className=" hidden col-span-1 w-[1px] h-full bg-gray-500/60 md:block lg:block" />
          <div className=" hidden col-span-1 w-[1px] h-full bg-gray-500/60 md:block lg:block" />
          <div className=" hidden col-span-1 w-[1px] h-full bg-gray-500/60 md:block lg:block" />
        </div>
      </div>
    </TransitionElement>
  );
};

export default Page;
