import React, { useState } from "react";
import Image from "next/future/image";
import logo from "../public/icons/logo.png";
import menu from "../public/icons/menu.png";
import close from "../public/icons/close.png";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6" id="inicio">
      <div className="flex flex-row justify-between font-poppins items-center">
        <div className="flex flex-row space-x-2 items-center">
          <Image src={logo} alt="Fictio" className="w-[40px] h-[40px]" />
          <p className="hidden xxs:block font-black text-fictioRed text-[36px] ">
            FICTIO
          </p>
        </div>

        {/* Small screen menu button toggle */}
        <Image
          src={toggled ? close : menu}
          alt={toggled ? "close" : "menu"}
          className="w-[40px] h-[40px] cursor-pointer md:hidden"
          onClick={() => setToggled(!toggled)}
        />

        {/* Large screen menu items */}
        <ul className="hidden md:flex list-none  flex-row items-center space-x-16 text-[20px]">
          <li className="text-darkGray hover:text-fictioRed cursor-pointer">
            Inicio
          </li>
          <li className="text-darkGray hover:text-fictioRed cursor-pointer">
            Empresa
          </li>
          <li className="text-darkGray hover:text-fictioRed cursor-pointer">
            Servicios
          </li>
          <li className="text-darkGray hover:text-fictioRed cursor-pointer">
            Clientes
          </li>
        </ul>
      </div>

      {/* Small screen menu overlay when toggled */}
      <div className="relative md:hidden">
        <div
          className={`${
            !toggled ? "hidden" : "flex"
          }  absolute right-0 text-center bg-white shadow-2xl mt-4 py-12 px-20 rounded-lg sidemenu`}
        >
          <ul className="list-none font-semibold flex-row space-y-12 text-darkGray text-[28px]">
            <li className="cursor-pointer hover:text-fictioRed">
              <a href="#inicio">Inicio</a>
            </li>
            <li className="cursor-pointer hover:text-fictioRed">
              <a href="#empresa">Empresa</a>
            </li>
            <li className="cursor-pointer hover:text-fictioRed">
              <a href="#servicios">Servicios</a>
            </li>
            <li className="cursor-pointer hover:text-fictioRed">
              <a href="#clientes">Clientes</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
