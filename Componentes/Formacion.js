import { useState } from "react"
import Disciplina from "../Moleculas/disciplina" 
import PanelVistaPrevia from "../Moleculas/PanelVistaPrevia"


const Formacion =({data})=>{


    const[seleccion, setSeleccion] = useState("Javascript")
    const[imagen , setImagen] = useState()

    const selectDisciplina =(e)=>{
        let disciplinaTarget = e.target.closest("div").id; // Id del DIV seleccionado. En base a este valor se setea la "seleccion"
        setSeleccion(disciplinaTarget)
        if(data){
            let dataFiltrada =  data.filter(cer => cer.TAGS.includes(disciplinaTarget))
                if(dataFiltrada[0]){
                    setImagen(dataFiltrada[0].Imagen)
                }else(
                    setImagen("/placeholder")
                )
        }
        

    }


    

    return(
        <div className="SectionLO Formacion" id="FORMACION_ID">
            <h2 className="titulo"  > Cursos </h2 >
            <div className="disciplinas" onClick={selectDisciplina}>
                    {/* <Disciplina
                    titulo="HTML"
                    imagen="/iconos/001-html-5.png"
                    
                    />
                    <Disciplina
                    titulo="CSS"
                    imagen="/iconos/003-css-3.png"
                    // onClick={selectDisciplina}
                    /> */}
                    <Disciplina
                    titulo="Javascript"
                    imagen="/iconos/004-js.png"
                    // onClick={selectDisciplina}
                    />
                    <Disciplina
                    titulo="ReactJs"
                    imagen="/iconos/005-react.png"
                    // onClick={selectDisciplina}
                    />
                    {/* <Disciplina
                    titulo="Sass"
                    imagen="/iconos/006-sass.png"
                    // onClick={selectDisciplina}
                    /> */}
                    {/* <Disciplina
                    titulo="NodeJs"
                    imagen="/iconos/007-nodejs.png"
                    // onClick={selectDisciplina}
                    /> */}
                    <Disciplina
                    titulo="Testing"
                    imagen="/iconos/009-antivirus.png"
                    // onClick={selectDisciplina}
                    />



                    {/* <Disciplina
                    titulo=""
                    imagen={}
                    onClick={selectDisciplina}
                    /> */}
            </div>

            <div className="vistaPrevio">
                    <PanelVistaPrevia 
                        miSeleccion={seleccion}
                        Seccion = "FORMACION"
                        data={data}
                        imagen={imagen}
                    />
            </div>
        </div>
    )

}

export default Formacion