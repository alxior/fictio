import React from "react";
import Image from "next/future/image";

const TestimonyCard = ({ imgSrc, imgAlt, mainText, name }) => {
  return (
    <div className="w-full flex flex-row justify-between shadow-fictio rounded-l-full rounded-r-[5000px]">
      <Image src={imgSrc} alt={imgAlt} className="w-[150px] h-[150px] " />
      <div className="font-poppins text-[24px] flex flex-col justify-center px-8">
        <p className="italic text-darkGray">{mainText}</p>
        <p className="font-medium italic text-fictioRed">{name}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
