import Icono from "../Moleculas/Icono"

const SeccionContacto = ()=>{


    return(
    <div className="SectionLO Contacto">
        <h2 className="titulo"> Contacto </h2>

        <div className="sub_flex first">
        <div className="Redes_sociales">
            <p className="subTitulo">Nos encontramos por:</p>

                <div className="iconos_container">
                    <Icono
                        nombre="Git"
                        imagenSRC="../iconos/008-github.png"
                        esLink={true}
                        Url={"https://github.com/"}
                    />
                    <Icono
                        nombre="LindIn"
                        imagenSRC="../iconos/linkedin.png"
                        esLink={true}
                        Url={"https://www.linkedin.com/feed/"}
                    />
                </div>
            </div>
            <button className="ghost_button"> Descarga mi Cv</button>

            <button className="fill_button TabletYPC"> Contacto</button>
            <span className="masInfo">
                <p className="masInfo_Texto Smooth">Martin Maffei</p>
                <p className="masInfo_Texto Smooth"> 26 años</p>
                <p className="masInfo_Texto Smooth">Rosario, Sante Fe. Argentina</p>
            </span>
            </div>
    </div>
    )
}

export default SeccionContacto