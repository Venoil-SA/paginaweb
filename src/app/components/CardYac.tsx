import { pop } from "../fonts/Fonts";
import { Yacimiento } from "../types/tipos";
import { ButtonR } from "./Buttons";

export default function CardYac({
  id,
  nombre,
  descripcion,
  imagen,
}: Yacimiento) {
  return (
    <div
      key={id}
      style={pop.style}
      className="h-auto rounded-xl p-2 flex w-auto gap-2 bg-white shadow-[rgba(7,_65,_210,_0.2)_0px_9px_30px]"
    >
      <div
        className={`bg-[url("/image2.png")] bg-cover w-1/2 h-full rounded-md`}
      ></div>
      <div className=" w-1/2 gap-2 flex flex-col items-center justify-center">
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <ButtonR texto="Leer mas" color="verde" dir="" />
      </div>
    </div>
  );
}
