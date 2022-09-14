import React from "react";
import Image from "next/future/image";

const ServiceCard = ({color,fadedColor,title,text,imgSrc,imgAlt}) => {
  return (
    <div className="w-[375px] h-auto shadow-fictio flex flex-col items-center text-center font-poppins space-y-12 pb-12 rounded-b-3xl">
      <div className={`w-full h-[5px] ${color}`} />
      <p className="text-[32px] font-semibold text-darkBlue">{title}</p>
      <p className="text-[20px] text-darkGray">
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
