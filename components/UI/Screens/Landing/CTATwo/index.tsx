import WaitlistForm from '@/components/UI/Forms/WaitListForm';
import { useModal } from '@/lib/context/modal-context';
import React from 'react';

const CTATwo: React.FC = () => {
    const { showModal } = useModal();


  const handleWaitlist = () => {
    showModal(
      <WaitlistForm />
    )   
  }
  return (
    <section className='w-full bg-primaryWhite py-[5rem] relative z-10'>
      {/* Container */}
      <div className="px-4 py-16 md:px-10 md:py-24 lg:py-[5rem] relative">
        {/* Component */}
        <div className="mx-auto p-2 w-full max-w-7xl rounded-[1rem] py-20 text-white [box-shadow:rgb(0,_0,_0)_5px_5px] bg-secondaryOffWhite" >
          <div className="mx-auto max-w-3xl text-center">
            {/* Heading Div */}
            <div className="mb-6 max-w-[720px] lg:mb-12">
              <h2 className="mb-4 text-2xl font-semibold md:text-6xl">
                Get started for free
              </h2>
              <div className="mx-auto max-w-lg">
                <p className="text-gray-200 text-base"> Be the first to experience positive change! Join our waitlist now and receive exclusive email updates on the upcoming Startit app. Your journey towards empowering communities and driving social innovation starts here. Together, let&apos;s make a difference!</p>
              </div>
            </div>
             <button onClick={handleWaitlist} className="px-8 py-3 font-medium bg-primaryGreen text-secondaryDarkGreen w-fit rounded-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Join waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
