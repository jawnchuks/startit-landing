import Image from "next/image";
import React from "react";
import VerifyImpactLogo from "../../../../../public/images/vf_impact.png"

const AboutUs: React.FC = () => {
  return (
    <section id="about-us">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 relative z-10 flex flex-col space-y-12">
       
       
        <Image
            src={VerifyImpactLogo}
            alt="cribbase logo"
            className="md:w-[35rem] w-[25rem] aspect-auto rounded-md"
          />
        <p className="mb-8 max-w-lg text-base text-gray-200 sm:text-base">
          We are a diverse and passionate team of innovators, social
          entrepreneurs, and technologists who share a common purpose. 
          <br />
           Our journey began in 2013 when we first conceptualized Startit, a powerful
          platform to bridge the resource gap and empower visionary individuals
          making social initiatives across the continent.
        </p>
        
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-5 rounded-2xl border-2 bg-secondaryOffWhite border-solid border-black p-10 sm:p-20 shadow-[3px_3px_0px_#08382C]">
            <h2 className="text-3xl font-bold md:text-5xl">Mission</h2>
            <p className="text-sm text-gray-200 sm:text-base">
             
                To connect funding around the world to verified social
                initiatives across Africa using technology.
            
            </p>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl border-2 bg-secondaryOffWhite border-solid border-black p-10 sm:p-20 shadow-[3px_3px_0px_#08382C]">
            <h2 className="text-3xl font-bold md:text-5xl">Vision</h2>
            <p className="text-sm text-gray-200 sm:text-base">
             
                To be a bridge that brings people together to ignite positive
                change and foster social development in Africa.
            
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
