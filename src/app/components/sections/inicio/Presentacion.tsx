import { ButtonR } from "../../Buttons";
import { popt } from "@/app/fonts/Fonts";
export default function Presentacion() {
  return (
    <main className="w-screen flex items-center justify-center h-screen">
      <video
        src="/pozo.mp4"
        className="w-screen left-0 z-0 object-cover h-screen fill- absolute top-24"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-screen h-screen bg-gradient-to-b from-black/40 from-95% to-white/90"></div>
      <div
        style={popt.style}
        className="w-auto text-white  p-24 rounded-xl flex flex-col gap-5 items-center justify-center h-auto z-10 "
      >
        <h1 className="text-5xl">
          Impulsamos la <span className="text-verde">energia</span> del{" "}
          <span className="text-verde">futuro</span> con
        </h1>
        <h1 className="text-5xl">experiencia lider en OIL & Gas</h1>
        <p className="text-xl">
          Somos <span className="text-verde">Futuro</span> , Somos{" "}
          <span className="text-verde">Energia</span>
        </p>
        <div className="w-full h-full flex item-center justify-center gap-5">
          <ButtonR texto="VER MAS" color="blanco" dir="/" />
          <ButtonR texto="VISITAR" color="blanco" dir="/" />
        </div>
      </div>
    </main>
  );
}
