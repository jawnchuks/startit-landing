"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import StartitLogo from "../../../public/images/startit-nav-logo.png";
import Link from "next/link";
import Button from "@/components/Common/Button/Button";
import Icon from "@/components/Common/Icons/Icon";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";




const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false)
  const [hidden, setHidden] = useState(false)

  const {scrollY} = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest : any) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })
  


const hideSideNav = () => {
  setShowSideNav(false)
}



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
        <Link href="/">
          <Image
            src={StartitLogo}
            alt="cribbase logo"
            className="md:w-[8rem] w-[5rem] aspect-auto rounded-md"
          />
        </Link>
      </div>

      <div className="w-1/3 mx-auto hidden lg:flex items-center justify-evenly font-semibold text-gray-100">
        <button>About us</button>
        <button>Our Objectives</button>
        <button>Features</button>
        <button>Our Story</button>
      </div>




    <div className="w-1/3 flex items-center justify-end">
        <div className="hidden relative lg:flex items-center space-x-8">
            <button className="px-6 py-2 font-medium bg-primaryGreen text-secondaryDarkGreen w-fit rounded-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Get started
            </button>
      </div>


      <div className="lg:hidden hidden relative">
        {/* Mobile Menu Button*/}
        <button onClick={()=>setShowSideNav(!showSideNav)} type='button' aria-label='toggle menu'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8.91504H20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M4 16.915H20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M4 12.915H20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
    </motion.nav>
    {showSideNav && (
    //   <SideNav isOpen={true} onClose={hideSideNav}>
    //     <SideNavItems />
    // </SideNav>
    <div className="">Nav</div>
    )}

   </header>
  );
};

export default Navbar;
