import Image from "next/future/image";
import React from "react";
import elena from "../public/profiles/elena.png";
import margaret from "../public/profiles/margaret.png";
import john from "../public/profiles/john.png";
import TestimonyCard from "./TestimonyCard";

const Testimonios = () => {
  return (
    <div className="container mx-auto mt-44 px-4">
      <div className="flex flex-col space-y-16">
        <p className="text-center font-poppins text-[24px] xs:text-[30px] md:text-[35px] lg:text-[40px] font-semibold text-darkBlue lg:pb-8">
          Qué opinan nuestros{" "}
          <span className="text-[28px] xs:text-[36px] lg:text-[40px] font-bold text-fictioRed">CLIENTES.</span>
        </p>
        <TestimonyCard
          imgSrc={elena}
          imgAlt="elena"
          mainText="“Fictio me ha ayudado a completar mi proyecto sin problemas, lo recomiendo al 100%.”"
          name="Elena"
        />
        <TestimonyCard
          imgSrc={margaret}
          imgAlt="margaret"
          mainText="“El servicio técnico ha sido muy rápido y eficaz, no dudaré en volver a llamar para futuros planes.”"
          name="Margaret"
        />
        <TestimonyCard
          imgSrc={john}
          imgAlt="john"
          mainText="“Mi equipo ha podido implementar un nuevo servicio de forma eficiente gracias a la ayuda de Fictio.”"
          name="John"
        />
      </div>
    </div>
  );
};

export default Testimonios;
