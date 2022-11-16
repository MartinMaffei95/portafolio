import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const App = () => {
  const elemento = useRef(null);

  useEffect(() => {
    const typed = new Typed(elemento.current, {
      strings: ['Liderazgo de Equipo', 'Gestion de Datos', 'Manejo de Costos'],

      startDelay: 100,
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '_',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="autoTextoContainer">
      <h3 className="autoTexto">
        {' '}
        Soy desarrollador <span className="autoTexto_accent">
          FullStack
        </span>{' '}
      </h3>
      <p className="autoTextoP">Cuento con experiencia en:</p>
      <span className="autoTextoTEXTO" ref={elemento}></span>
    </div>
  );
};

export default App;
