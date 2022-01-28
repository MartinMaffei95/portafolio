import Image from "next/image"
import Link from "next/link"

const LinkDisenio = ({nombre,funcionRetornar})=>{
    return(
    <li className="diseniosNav_elemento" >
                <Image
                src="/mcmini.jpg"
                alt="i"
                height={259}
                width={461}
                />
                <div className="wallText">
                    <Link href="https://mac-mini-landing-edteam.vercel.app/">
                    <a target="blank" className="no-style link">
                        {nombre}
                    </a>
                    </Link>
                    
                </div>
                
    </li>
    )
}

export default LinkDisenio