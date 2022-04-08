import Image from "next/image"

const LinkDisenio = ({nombre,url,img})=>{
    return(
    <li className="diseniosNav_elemento" >
                <Image
                src={img}
                alt={nombre}
                height={259}
                width={461}
                />
                <a  target="_blank" href={url}>
                    <div className="wallText">
                        <span className="link disenioInfo">
                            {nombre}
                        </span>
                    </div>
                </a>
    </li>
    )
}

export default LinkDisenio