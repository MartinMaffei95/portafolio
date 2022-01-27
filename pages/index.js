import Formacion from "../Componentes/Formacion"
import Header from "../Componentes/Header"
import MisDisenios from "../Componentes/MisDisenios"
import QuienSoy from "../Componentes/QuienSoy"
import SeccionContacto from "../Componentes/SeccionContacto"
const Home = () => {
  return ( <>
    <Header/>
    <QuienSoy/>
    <Formacion/>
    <MisDisenios/>
    <SeccionContacto/>
    </>
  )
}

export default Home