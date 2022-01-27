import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useFetch from "../Hooks/UseFetch";

const ListaDeContenidos = ({certificadosBuscados, objetoCertificados,funcionSeleccion})=>{

    const certificados = useFetch('certificados');
    useEffect(() => {
        // if(certificados){certificados.forEach(c => console.log(c.Titulo))}
    },[certificadosBuscados])
    
    
    const onButtonClick = (e)=>{
        let prevSeleccionada= e.target.closest("li").id
        setCertificadoSeleccionado(prevSeleccionada)
    }
        let array;
    if(objetoCertificados){
         array = objetoCertificados.filter(cer => cer.TAGS.includes(certificadosBuscados))
    }
   

    
    let w=80;
    let h=60;

    return(
    <ul className="selectorContenido_list">
        { array ? (array.map(c => {return(
            <li onClick={funcionSeleccion} id={c.Titulo} key={c.ID}>
                <Image
                    src={c.Imagen}
                    alt={c.Titulo}
                    height={h}
                    width={w}
                    placeholder="blur"
                    blurDataURL="/public/favicon.ico"
                />
            </li>
            )})) 
            :
            (
            <>
            <span className="Cargando">Cargando...</span>
            <li> <img className="ImagePlaceHolder" 
                    src="../ImagenesCursos/javascript-cero-EDTEAM.jpg" 
                    alt="cargando..."/>
            </li>
            <li> <img className="ImagePlaceHolder" 
                    src="../ImagenesCursos/javascript-cero-EDTEAM.jpg" 
                    alt="cargando..."/>
            </li>
            <li> <img className="ImagePlaceHolder" 
                    src="../ImagenesCursos/javascript-cero-EDTEAM.jpg" 
                    alt="cargando..."/>
            </li>
            </>
            )
        }
    </ul>
    )
}

export default ListaDeContenidos
