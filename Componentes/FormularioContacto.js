import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const FormularioContacto = ()=>{

        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
            // console.log(form.current)
        
        emailjs.sendForm('service_0oe7msl', 'template_kemb6qk', form.current,'user_94OEa5I6liQW8zLBMtZDj')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            })
        }

    return(
    <div className="SectionLO FormularioContacto">

        <form className="formContacto" ref={form} onSubmit={sendEmail}>
            <label className="grid_element Nombre"> Nombre:
                <input placeholder='Pedro' autofocus="autofocus" required type="text" name="user_name"/>
            </label>
            <label className="grid_element Apellido"> Apellido:
                <input placeholder='Rodriguez' required type="text" name="user_posname"/>
            </label>
            <label className="grid_element Mail"> Correo electronico:
                <input placeholder='asd123@correo.com' required type="email" name="user_email"/>
            </label>
            <label className="grid_element Asunto"> Asunto:
                <input placeholder='Crear mi Sitio WEB' required type="text" name="user_matter" />
            </label>
            <label className="grid_element Mensaje"> Mensaje:
                <textarea placeholder='Hola. Buscamos crear el sitio WEB de nuestro emprendimiento.' required name="message"/>
            </label>
                <input  className="grid_element Enviar"  type="submit" value="Enviar"/>
        </form>
    </div>
    )
}


export default FormularioContacto