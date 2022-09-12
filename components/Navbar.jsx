import React from "react";
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-row py-6 justify-between w-full max-w-[1280px]">
          <div className="flex flex-row space-x-2">
            <Image src="/icons/logo.png" alt="Fictio" width="40" height="40" className="object-contain"/>
            <p className="font-poppins font-black text-fictioRed text-[36px] ">FICTIO</p>
          </div>
          <ul className="list-none flex flex-row items-center space-x-16">
            <li className="font-poppins text-darkGray font-normal cursor-pointer text-[20px]">Inicio</li>
            <li className="font-poppins text-darkGray font-normal cursor-pointer text-[20px]">Empresa</li>
            <li className="font-poppins text-darkGray font-normal cursor-pointer text-[20px]">Servicios</li>
            <li className="font-poppins text-darkGray font-normal cursor-pointer text-[20px]">Clientes</li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
