import Typing from "../Componentes/Typing"
import Image from "next/image"

const QuienSoy = ()=>{
    return(
    <div className="SectionLO QuienSoy">
        <div className="descripcion">
            <Typing/>
        </div>
        <div className="imagen">
            <Image 
            className="imagen_perfil"
            src="/portafolioIMG.png"
            alt="Foto de Perfil"
            height={200}
            width={200}
            // placeholder
            />
        </div>
    </div>
    )
}

export default QuienSoy