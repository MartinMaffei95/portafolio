export default function handler(req, res) {
  res.status(200).json([
    {
      Titulo: 'Javascript desde Cero',
      Imagen: '/ImagenesCursos/JavascriptDesdeCero.jpg',
      TAGS: ['Javascript', 'FrontEnd', 'DOM'],
      ID: 1,
    },
    {
      Titulo: 'GIt desde Cero',
      Imagen: '/ImagenesCursos/GitDesdeCero.png',
      TAGS: [
        'GIT',
        'Javascript',
        'Programacion',
        'FrontEnd',
        'BackEnd',
        'Herramientas de trabajo',
      ],
      ID: 2,
    },
    {
      Titulo: 'Ajax y Web Sockets',
      Imagen: '/ImagenesCursos/AjaxYWebSockets.jpg',
      TAGS: ['Javascript', 'FrontEnd', 'BackEnd', 'API'],
      ID: 3,
    },
    {
      Titulo: 'Flexbox Y Grid',
      Imagen: '/ImagenesCursos/Flexboxgrid.png',
      TAGS: ['Css', 'Diseño', 'FrontEnd', 'UX/UI'],
      ID: 4,
    },
    {
      Titulo: 'Introduccion al Testing',
      Imagen: '/ImagenesCursos/IntroduccionAlTesting.png',
      TAGS: ['Testing', 'Herramientas de trabajo'],
      ID: 5,
    },
    {
      Titulo: 'Javascript en el Navegador',
      Imagen: '/ImagenesCursos/JsenNavegador.png',
      TAGS: ['Javascript', 'FrontEnd', 'API', 'DOM'],
      ID: 6,
    },
    {
      Titulo: 'JavaScript orientado a Objetos',
      Imagen: '/ImagenesCursos/JsOrientadoAObjetos.png',
      TAGS: ['Javascript', 'FrontEnd', 'BackEnd'],
      ID: 7,
    },
    {
      Titulo: 'Single Page Application con JS',
      Imagen: '/ImagenesCursos/JsSinglePageAplication.png',
      TAGS: ['Javascript', 'FrontEnd', 'DOM', 'HTML', 'CSS'],
      ID: 8,
    },
    {
      Titulo: 'React desde Cero',
      Imagen: '/ImagenesCursos/ReactDesdeCero.png',
      TAGS: ['Javascript', 'FrontEnd', 'ReactJs', 'DOM', 'VirtualDOM'],
      ID: 9,
    },
    {
      Titulo: 'Server Side Rendering con NEXT.js',
      Imagen: '/ImagenesCursos/SSRenderingConNext.jpg',
      TAGS: ['Javascript', 'FrontEnd', 'ReactJs', 'DOM', 'VirtualDOM', 'NEXT'],
      ID: 10,
    },
    {
      Titulo: 'UI Desing | Diseño de interfaces',
      Imagen: '/ImagenesCursos/UiDesing.png',
      TAGS: ['Diseño', 'UX', 'UI', 'UX/UI', 'Herramientas de trabajo'],
      ID: 11,
    },
    {
      Titulo: 'NodeJs desde cero',
      Imagen: '/ImagenesCursos/NodeJsDesdeCero.png',
      TAGS: ['Javascript', 'BackEnd', 'NodeJs', 'Servidores', 'Api'],
      ID: 12,
    },
    {
      Titulo: 'ExpressJs desde cero',
      Imagen: '/ImagenesCursos/ExpressDesdeCero.png',
      TAGS: ['Javascript', 'BackEnd', 'Express', 'NodeJs', 'Servidores', 'Api'],
      ID: 13,
    },
    {
      Titulo: 'Formularios con React js',
      Imagen: '/ImagenesCursos/FormulariosReact.png',
      TAGS: ['ReactJs', 'FrontEnd', 'Formularios', 'UI', 'UX/UI'],
      ID: 14,
    },
  ]);
}
