import PanelVistaPrevia from "../Moleculas/PanelVistaPrevia"
import LinkDisenio from "../Moleculas/LinkDisenio"
import { useState } from "react/cjs/react.development"

const MisDisenios =({proyectos})=>{
    
    let miSeleccion

    const [categoriaProyecto, setCategoriaProyecto] = useState(null)
    const proyectoSeleccionado=(e)=>{
        let IDcategoria = e.target.id
        setCategoriaProyecto(IDcategoria)
    }

    return(
    <div className="SectionLO Disenios">
        <h2 className="titulo" id="DISENIOS_ID"> Diseños destacados</h2 >
        <ul className="diseniosNav">
            <LinkDisenio
                nombre="Copia Mac Mini | LandingPage"
                funcionRetornar={proyectoSeleccionado}
            />
            <LinkDisenio
                nombre="Copia Mac Mini | LandingPage"
                funcionRetornar={proyectoSeleccionado}
            />
            <LinkDisenio
                nombre="Copia Mac Mini | LandingPage"
                funcionRetornar={proyectoSeleccionado}
            />
            <LinkDisenio
                nombre="Copia Mac Mini | LandingPage"
                funcionRetornar={proyectoSeleccionado}
            />
        </ul>

        <div className="VisorDeDisenios">
            {/* <PanelVistaPrevia 
                miSeleccion={miSeleccion}
                proyectos={proyectos}
                Seccion = "PROYECTOS"
                categoriaProyecto = {categoriaProyecto}
            /> */}
            {/* INFO DE EL DISEÑO + BOTON "vermas" */}
        </div>
    </div>
    )
}

export default MisDisenios