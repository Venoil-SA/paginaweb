"use client";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const provinciasInfo = {
  Mendoza: {
    nombre: "Mendoza",
    contenido: "Incluye El Manzano (San Rafael, Mendoza).",
  },
  SantaCruz: {
    nombre: "Santa Cruz",
    contenido: `
      - Cañadón Salto
      - Cóndor
      - La Maggie
      - Chimen Aike
    `,
  },
};

export default function Mapa() {
  const [popupInfo, setPopupInfo] = useState(null);

  const handleHover = (province) => {
    console.log("Hovering over: ", province);
  };

  const handleClick = (province) => {
    setPopupInfo(provinciasInfo[province]);
  };

  return (
    <div className="h-screen w-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        className="w-full max-w-4xl mx-auto"
      >
        {/* Mendoza */}
        <motion.g
          id="Mendoza"
          initial={{ fill: "#FFFFFF", stroke: "#00FF00" }}
          whileHover={{ fill: "#00FF00" }}
          transition={{ duration: 0.3 }}
          onClick={() => handleClick("Mendoza")}
          style={{ cursor: "pointer" }}
        >
          <path d="M20,30 L40,50 L60,30 Z" /> {/* Ejemplo de forma */}
        </motion.g>

        {/* Santa Cruz */}
        <motion.g
          id="SantaCruz"
          initial={{ fill: "#FFFFFF", stroke: "#00FF00" }}
          whileHover={{ fill: "#00FF00" }}
          transition={{ duration: 0.3 }}
          onClick={() => handleClick("SantaCruz")}
          style={{ cursor: "pointer" }}
        >
          <path d="M100,200 L120,220 L140,200 Z" /> {/* Ejemplo de forma */}
        </motion.g>
      </svg>

      {/* Popup */}
      {popupInfo && (
        <Dialog open={!!popupInfo} onOpenChange={() => setPopupInfo(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{popupInfo.nombre}</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
