import React from "react";
import Image from "next/future/image";

const ServiceCard = ({imgSrc,imgAlt,mainText,bodyText}) => {
  return (
    <div className="flex flex-row">
      <Image src={imgSrc} alt={imgAlt} className="w-[96px] h-[96px]" />
      <div className="pl-6">
        <p className="font-poppins font-semibold text-[24px] text-darkBlue">
          {mainText}
        </p>
        <p className="font-poppins text-[20px] text-darkGray">
          {bodyText}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
