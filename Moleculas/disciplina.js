import Image from "next/image"

const Disciplina = ({titulo, imagen})=>{
    return(
    <div className="disciplinas_elemento" id={titulo}>
        
        <Image
        className="elemento_imagen"
        src={imagen}
        alt={titulo}
        width={200}
        height={200}
        />
        <h3 className="elemento_titulo">{titulo}</h3>
    </div>
    )
}

export default Disciplina