import CardYac from "../../CardYac";
import { Yacimiento } from "@/app/types/tipos";

export default function Campos() {
  const cards: Yacimiento[] = [
    {
      id: 1,
      nombre: "El Manzano",
      descripcion:
        "VenOil Energía actualmente opera el Área El Manzano Oeste, ubicada en el departamento Malargüe, al sur de la provincia de Mendoza, República Argentina.",
      imagen: "/image 2.png",
    },
    {
      id: 2,
      nombre: "Chimenaike",
      descripcion:
        "VenOil Energía actualmente opera el Área El Manzano Oeste, ubicada en el departamento Malargüe, al sur de la provincia de Mendoza, República Argentina.",
      imagen: "/image 2.png",
    },
    {
      id: 3,
      nombre: "Condor",
      descripcion:
        "VenOil Energía actualmente opera el Área El Manzano Oeste, ubicada en el departamento Malargüe, al sur de la provincia de Mendoza, República Argentina.",
      imagen: "/image 2.png",
    },
    {
      id: 4,
      nombre: "Canadon Salto",
      descripcion:
        "VenOil Energía actualmente opera el Área El Manzano Oeste, ubicada en el departamento Malargüe, al sur de la provincia de Mendoza, República Argentina.",
      imagen: "/image 2.png",
    },
    {
      id: 5,
      nombre: "Piedras Coloradas",
      descripcion:
        "VenOil Energía actualmente opera el Área El Manzano Oeste, ubicada en el departamento Malargüe, al sur de la provincia de Mendoza, República Argentina.",
      imagen: "/image 2.png",
    },
    {
      id: 6,
      nombre: "Cacheuta",
      descripcion:
        "VenOil Energía actualmente opera el Área El Manzano Oeste, ubicada en el departamento Malargüe, al sur de la provincia de Mendoza, República Argentina.",
      imagen: "/image 2.png",
    },
    {
      id: 7,
      nombre: "Estancia La Maggie",
      descripcion:
        "VenOil Energía actualmente opera el Área El Manzano Oeste, ubicada en el departamento Malargüe, al sur de la provincia de Mendoza, República Argentina.",
      imagen: "/image 2.png",
    },
  ];
  return (
    <section className="w-screen h-auto flex items-center justify-center p-24  gap-5 bg-white">
      <div className="grid grid-cols-2 w-2/3 h-auto gap-5">
        {cards.map((y) => {
          return (
            <CardYac
              key={y.id}
              id={y.id}
              nombre={y.nombre}
              descripcion={y.descripcion}
              imagen={y.imagen}
            />
          );
        })}
      </div>
    </section>
  );
}
