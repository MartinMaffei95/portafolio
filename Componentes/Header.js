import { useEffect, useState } from "react"
import Logo from "../Moleculas/Logo"
import MainMenu from "../Moleculas/MainMenu"
import Link from "next/link"

const Header = ()=>{

    const[desplegado, setDesplegado] = useState("")


    const contraerMenu = ()=>{
        if(desplegado === "Activo"){
            return(setDesplegado(""))
        }
    }

    const menuToggle =()=>{
        if(desplegado === "Activo"){
            return(setDesplegado(""))
        }else{
            setDesplegado("Activo")
        }
    }   

    useEffect(()=>{
        window.addEventListener("keyup", (e)=>{
            if(e.key === "Escape"){
                return(contraerMenu())
            }
        })
    },[desplegado])

    

    return(
        <main className="mainHeader flexRow flexJcSpcBet">
            <div className="main_wall"/>
            <Logo/>
           
            <MainMenu 
            desplegable={desplegado}
            funcionContraer={contraerMenu}
            />
             <div className="botonesMovil">
                <button onClick={menuToggle} className="desplegableButton"></button>
                <Link href="./Contacto">
                
                <button className="fill_button contactoButton">
                        {/* <a className="no-style"> */}
                            Contacto
                        {/* </a> */}
                    
                    </button>
                    </Link>
            </div>

        </main>
    )
}

export default Header