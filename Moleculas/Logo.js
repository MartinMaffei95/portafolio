import Link from "next/link"

const Logo = ()=>{
    return(
        <div className="LogoContainer flexRow" >
            <h3 className="textLogo">
                <Link href="/#">
                    <span>Martin Maffei</span>
                </Link>
            </h3>
            {/* <img className="imageLogo" src="/favicon.ico" alt="imagen del logo" /> */}
        </div>       
    )
}

export default Logo