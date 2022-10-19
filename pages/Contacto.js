import Header from '../Componentes/Header';
import SeccionContacto from '../Componentes/SeccionContacto';
import FormularioContacto from '../Componentes/FormularioContacto';
import { Helmet } from 'react-helmet';

const Contacto = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="kQCyfV4ZucwsahnLoMCgGrF45OFMD4zj3DksflAVHgo"
        />
        <title> Contacto | Martin Maffei</title>
        <link rel="shortcut icon" href="/static/medium.ico" />
      </Helmet>
      <Header />
      <FormularioContacto />
      <SeccionContacto />
    </>
  );
};

export default Contacto;
