import Image from "next/image"
import ListaDeContenidos from "./ListaDeContenidos"
import Icono from "./Icono"
import { useEffect, useState } from "react"


const PanelVistaPrevia =({ miSeleccion, Seccion,dataCertificados})=>{

    const certificados = dataCertificados;

    const[imagenVisor, setImagenVisor] = useState("/nada.jpg")
    const [indiceCertificado , setIndiceCertificado] =useState(0)
   
    let indiceIMG;

    if(certificados){
        let imagenesParaSeleccionar = certificados.filter(cer => cer.TAGS.includes(miSeleccion));

        const modificarImg =(IndiceImagen)=>{
            console.log(imagenesParaSeleccionar[IndiceImagen].Imagen)
            setIndiceCertificado(IndiceImagen) //Se almacena ese INDICE en el estado
            setImagenVisor(imagenesParaSeleccionar[IndiceImagen].Imagen) //Se modifica el estado de la imagen.
        }

        const setearCertificado =(curso)=>{
            let cert = certificados.filter(cer => cer.Titulo == curso);
            indiceIMG = imagenesParaSeleccionar.indexOf(cert[0]) //Obteniendo el indice seleccionado de la imagen
            let ImagenCertificadoSel = imagenesParaSeleccionar[indiceIMG].Imagen //Obtengo imagen del certificado con indice seleccionado
            if(indiceCertificado >= imagenesParaSeleccionar.length-1){
                indiceIMG = 0
            }
            setImagenVisor(imagenesParaSeleccionar[indiceIMG].Imagen)
            setIndiceCertificado(indiceIMG)
        }
    }
        const siguienteImagen=()=>{
            if(indiceCertificado >= imagenesParaSeleccionar.length-1){
                setIndiceCertificado(indiceCertificado = 0)
            }else{
                setIndiceCertificado(indiceCertificado++)
            }
            // console.log(indiceCertificado)
            modificarImg(indiceCertificado)
        }

    

const seleccionDeCertificado =(e)=>{
        //Certificado Seleccionado por click
         let cert = e.target.closest("li").id;
         setearCertificado(cert)
         
    }

    const siguienteCertificado =()=>{

    }

    return(
        <div className="VisorContenedor">
            
            
            <div className="imagenContainer">
            {/* -- Botones sin usar */}
             <button className="CambiarImagen Left" >  </button>
            <button className="CambiarImagen Right" onClick={siguienteImagen}>  </button>
            { certificados ? (
                <Image
                    className="elemento_imagen__IMAGEN"
                    src={imagenVisor}
                    alt="i"
                    height={360}
                    width={480}
                />
                )
                :
                (
                    <div className="elemento_imagen">
                        <span className="Cargando">Cargando...</span>
                    </div>
                )}
            </div>
            <div className="selectorContenido" >
                <ListaDeContenidos
                    certificadosBuscados={miSeleccion}
                    objetoCertificados = {certificados}
                    funcionSeleccion ={seleccionDeCertificado}
                />
            </div>

{/* SECCION DISEÑOS */}

            {Seccion === "disenio" ? (
                <div className="diseniosInfo">
                    <div> {/* Lenguajes usados  - ICONOS+DESCRIPCION*/}
                        <h3>Lenguajes usados:</h3>
                        <div className="iconos_container">
                            {/* Lenguajes usados  - ICONOS*/}
                            <Icono
                                nombre="HTML5"
                                imagenSRC="../iconos/001-html-5.png"
                            />
                            <Icono
                                nombre="Css"
                                imagenSRC="../iconos/003-css-3.png"
                            />
                            <Icono
                                nombre="JavaScript"
                                imagenSRC="../iconos/004-js.png" alt="js"
                            />
                            
                        </div>

                        <div className="descripcionDisenio">{/* Lenguajes usados  - DESCRIPCION*/}
                            <p>
                                Esta herramienta permite experimentar con el efcto "xxxx" de CSS
                            </p>
                        </div>
                    </div>

                    <button className="ghost_button"> Ver más! {`>`} </button>
                </div>
            )
            : 
            ( <button className="ghost_button"> Ver más! {`>`} </button>)
            }
    </div>
    )
}


export default PanelVistaPrevia