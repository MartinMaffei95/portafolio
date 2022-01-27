import Formacion from "../Componentes/Formacion"
import Header from "../Componentes/Header"
import MisDisenios from "../Componentes/MisDisenios"
import QuienSoy from "../Componentes/QuienSoy"
import SeccionContacto from "../Componentes/SeccionContacto"

const Home = ({certificados}) => {
  return ( <>
    <Header/>
    <QuienSoy/>
    <Formacion data={certificados}/>
    <MisDisenios/>
    <SeccionContacto/>
    </>
  )
}

export default Home
export async function getStaticProps(){
  const resp = await fetch(`https://portafolio-mu-three.vercel.app/api/certificados`)
  const certificados = await resp.json()
  return{
    props:{
      certificados
    }
  }
}