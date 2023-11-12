import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import FeatureOne from "../../../public/images/hero-masonry.png";
import { useFeatureStore } from '@/lib/store/store';

type Props = {
    children: React.ReactNode
} & CardProps;

type CardProps = {
    id: string
}

export default function ItemContainer({children, id}: Props) {

    const inViewFeature = useFeatureStore((state) => state.inViewFeature)
  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      animate={inViewFeature === id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`${
        inViewFeature === id ? "opacity-100" : "opacity-0"
      } absolute inset-0 transition-opacity`}
    >
      {children}
    </motion.div>
  )
}


export const EmpowerVisionaries = ({id} : CardProps) => {
  return (
    <div id={id} className="w-full relative ">
      {/* <Image className="hidden md:block mx-auto relative z-10 w-full aspect-auto" src={FeatureOne} alt="" width={1000} height={1000} /> */}
      <div className="w-[98%] aspect-square mx-auto bg-primaryGreen rounded-[1rem] "></div>
    </div>
  );
};
export const BridgeResourceGap = ({id} : CardProps) => {
  return (
    <div id={id} className="w-full relative ">
      {/* <Image className="hidden md:block mx-auto relative z-10 w-full aspect-auto" src={FeatureOne} alt="" width={1000} height={1000} /> */}
      <div className="w-[98%] aspect-square mx-auto bg-[#FF8939] rounded-[1rem] "></div>
    </div>
  );
};
export const FosterCollaboration = ({id} : CardProps) => {
  return (
    <div id={id} className="w-full relative ">
      {/* <Image className="hidden md:block mx-auto relative z-10 w-full aspect-auto" src={FeatureOne} alt="" width={1000} height={1000} /> */}
      <div className="w-[98%] aspect-square mx-auto bg-[#9EA4EF] rounded-[1rem] "></div>
    </div>
  );
};
export const PromoteEngagement = ({id} : CardProps) => {
  return (
    <div id={id} className="w-full relative ">
      {/* <Image className="hidden md:block mx-auto relative z-10 w-full aspect-auto" src={FeatureOne} alt="" width={1000} height={1000} /> */}
      <div className="w-[98%] aspect-square mx-auto bg-gray-300 rounded-[1rem] "></div>
    </div>
  );
};
export const SupportDevelopment = ({id} : CardProps) => {
  return (
    <div id={id} className="w-full relative ">
      {/* <Image className="hidden md:block mx-auto relative z-10 w-full aspect-auto" src={FeatureOne} alt="" width={1000} height={1000} /> */}
      <div className="w-[98%] aspect-square mx-auto bg-secondaryDarkGreen rounded-[1rem] "></div>
    </div>
  );
};


