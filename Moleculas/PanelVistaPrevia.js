import Image from "next/image"
import ListaDeContenidos from "./ListaDeContenidos"
import Icono from "./Icono"
import { useState } from "react"


const PanelVistaPrevia =({ miSeleccion, Seccion,dataCertificados})=>{

    const certificados = dataCertificados;

    dataCertificados && console.log(dataCertificados)


    const[imagenVisor, setImagenVisor] = useState("/nada.jpg")
    const [imagenesSeleccionables , setImagenesSeleccionables] =useState(null)


    const setearCertificado =(curso)=>{
        let imagen = curso;
        let cert = certificados.filter(cer => cer.Titulo == curso);
        let certificadoSeleccionado = cert[0].Imagen;
        setImagenVisor(certificadoSeleccionado)
    }


    const seleccionDeCertificado =(e)=>{
        //bucle For que me devuelve todos los certificados
        // for (let i = 0; i < imagenesSeleccionables.length; i++) {
        //     const elements = imagenesSeleccionables[i];
        //     // console.log(elements)
        //     let arr = Array.from(elements.id)
        //     console.log(arr.indexOf("Javascript desde Cero",[0]))
        //     console.log(arr)
        // }
        // console.log(imagenesSeleccionables)
        // console.log(imagenesSeleccionables.indexOf("Javascript desde Cero",[0]))
        //  let arrayDeSelecionables= Array.from(e.target.closest("ul").children);
        //  setImagenesSeleccionables(arrayDeSelecionables)

        //Certificado Seleccionado por click
         let cert = e.target.closest("li").id;
         setearCertificado(cert)
         console.log(cert)
    }

    const siguienteCertificado =()=>{

    }

    return(
        <div className="VisorContenedor">
            
            
            <div className="imagenContainer">
            {/* -- Botones sin usar
             <button className="CambiarImagen Left" >  </button>
            <button className="CambiarImagen Right" onClick={siguienteCertificado}>  </button> */}
            { certificados ? (
                <Image
                    className="elemento_imagen"
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