import React from "react";
import Image from "next/future/image";

const ServiceCard = ({color,fadedColor,title,text,imgSrc,imgAlt}) => {
  return (
    <div className="max-w-[375px] shadow-fictio flex flex-col items-center text-center font-poppins space-y-12 pb-12 mt-16 rounded-b-3xl">
      <div className={`w-full h-[5px] ${color}`} />
      <p className="text-[26px] sm:text-[32px] font-semibold text-darkBlue">{title}</p>
      <p className="text-[18px] sm:text-[20px] text-darkGray">
        {text}
      </p>
      <div className={`h-[100px] w-[100px] rounded-full flex justify-center items-center ${fadedColor}`}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="w-[60px] h-[60px]"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
