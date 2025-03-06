import CardYac from "../../CardYac";
import { Yacimiento } from "@/app/types/tipos";
import textos from "@/lib/textos";
export default function Campos() {
  const campos = textos.inicio.campos;
  const cards: Yacimiento[] = [
    {
      id: 1,
      nombre: "El Manzano",
      descripcion: campos.manzano,
      imagen: "/image 2.png",
    },
    {
      id: 2,
      nombre: "Chimenaike",
      descripcion: campos.chimenaike,
<<<<<<< HEAD
      imagen: "/image 2.png",
=======
      imagen: "/chimen.HEIC",
>>>>>>> 76031e9def9177f29d8736de0f542ad8bc949955
    },
    {
      id: 3,
      nombre: "Condor",
      descripcion: campos.condor,
<<<<<<< HEAD
      imagen: "/image 2.png",
=======
      imagen: "/1737451360116.jpeg",
>>>>>>> 76031e9def9177f29d8736de0f542ad8bc949955
    },
    {
      id: 4,
      nombre: "Cañadon Salto",
      descripcion: campos.canadonsalto,
      imagen: "/image 2.png",
    },
    {
      id: 5,
      nombre: "Piedras Coloradas",
      descripcion: campos.piedrascoloradas,
      imagen: "/image 2.png",
    },
    {
      id: 6,
      nombre: "Cacheuta",
      descripcion: campos.cacheuta,
      imagen: "/image 2.png",
    },
    {
      id: 7,
      nombre: "Estancia La Maggie",
      descripcion: campos.maggie,
<<<<<<< HEAD
      imagen: "/image 2.png",
=======
      imagen: "/condor.jpeg",
>>>>>>> 76031e9def9177f29d8736de0f542ad8bc949955
    },
  ];
  return (
    <section className="w-screen h-auto flex items-center justify-center p-2 lg:p-24 gap-2 lg:gap-5 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full h-auto gap-2 lg:gap-5">
        {cards.map((y, index) => {
          const isLastRowSingle =
            cards.length % 3 === 1 && index === cards.length - 1;
          return (
            <CardYac
              key={y.id}
              id={y.id}
              nombre={y.nombre}
              descripcion={y.descripcion}
              imagen={y.imagen}
              last={isLastRowSingle}
            />
          );
        })}
      </div>
    </section>
  );
}
