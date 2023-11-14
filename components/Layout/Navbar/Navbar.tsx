"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import StartitLogo from "../../../public/images/startit-nav-logo.png";
import Link from "next/link";
import Icon from "@/components/Common/Icons/Icon";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useSideMenu } from "@/lib/context/sidemenu-context";
import SideMenuLinks from "../SideMenu/SideMenuLinks";
import { useModal } from "@/lib/context/modal-context";
import WaitlistForm from "@/components/UI/Forms/WaitListForm";




const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const { showModal } = useModal();


  const handleWaitlist = () => {
    showModal(
      <WaitlistForm />
    )   
  }
  const {scrollY} = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest : any) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })
  


const { showSideMenu } = useSideMenu();

  const handleSideMenu = () => {
    showSideMenu(<SideMenuLinks />);
  };

 const router = useRouter()

  return (
   <header className="sticky -top-1 z-[200] ">
     <motion.nav className="flex items-center justify-between text-primaryBlack bg-primaryWhite shadow-sm p-4 lg:px-20 md:px-12 px-4 border-b-gray-500"
     variants={{
      visible: {opacity: 1,y: 0},
      hidden: {opacity: 0, y: '-100%'}
    }}
       initial={{ opacity: 0, y: "-100%" }}
       animate={hidden ? 'hidden' : 'visible'}
       exit={{ opacity: 0, y: "20vh" }}
       transition={{duration: 1, ease: 'easeInOut'}}
     >
      {/* Logo */}
      <div className="w-1/3 flex items-center space-x-2">
        <button onClick={() => router.push('/')}>
          <Image
            src={StartitLogo}
            alt="startit logo"
            className="md:w-[8rem] w-[5rem] aspect-auto rounded-md"
          />
        </button>
      </div>

      <ul className="w-1/3 mx-auto hidden lg:flex items-center justify-evenly font-semibold text-gray-100">
     <li>
            <Link href="#about-us" className="text-base font-semibold text-gray-100">
                About us
            </Link>
        </li>
        <li>
            <Link href="#our-objectives" className="text-base font-semibold text-gray-100">
                Our Objectives
            </Link>
        </li>
        <li>
            <Link href="#features" className="text-base font-semibold text-gray-100">
                Features
            </Link>
        </li>
        <li>
            <Link href="#our-story" className="text-base font-semibold text-gray-100">
                Our Story
            </Link>
        </li>
      </ul>




    <div className="w-1/3 flex items-center justify-end">
        <div className="hidden relative lg:flex items-center space-x-8">
            <button onClick={handleWaitlist} className="px-6 py-2 font-medium bg-primaryGreen text-secondaryDarkGreen w-fit rounded-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Get started
            </button>
      </div>


      <div className="lg:hidden block relative">
        {/* Mobile Menu Button*/}
        <button onClick={handleSideMenu} type='button' aria-label='toggle menu'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8.91504H20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M4 16.915H20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M4 12.915H20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
    </motion.nav>
   </header>
  );
};

export default Navbar;
