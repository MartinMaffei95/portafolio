import LinkDisenio from "../Moleculas/LinkDisenio"


const MisDisenios =({proyectos})=>{   

    return(
    <div className="SectionLO Disenios">
        
        <h2  className="titulo" id="DISENIOS_ID"> Diseños destacados</h2 >
        <ul className="diseniosNav" >
            <LinkDisenio
                nombre="Landing page Mac Mini"
                descr="Copia de landing page de MacMini"
                tecUtil="HTML,CSS,JavaScript"
                url="https://mac-mini-landing-edteam.vercel.app/"
                img="/designImages/mcmini.jpg"
            />
            <LinkDisenio
                nombre="Password Creator "
                descr="AppWeb generadora de passwords"
                tecUtil="HTML,CSS,Javascript,ReactJs,NextJs"
                url="https://password-creator-silk.vercel.app/"
                img="/designImages/PasswordGenerator.png"
            />   
            <LinkDisenio
                nombre="MovieSite"
                descr="Sitio con informacion de peliculas usando MovieDB"
                tecUtil="HTML,CSS,Javascript,ReactJs,NextJs"
                url="https://movie-app-gamma-seven.vercel.app/"
                img="/designImages/MovieSite.png"
            />           
        </ul>
    </div>
    )
}

export default MisDisenios