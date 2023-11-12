"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StartitLogo from "../../../public/images/startit-foot-logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="block bg-primaryWhite relative w-full">
      {/* Container */}
      <div className="py-16 mx-auto w-full max-w-7xl px-5">
        {/* Component */}
        <div className="flex-col flex items-center">
          <Link href="/">
          <Image
            src={StartitLogo}
            alt="cribbase logo"
            className="md:w-[15rem] w-[10rem] aspect-auto rounded-md"
          />
        </Link>
       
          <div className="mb-8 mt-8 border-b border-solid border-primaryBlack w-1/3"></div>
          <div className="mb-12 grid-cols-4 grid-flow-col grid w-full max-w-[400px] gap-3">
            <Link href="#" className="mx-auto flex-col flex items-center justify-center font-normal text-small text-gray-200">
              Email us
            </Link>
            <Link href="#" className="mx-auto flex-col flex items-center justify-center font-normal text-small text-gray-200">
              Telephone
            </Link>
            <Link href="#" className="mx-auto flex-col flex items-center justify-center font-normal text-small text-gray-200">
              Instagram
            </Link>
            <Link href="#" className="mx-auto flex-col flex items-center justify-center font-normal text-small text-gray-200">
              Facebook
            </Link>
          </div>
          <p className="max-[479px] text-sm">© Copyright 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
