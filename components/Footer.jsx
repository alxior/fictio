import React from "react";
import Image from "next/future/image";
import logo from "../public/icons/logo.png";
import instagram from "../public/socials/instagram.png";
import linkedin from "../public/socials/linkedin.png";
import facebook from "../public/socials/facebook.png";
import twitter from "../public/socials/twitter.png";

const Footer = () => {
  return (
    <div className="mt-24 bg-footerBg font-poppins">
      <div className="container mx-auto grid grid-cols-5 grid-rows-2 pt-16">
        <div className="col-span-2">
          <div className="flex flex-row items-center space-x-2">
            <Image src={logo} alt="logo" className="w-[41px] h-[41px]" />
            <p className="font-black text-[36px] text-fictioRed">FICTIO</p>
          </div>
          <p className="text-white text-[24px]">
            El futuro de los servicios de tecnología.
          </p>
        </div>
        <div className="col-span-3 flex flex-row justify-between pl-16 pt-4">
          <div className=" flex flex-col text-[20px] space-y-2">
            <p className="text-white">Links</p>
            <a href="" className="text-footerGray">
              Contenido
            </a>
            <a href="" className="text-footerGray">
              Explorar
            </a>
            <a href="" className="text-footerGray">
              Términos y Servicios
            </a>
          </div>
          <div className=" flex flex-col text-[20px] space-y-2">
            <p className="text-white">Comunidad</p>
            <a href="" className="text-footerGray">
              Centro de Ayuda
            </a>
            <a href="" className="text-footerGray">
              Blog
            </a>
            <a href="" className="text-footerGray">
              Noticias
            </a>
            <a href="" className="text-footerGray">
              Contacto
            </a>
          </div>
          <div className=" flex flex-col text-[20px] space-y-2">
            <p className="text-white">Socios</p>
            <a href="" className="text-footerGray">
              Nuestros Socios
            </a>
            <a href="" className="text-footerGray">
              Hazte Socio
            </a>
          </div>
        </div>
        <div className="col-span-2 pt-24">
          <p className="text-[24px] text-footerGray">
            Copyright © 2022 Fictio.
          </p>
        </div>
        <div className="col-span-3 flex flex-row space-x-8 justify-end pt-24">
          <a href="https://www.instagram.com/">
            <Image
              src={instagram}
              alt="instagram"
              className="w-[30px] h-[30px]"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <Image
              src={linkedin}
              alt="linkedin"
              className="w-[30px] h-[30px]"
            />
          </a>
          <a href="https://www.facebook.com/">
            <Image
              src={facebook}
              alt="facebook"
              className="w-[30px] h-[30px]"
            />
          </a>
          <a href="https://www.twitter.com/">
            <Image src={twitter} alt="twitter" className="w-[30px] h-[30px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
