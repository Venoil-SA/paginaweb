import { Valor } from "@/app/types/tipos";
import Valyac from "../../ValYac";

export default function Valores() {
  const val = [
    [
      {
        texto: "Liderazgo en todas las fases del proyecto",
        imagen: "/Group32.png",
        id: 1,
      },
      {
        texto: "Liderazgo en todas las fases del proyecto",
        imagen: "/Group32.png",
        id: 2,
      },
      {
        texto: "Liderazgo en todas las fases del proyecto",
        imagen: "/Group32.png",
        id: 3,
      },
    ],
    [
      {
        texto: "Liderazgo en todas las fases del proyecto",
        imagen: "/Group32.png",
        id: 4,
      },
      {
        texto: "Liderazgo en todas las fases del proyecto",
        imagen: "/Group32.png",
        id: 5,
      },
      {
        texto: "Liderazgo en todas las fases del proyecto",
        imagen: "/Group32.png",
        id: 6,
      },
    ],
  ];
  return (
    <div
      className={`w-screen h-screen bg-fixed bg-[url("/1737451360116.jpeg")] bg-cover`}
    >
      <div className="bg-white/50 w-full flex flex-row items-center justify-center h-full">
        <div className="w-1/3 flex flex-col h-1/2">
          {val[0].map((valor: Valor) => {
            return Valyac(valor);
          })}
        </div>
        <div className="w-1/3 h-full flex items-center justify-center">
          <div className="rounded-full bg-white w-96 h-96 p-6">
            <div className="rounded-full bg-gray-700 w-full p-6 h-full">
              <div
                className={`rounded-full bg-[url("/image.png")] bg-cover bg-center w-full h-full`}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-1/3  flex flex-col h-1/2">
          {val[1].map((valor: Valor) => {
            return Valyac(valor);
          })}
        </div>
      </div>
    </div>
  );
}
