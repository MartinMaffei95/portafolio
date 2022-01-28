export default function handler(req, res) {
    res.status(200).json([
      { 
        "Titulo"  : "Menu lateral",
        "URL"  :"/ImagenesCursos/UiDesing.png",
        "Categoria" : "Menúes",
        "Lenguajes"  :["Html","CSS","Javascript"],
        "Descripcion"  :"Menu lateral desplegable",
        "ID"    : 1
      }
    ])
  }