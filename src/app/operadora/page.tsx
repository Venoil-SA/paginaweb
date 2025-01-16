import { ButtonR } from "../components/Buttons";
import Footer from "../components/Footer";

export default function Operadora(){
    return(
        <div className="w-screen flex flex-col imtes-center justify-center">
            <ButtonR texto="hola" color="verde" dir="/"/>
            <div className="w-screen h-screen bg-red-500"></div>
        </div>
    )
}