import { Valor } from "../types/tipos";

export default function Valyac(valor: Valor, tipo: number) {
  return (
    <div
      key={valor.id}
      className=" w-full h-full flex flex-row items-center justify-center gap-2 p-2"
    >
      <h1>{valor.texto}</h1>
      <div className="w-4 rounded-xl h-2/3 bg-gradient-to-b from-verde to-azul"></div>
      <div
        className={`w-12 h-12 rounded-full bg-cover bg-center bg-[url("/1737451360116.jpeg")]`}
        style={{ backgroundImage: `url("${valor.imagen}")` }}
      ></div>
    </div>
  );
}
