import React from "react";
import Image from "next/future/image";
import Stat from "./Stat";
import heroPicture from "../public/illustrations/hero.png";
import mastercard from "../public/partners/mastercard.png";
import paypal from "../public/partners/paypal.png";
import stripe from "../public/partners/stripe.png";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden font-poppins mt-16 select-none cursor-default">
      <div className="container mx-auto px-4">
        {/* GRID */}
        <div className="grid space-y-16 xl:space-y-0 lg:grid-cols-5 lg:grid-rows-6 xl:grid-rows-5">
          <div className="text-center self-center xl:self-auto lg:text-left lg:col-span-2 lg:pt-20 lg:row-span-4 xl:row-span-3">
            <p className="text-[28px] xs:text-[36px] sm:text-[42px] md:text-[48px] lg:text-[36px] xl:text-[48px] text-darkBlue font-semibold">
              Servicios De Nueva
            </p>
            <p className="text-[36px] xs:text-[48px] sm:text-[52px] md:text-[56px] lg:text-[42px] xl:text-[56px] text-fictioRed font-extrabold">
              GENERACIÓN
            </p>
            <p className="text-[28px] xs:text-[36px] sm:text-[42px] md:text-[48px] lg:text-[36px] xl:text-[48px] text-darkBlue font-semibold">
              Para El Profesional
            </p>
            <p className="text-[36px] xs:text-[48px] sm:text-[52px] md:text-[56px] lg:text-[42px] xl:text-[56px] text-fictioRed font-extrabold">
              MODERNO
            </p>
          </div>
          <Image
            src={heroPicture}
            alt="hero"
            className="px-4 lg:col-span-3 lg:row-span-4 xl:row-span-5 xl:self-center lg:px-0 xl:pl-16 xl:pb-16"
          />
          <p className="lg:col-span-5 lg:row-span-2 xl:col-span-2 lg:px-32 text-center font-poppins text-[20px] md:text-[24px] xl:p-0 xl:pt-4 xl:text-left xl:text-[20px] xl:row-span-2 text-darkGray lg:pt-6">
            Las metodologías más avanzadas para alcanzar los mejores resultados.
            En realidad no sabemos muy bien a qué nos dedicamos, esta empresa no
            existe.
          </p>
        </div>
      </div>
      {/* Associated Brands */}
      <div className="container mx-auto px-4 mt-20 xl:px-32 xl:mt-12">
        <div className="flex flex-row justify-between xs:px-8">
          <Image
            src={mastercard}
            alt="mastercard"
            className="h-[40px] xs:h-[50px] md:h-[60px] xl:h-[65px] w-auto"
          />
          <Image
            src={paypal}
            alt="paypal"
            className="h-[40px] xs:h-[50px] md:h-[60px] xl:h-[65px] w-auto"
          />
          <Image
            src={stripe}
            alt="stripe"
            className="h-[40px] xs:h-[50px] md:h-[60px] xl:h-[65px] w-auto"
          />
        </div>
      </div>
      {/* Stats */}
      {/* <div className="w-full flex justify-center bg-lightOrange h-[120px] mt-12">
        <div className="flex flex-row w-full max-w-[1280px] justify-between">
          <Stat mainText="10K+" secondaryText="Usuarios" />
          <Stat mainText="2M+" secondaryText="Transacciones" />
          <Stat mainText="150+" secondaryText="Socios" />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
