import Link from "next/link"

const Icono = ({nombre,imagenSRC, esLink,Url})=>{

    return(
        <>
        {
            esLink ? (
            <Link href={Url} >
                <a target="blank" className="icono">
                        <p>{nombre}</p>
                        
                        <img 
                            className="icono_imagen" 
                            src={imagenSRC} 
                            alt={nombre}
                        />
                </a>
            </Link>
        )
        :
        (
            <i className="icono">
                <p>{nombre}</p>

                <img 
                className="icono_imagen" 
                src={imagenSRC} 
                alt={nombre}
                />
            </i>
        )
        }
        </>
    )
    
}

export default Icono