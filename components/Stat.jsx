import React from "react";

const Stat = ({ mainText, secondaryText }) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <p className="font-poppins text-darkBlue font-bold text-[48px]">
        {mainText}
      </p>
      <p className="font-poppins text-fictioRed font-bold text-[36px]">
        {secondaryText}
      </p>
    </div>
  );
};

export default Stat;
