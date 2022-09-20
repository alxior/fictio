import React from "react";
import Image from "next/future/image";
import logo from "../public/icons/logo.png";
import instagram from "../public/socials/instagram.png";
import linkedin from "../public/socials/linkedin.png";
import facebook from "../public/socials/facebook.png";
import twitter from "../public/socials/twitter.png";

const Footer = () => {
  return (
    <div className="text-none mt-24 cursor-default bg-footerBg pb-8 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 pt-16 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2">
          <div className="pb-4 xs:col-span-2 md:col-span-3 lg:col-span-2 lg:pb-0">
            <div className="flex flex-row items-center space-x-2">
              <Image src={logo} alt="logo" className="h-[41px] w-[41px]" />
              <p className="text-[36px] font-black text-fictioRed">FICTIO</p>
            </div>
            <p className="text-[24px] text-white">
              El futuro de los servicios de tecnología.
            </p>
          </div>
          <div className="flex flex-col space-y-2 text-[20px]">
            <p className="text-white">Links</p>
            <a className="cursor-pointer text-footerGray">Contenido</a>
            <a className="cursor-pointer text-footerGray">Explorar</a>
            <a className="cursor-pointer text-footerGray">
              Términos y Servicios
            </a>
          </div>
          <div className=" flex flex-col space-y-2 text-[20px]">
            <p className="text-white">Comunidad</p>
            <a className="cursor-pointer text-footerGray">Centro de Ayuda</a>
            <a className="cursor-pointer text-footerGray">Blog</a>
            <a className="cursor-pointer text-footerGray">Noticias</a>
            <a className="cursor-pointer text-footerGray">Contacto</a>
          </div>
          <div className=" flex flex-col space-y-2 text-[20px]">
            <p className="text-white">Socios</p>
            <a className="cursor-pointer text-footerGray">Nuestros Socios</a>
            <a className="cursor-pointer text-footerGray">Hazte Socio</a>
          </div>
        </div>

        <div className="mt-12 flex flex-col space-y-8">
          <div className="flex flex-row space-x-8 md:w-fit md:self-end">
            <a href="https://www.instagram.com/">
              <Image
                src={instagram}
                alt="instagram"
                className="h-[30px] w-[30px]"
              />
            </a>
            <a href="https://www.linkedin.com/">
              <Image
                src={linkedin}
                alt="linkedin"
                className="h-[30px] w-[30px]"
              />
            </a>
            <a href="https://www.facebook.com/">
              <Image
                src={facebook}
                alt="facebook"
                className="h-[30px] w-[30px]"
              />
            </a>
            <a href="https://www.twitter.com/">
              <Image
                src={twitter}
                alt="twitter"
                className="h-[30px] w-[30px]"
              />
            </a>
          </div>
          <p className="text-[20px] text-footerGray">
            Copyright © 2022 Fictio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
