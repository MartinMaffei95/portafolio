import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

const FormularioContacto = ()=>{

        const[activo,setActivo] = useState('inactivo')
        const form = useRef();
        const modal = useRef();

        const toggleModal= ()=>{
            if(activo === 'inactivo'){
                setActivo('activo')
            }else{
                setActivo('inactivo')
            }
        }

        const sendEmail = (e) => {
          e.preventDefault();
            // console.log(form.current)
        
        emailjs.sendForm('service_0oe7msl', 'template_kemb6qk', form.current,'user_94OEa5I6liQW8zLBMtZDj')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            })

        console.log("Se eviaron ok")
        form.current.reset()
        toggleModal()
        }

    return(
    <>
        <div className="SectionLO FormularioContacto">
            <form className="formContacto" ref={form} onSubmit={sendEmail}>
                <label className="grid_element Nombre"> Nombre:
                    <input id='nombre' placeholder='Pedro' autofocus="autofocus" required type="text" name="user_name"/>
                </label>
                <label className="grid_element Apellido"> Apellido:
                    <input id='apellido' placeholder='Rodriguez' required type="text" name="user_posname"/>
                </label>
                <label className="grid_element Mail"> Correo electronico:
                    <input id='email' placeholder='asd123@correo.com' required type="email" name="user_email"/>
                </label>
                <label className="grid_element Asunto"> Asunto:
                    <input id='asunto' placeholder='Crear mi Sitio WEB' required type="text" name="user_matter" />
                </label>
                <label className="grid_element Mensaje"> Mensaje:
                    <textarea id='msj' placeholder='Hola. Buscamos crear el sitio WEB de nuestro emprendimiento.' required name="message"/>
                </label>
                    <input  className="grid_element Enviar"  type="submit" value="Enviar"/>
            </form>
        </div>
        <div ref={modal} className={`modal ${activo}` }></div>
        <div className={`datazo ${activo}` }>
           <h2>¡E-mail enviado con exito!</h2>
           <h3>En breve estaremos en contacto</h3>
           <button onClick={toggleModal}> X </button>
        </div>
    </>
    )
}


export default FormularioContacto