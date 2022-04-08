import LinkDisenio from "../Moleculas/LinkDisenio"

const MisDisenios =({proyectos})=>{
 
    return(
    <div className="SectionLO Disenios">
        <h2 className="titulo" id="DISENIOS_ID"> Diseños destacados</h2 >
        <ul className="diseniosNav">
            <LinkDisenio
                nombre="Copia Mac Mini | LandingPage"
                url="https://mac-mini-landing-edteam.vercel.app/"
                img="/designImages/mcmini.jpg"
            />
            <LinkDisenio
                nombre="Password Creator | App para generar passwords"
                url="https://password-creator-silk.vercel.app/"
                img="/designImages/PasswordGenerator.png"
            />            
        </ul>
    </div>
    )
}

export default MisDisenios