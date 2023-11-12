// components/OurStory.tsx

import React from "react";

const OurStory: React.FC = () => {
  return (
    <section className=" bg-primaryWhite relative z-10">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 flex flex-col gap-[4rem]" >
        {/* Component */}
        <div className="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row">
          <img
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b53eeec84c014ec421d16_Group%20183.png"
            alt=""
            className="inline-block max-w-xl"
          />
          <div className="flex flex-col items-start lg:justify-center">
            <h4 className="text-4xl text-primaryGreen font-semibold my-6">
              Our Story
            </h4>
            <p className="mb-6 max-w-md text-gray-200 md:mb-12">
              Startit is set up to give access to resources: money and
              expertise. A considerable number of innovative social projects and
              initiatives never see the light of day due to lack of access to
              funding and expert mentorship. A major problem for social
              development especially in Africa where the young population is
              often underemployed and mostly unemployed, exacerbating the
              potential for social unreels.
              <br />
              <br />
              We have our share of travails developing Startit. We have run out
              of money as a start-up, we have also misidentified our target
              market. We have had to suspend development of Startit for years.
              Abandonment was a no-no for us, instead we had to look into the
              problems we encountered trying to solve the problem we were set up
              to solve in the first place.
            </p>
           
          </div>
        </div>
        <div className="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row">
    
          <div className="flex flex-col items-start lg:justify-center">
            <p className="mb-6 max-w-md text-gray-200 md:mb-12">
              In fixing our earlier problems, we discovered an additional
              service the market demanded: verification of persons behind the
              projects we are promoting. This has become the number 1 unique
              selling point of Startit- the verification of all initiatives on
              Startit. This give trust and safety to users on the platform. We
              have also decided that all our operations will be technology
              driven to enable higher efficiency. We now look forward to being
              here for a very long time.
              <br />
              <br />
              The future is bright. We foresee Startit being a part of life in
              Africa. We foresee sharing of ideas for social initiatives
              becoming popular amongst young people in Africa. In fact, in
              future one should be just printout or share straight from Startit,
              a certification to show ones contribution to the social
              development at ones community. Young people will begin to brag
              about contributing.
            </p>
          </div>
                <img
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b53eeec84c014ec421d16_Group%20183.png"
            alt=""
            className="inline-block max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
