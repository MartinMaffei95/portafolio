import Image from "next/image"

const LinkDisenio = ({nombre,funcionRetornar})=>{
    return(
    <li className="diseniosNav_elemento" >
                <Image
                src="/mcmini.jpg"
                alt="i"
                height={360}
                width={480}
                />
                <div className="wallText">
                    <p >{nombre}</p>
                </div>
                
    </li>
    )
}

export default LinkDisenio