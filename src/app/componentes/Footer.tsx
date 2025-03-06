import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { 
  FaAngleRight,
  FaPhoneAlt 
 } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-azul text-white w-full py-12 px-4 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center md:items-start">
          <Image
            src="/LOGO HORIZONTAL-03 1.png"
            width={250}
            height={50}
            alt="VenOil Logo"
            className="mb-4"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Mapa del Sitio</h2>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 hover:text-verde transition-colors">
              <FaAngleRight /> <span>Inicio</span>
            </Link>
            <Link href="/operadora" className="flex items-center gap-2 hover:text-verde transition-colors">
              <FaAngleRight /> <span>Operadora</span>
            </Link>
            <Link href="/gestion-integrada" className="flex items-center gap-2 hover:text-verde transition-colors">
              <FaAngleRight /> <span>Gestión Integrada</span>
            </Link>
            <Link href="/trabaja-con-nosotros" className="flex items-center gap-2 hover:text-verde transition-colors">
              <FaAngleRight /> <span>Trabaja con nosotros</span>
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Nuestro Contacto</h2>
          <div className="flex flex-col gap-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt  size={22}/> <span>+54 263 4782743</span>
            </p>
            <p className="flex items-start gap-2">
              <FaLocationDot className="mt-4" size={22}/>
              <span>
                Ruta 82, Complejo Chacras Park<br />
                Edificio Drago, Piso 5to, Oficina 507<br />
                Luján de Cuyo, Mendoza, Argentina
              </span>
            </p>
            <p className="flex items-center gap-2">
              <MdEmail size={22}/> <span>info@venoil-energia.com</span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Redes Sociales</h2>
          <div className="flex gap-4 justify-center md:justify-start text-sm">
            <a href="https://www.instagram.com/Venoil_Energia" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <SlSocialInstagram />
            </a>
            <a href="https://www.facebook.com/Venoil_Energia" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <SlSocialFacebook />
            </a>
            <a href="https://www.linkedin.com/company/Venoil_Energia" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <SlSocialLinkedin />
            </a>
            <a href="https://twitter.com/Venoil_Energia" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <SlSocialTwitter />
            </a>
          </div>
=======
import {
  SlArrowRight,
  SlCallOut,
  SlEnvolope,
  SlDirection,
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialLinkedin,
} from "react-icons/sl";
export default function Footer() {
  return (
    <footer className="bg-azul p-24 bottom-0 flex flex-col items-center md:items-start md:flex-row justify-around md:p-24 text-white gap-6 w-screen h-auto">
      <div>
        <Image
          src="/LOGO HORIZONTAL-03 1.png"
          width={250}
          height={50}
          alt="ab"
        />
      </div>
      <div className="flex gap-2 flex-col ">
        <h1 className="text-md font-bold text-center md:text-xl">
          Mapa del Sitio
        </h1>
        <div className="mr-24 flex flex-col gap-2 md:mr-0">
          <a href="/" className=" flex text-xs md:text-base gap-5">
            <SlArrowRight /> Inicio
          </a>
          <p className=" flex text-xs md:text-base gap-5">
            <SlArrowRight /> Operadora
          </p>
          <p className=" flex text-xs md:text-base gap-5">
            <SlArrowRight /> Gestion Integrada
          </p>
          <p className=" flex text-xs md:text-base gap-5">
            <SlArrowRight /> Trabaja con nosotros
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-col text-center">
        <h1 className="text-md font-bold text-center md:text-xl">
          Nuestro Contacto
        </h1>
        <div className=" md:mr-0 flex flex-col gap-2">
          <p className="flex text-xs md:text-base gap-5">
            <SlCallOut /> +54 263 4782743
          </p>
          <p className="flex text-xs md:text-base gap-5">
            <SlDirection /> Ruta 82, Complejo Chacras Park <br /> Edifcio Drago,
            piso 5to <br /> oficina 507, Lujan de Cuyo, Mendoza{" "}
          </p>
          <p className="flex text-xs md:text-base gap-5">
            <SlEnvolope /> info@venoil-energia.com{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-md font-bold text-center md:text-xl">
          Redes Sociales
        </h1>
        <div className="mr-24 flex flex-col gap-2  md:mr-0">
          <p className="flex gap-5 text-xs md:text-base">
            <SlSocialInstagram /> @Venoil_Energia
          </p>
          <p className="flex gap-5 text-xs md:text-base">
            <SlSocialFacebook /> @Venoil_Energia{" "}
          </p>
          <p className="flex gap-5 text-xs md:text-base">
            <SlSocialLinkedin /> @Venoil_Energia{" "}
          </p>
>>>>>>> 76031e9def9177f29d8736de0f542ad8bc949955
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 76031e9def9177f29d8736de0f542ad8bc949955
