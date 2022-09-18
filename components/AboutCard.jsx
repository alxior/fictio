import React from "react";
import Image from "next/future/image";

const ServiceCard = ({ imgSrc, imgAlt, mainText, bodyText }) => {
  return (
    <div className="flex flex-col xs:flex-row xs:text-left items-center text-center xs:space-y-0 space-y-4 sm:px-16 lg:px-32 xl:px-16">
      <Image
        src={imgSrc}
        alt={imgAlt}
        className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:h-[96px] md:w-[96px]"
      />
      <div className="font-poppins xs:pl-4 md:pl-8">
        <p className="font-semibold text-[20px] md:text-[24px] text-darkBlue">
          {mainText}
        </p>
        <p className="text-[18px] md:text-[20px] text-darkGray">{bodyText}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
