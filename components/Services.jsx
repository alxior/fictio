import React from "react";
import consultation from "../public/icons/consultation.png";
import operation from "../public/icons/operation.png";
import sketch from "../public/icons/sketch.png";
import ServiceCard from "./ServiceCard";

const Servicios = () => {
  return (
    <div className="container mx-auto mt-24">
      <div className="flex flex-row justify-between">
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
  );
};

export default Servicios;
