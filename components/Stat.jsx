import React from "react";

const Stat = ({ mainText, secondaryText }) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-2 py-4">
      <p className="font-poppins text-darkBlue font-bold text-[28px] xs:text-[40px] xl:text-[48px]">
        {mainText}
      </p>
      <p className="font-poppins text-fictioRed font-bold text-[24px] xs:text-[32px] xl:text-[36px]">
        {secondaryText}
      </p>
    </div>
  );
};

export default Stat;
