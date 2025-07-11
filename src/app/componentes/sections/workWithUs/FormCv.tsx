'use client'
import { useState , MouseEvent } from "react";
import { handleForm } from "./action";
import * as motion from "motion/react-client";
import { GiCancel } from "react-icons/gi";
export default function FormCV() {
  const [enviado,NoEnviado] = useState('invisible')
  return (
    <form
      action={handleForm}
      method="POST"
      className="flex flex-col gap-4 p-4 max-w-xl mx-auto"
    >
      <p>Ingrese su nombre y apellido</p>
      <input
        type="text"
        name="name"
        placeholder="Nombre y apellido"
        required
        className="border p-2 rounded text-black"
      />
      <p>Ingrese el asunto de su mensaje</p>
      <input
        type="text"
        name="subject"
        placeholder="Asunto"
        required
        className="border p-2 rounded text-black"
      />
      <p>Ingrese su correo de contacto</p>
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
        className="border p-2 rounded text-black"
      />
      <p>Adjunte su Curriculum vitae (Max. 10MB)</p>
      <input
        type="file"
        name="cv"
        accept=".pdf,.doc,.docx"
        required
        className="border p-2 rounded text-black"
      />
      <p className="text-center">
        (si necesita un curriculum de ejemplo, haga click <a href="./FormatoCVVENOIL.docx" className="text-verde">aquí</a>)
      </p>
      <button
        type="submit"
        onClick={()=>{
          
          NoEnviado('visible')
        }}
        className="relative px-6 py-2 transition-all bg-azul hover:bg-white rounded-full mt-4 overflow-hidden border-2 border-verde"
      >
        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-verde to-verd">
          Enviar curriculum
        </span>
      </button>
      <div className={`w-screen h-screen fixed bottom-0 ${enviado} left-0 flex items-center justify-center bg-black/50 rounded-xl`}>
      <motion.div layout initial={{}} whileInView={{}}  transition={{duration:2}} className={`w-auto h-auto flex items-center flex-col bg-verde rounded-xl`} >
        <button className=" w-full flex justify-end p-2" onClick={()=>{
          NoEnviado('invisible')
        }}><GiCancel/></button>
        <p className="p-2">¡Muchas Gracias!</p>
        <p className="p-2">Su curriculum fue enviado con éxito</p>
      </motion.div>
      </div>
    </form>
  );
}
