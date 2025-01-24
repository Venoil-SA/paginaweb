import Presentacion from "./components/sections/inicio/Presentacion";

import Enlace from "./components/sections/inicio/Enlace";
import Campos from "./components/sections/inicio/Campos";
import Presidente from "./components/sections/inicio/Presidente";
import Noticias from "./components/sections/inicio/Noticias";
import Valores from "./components/sections/inicio/Valores";

export default function Home() {
  return (
    <div className="">
      <Presentacion />
      <Campos />
      <Enlace />
      <Presidente />
      <Noticias />
      <Valores />
    </div>
  );
}
