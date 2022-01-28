import Formacion from "../Componentes/Formacion"
import Header from "../Componentes/Header"
import MisDisenios from "../Componentes/MisDisenios"
import QuienSoy from "../Componentes/QuienSoy"
import SeccionContacto from "../Componentes/SeccionContacto"

const Home = ({certificados, proyectos}) => {
  return ( <>
    <Header/>
    <QuienSoy/>
    <Formacion data={certificados}/>
    <MisDisenios data={proyectos}/>
    <SeccionContacto/>
    </>
  )
}

export default Home
export async function getServerSideProps(){
  // export async function getStaticProps(){
  const resp = await fetch(`https://portafolio-mu-three.vercel.app/api/certificados`)
  const certificados = await resp.json()
  const resp = await fetch(`https://portafolio-mu-three.vercel.app/api/proyectos`)
  const proyectos = await resp.json()
  return{
    props:{
      certificados,
      proyectos
    }
  }
}