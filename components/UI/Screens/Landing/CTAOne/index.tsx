import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cormorantGaramond, inter } from "@/fonts";
import { useModal } from "@/lib/context/modal-context";
import WaitlistForm from "@/components/UI/Forms/WaitListForm";

interface TiltCardProps {
  title: string;
  description: string;
  callToAction: string;
  className?: string;
  btnClassName?: string;
  descClassName?: string;
  element?: React.ReactNode;
}



const TiltCard: React.FC<TiltCardProps> = ({
  title,
  description,
  callToAction,
  className = "",
  btnClassName = "",
  descClassName = "",
  element
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

    const { showModal } = useModal();


  const handleWaitlist = () => {
    showModal(
      <WaitlistForm />
    )   
  }

  return (
    <motion.div
    onClick={handleWaitlist}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative md:h-[30rem] h-[25rem] w-full rounded-xl cursor-pointer`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute -inset-1 grid place-content-start md:place-content-center rounded-xl"
      >
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center "
        >
          <motion.div
            className={`w-full md:h-[30rem] h-[25rem] border-4  rounded-[1.5rem] flex flex-col items-start justify-center gap-3 md:gap-5 p-12 relative ${className}`}
            initial={{ opacity: 0, scale: "50%" }}
            animate={{ opacity: 1, scale: "100%" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div className="text-primaryBlack/70">{element}</div>
            <h6 className={`text-lg font-medium underline ${cormorantGaramond.className}`}>{title}</h6>
            <h2 className={`md:text-xl lg:text-[1.5rem]  font-medium  text-left  ${descClassName} ${inter.className}`}>
              {description}
            </h2>
            <button className={`${btnClassName} px-6 py-2 text-base font-medium w-fit rounded-full`}>
              {callToAction}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

interface CTAOneProps {}

const CTAOne: React.FC<CTAOneProps> = () => {
  return (
    <div className=" relative z-10 w-full md:w-[85%] mx-auto overflow-hidden h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center p-8 py-24 ">
      <TiltCard
        title="Empowerment"
        description="Support students in their mission to uplift communities and fight poverty through your contributions to fund their projects."
        callToAction="Partner on a project"
        className="bg-[#F3DBB3] border-secondaryDarkGreen"
        btnClassName="bg-secondaryDarkGreen text-[#F3DBB3]"
        descClassName="text-secondaryDarkGreen"
        element={<CardOneSVG />}
      />
      <TiltCard
        title="Collaboration"
        description="Join students in their efforts to raise funds for projects dedicated to community development and poverty alleviation"
        callToAction="Initiate a project"
        className="bg-primaryGreen border-secondaryDarkGreen"
        btnClassName=" bg-secondaryDarkGreen text-primaryGreen rounded-full"
        descClassName="text-secondaryDarkGreen"
        element={<CardTwoSVG />}
      />
    </div>
  );
};

export default CTAOne;


const CardOneSVG = () => {
  return (
    <svg className="md:w-[7rem] md:h-[7rem] w-[3rem] h-[3rem]" viewBox="0 0 540 415" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.33203 140.49L155.131 403L497.452 307.153L529.182 40.0894C529.182 40.0894 449.995 154.533 381.226 141.349C315.373 128.725 279.585 3 279.585 3C279.585 3 263.003 155.718 189.283 186.285C122.299 214.058 9.33203 140.49 9.33203 140.49Z" stroke="currentColor" strokeWidth="20"/>
    </svg>

  )
}
const CardTwoSVG = () => {
  return (
    <svg className="md:w-[7rem] md:h-[7rem] w-[3rem] h-[3rem]" viewBox="0 0 487 425" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M299.744 410L12 212.606M299.744 410L360.264 144.104M299.744 410L474.147 113.583M299.744 410L140.308 185.577M12 212.606L46.5986 79.0554M12 212.606L140.308 185.577M360.264 144.104L140.308 185.577M360.264 144.104L220.351 10M360.264 144.104L390.199 10M360.264 144.104L474.147 113.583M46.5986 79.0554L140.308 185.577M46.5986 79.0554L220.351 10M140.308 185.577L220.351 10M220.351 10H390.199M390.199 10L474.147 113.583" stroke="currentColor" strokeWidth="20"/>
</svg>


  )
}
