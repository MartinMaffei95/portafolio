import { useState } from "react"
import Disciplina from "../Moleculas/disciplina" 
import PanelVistaPrevia from "../Moleculas/PanelVistaPrevia"


const Formacion =()=>{


    const[seleccion, setSeleccion] = useState(null)

    const selectDisciplina =(e)=>{
        let disciplinaTarget = e.target.closest("div").id; // Id del DIV seleccionado. En base a este valor se setea la "seleccion"
        setSeleccion(disciplinaTarget)
        // console.log(seleccion)
    }

    return(
        <div className="SectionLO Formacion">
            <h2 className="titulo" id="FORMACION_ID" > Mis Certificados</h2 >
            <div className="disciplinas" onClick={selectDisciplina}>
                <Disciplina
                    titulo="HTML"
                    imagen="/iconos/001-html-5.png"
                    
                    />
                    <Disciplina
                    titulo="CSS"
                    imagen="/iconos/003-css-3.png"
                    // onClick={selectDisciplina}
                    />
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
                    <Disciplina
                    titulo="Sass"
                    imagen="/iconos/006-sass.png"
                    // onClick={selectDisciplina}
                    />
                    <Disciplina
                    titulo="NodeJs"
                    imagen="/iconos/007-nodejs.png"
                    // onClick={selectDisciplina}
                    />
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
                        Seccion = ""
                    />
            </div>
        </div>
    )

}

export default Formacion