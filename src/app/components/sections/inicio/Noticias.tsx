"use client";
import { Noticia } from "@/app/types/tipos";
import { TarjNot, TarjNotMini } from "../../NotYac";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { pop, popt } from "@/app/fonts/Fonts";

export default function Noticias() {
  const notg: Noticia[] = [
    {
      id: 1,
      imagen: "/image2.png",
      titulo: "titulo",
      descripcion:
        "iaoisdhnaisudnasoidanusdi nasioudnas ianisduas diausbnd iasn bdiaus da",
    },
    {
      id: 2,
      imagen: "/image2.png",
      titulo: "titulo",
      descripcion:
        "iaoisdhnaisudnasoidanusdi nasioudnas ianisduas diausbnd iasn bdiaus da",
    },
    {
      id: 3,
      imagen: "/image2.png",
      titulo: "titulo",
      descripcion:
        "iaoisdhnaisudnasoidanusdi nasioudnas ianisduas diausbnd iasn bdiaus da",
    },
    {
      id: 4,
      imagen: "/image2.png",
      titulo: "titulo",
      descripcion:
        "iaoisdhnaisudnasoidanusdi nasioudnas ianisduas diausbnd iasn bdiaus da",
    },
  ];
  const notm: Noticia[] = [
    {
      id: 1,
      imagen: "/image2.png",
      titulo: "titulo",
      descripcion:
        "iaoisdhnaisudnasoidanusdi nasioudnas ianisduas diausbnd iasn bdiaus da",
    },
    {
      id: 2,
      imagen: "/image2.png",
      titulo: "titulo",
      descripcion:
        "iaoisdhnaisudnasoidanusdi nasioudnas ianisduas diausbnd iasn bdiaus da",
    },
    {
      id: 3,
      imagen: "/image2.png",
      titulo: "titulo",
      descripcion:
        "iaoisdhnaisudnasoidanusdi nasioudnas ianisduas diausbnd iasn bdiaus da",
    },
    {
      id: 4,
      imagen: "/image2.png",
      titulo: "titulo",
      descripcion:
        "iaoisdhnaisudnasoidanusdi nasioudnas ianisduas diausbnd iasn bdiaus da",
    },
  ];
  return (
    <div
      style={pop.style}
      className="flex flex-col items-center justify-center gap-2 p-12 w-screen h-auto"
    >
      <h1 className="text-5xl text-verde" style={popt.style}>
        NUESTRAS NOTICIAS
      </h1>
      <div className="w-3/5 flex items-center justify-center">
        <Carousel className="w-full rounded-xl bg-white shadow-[rgba(7,_65,_210,_0.2)_0px_30px_10px]">
          <CarouselContent key={20} className=" p-24">
            {notg.map((noticia) => {
              return (
                <CarouselItem key={noticia.id} className="">
                  <TarjNot
                    key={noticia.id}
                    id={noticia.id}
                    descripcion={noticia.descripcion}
                    imagen={noticia.imagen}
                    titulo={noticia.titulo}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className=" mt-24 w-3/5 grid grid-cols-4 gap-2 items-center justify-center ">
        {notm.map((noticia) => {
          return (
            <TarjNotMini
              key={noticia.id}
              id={noticia.id}
              descripcion={noticia.descripcion}
              imagen={noticia.imagen}
              titulo={noticia.titulo}
            />
          );
        })}
      </div>
    </div>
  );
}
