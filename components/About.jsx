import React from "react";
import Image from "next/future/image";
import services from "../public/illustrations/services.png";
import star from "../public/icons/star.png";
import idea from "../public/icons/idea.png";
import security from "../public/icons/security.png";
import AboutCard from "./AboutCard";

const Empresa = () => {
  return (
    <div id="about" className="container mx-auto px-4 cursor-default select-none">
      <div className="mt-32 xl:mt-40 text-center">
        <p className="font-poppins font-semibold text-[28px] xs:text-[34px] xl:text-[40px] text-darkBlue">
          ¿Tienes proyectos? Tenemos{" "}
          <span className="font-black text-fictioRed">SOLUCIONES.</span>
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-3 gap-y-14 md:gap-y-16 xl:pt-12 mt-24">
        <Image
          src={services}
          alt="services"
          className="row-span-3 place-self-center pb-12 sm:pb-16"
        />
        <AboutCard
          imgSrc={star}
          imgAlt="star"
          mainText="Calidad."
          bodyText="Confía en los mejores profesionales del sector para ofrecer servicios óptimos."
        />
        <AboutCard
          imgSrc={idea}
          imgAlt="idea"
          mainText="Innovación."
          bodyText="No existen dos planes iguales. Buscamos las
              mejores opciones para tí."
        />
        <AboutCard
          imgSrc={security}
          imgAlt="security"
          mainText="Seguridad."
          bodyText="Protección de principio a fin para tus datos e
              ideas, con garantías."
        />
      </div>
    </div>
  );
};

export default Empresa;
