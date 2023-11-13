import React, { useCallback, useRef, useState } from "react";

import SideMenu from "@/components/Layout/SideMenu/SideMenu";
import { useSideMenu } from "@/lib/context/sidemenu-context";
import Link from "next/link";


interface SideMenuLinks {
  onComplete?: () => void;
}

const SideMenuLinks: React.FC<SideMenuLinks> = () => {
  const { hideSideMenu } = useSideMenu();


  return (
    <SideMenu onClose={hideSideMenu} isOpen={true}>
      <div className="w-full mt-[2rem] px-12 relative">
    
      </div>
      <div className="w-full border-b-2 border-gray-500" />
      <ul className="p-12 flex flex-col items-start justify-center gap-5">
        <li>
            <Link onClick={hideSideMenu} href="#about-us" className="text-large font-semibold text-gray-100">
                About us
            </Link>
        </li>
        <li>
            <Link onClick={hideSideMenu} href="#our-objectives" className="text-large font-semibold text-gray-100">
                Our Objectives
            </Link>
        </li>
        <li>
            <Link onClick={hideSideMenu} href="#features" className="text-large font-semibold text-gray-100">
                Features
            </Link>
        </li>
        <li>
            <Link onClick={hideSideMenu} href="#our-story" className="text-large font-semibold text-gray-100">
                Our Story
            </Link>
        </li>
      </ul>

    </SideMenu>
  );
};

export default SideMenuLinks;
