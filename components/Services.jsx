import React from "react";
import consultation from "../public/icons/consultation.png";
import operation from "../public/icons/operation.png";
import sketch from "../public/icons/sketch.png";
import pointer from "../public/icons/pointer.png";
import it from "../public/illustrations/it.png";
import ServiceCard from "./ServiceCard";
import Image from "next/future/image";

const Servicios = () => {
  return (
    <div>
      {/* Service Cards */}
      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-wrap justify-evenly">
          <ServiceCard
            title="Consultoría"
            text="Servicios de asesoramiento para todo sector tecnológico con los mejores especialistas."
            color="bg-fictioYellow"
            fadedColor="bg-fictioYellow/25"
            imgSrc={consultation}
            imgAlt="consultation"
          />
          <ServiceCard
            title="Implementación"
            text="Integramos tus planes de la forma más eficiente para alcanzar los mejores resultados."
            color="bg-fictioRed"
            fadedColor="bg-fictioRed/25"
            imgSrc={operation}
            imgAlt="operation"
          />
          <ServiceCard
            title="Diseño"
            text="Creamos los planos de tu proyecto para poner tus objetivos en marcha de forma rápida y eficaz."
            color="bg-fictioBlue"
            fadedColor="bg-fictioBlue/25"
            imgSrc={sketch}
            imgAlt="sketch"
          />
        </div>
      </div>
      {/* IT Support */}
      {/* <div className="max-w-5xl mx-auto">
        <div className="flex flex-row mt-24">
          <div className="w-3/4 flex flex-col text-center items-center justify-center font-poppins">
            <p className="text-[36px] font-semibold text-darkBlue">
              Soporte de 24 horas, todos los días, a
            </p>
            <p className="text-[40px] font-bold text-fictioRed">
              UN SOLO CLICK.
            </p>
            <div className="flex flex-row items-center justify-center px-4 py-2 mt-4 bg-fictioBlue rounded-lg shadow-fictio cursor-pointer">
              <p className="text-white font-semibold text-[24px]">
                ¿Tienes dudas? Contáctanos.
              </p>
              <Image
                src={pointer}
                alt="pointer"
                className="w-[48px] h-[48px]"
              />
            </div>
          </div>
          <div className="w-1/4 items-center justify-center">
            <Image src={it} alt={it} className="object-contain" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Servicios;
