import React from "react";
import Image from "next/future/image";
import services from "../public/illustrations/services.png";
import star from "../public/icons/star.png";
import idea from "../public/icons/idea.png";
import security from "../public/icons/security.png";
import AboutCard from "./AboutCard";

const Empresa = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] mt-24 justify-center flex">
          <p className="font-poppins font-semibold text-[40px] text-darkBlue">
            ¿Tienes proyectos? Tenemos{" "}
            <span className="font-bold text-fictioRed">SOLUCIONES.</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <div className="w-full max-w-[1280px] flex justify-center">
          <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-y-14">
            <div className="row-span-3 flex items-center pr-12">
              <Image src={services} alt="services" className="object-contain" />
            </div>
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
      </div>
    </div>
  );
};

export default Empresa;
