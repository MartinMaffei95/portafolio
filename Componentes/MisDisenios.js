import PanelVistaPrevia from "../Moleculas/PanelVistaPrevia"
import LinkDisenio from "../Moleculas/LinkDisenio"

const MisDisenios =({proyectos})=>{
    
    let miSeleccion
    
    return(
    <div className="SectionLO Disenios">
        <h2 className="titulo" id="DISENIOS_ID"> Mis Diseños</h2 >
        <ul className="diseniosNav">
            <LinkDisenio
                nombre="Menúes"
            />
            <LinkDisenio
                nombre="Paginas de Prueba"
            />
            <LinkDisenio
                nombre="Botones"
            />
            <LinkDisenio
                nombre="Formularios"
            />
            <LinkDisenio
                nombre="Login"
            />
        </ul>

        <div className="VisorDeDisenios">
            <PanelVistaPrevia 
                miSeleccion={miSeleccion}
                proyectos={proyectos}
                Seccion = "PROYECTOS"
            />
            {/* INFO DE EL DISEÑO + BOTON "vermas" */}
        </div>
    </div>
    )
}

export default MisDisenios