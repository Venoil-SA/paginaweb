import { popt } from "@/app/fonts/Fonts";
import MapaF from "../../MapaF";

export default function Mapa() {
  return (
    <div className="h-screen flex items-center justify-center p-24 w-screen">
      <MapaF />
      <div className="w-1/2 flex flex-col bg- justify-center h-full">
        <div
          style={popt.style}
          className="bg-gradient-to-br bg-clip-text from-verde to-azul"
        >
          <h1 className="text-9xl text-transparent">
            NUESTRA PRESENCIA EN EL PAIS
          </h1>
        </div>
        <p> Haz click en las provincias y conoce nuestros puntos</p>
      </div>
    </div>
  );
}
