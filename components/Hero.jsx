import React from "react";
import Image from "next/future/image";
import Stat from "./Stat";
import heroPicture from "../public/illustrations/hero.png";
import mastercard from "../public/partners/mastercard.png";
import paypal from "../public/partners/paypal.png";
import stripe from "../public/partners/stripe.png";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Text and image */}
      <div className="w-full flex justify-center">
        <div className="flex flex-row w-full max-w-[1280px] py-24 mt-4">
          <div className="w-2/5">
            <p className="font-poppins text-[48px] text-darkBlue font-semibold">
              Servicios De Nueva
            </p>
            <p className="font-poppins text-[56px] text-fictioRed font-extrabold">
              GENERACIÓN
            </p>
            <p className="font-poppins text-[48px] text-darkBlue font-semibold">
              Para El Profesional
            </p>
            <p className="font-poppins text-[56px] text-fictioRed font-extrabold">
              MODERNO
            </p>
            <br />
            <p className="font-poppins text-[20px] text-darkGray">
              Las metodologías más avanzadas para alcanzar los mejores
              resultados. En realidad no sabemos muy bien a qué nos dedicamos,
              esta empresa no existe.
            </p>
          </div>
          <Image
            src={heroPicture}
            alt="Fictio Hero"
            className="w-3/5 h-auto pl-16"
          />
        </div>
      </div>
      {/* Associated Brands */}
      <div className="w-full flex justify-center">
        <div className="flex flex-row w-full max-w-[900px] justify-between">
          <Image
            src={mastercard}
            alt="mastercard"
            className="h-[65px] w-auto"
          />
          <Image src={paypal} alt="paypal" className="h-[65px] w-auto" />
          <Image src={stripe} alt="stripe" className="h-[65px] w-auto" />
        </div>
      </div>
      {/* Stats */}
      <div className="w-full flex justify-center bg-fictioYellow/25 h-[120px] mt-12">
        <div className="flex flex-row w-full max-w-[1280px] justify-between">
          <Stat mainText="10K+" secondaryText="Usuarios" />
          <Stat mainText="2M+" secondaryText="Transacciones" />
          <Stat mainText="150+" secondaryText="Socios" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
