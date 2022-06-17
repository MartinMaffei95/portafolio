import Icono from "../Moleculas/Icono"

const SeccionContacto = ()=>{


    return(
    <div className="SectionLO Contacto">
        <h2 id="DISENIOS_ID" className="titulo"> Contacto </h2>

        <div className="sub_flex first">
        <div className="Redes_sociales">
            <p className="subTitulo">Nos encontramos por:</p>

                <div className="iconos_container">
                    <Icono
                        nombre="Git"
                        imagenSRC="../iconos/008-github.png"
                        esLink={true}
                        Url={"https://github.com/MartinMaffei95"}
                    />
                    <Icono
                        nombre="LindIn"
                        imagenSRC="../iconos/linkedin.png"
                        esLink={true}
                        Url={"https://www.linkedin.com/in/martin-maffei-b97074147/"}
                    />
                </div>
            </div>
            <a className="ghost_button" href='../pdf/CvMartinMaffei160622.pdf' target="_blank" rel="noopener noreferrer"> Descarga mi Cv</a>

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