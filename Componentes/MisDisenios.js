import LinkDisenio from "../Moleculas/LinkDisenio"

const MisDisenios =({proyectos})=>{
 
    return(
    <div className="SectionLO Disenios">
        <h2 className="titulo" id="DISENIOS_ID"> Diseños destacados</h2 >
        <ul className="diseniosNav">
            <LinkDisenio
                nombre="Copia Mac Mini | LandingPage"
                // funcionRetornar={proyectoSeleccionado}
            />
            <LinkDisenio
                nombre="Copia Mac Mini | LandingPage"
                // funcionRetornar={proyectoSeleccionado}
            />
            <LinkDisenio
                nombre="Copia Mac Mini | LandingPage"
                // funcionRetornar={proyectoSeleccionado}
            />
            <LinkDisenio
                nombre="Copia Mac Mini | LandingPage"
                // funcionRetornar={proyectoSeleccionado}
            />
        </ul>
    </div>
    )
}

export default MisDisenios