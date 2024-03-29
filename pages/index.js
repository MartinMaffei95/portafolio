import { Helmet } from 'react-helmet';
import Formacion from '../Componentes/Formacion';
import Header from '../Componentes/Header';
import MisDisenios from '../Componentes/MisDisenios';
import QuienSoy from '../Componentes/QuienSoy';
import SeccionContacto from '../Componentes/SeccionContacto';

const Home = ({ certificados, proyectos }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Portafolio | Martin Maffei</title>
        <link rel="shortcut icon" href="/static/medium.ico" />
        <meta
          name="google-site-verification"
          content="kQCyfV4ZucwsahnLoMCgGrF45OFMD4zj3DksflAVHgo"
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GB53G4Q8Y0"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GB53G4Q8Y0'); 
          `}
        </script>
      </Helmet>
      <Header />
      <QuienSoy />
      <Formacion data={certificados} />
      <MisDisenios />
      <SeccionContacto />
    </>
  );
};

export default Home;
export async function getServerSideProps() {
  // export async function getStaticProps(){
  const resp = await fetch(
    `https://portafolio-mu-three.vercel.app/api/certificados`
  );
  const certificados = await resp.json();

  // const resp1 = await fetch(`https://portafolio-mu-three.vercel.app/api/proyectos`)
  // const proyectos = await resp1.json()
  return {
    props: {
      certificados,
    },
  };
}
