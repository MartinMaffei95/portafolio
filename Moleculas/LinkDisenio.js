import Image from 'next/image';
import { useRef } from 'react';
import { useObserver } from '../Hooks/useObserver';

const LinkDisenio = ({ nombre, descr, tecUtil, url, img }) => {
  const miref = useRef();
  const onScreen = useObserver(miref, '-150px');

  return (
    <li className="diseniosNav_elemento">
      <Image src={img} alt={nombre} height={259} width={461} />
      <a target="_blank" href={url}>
        <div className="wallText">
          <span
            ref={miref}
            className={
              onScreen ? 'link disenioInfo onScreen' : 'link disenioInfo'
            }
            // className="link disenioInfo"
          >
            <p className="title">{nombre}</p>
            <p className="description">{descr}</p>
            <p className="tec">{tecUtil}</p>
          </span>
        </div>
      </a>
    </li>
  );
};

export default LinkDisenio;
