"use client";
import HeroMasonry from "../../../../../public/images/hero-masonry.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxText } from "@/lib/hooks/useMotionScroll";
import { rubik } from "@/fonts";
import { useModal } from "@/lib/context/modal-context";
import WaitlistForm from "@/components/UI/Forms/WaitListForm";

export default function Hero() {
  const { showModal } = useModal();


  const handleWaitlist = () => {
    showModal(
      <WaitlistForm />
    )   
  }

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
          className={`uppercase text-[2rem] w-[90%] mx-auto md:text-5xl lg:text-[4rem] text-black-100  font-extrabold tracking-tight leading-tight ${rubik.className}`}
        >
          A bridge for social impact funding and development in Africa
        </h1>
        <p className="text-gray-200 text-base w-5/6 md:w-2/3  mx-auto">
          Startit is an African reward-based crowd funding platform that allows
          African university students raise funding for social development
          project
        </p>

        <button onClick={handleWaitlist} className="px-8 py-3 font-medium bg-primaryGreen text-secondaryDarkGreen w-fit rounded-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Get started
        </button>
      </motion.div>

      <motion.div
        className="w-[1000vw] md:w-[900vw] overflow-x-scroll hide-scroll-bar block mt-6 relative z-10"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.9,
        }}
      >
        <ParallaxText baseVelocity={1}>
          <Image
          src={HeroMasonry}
          alt="hero-masonry"
          className=" mx-auto w-full"
        />
        </ParallaxText>
        
      </motion.div>
    </div>
  );
}
