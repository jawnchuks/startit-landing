import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { useFeatureStore } from '@/lib/store/store';

import Empower from "../../../public/images/empower.jpg";
import Bridge from "../../../public/images/bridge.jpg";
import Collabo from "../../../public/images/collabo.jpeg";
import Youths from "../../../public/images/youths.jpg";
import Eco from "../../../public/images/eco.jpg";

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
      
      <div className="w-[98%] aspect-square mx-auto overflow-hidden grid place-content-center bg-primaryGreen rounded-[1rem] ">
        <Image className="block mx-auto relative z-10 rounded-lg " src={Empower} alt="" layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};
export const BridgeResourceGap = ({id} : CardProps) => {
  return (
    <div id={id} className="w-full relative ">
      <div className="w-[98%] aspect-square mx-auto overflow-hidden grid place-content-center bg-[#FF8939] rounded-[1rem] ">
        <Image className="block mx-auto relative z-10 rounded-lg " src={Bridge} alt="" layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};
export const FosterCollaboration = ({id} : CardProps) => {
  return (
    <div id={id} className="w-full relative ">
      
      <div className="w-[98%] aspect-square mx-auto overflow-hidden grid place-content-center bg-[#9EA4EF] rounded-[1rem] ">
         <Image className="block mx-auto relative z-10 rounded-lg " src={Collabo} alt="" layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};
export const PromoteEngagement = ({id} : CardProps) => {
  return (
    <div id={id} className="w-full relative ">
      <div className="w-[98%] aspect-square mx-auto overflow-hidden grid place-content-center bg-gray-300 rounded-[1rem] ">
         <Image className="block mx-auto relative z-10 rounded-lg " src={Youths} alt="" layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};
export const SupportDevelopment = ({id} : CardProps) => {
  return (
    <div id={id} className="w-full relative ">
      <div className="w-[98%] aspect-square mx-auto overflow-hidden grid place-content-center bg-secondaryDarkGreen rounded-[1rem] ">
         <Image className="block mx-auto relative z-10 rounded-lg " src={Eco} alt="" layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};


