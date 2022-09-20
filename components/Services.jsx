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
      <div className="container mx-auto mt-16 cursor-default select-none px-4">
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
      <div className="container mx-auto mt-32 lg:mt-20 max-w-[1050px] px-4">
        <div className="grid grid-cols-1 font-poppins lg:grid-cols-6 lg:grid-rows-6">
          <div className="text-center lg:col-span-4 lg:row-span-4 lg:mx-auto lg:place-self-end">
            <p className="text-[24px] font-semibold text-darkBlue xs:text-[30px] md:text-[35px]">
              Soporte de 24 horas, todos los días, a
            </p>
            <p className="text-[28px] font-bold text-fictioRed xs:text-[36px] lg:text-[40px]">
              UN SOLO CLICK.
            </p>
          </div>
          <Image
            src={it}
            alt={it}
            className="place-self-center p-8 xs:p-20 lg:col-span-2 lg:row-span-6 lg:mt-20 lg:max-w-[300px] lg:p-4"
          />
          <div className="mx-auto mt-6 flex cursor-pointer flex-row items-center justify-between space-x-4 rounded-lg bg-fictioBlue px-4 py-2 xs:py-4 shadow-fictio xs:w-max lg:col-span-4 lg:row-span-2 lg:place-self-start ">
            <p className="text-center text-[18px] font-semibold text-white xs:text-[20px] md:text-[24px]">
              ¿Tienes dudas? Contáctanos.
            </p>
            <Image src={pointer} alt="pointer" className="hidden xs:block h-[36px] w-[36px]" />
          </div>
        </div>
        {/* <div className="mt-24 flex flex-row">
          <div className="flex w-3/4 flex-col items-center justify-center text-center font-poppins">
            <p className="text-[36px] font-semibold text-darkBlue">
              Soporte de 24 horas, todos los días, a
            </p>
            <p className="text-[40px] font-bold text-fictioRed">
              UN SOLO CLICK.
            </p>
            <div className="mt-4 flex cursor-pointer flex-row items-center justify-center rounded-lg bg-fictioBlue px-4 py-2 shadow-fictio">
              <p className="text-[24px] font-semibold text-white">
                ¿Tienes dudas? Contáctanos.
              </p>
              <Image
                src={pointer}
                alt="pointer"
                className="h-[48px] w-[48px]"
              />
            </div>
          </div>
          <div className="w-1/4 items-center justify-center">
            <Image src={it} alt={it} className="object-contain" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Servicios;
