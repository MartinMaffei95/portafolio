import Link from "next/link"


const MainMenu =({ desplegable,funcionContraer })=>{
    let estado
    if(desplegable === "Activo"){
        estado = "menu_active";
    }else{
        estado = "";
    }


    return(
        <nav className={`navHeader ${estado}`}>
            {/* menu navegador */}
            <ul className="menuHeader">
                <li className="MenuHeader_element">
                <Link  href="#">
                    <a onClick={funcionContraer}>
                        Quien Soy?
                    </a>
                </Link>
                </li>
                <li className="MenuHeader_element">
                <Link  href="#FORMACION_ID">
                    <a onClick={funcionContraer}>
                        Formacion
                    </a>
                </Link>
                </li>
                <li className="MenuHeader_element">
                <Link  href="#DISENIOS_ID">
                    <a onClick={funcionContraer}>
                        Diseños
                    </a>
                </Link>
                </li>
                <li className="MenuHeader_element contact_element">
                    <div className="ContactoHeader"> 
                        <Link href="#">
                            <a>
                                Descarga mi Cv!
                            </a>
                        </Link>
                    </div>
                </li>
            </ul>

            
            
        </nav>
        
        
    )
}

export default MainMenu