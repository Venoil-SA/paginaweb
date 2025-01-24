import { popt } from "@/app/fonts/Fonts";
import Image from "next/image";

export default function Presidente() {
  return (
    <div className="w-screen flex flex-col items-center justify-center h-screen">
      <h1 className="text-verde text-5xl" style={popt.style}>
        Nuestro Presidente
      </h1>
      <div className="flex w-2/3 justify items-center p-24">
        <p className="text-clip">
          Presidente de VenOil Energía con 23 años en el gerenciamiento de
          proyectos de gas y petróleo en diferentes campos de Argentina.
          <br />
          <br /> Ocupó diferentes posiciones técnicas, gerenciales y directivas
          en empresas como Repsol e YPF.
          <br /> Su última función directiva estuvo focalizada en los activos
          del sur de la provincia de Mendoza. Obtuvo diferentes menciones de la
          alta dirección de ambas empresas, reconociendo sus excelentes
          resultados.
          <br />
          <br /> Gustavo es Ingeniero Electrónico y completó su formación
          académica capacitándose en programas de Dirección Ejecutiva (IAE) y de
          Alta Dirección (UCA). Posee amplia experiencia en producción,
          tratamiento y transporte de gas & petróleo, gerenciamiento de
          proyectos, negociación con socios, sindicatos y entes gubernamentales.
          <br />
          <br />
          Es Co-fundador de VenOil Energia. Todo esto hace de Gustavo un
          especialista de excelencia en la gestión de proyectos de Oil & Gas.
        </p>
        <Image src="/gustavo-naves2.png" width={850} height={200} alt="a" />
      </div>
    </div>
  );
}
