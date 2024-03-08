import { montserrat } from "@/config/fonts";
import React from "react";

interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <>
      <div className="header w-full min-h-12 px-10 py-3 bg-zinc-800 justify-between items-center flex text-white">
        <div className="flex items-center gap-5 min-h-[21px] divide-x">
          <p className="text-2xl font-semibold leading-snug cursor-pointer">
            MAGNETO BPM
          </p>

          {/* <div className='pl-4 text-sm font-medium leading-snug flex gap-2 items-center'>
            {' '}
            <div className='p-1 rounded-full bg-white'>
              <img className='w-7 h-7 rounded-ful' src='/neiva_iconpng.png' alt='entidad' />
            </div>
            ALCALDÍA MUNICIPAL DE NEIVA-HUILA
          </div> */}
        </div>
      </div>

      <div
        style={{ backgroundImage: "url('/bg-login.png')" }}
        className="w-full h-no-tab bg-no-repeat bg-cover flex justify-center items-center"
      >
        <div className="h-[90%] max-h-[670px] w-[90%] max-w-screen-2xl  border-2 border-white rounded-xl flex items-center pl-7">
          <div
            style={{ backgroundImage: "url(/magneto_auth_icon.svg)" }}
            className="h-full bg-center bg-no-repeat bg-cover w-[504px] ml-14 mr-auto flex flex-col items-center justify-center"
          >
            <p className={`text-center text-zinc-800 text-xl font-medium ${montserrat.className} leading-loose`}>
              Bienvenido a:
            </p>

            {/* <img src="/LottieMagneto.gif" alt="magneto_logo" className='mb-2.5' /> */}
            <img src="/magneto.svg" alt="magneto_logo" className="mb-2.5" />
            <p className={`text-center text-zinc-800 text-xl font-medium leading-loose ${montserrat.className}`}>
              (Middleware para Arquitecturas de Gestión y Navegación Empresarial
              y Tecnológica Orquestada)
            </p>
          </div>

          {/* <img className='mr-auto ml-14' src='/magneto-login.png' /> */}
          {/* <HeroMagneto /> */}

          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
