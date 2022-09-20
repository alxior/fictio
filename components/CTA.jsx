import React from "react";
import Image from "next/future/image";
import handshake from "../public/illustrations/handshake.png";
import arrow from "../public/icons/arrow.png";

const CTA = () => {
  return (
    <div className="container mx-auto mt-32 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-8 lg:space-y-0 cursor-default text-none">
        <div className="font-poppins xl:pt-24">
          <p className="text-[30px] sm:text-[34px] lg:text-[40px] font-bold text-fictioRed">
            HAGÁMOSLO JUNTOS.
          </p>
          <p className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-darkBlue">
            Deseamos ver tus proyectos crecer, pasemos a la acción.
          </p>
        </div>
        <Image src={handshake} alt="handshake" className="max-h-[400px] w-auto" />
      </div>
      <div className="mx-auto flex flex-col items-center mt-8">
        <div className="cursor-pointer rounded-lg bg-fictioBlue px-4 md:px-8 lg:px-16 py-4 shadow-lg">
          <p className="font-poppins text-[28px] lg:text-[40px] font-semibold text-white">
            ¡EMPECEMOS!
          </p>
        </div>
        <Image src={arrow} alt="arrow" className="h-[140px] w-auto" />
      </div>
    </div>
  );
};

export default CTA;
