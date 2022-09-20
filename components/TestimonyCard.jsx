import React from "react";
import Image from "next/future/image";

const TestimonyCard = ({ imgSrc, imgAlt, mainText, name }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center text-center lg:text-left space-y-8 lg:space-y-0 justify-between lg:shadow-fictio rounded-l-full rounded-r-[5000px] max-w-[1100px] mx-auto">
      <Image src={imgSrc} alt={imgAlt} className="w-[150px] h-[150px] " />
      <div className="font-poppins text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex flex-col justify-center px-8">
        <p className="italic text-darkGray">{mainText}</p>
        <p className="mt-2 lg:mt-0 font-medium italic text-fictioRed">{name}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
