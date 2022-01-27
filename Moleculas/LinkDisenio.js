import Link from "next/link"


const LinkDisenio = ({nombre})=>{
    return(
    <li className="diseniosNav_elemento">
        <a className="">
                {nombre}
            </a>
    </li>
    )
}

export default LinkDisenio