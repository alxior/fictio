import React from "react";
import Image from "next/future/image";
import handshake from "../public/illustrations/handshake.png";
import arrow from "../public/icons/arrow.png";

const CTA = () => {
  return (
    <div className="container mx-auto mt-24">
      <div className="flex justify-between items-center px-8">
        <div className="font-poppins font-semibold">
          <p className="text-[40px] text-fictioRed">HAGÁMOSLO JUNTOS.</p>
          <p className="text-[36px] text-darkBlue">
            Deseamos ver tus proyectos crecer, pasemos a la acción.
          </p>
        </div>
        <Image src={handshake} alt="handshake" className="h-[400px] w-auto" />
      </div>
      <div className="mx-auto flex flex-col items-center">
        <div className="px-16 py-4 bg-fictioBlue rounded-lg shadow-lg cursor-pointer">
          <p className="font-poppins text-[40px] text-white font-semibold">
            ¡EMPECEMOS!
          </p>
        </div>
        <Image src={arrow} alt="arrow" className="h-[140px] w-auto" />
      </div>
    </div>
  );
};

export default CTA;
