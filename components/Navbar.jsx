import React, { useState } from "react";
import Image from "next/future/image";
import logo from "../public/icons/logo.png";
import menu from "../public/icons/menu.png";
import close from "../public/icons/close.png";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="container mx-auto select-none px-4 py-6" id="home">
      <div className="flex flex-row items-center justify-between font-poppins">
        <div className="flex flex-row items-center space-x-2">
          <Image src={logo} alt="Fictio" className="h-[40px] w-[40px]" />
          <p className="hidden cursor-default text-[36px] font-black text-fictioRed xxs:block ">
            FICTIO
          </p>
        </div>

        {/* Small screen menu button toggle */}
        <Image
          src={toggled ? close : menu}
          alt={toggled ? "close" : "menu"}
          className="h-[40px] w-[40px] cursor-pointer md:hidden"
          onClick={() => setToggled(!toggled)}
        />

        {/* Large screen menu items */}
        <ul className="hidden list-none flex-row  items-center space-x-16 text-[20px] md:flex">
          <li className="cursor-pointer text-darkGray hover:text-fictioRed">
            <a href="#home">Inicio</a>
          </li>
          <li className="cursor-pointer text-darkGray hover:text-fictioRed">
            <a href="#about">Empresa</a>
          </li>
          <li className="cursor-pointer text-darkGray hover:text-fictioRed">
            <a href="#services">Servicios</a>
          </li>
          <li className="cursor-pointer text-darkGray hover:text-fictioRed">
            <a href="#clients">Clientes</a>
          </li>
        </ul>
      </div>

      {/* Small screen menu overlay when toggled */}
      <div className="relative md:hidden">
        <div
          className={`${
            !toggled ? "hidden" : "flex"
          }  sidemenu absolute right-0 mt-4 rounded-lg border border-fictioRed/25 bg-white py-6 px-20 text-center shadow-2xl`}
        >
          <ul className="list-none flex-row divide-y text-[28px] font-semibold text-darkGray">
            <li className="cursor-pointer py-6 hover:text-fictioRed">
              <a href="#home" onClick={() => setToggled(false)}>
                Inicio
              </a>
            </li>
            <li className="cursor-pointer py-6 hover:text-fictioRed">
              <a href="#about" onClick={() => setToggled(false)}>
                Empresa
              </a>
            </li>
            <li className="cursor-pointer py-6 hover:text-fictioRed">
              <a href="#services" onClick={() => setToggled(false)}>
                Servicios
              </a>
            </li>
            <li className="cursor-pointer py-6 hover:text-fictioRed">
              <a href="#clients" onClick={() => setToggled(false)}>
                Clientes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
