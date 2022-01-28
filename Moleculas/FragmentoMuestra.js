const FragmentoMuestra = ({URL,Titulo})=>{

    return(
        <div className="contenedorProyecto">
            <iframe className="contenedorProyecto_iframe" id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="100%"
                src="https://portafolio-mu-three.vercel.app/">
            </iframe>
        </div>
    )
}

export default FragmentoMuestra