import LinkDisenio from '../Moleculas/LinkDisenio';

const MisDisenios = ({ proyectos }) => {
  return (
    <div className="SectionLO Disenios">
      <h2 className="titulo" id="DISENIOS_ID">
        Mis proyectos creados
      </h2>
      <ul className="diseniosNav">
        <LinkDisenio
          nombre="takeZoom"
          descr="App para reservar espacios comunes de nuestro edificio"
          tecUtil="NodeJs,Express,JWT,MongoDB,React,Redux,ReactRouterDOM"
          url="https://takezoom.vercel.app/"
          img="/designImages/takeZoom.png"
        />
        <LinkDisenio
          nombre="PostWeb"
          descr="Permite crear posts y compartirlos"
          tecUtil="NodeJs,Express,JWT,MongoDB,React,Redux,ReactRouterDOM"
          url="https://post-web-fe.vercel.app/"
          img="/designImages/postWeb.jpg"
        />
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
          tecUtil="HTML,CSS,Javascript"
          url="https://password-creator-silk.vercel.app/"
          img="/designImages/PasswordGenerator.png"
        />
        <LinkDisenio
          nombre="MovieSite"
          descr="Sitio con informacion de peliculas usando MovieDB"
          tecUtil="HTML,CSS,Javascript,ReactJs"
          url="https://movie-app-gamma-seven.vercel.app/"
          img="/designImages/MovieSite.png"
        />
        <LinkDisenio
          nombre="Go-Scrm"
          descr="App web para trabajar metodologia SCRUM"
          tecUtil="HTML,CSS,Javascript,ReactJs,Redux"
          url="https://go-scrum-kappa.vercel.app/"
          img="/designImages/GoScrum.png"
        />
      </ul>
    </div>
  );
};

export default MisDisenios;
