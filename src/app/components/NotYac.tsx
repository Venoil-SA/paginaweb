import { pop } from "../fonts/Fonts";
import { Noticia } from "../types/tipos";
import { ButtonR } from "./Buttons";

export function TarjNot({ id, titulo, descripcion, imagen }: Noticia) {
  return (
    <div
      key={id}
      style={pop.style}
      className={`h-full rounded-xl p-2 flex flex-col w-full gap-2 bg-white shadow-[rgba(7,_65,_210,_0.2)_0px_9px_30px]`}
    >
      <div className={`w-full h-1/2 `}>
        <img src={imagen} className="w-full rounded-lg h-full "></img>
      </div>
      <div className=" w-full h-1/2 justify-around gap-2 flex flex-col  p-2">
        <h1 className="w-full text-2xl border-b-2 border-b-verde">{titulo}</h1>
        <p className="truncate">{descripcion}</p>
        <div className="w-1/2">
          <ButtonR texto="Leer mas" color="verde" dir="" />
        </div>
      </div>
    </div>
  );
}

export function TarjNotMini({ id, titulo, descripcion, imagen }: Noticia) {
  return (
    <div
      key={id}
      style={pop.style}
      className={`h-72 text-white rounded-xl p-2 flex flex-col w-full gap-2 bg-white shadow-[rgba(7,_65,_210,_0.2)_0px_9px_30px]`}
    >
      <div
        style={{ backgroundImage: `url("${imagen}")` }}
        className={`bg-[url("/image2.png")] bg-center bg-cover w-full h-5/6 rounded-xl`}
      >
        <div className="w-full flex flex-col justify-around p-12 h-full bg-gradient-to-b from-black/20 from-50% to-black/60">
          <h1 className="text-xl">{titulo}</h1>
          <p className="truncate">{descripcion}</p>
        </div>
      </div>
      <div className=" w-full h-1/6 justify-around gap-2 flex flex-col">
        <ButtonR texto="Leer mas" dir="/" color="verde" />
      </div>
    </div>
  );
}
