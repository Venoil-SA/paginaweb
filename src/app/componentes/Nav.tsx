"use client";
import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { pop } from "../fonts/Fonts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function Nav() {
  const pathname = usePathname();
  const [lang, setLang] = useState("spanish");

  const getLangInfo = () => {
    switch (lang) {
      case "spanish":
        return {
          icon: <Image src="/argentina_flag.png" width={24} height={24} alt="Español" />,
          name: "Español"
        };
      case "english":
        return {
          icon: <Image src="/united_kingdom_flag.png" width={24} height={24} alt="English" />,
          name: "English"
        };
      default:
        return {
          icon: <Globe className="h-[1.2rem] w-[1.2rem]" />,
          name: "Idioma"
        };
    }
  };

  return (
    <nav className="h-24 w-screen flex justify-center items-center text-white bg-azul p-12 font-montserrat">
      <div className="w-1/4 flex items-center justify-center">
=======
import { pop } from "../fonts/Fonts";
import { motion } from "motion/react";
import ToggleSwitch from "./toggleSwitch";
export default function Nav() {
  return (
    <nav className="h-24 w-screen flex justify-around text-white  border-b-verde bg-azul p-12">
      <a href="/" className="w-1/4 flex items-center justify-center">
>>>>>>> 76031e9def9177f29d8736de0f542ad8bc949955
        <Image
          src="/LOGO HORIZONTAL-02 1.png"
          width={250}
          height={50}
<<<<<<< HEAD
          alt="VenOil Logo"
        />
      </div>
      <div
        style={pop.style}
        className="w-2/4 hidden h-full lg:flex text-center flex-row items-center text-base justify-around"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/"
            className={`hover:text-verde transition-all relative`}
          >
            Inicio
            {pathname === "/" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
            )}
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          <Link
            href="/operadora"
            className={`hover:text-verde transition-all relative`}
          >
            Operadora
            {pathname === "/operadora" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
            )}
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <Link
            href="/gestion"
            className={`hover:text-verde transition-all relative`}
          >
            Gestión Integrada
            {pathname === "/gestion" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
            )}
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
        >
          <Link
            href="/workWithUs"
            className={`hover:text-verde transition-all relative`}
          >
            Trabaja con nosotros
            {pathname === "/workWithUs" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
            )}
          </Link>
        </motion.div>
      </div>
      <div className="w-1/4 flex items-center justify-center text-black">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 bg-blue text-white rounded-full">
              {getLangInfo().icon}
              <span>{getLangInfo().name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLang("spanish")}>
              <Image src="/argentina_flag.png" width={22} height={22} alt="" className="mr-1" />
              Español
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang("english")}>
              <Image src="/united_kingdom_flag.png" width={22} height={22} alt="" className="mr-1" />
              English
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
=======
          alt="a"
        />
      </a>
      <div
        style={pop.style}
        className="w-2/4 hidden  h-full  lg:flex text-center flex-row items-center text-base justify-around"
      >
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hover:underline hover:decoration-verde transition-all"
          transition={{ duration: 0.2 }}
          href="/"
        >
          Inicio
        </motion.a>
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hover:underline hover:decoration-verde transition-all"
          transition={{ delay: 0.1, duration: 0.2 }}
          href="/operadora"
        >
          Operadora
        </motion.a>
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hover:underline hover:decoration-verde transition-all"
          transition={{ delay: 0.2, duration: 0.2 }}
          href="/gestion"
        >
          Gestion Integrada
        </motion.a>
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hover:underline hover:decoration-verde transition-all"
          transition={{ delay: 0.3, duration: 0.2 }}
          href="/workWithUs"
        >
          Trabaja con nosotros
        </motion.a>
      </div>
      <div className="w-1/4 flex items-center justify-center">
<ToggleSwitch/>
      </div>
    </nav>
  );
}
>>>>>>> 76031e9def9177f29d8736de0f542ad8bc949955
