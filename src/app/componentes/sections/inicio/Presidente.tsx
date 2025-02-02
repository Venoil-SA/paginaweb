import { popt } from "@/app/fonts/Fonts";
import textos from "@/lib/textos";
import Image from "next/image";

export default function Presidente() {
  const text = textos.inicio.presidente;
  return (
    <div className="w-screen flex flex-col items-center justify-center h-screen">
      <h1 className="text-verde text-5xl" style={popt.style}>
        Nuestro Presidente
      </h1>
      <div className="flex w-2/3 justify items-center p-24">
        <div className="flex flex-col gap-2">
          {text.map((e, i) => {
            return (
              <p key={i} className="text-clip">
                {e}
              </p>
            );
          })}
        </div>
        <Image src="/gustavo-naves2.png" width={850} height={200} alt="a" />
      </div>
    </div>
  );
}
