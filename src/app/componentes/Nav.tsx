"use client";
import Image from "next/image";
import { pop } from "../fonts/Fonts";
import { motion } from "motion/react";
export default function Nav() {
  return (
    <nav className="h-24 w-screen flex justify-around text-white bg-azul p-12">
      <div className="w-1/4 flex items-center justify-center">
        <Image
          src="/LOGO HORIZONTAL-02 1.png"
          width={250}
          height={50}
          alt="a"
        />
      </div>
      <div
        style={pop.style}
        className="w-2/4 h-full flex text-center flex-row items-center text-xl justify-around"
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
          href="/"
        >
          Operadora
        </motion.a>
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hover:underline hover:decoration-verde transition-all"
          transition={{ delay: 0.2, duration: 0.2 }}
          href="/"
        >
          Gestion Integrada
        </motion.a>
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hover:underline hover:decoration-verde transition-all"
          transition={{ delay: 0.3, duration: 0.2 }}
          href="/"
        >
          Trabaja con nosotros
        </motion.a>
      </div>
      <div className="w-1/4 flex items-center justify-center">
        <div className="w-24 h-12 bg-red-500 rounded-xl flex items-center p-2">
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
      </div>
    </nav>
  );
}
