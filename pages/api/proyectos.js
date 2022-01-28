export default function handler(req, res) {
    res.status(200).json([
      { 
        "Titulo"  : "Menu lateral",
        "URL"  :"/ImagenesCursos/UiDesing.png",
        "Categoria" : "Menúes",
        "Lenguajes"  :["Html","CSS","Javascript"],
        "Descripcion"  :"Menu lateral desplegable",
        "ID"    : 1,
        "HTML" : `<nav class="nav" id="myNav">
        <ul>
            <li class="nav__sec">
                <i class="flaticon-shop iCls"><a>Tienda</a></i>
            </li>
            <li class="nav__sec">
                <i class="flaticon-worldwide iCls"><a>Donde estamos?</a></i>
            </li>
            <li class="nav__sec">
                <i class="flaticon-envelope iCls"><a>Contactanos</a></i>
            </li>
            <li class="nav__sec">
                <i class="flaticon-phone-call iCls"><a>Llamanos</a></i>
            </li>
            <li class="nav__sec">
                <i class="flaticon-settings iCls"><a>Ajustes</a></i>
            </li>
            <li class="nav__sec">
                <i class="flaticon-calendar iCls"><a>Programá</a></i>
            </li>
            <li class="nav__sec">
                <i class="flaticon-home iCls"><a>Home</a></i>
                
            </li>
        </ul>
    </nav>`
      }
    ])
  }