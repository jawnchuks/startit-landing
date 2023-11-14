"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StartitLogo from "../../../public/images/startit-foot-logo.png";
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const router = useRouter()
  return (
    <footer className="block bg-primaryWhite relative w-full">
      <div className="py-16 mx-auto w-full max-w-7xl px-5">
        <div className="flex-col flex items-center">
          <button onClick={() => router.push('/')}>
          <Image
            src={StartitLogo}
            alt="Startit logo"
            className="md:w-[15rem] w-[10rem] aspect-auto rounded-md"
          />
        </button>
       
          <div className="mb-8 mt-8 border-b border-solid border-primaryBlack w-1/3"></div>
          <div className="mb-12 grid-cols-4 grid-flow-col grid w-full max-w-[400px] gap-3">
            <Link href="mailto:verifyforimpact1@gmail.com" className="mx-auto flex-col flex items-center justify-center font-normal text-small text-gray-200">
              Email us
            </Link>
            <Link href="tel:+2348131543798" className="mx-auto flex-col flex items-center justify-center font-normal text-small text-gray-200">
              Telephone
            </Link>
            <Link href="https://instagram.com/verifyforimpact?igshid=MmVlMjlkMTBhMg==" className="mx-auto flex-col flex items-center justify-center font-normal text-small text-gray-200">
              Instagram
            </Link>
            <Link href="https://facebook.com/" className="mx-auto flex-col flex items-center justify-center font-normal text-small text-gray-200">
              Facebook
            </Link>
          </div>
          <p className="max-[479px] text-sm">© Copyright 2023. All rights reserved.</p>
          <div className="max-[479px] text-xs">shoutout to <Link className='' href="https://www.linkedin.com/in/jawnchuks/">jawnchuks</Link></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
