let usuarioconectado = false
let emailUsuario = ""
let contrasenaUsuario = "" 
let nombreUsuario = ""
let recordsUsuario = {}
let rankingglobal = []

recuperarUsuarioLocalStorage()

////// PAGINAS ///////
function Inicio(){
    
    let editar = false
    return {
        oninit:()=>{
            consultarRecord()
            rankingGlobal()
        },
        view:()=> [
                   m("div", {"class":"ui center aligned segment"},
                     m("h1", {"class":"ui header saludar"},
                        "Bienvenido " + nombreUsuario,
                        console.log(nombreUsuario)
                     )
                   ),
                   m("div", {"class":"ui grid"},
                        [
                        m("div", {"class":"three wide column"},
                            m("div", {"class":"ui center aligned segment"},
                            [
                                m("h3",
                                    "Estadisticas Personales"
                                ),
                                m("h4", 
                                    {"class":"puntosfacil"},
                                    "Nivel Fácil", 
                                        m("p", recordsUsuario.recordfacil+ " Puntos")
                                ),
                                m("h4", 
                                    {"class":"puntosmedio"},
                                    "Nivel Medio", 
                                        m("p", recordsUsuario.recordmedio+ " Puntos")
                                ),
                                m("h4", 
                                    {"class":"puntosdificil"},
                                    "Nivel Difícil", 
                                        m("p", recordsUsuario.recorddificil+ " Puntos")
                                ),
                                m("h4", 
                                    {"class":"puntostotales"},
                                    "Récord Global", 
                                        m("p", recordsUsuario.totalrecord + " Puntos")
                                ),
                                m("br"),
                                m("button", {
                                    onclick:()=>{
                                        editar = !editar
                                        //consultarUsuario()
                                    },
                                    "class":"editarperfil boton"},
                                    "Editar Perfil"
                                ),
                                m("br"),
                                m("br"),
                                m("p", {"class":"mensajeeditar"}),
                                m("button", {
                                    "class":"btncerrarsesion boton",
                                    onclick:()=>{
                                        localStorage.removeItem('usuario')
                                        location.href = "./"
                                    }
                                },
                                "Cerrar Sesion"
                                )
                            ]
                            )
                        ),
                        m("div", {"class":"ten wide column"},
                            [
                            ///BOTONES NIVELES
                            m("div", {"class":"ui center aligned segment"},
                                [
                                m("div", {"class":"two wide column"},
                                ),
                                m("div", {"class":"twelve wide column"},
                                    [
                                    m("h2",
                                        "Selecciona nivel de dificultad"
                                    ),
                                    m("a", {
                                            "href":"./index.html#!nivelfacil",
                                            "class":"ui green inverted button btnnivelfacil",
                                            style: {width: "100%", marginBottom: "10px"}
                                        },
                                        "Nivel Fácil"
                                    ),
                                    m("a", {
                                            "href":"./index.html#!nivelmedio",
                                            "class":"ui orange inverted button btnnivelmedio",
                                            style: {width: "100%", marginBottom: "10px"}
                                        },
                                        "Nivel Medio"
                                    ),
                                    m("a", {
                                            "href":"./index.html#!niveldificil",
                                            "class":"ui red inverted button btnniveldificil",
                                            style: {width: "100%"}
                                            },
                                        "Nivel Difícil"
                                    )
                                    ]
                                ),
                                m("div", {"class":"two wide column"},
                                )
                                ]
                            ),
                            ///GUÍA Y REGLAS DEL JUEGO
                            m("div", {"class":"ui center aligned segment"},
                                [
                                m("h2",
                                
                                    "Guía General"
                                ),
                                m("h3",
                                    "Bienvenido a CountryVal aquí te explicamos las reglas generales del juego!"
                                ),
                                m("p",
                                    " - Hay 3 niveles de dificultad: Fácil, Medio y Difícil"
                                ),
                                m("p",
                                    " - Solo hay paises de Europa y Transcontinentales que también pertenecen a Europa"
                                ),
                                m("p",
                                    " - Una barra baja ya puesta en el nombre del país representa un espacio"
                                ),
                                m("p",
                                    [
                                    " - En cada juego tienes 6 oportunidades para acertar el país, el ",
                                    m("b",
                                        "sistema de puntaje"
                                    ),
                                    " es el siguiente: ",
                                    m("br"),
                                    " - 0 Fallos: 60 puntos ",
                                    m("br"),
                                    " - 1 Fallo: 50 puntos ",
                                    m("br"),
                                    " - 2 Fallos: 40 puntos ",
                                    m("br"),
                                    " - 3 Fallos: 30 puntos ",
                                    m("br"),
                                    " - 4 Fallos: 20 Puntos ",
                                    m("br"),
                                    " - 5 Fallos: 10 puntos ",
                                    m("br"),
                                    " - 6 Fallo: Pierdes la partida, se guardan los puntos que has conseguido si es el récord y se reinicia la partida"
                                    ]
                                ),
                                m("p",
                                    [
                                    m("b",
                                        "Atajos de teclado:"
                                    ),
                                    m("br"),
                                    " - Espacio: Siguiente Nivel ",
                                    m("br"),
                                    " - Enter: Comprobar ",
                                    m("br"),
                                    " - Retroceso: Borrar letras"
                                    ]
                                ),
                                m("p",
                                    " - En cada nivel te explicaremos las especificaciones de ese nivel"
                                )
                                ]
                            )
                            ]
                        ),
                        m("div", {"class":"three wide column"},
                            m("div", {"class":"ui center aligned segment"},
                            [
                                m("h3",
                                "Ranking Global"
                                ),
                                m("table", 
                                
                                    {"id":"tablamarcador"},
                                    m("th", "Nombre de Usuario"),
                                    m("th", "Puntos"),
                                    
                                    rankingglobal.map(datos => 
                                        m("tr", 
                                            m("td", datos.nombreusuario),
                                            m("td", datos.record)
                                        )
                                    )
                                )
                            ]
                            )
                        )
                        ]
                   ),
                //    m("div", {"class":"modal","id":"ventanaModal"},
                //      m("div", {"class":"modal-content"},
                //         [
                //             m("div", {"class":"cerrar"},
                //             m.trust("&times;")
                //             ),
                //             m("h2",
                //             "Registrarse"
                //             )
                //         ]
                //      )
                //    ),
                   editar
                   ? m("div", {"class":"modal","id":"ventanaModalUsuario"},
                        m("div", {"class":"modal-content"},
                            [
                                m("div", {
                                    "class":"cerrar",
                                    style: {cursor: "pointer"},
                                    onclick:()=>{editar = !editar}
                                    },
                                    m.trust("&times;")
                                ),
                                m("h3",
                                    "Editar Perfil"
                                ),
                                m("label", {"class":"textoeditar","for":"Nombre"},
                                    "Nombre:"
                                ),
                                m("br"),
                                m("input", {"class":"nombre-editar campo-sesion","type":"text","name":"nombre-editar"}),
                                m("br"),
                                m("br"),
                                m("label", {"class":"textoeditar","for":"Email"},
                                    "Email:"
                                ),
                                m("br"),
                                m("input", {"class":"email-editar campo-sesion","type":"email","name":"email-editar","readonly":"readonly"}),
                                m("br"),
                                m("br"),
                                m("label", {"class":"textoeditar","for":"Nombre de Usuario"},
                                    "Nombre de Usuario:"
                                ),
                                m("br"),
                                m("input", {"class":"username-editar campo-sesion","type":"text","name":"username-editar"}),
                                m("br"),
                                m("br"),
                                m("label", {"class":"textoeditar","for":"Contrasena"},
                                    "Contraseña: "
                                ),
                                m("br"),
                                m("input", {"class":"passwd-editar campo-sesion","type":"password","name":"passwd-editar"}),
                                m("br"),
                                m("br"),
                                m("p", {"class":"mensajeeditarmodal"}),
                                m("br"),
                                m("button", {"class":"btneditar boton"},
                                    "Editar"
                                )
                            ]
                        )
                   )
                   : null
            ]
    }
}

function Login(){
    let registro = false
    let inputemail
    let inputcontrasena
    return {
        view:()=>
            [
                m("div", {style: {width:"100%", height:"100%", display:"flex", justifyContent :"center", alignItems: "center"}},
                m("div", {"class":"ui center aligned segment segmento-inicio-sesion", style: {}}, 
                    m("div", {"class":"ui grid"},
                        [
                            m("div", {"class":"eight wide column mensaje-login"}, 
                                m("div",
                                        [
                                            m("h1", 
                                                "¡Bienvenido!"
                                            ),
                                            m("h4", 
                                                "¡Inicia sesión para disfrutar al completo de CountryVal!"
                                            )
                                        ]
                                )
                            ),
                            m("div", {"class":"eight wide column"},
                                [
                                    m("div", {"class":"formulario inicio-sesion"},
                                        [
                                            m("h3", 
                                                "Inicio de Sesión"
                                            ),
                                            m("input", {
                                                "class":"mail-inicio campo-sesion",
                                                "type":"email",
                                                "name":"mail-inicio",
                                                "placeholder":"Direccion Email",
                                                "required":"required",
                                                oncreate:(e)=>{
                                                    inputemail = e.dom
                                                }    
                                            }),
                                                m("br"),
                                                m("br"),
                                            m("input", {
                                                "class":"passwd-inicio campo-sesion",
                                                "type":"password",
                                                "name":"passwd-incio",
                                                "placeholder":"Contraseña",
                                                "required":"required",
                                                oncreate:(e)=>{
                                                    inputcontrasena = e.dom
                                                }
                                            }),
                                                m("br"),
                                                m("br"),
                                            m("a", {
                                                "class":"btn-iniciar boton",
                                                "name":"btn-iniciar",
                                                onclick:()=>{
                                                    InicioSesion(inputemail.value, inputcontrasena.value)
                                                }
                                            }, 
                                                "Iniciar Sesión"
                                            ),
                                                m("br"),
                                                m("br"),
                                            m("p", {"class":"respuestalogin"})
                                        ]
                                    ),
                                    m("p", {"class":"registrar"},
                                        [
                                            "¿No tienes cuenta? ",
                                            m("u", 
                                                {
                                                    style: {cursor: "pointer"},
                                                    onclick:()=>{
                                                    registro = !registro
                                                }},
                                                "Registrate aquí"
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                )),
                registro
                ? m("div", {"class":"modal","id":"ventanaModal"}, 
                    m("div", {"class":"modal-content"},
                        [
                            m("div", {
                                "class":"cerrar",
                                style: {
                                    cursor: "pointer"
                                } ,
                                onclick:()=>{
                                    registro = !registro
                                }
                            }, 
                                m.trust("&times;")
                            ),
                            m("h2", 
                                "Registrarse"
                            ),
                            m("label", {"for":"nombre-registrar"}, 
                                "Nombre:"
                            ),
                            m("br"),
                            m("input", {"class":"nombre-registrar campo-sesion","type":"text","id":"nombre-registrar","name":"nombre-registrar"}),
                            m("br"),
                            m("br"),
                            m("label", {"for":"email-registrar"}, 
                                "Email:"
                            ),
                            m("br"),
                            m("input", {"class":"email-registrar campo-sesion","type":"email","id":"email-registrar","name":"email-registrar"}),
                            m("br"),
                            m("br"),
                            m("label", {"for":"username-registrar"}, 
                                "Nombre de Usuario:"
                            ),
                            m("br"),
                            m("input", {"class":"username-registrar campo-sesion","type":"text","id":"username-registrar","name":"username-registrar"}),
                            m("br"),
                            m("br"),
                            m("label", {"for":"passwd-registrar"}, 
                                "Contraseña: "
                            ),
                            m("br"),
                            m("input", {"class":"passwd-registrar campo-sesion","type":"password","id":"passwd-registrar","name":"passwd-registrar","title":"Debe contener al menos una letra y un numero. Debe tener mas de seis caracteres y menos de 20"}),
                            m("br"),
                            m("br"),
                            m("p", {"class":"respuestaregistrar"}),
                            m("button", {"class":"btnregistrar boton"}, 
                                "Registrarse"
                            ),
                            m("br"),
                            m("br")
                        ]
                    )
                )
                : null
            ]
        
    }
}

function Nivel () {
    let letrasUsuario = [];
    let respuesta="";
    let nombrepais;
    let idpais=0;
    let capitalpais;
    let habitantespais;
    let monumentopais;
    let siluetapais;
    let famosopais;
    let banderapais;
    let modalganar = false
    let modalperder = false
    let resuelto = false;
    let puntosporronda = 60;
    let paisesmostrados = {};
    let inputs = []
    let puntos = 0
    let paisseleccionado;
    let pistasutilizadas = 0;
    let numaleatorio = Math.floor(Math.random() * 50) + 1;
    let contador = 0;
    let cerrado = true;
    let fin = false;
    let contenedorpaisespuntuaciones = false
    

  return {
        oncreate:()=> {
            FuncionalidadLvlFacil()
        },
        view:({attrs})=> 
             [
                m("div", {"class":"ui center aligned segment"}, 
                    m("h1", {"class":"ui header"}, 
                        "Nivel " + attrs.nivel
                    )
                ), 
                m("div", {"class":"ui grid"},
                    [
                        m("div", {"class":"two wide column"}, 
                            m("div", {"class":"ui center aligned segment palabrascontenido"},
                                [
                                    m("h2", 
                                        "Resumen Partida"
                                    ),
                                    m("h4", 
                                        "Puntos en ronda actual: "
                                    ),
                                    m("p", {"class":"puntosronda"}, 
                                        puntosporronda + " puntos"
                                    ),
                                    m("h4", 
                                        "Puntos en partida: "
                                    ),
                                    m("p", {"class":"puntospartida"}, 
                                        puntos + " puntos"
                                    )
                                ]
                            )
                        ),
                        m("div", {"class":"twelve wide column"},
                            [
                                //IMAGENES NIVEL DIFÍCIL
                                attrs.nivel == "Difícil"
                                ? m("div", {"class":"ui center aligned segment"},
                                    [
                                        m("div", {"class":"two wide column"}, 
                                        ),
                                        m("div", {"class":"twelve wide column"},
                                            [
                                                m("div", {"id":"imagenes"},
                                                    [
                                                        m("div", {"class":"textosdificil","id":"imagen1"}, 
                                                            m("h1", {"class":"habitantesycapital","id":"habitantes"})
                                                        ),
                                                        m("div", {"class":"imagenesdificil","id":"imagen2"}),
                                                        m("div", {"class":"imagenesdificil","id":"imagen3"})
                                                    ]
                                                ),
                                                m("div", {"id":"imagenes"},
                                                    [
                                                        m("div", {"class":"imagenesdificil","id":"imagen4"}),
                                                        m("div", {"class":"textosdificil","id":"imagen5"}, 
                                                            m("h1", {"class":"habitantesycapital","id":"capital"})
                                                        )
                                                    ]
                                                )
                                            ]
                                        ),
                                        m("div", {"class":"two wide column"}, 
                                            m("p", {"class":"puntos"})
                                        )
                                    ]
                                )
                                : null,
                                //IMAGENES NIVEL EDIO
                                attrs.nivel == "Medio"
                                ? m("div", {"class":"ui center aligned segment"},
                                    [
                                        m("div", {"id":"imagenes"},
                                            [
                                                m("div", {"class":"image","id":"imagen1"}),
                                                m("div", {"class":"image","id":"imagen2"}),
                                                m("div", {"class":"image","id":"imagen3"})
                                            ]
                                        ),
                                        m("div", {"id":"imagenes"},
                                            [
                                                m("div", {"class":"image","id":"imagen4"}),
                                                m("div", {"class":"image","id":"imagen5"}),
                                                m("div", {"class":"image","id":"imagen6"})
                                            ]
                                        )
                                    ]
                                )
                                : null,
                                //PARA TODOS LOS NIVELES
                                //CASILLAS
                                m("div.palabrascontenido", {
                                    "class":"ui center aligned segment palabrascontenido",
                                    style: {display: "flex", justifyContent: "center", alignItems: "center"}
                                    }, 
                                        m("div", {"id":"palabras"},
                                            nombrepais?.length 
                                            ? nombrepais.split("").map((letra,index) => {
                                                return m("input", {
                                                    maxLength: 1, 
                                                    value: letra=="_" ? letra : null,
                                                    readOnly: letra=="_" ? true : false,
                                                    key: index,
                                                    style: {
                                                        width : "98px",
                                                        height : "100px",
                                                        float : "left",
                                                        border : "2px solid",
                                                        borderRadius : "10px",
                                                        margin : "4px",
                                                        textAlign : "center",
                                                        fontSize : "50px"
                                                    },
                                                    oncreate: (e)=>{
                                                        inputs.push(e.dom)
                                                        letra =="_" ? letrasUsuario[index] = "_" : ""
                                                    },
                                                    oninput:(e)=>{
                                                        e.target.value = e.target.value.toUpperCase();
                                                        if (letra == "_") {
                                                            console.log("_")
                                                            e.target.value = "_";
                                                            e.target.readOnly = true;
                                                        }
                                                        else if (!e.target.value.match(/^[A-ZÑ]$/)) {
                                                            
                                                            e.target.value = "";
                                                        } else {
                                                            if (e.target.value.length == e.target.maxLength) {
                                                                let nextInput = e.target.nextElementSibling;
                                                                while (nextInput && (nextInput.readOnly || !nextInput.matches("input"))) {
                                                                    nextInput = nextInput.nextElementSibling;
                                                                }
                                                                if (nextInput) {
                                                                    nextInput.focus();
                                                                }
                                                            }
                                                            
                                                            letrasUsuario[index]= e.target.value
                                                            
                                                        }
                                                        console.log(letrasUsuario)
                                                    },
                                                    onkeydown:(e)=>{
                                                        if (e.keyCode == 8) {
                                                            e.preventDefault();
                                                            let inputanterior = e.target.previousElementSibling;
                                                            if (!e.target.nextElementSibling) {
                                                                if (e.target.value == "" || e.target.readOnly) {
                                                                    while (inputanterior && inputanterior.readOnly) {
                                                                        inputanterior = inputanterior.previousElementSibling;
                                                                    }
                                                                    if (inputanterior) {
                                                                        inputanterior.value = "";
                                                                        inputanterior.focus();
                                                                    }
                                                                } else {
                                                                    e.target.value = "";
                                                                }
                                                            } else {
                                                                while (inputanterior && inputanterior.readOnly) {
                                                                    inputanterior = inputanterior.previousElementSibling;
                                                                }
                                                                if (inputanterior) {
                                                                    inputanterior.value = "";
                                                                    inputanterior.focus();
                                                                }
                                                            }
                                                            
                                                            letrasUsuario[index]= e.target.value
                                                            console.log(letrasUsuario)
                                                        }
                                                    }
                                                },
                                                )
                                            })
                                            
                                            : null
                                        )
                                ),
                                //BOTONES
                                m("div", {"class":"ui center aligned segment"},
                                    [
                                        m("button", {
                                            "class":"volverinicio boton",
                                            onclick:()=>{
                                                location.href="./"
                                            }}, 
                                            "Volver al inicio"
                                        ),
                                        attrs.nivel == "Fácil"
                                        ? m("button", {"class":"pista boton"}, 
                                            "Pista"
                                        ) 
                                        : null,
                                        m("button", {
                                            "class":"comprobar boton",
                                            onclick:()=>{
                                                respuesta = ""
                                                letrasUsuario.map(l => {
                                                    respuesta += l
                                                })
                                                console.log(respuesta)
                                                perder(respuesta)
                                            }
                                        }, 
                                            "Comprobar"
                                        ),
                                        m("button", {
                                            "class":"siguiente boton",
                                            onclick:()=>{
                                                siguientenivel()
                                            }
                                            }, 
                                            "Siguiente"
                                        )
                                    ]
                                ),
                                //GUÍAS
                                m("div", {"class":"ui center aligned segment"},
                                    attrs.nivel == "Fácil"
                                    ? [
                                        m("h2", 
                                            "Guía Nivel Fácil"
                                        ),
                                        m("p", 
                                            "Bienvenido al Nivel Fácil, aquí te explicaré como funciona este nivel."
                                        ),
                                        m("p", 
                                            "Cada uno de los cuadrados que ves arriba de los botones representa una letra del pais seleccionado aleatoriamente."
                                        ),
                                        m("p", 
                                            "Cada vez que pongas el nombre de un país si las letras que has puesto coinciden con la letra del país esta se pondrá en verde indicando que es correcta"
                                        ),
                                        m("p", 
                                            "Si no sabes por donde empezar o te has quedado enganchado puedes pedir un máximo de dos pistas las cuales te mostrarán una letra"
                                        ),
                                        m("p", 
                                            "Tendrás que empezar con un país a ciegas!"
                                        )
                                    ]
                                    : null,
                                    attrs.nivel == "Medio"
                                    ? [
                                        m("h2", 
                                            "Guía Nivel Medio"
                                        ),
                                        m("p", 
                                            "Bienvenido al Nivel Medio, aquí te explicaré como funciona este nivel."
                                        ),
                                        m("p", 
                                            "Cada uno de los cuadrados que ves arriba de los botones representa una letra del pais seleccionado aleatoriamente."
                                        ),
                                        m("p", 
                                            "Cada vez que pongas el nombre de un país y falles se te mostrará una parte de la bandera aleatoriamente hasta que aciertes."
                                        ),
                                        m("p", 
                                            "Tendrás que empezar con un país a ciegas!"
                                        )
                                    ]
                                    : null,
                                    attrs.nivel == "Difícil"
                                    ? [
                                        m("h2", 
                                            "Guía Nivel Difícil"
                                        ),
                                        m("p", 
                                            "Bienvenido al Nivel Difícil, aquí te explicaré como funciona este nivel."
                                        ),
                                        m("p", 
                                            "Cada uno de los cuadrados que ves arriba de los botones representa una letra del pais seleccionado aleatoriamente."
                                        ),
                                        m("p",
                                            [
                                                "Cada vez que pongas el nombre de un país y falles se te mostrará:",
                                                m("br"),
                                                " Primer Fallo: Los habitantes del país",
                                                m("br"),
                                                " Segundo Fallo: Un monumento famoso del país",
                                                m("br"),
                                                " Tercer Fallo: La silueta del país",
                                                m("br"),
                                                " Cuarto Fallo: Una persona famosa del país",
                                                m("br"),
                                                " Quinto Fallo: La capital del país"
                                            ]
                                        ),
                                        m("p", 
                                            "Tendrás que empezar con un país a ciegas!"
                                        )
                                    ]
                                    : null
                                )
                            ]
                        ),
                        m("div", {"class":"two wide column"}, 
                        )
                    ]
                ), 
                modalperder
                ? m("div", {"class":"modal","id":"ventanaModalPerder"}, 
                    m("div", {"class":"modal-perder"},
                        [
                            m("h1", 
                                "Has Perdido!"
                            ),
                            m("h3", 
                                "Nivel: " + attrs.nivel
                            ),
                            m("h3", {"class":"puntuacionObtenida"}, 
                                "Puntuación Obtenida: "
                            ),
                            m("h3", {"class":"puntuacionRecord"}, 
                                "Récord Puntuación: "
                            ),
                            m("div", {"class":"contenedorpaisesacertados"},
                                [
                                    m("h3", {"class":"titulopaisesacertados"}, 
                                        "Ver paises acertados"
                                    ),
                                    m("div", {"class":"contenedorpaisesypuntuaciones"}, 
                                        m("p", {"class":"paisesypuntuaciones"})
                                    )
                                ]
                            ),
                            m("br"),
                            m("button", {"class":"volverIntentar boton"}, 
                                "Volver a Intentar"
                            ),
                            m("button", {"class":"volverMenu boton"}, 
                                "Volver al Menú Principal"
                            )
                        ]
                    )
                )
                : null,
                modalganar
                ? m("div", {"class":"modal","id":"ventanaModalGanar"}, 
                    m("div", {"class":"modal-ganar"},
                        [
                            m("h1", 
                                "Enhorabuena has acertado todos!"
                            ),
                            m("h3", 
                                "Nivel: " + attrs.nivel
                            ),
                            m("h3", {"class":"puntuacionObtenida"}, 
                                "Puntuación Obtenida: " + puntos + " Puntos"
                            ),
                            m("h3", {"class":"puntuacionRecord"}, 
                                "Récord Puntuación: " 
                            ),
                            m("div", {
                                "class":"contenedorpaisesacertados", 
                                style: {cursor: "pointer"}, 
                                onclick:()=>{
                                    contenedorpaisespuntuaciones = !contenedorpaisespuntuaciones
                                }
                            },
                                [
                                    m("h3", {"class":"titulopaisesacertados"}, 
                                        "Ver paises acertados"
                                    ),
                                    m("div", {
                                        "class":"contenedorpaisesypuntuaciones",
                                        style: {
                                            height: "content",
                                            display: contenedorpaisespuntuaciones ? "block" : "none"
                                        },
                                        
                                    }, 
                                        
                                        Object.keys(paisesmostrados).map(pais =>{
                                            return m("p", pais + ": " + paisesmostrados[pais].Puntuaje + " Puntos")
                                        }),
                                    ),
                                    
                                ]
                            ),
                            m("br"),
                            m("button", {"class":"volverIntentar boton"}, 
                                "Volver a Intentar"
                            ),
                            m("button", {"class":"volverMenu boton"}, 
                                "Volver al Menú Principal"
                            )
                        ]
                    ),
                    
                )
                : null
            ]
  }

    

   

    function FuncionalidadLvlFacil(){


        document.addEventListener('keypress', function (e) {
            if (fin == false) {
                if (e.which == 13) {
                    letrasUsuario.map(l => {respuesta += l})
                    perder(respuesta);
                } else if (e.which == 32) {
                    siguientenivel();
                }
            }
        });
        
        pais();
    

    // Compruebo si estás logeado para dejarte entrar a la página o no
    // $.ajax({
    //     url: '../servidor/islogged.php',
    //     type: 'GET',
    //     datatype: "JSON",
    //     async: false,
    //     success: function (datos) {
    //         datos_parse = JSON.parse(datos);
    //         if (datos_parse == 0) {
    //             location.href = "../html_css/index.html";
    //         }
    //     },
    //     error: function (xhr, textStatus, errorMessage) {
    //         console.log("ERROR" + errorMessage + textStatus + xhr);
    //     }
    // });

    // // Pulsas el botón pista y te da una pista
    // document.querySelector(".pista").addEventListener("click", pista);

    // Si pulsas el enter te comprueba y si pulsas el espacio te lleva al siguiente nivel
    

    // Desplegable de paises en las puntuaciones de ganar y perder
    // document.getElementsByClassName(".contenedorpaisesacertados").addEventListener("click", function () {
    //     let contenedor = document.getElementsByClassName(".contenedorpaisesypuntuaciones");
    //     if (cerrado) {
    //         contenedor.style.display = "block";
    //         cerrado = false;
    //     } else {
    //         contenedor.style.display = "none";
    //         cerrado = true;
    //     }
    // });

    
    
    

        function pista() {
            // Si pulsas al botón pista te muestra una letra al azar en el nombre del país
            let respuesta = document.querySelectorAll(".hola");
            let letraaleatoria;

            if (resuelto != true) {
                if (pistasutilizadas < 2) {
                    pistasutilizadas++;
                    do {
                        letraaleatoria = Math.floor(Math.random() * respuesta.length);
                    } while (respuesta[letraaleatoria].readOnly);

                    respuesta[letraaleatoria].value = paisseleccionado[letraaleatoria];
                    respuesta[letraaleatoria].style.backgroundColor = "gray";
                    respuesta[letraaleatoria].readOnly = true;
                }
            }
        }

        

        

        function focusinputvacio() {
            // Te lleva al primer input vacío para escribir
            let primerinputvacio = 0;
            while (document.getElementById(primerinputvacio).readOnly) {
                primerinputvacio++;
            }
            document.getElementById(primerinputvacio).focus();
        }

        function almacenardatos(puntos) {
        // Almacena el record del nivel fácil
        $.ajax({
            url: '../servidor/almacenarpuntos.php',
            type: 'POST',
            datatype: "JSON",
            async: false,
            data: {
                puntos: puntos,
                nivel: "facil"
            },
            success: function (datos) {},
            error: function (xhr, textStatus, errorMessage) {
                console.log("ERROR" + errorMessage + textStatus + xhr);
            }
        });
        }


    }

    function siguientenivel() {
        // Reinicia las variable y muestra otro país
        if (resuelto == true) {
            inputs.map(i => {
                i.value = ""
                i.style.backgroundColor = "transparent"
                i.readOnly = false
            })
            numaleatorio = Math.floor(Math.random() * 50) + 1;
            puntosporronda = 60;
            contador = 0;
            letrasUsuario = []
            pistasutilizadas = 0;
            resuelto = false;
            pais();
        }
    }

    function pais() {
        // Obtengo los datos de todos los paises
        m.request({
            method: "GET",
            url: "/api/paises"
        })
        .then(paises => {
            for (let i = 0; i < paises.length; i++) {
                if (paises[i].id_pais == numaleatorio) {
                    nombrepais = paises[i].nombre.toUpperCase();
                    idpais = paises[i].id_pais;
                    capitalpais = paises[i].capital;
                    habitantespais = paises[i].habitantes;
                    monumentopais = paises[i].monumento;
                    siluetapais = paises[i].silueta;
                    famosopais = paises[i].persona_Famosa;
                    banderapais = paises[i].bandera;
                    console.log(nombrepais)
                }
            }

            
        // Compruebo si está repetido el pais para mostrarlo
        // if (nombrepais.toUpperCase() in paisesmostrados) {
        //     numaleatorio = Math.floor(Math.random() * 50) + 1;
        //     pais();
        // } else {
        //     console.log(nombrepais)
        //     // Creo un input para cada letra del pais
        //     resuelto = false;
        //     let divpalabras = document.getQuerySelector(".palabras");
        //     paisseleccionado = nombrepais.split("");
        //     console.log(nombrepais);
        //     divpalabras.innerHTML = "";
    
            
        //     focusinputvacio();
    
        //     m.redraw()
        // }
        }).catch(function (e) {
            console.log("ERROR" + e.message);
        });
        
    }

    function puntuaciones() {
        // Ventana modal con las puntuaciones de la partida cuando pierdes
        //almacenardatos(puntos);
        //document.querySelector(".puntuacionObtenida").innerHTML += puntos + " Puntos";
        //document.querySelector(".puntuacionRecord").innerHTML += puntos + " Puntos";
        for (let key in paisesmostrados) {
            if (paisesmostrados.hasOwnProperty(key)) {
                //document.querySelector(".paisesypuntuaciones").innerHTML += key + ": " + paisesmostrados[key].Puntuaje + " Puntos<br>";
            }
        }
        // document.querySelector(".volverIntentar").addEventListener("click", function () {
        //     location.href = "../html_css/nivelfacil.html";
        // });
        // document.querySelector(".volverMenu").addEventListener("click", function () {
        //     puntos = 0;
        //     location.href = "../html_css/inicio.html";
        // });
    }

    function perder(respuesta) {
        // Si haces más de 5 fallos pierdes la partida
        if (contador < 5) {
            contador++;

            comprobar(respuesta);
        } else if (contador == 5) {
            comprobar(respuesta);
            if (resuelto == false) {
                fin = true;
                puntuaciones();
                document.querySelector("#ventanaModalPerder").style.display = "block";
            }
        }
    }
    
    function comprobar(respuesta) {
            
        console.log(inputs)
        console.log(puntosporronda)
        comprobarrespuesta(respuesta);
        // Comprueba todas las letras para ver cuales están en la posición correcta
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value != nombrepais[i]) {
                inputs[i].value = "";
            }
             else {
                if (inputs[i].style.backgroundColor != "gray") {
                    inputs[i].style.backgroundColor = "green";
                    inputs[i].readOnly = true;
                }
            }
        }
        // Si está mal puesto el nombre por el usuario te resta puntos
        if (resuelto != true) {
            puntosporronda -= 10;
        }
        if (Object.keys(paisesmostrados).length == 2) {
            console.log(paisesmostrados.length)
            fin = true;
            puntuaciones();
            modalganar = true
        }
        //focusinputvacio();
        
    }
    
    function comprobarrespuesta(respuesta) {
        console.log(respuesta)
        console.log(nombrepais)
        if (nombrepais == respuesta) {
            paisesmostrados[nombrepais] = { "Adivinado": true, "Puntuaje": puntosporronda };
            resuelto = true;
            puntos += puntosporronda;
            console.log(paisesmostrados, paisesmostrados[nombrepais].Adivinado, paisesmostrados[nombrepais].Puntuaje)
        }
    }

    
}

/*
function NivelDificil () {
    return {
        view:()=>[
            
                m("div", {"class":"ui center aligned segment"}, 
                    m("h1", {"class":"ui header"}, 
                        "Nivel Difícil"
                    )
                ), 
                m("div", {"class":"ui grid"},
                    [
                        m("div", {"class":"two wide column"}, 
                            m("div", {"class":"ui center aligned segment palabrascontenido"},
                                [
                                    m("h2", 
                                        "Resumen Partida"
                                    ),
                                    m("h4", 
                                        "Puntos en ronda actual: "
                                    ),
                                    m("p", {"class":"puntosronda"}, 
                                        "60 puntos"
                                    ),
                                    m("h4", 
                                        "Puntos en partida: "
                                    ),
                                    m("p", {"class":"puntospartida"}, 
                                        "0 puntos"
                                    )
                                ]
                            )
                        ),
                        m("div", {"class":"twelve wide column"},
                            [
                                
                                m("div", {"class":"ui center aligned segment palabrascontenido"}, 
                                    m("div", {"class":"palabras"})
                                ),
                                m("div", {"class":"ui center aligned segment"},
                                    [
                                        m("button", {
                                          // "href":"./index.html",
                                          "class":"volverinicio boton",
                                          onclick:()=>{
                                              location.href="./"
                                          }}, 
                                            "Volver al inicio"
                                        ),
                                      //   m("button", {"class":"comprobar boton"}, 
                                      //       "Comprobar"
                                      //   ),
                                      //   m("button", {"class":"siguiente boton"}, 
                                      //       "Siguiente"
                                      //   )
                                    ]
                                ),
                                m("div", {"class":"ui center aligned segment"},
                                    
                                )
                            ]
                        ),
                        m("div", {"class":"two wide column"}, 
                        )
                    ]
                ), 
                m("canvas", {"id":"canvas"}), 
                m("img", {"id":"imagen","style":{"display":"none"}}), 
                m("div", {"class":"modal","id":"ventanaModal"},
                    [
                        m("div", {"class":"cerrarimagen"}, 
                            m.trust("&times;")
                        ),
                        m("img", {"id":"imagenmodal"})
                    ]
                ), 
                m("div", {"class":"modal","id":"ventanaModalPerder"}, 
                    m("div", {"class":"modal-perder"},
                        [
                            m("h1", 
                                "Has Perdido!"
                            ),
                            m("h3", 
                                "Nivel: Difícil"
                            ),
                            m("h3", {"class":"puntuacionObtenida"}, 
                                "Puntuación Obtenida: "
                            ),
                            m("h3", {"class":"puntuacionRecord"}, 
                                "Récord Puntuación: "
                            ),
                            m("div.contenedorpaisesacertados", {"class":"contenedorpaisesacertados"},
                                [
                                    m("h3", {"class":"titulopaisesacertados"}, 
                                        "Ver paises acertados"
                                    ),
                                    m("div.contenedorpaisesypuntuaciones", {"class":"contenedorpaisesypuntuaciones"}, 
                                        m("p", {"class":"paisesypuntuaciones"})
                                    )
                                ]
                            ),
                            m("br"),
                            m("button", {"class":"volverIntentar boton"}, 
                                "Volver a Intentar"
                            ),
                            m("button", {"class":"volverMenu boton"}, 
                                "Volver al Menú Principal"
                            )
                        ]
                    )
                ), 
                m("div", {"class":"modal","id":"ventanaModalGanar"}, 
                    m("div", {"class":"modal-ganar"},
                        [
                            m("h1", 
                                "Enhorabuena has acertado todos!"
                            ),
                            m("h3", 
                                "Nivel: Difícil"
                            ),
                            m("h3", {"class":"puntuacionObtenida"}, 
                                "Puntuación Obtenida: "
                            ),
                            m("h3", {"class":"puntuacionRecord"}, 
                                "Récord Puntuación: "
                            ),
                            m("div", {"class":"contenedorpaisesacertados"},
                                [
                                    m("h3", {"class":"titulopaisesacertados"}, 
                                        "Ver paises acertados"
                                    ),
                                    m("div", {"class":"contenedorpaisesypuntuaciones"}, 
                                        m("p", {"class":"paisesypuntuaciones"})
                                    )
                                ]
                            ),
                            m("br"),
                            m("button", {"class":"volverIntentar boton"}, 
                                "Volver a Intentar"
                            ),
                            m("button", {"class":"volverMenu boton"}, 
                                "Volver al Menú Principal"
                            )
                        ]
                    )
                )
            
        ]
    }
  }

function NivelMedio () {
  return {
      view: ()=>[
          [
              m("div", {"class":"ui center aligned segment"}, 
                  m("h1", {"class":"ui header"}, 
                      "Nivel Medio"
                  )
              ), 
              m("div", {"class":"ui grid"},
                  [
                      m("div", {"class":"two wide column"}, 
                          m("div", {"class":"ui center aligned segment palabrascontenido"},
                              [
                                  m("h2", 
                                      "Resumen Partida"
                                  ),
                                  m("h4", 
                                      "Puntos en ronda actual: "
                                  ),
                                  m("p", {"class":"puntosronda"}, 
                                      "60 puntos"
                                  ),
                                  m("h4", 
                                      "Puntos en partida: "
                                  ),
                                  m("p", {"class":"puntospartida"}, 
                                      "0 puntos"
                                  )
                              ]
                          )
                      ),
                      m("div", {"class":"twelve wide column"},
                          [
                              
                              m("div", {"class":"ui center aligned segment palabrascontenido"}, 
                                  m("div", {"class":"palabras"})
                              ),
                              m("div", {"class":"ui center aligned segment"},
                                  [
                                      m("button", {"class":"volverinicio boton"}, 
                                          "Volver al inicio"
                                      ),
                                      m("button", {"class":"comprobar boton"}, 
                                          "Comprobar"
                                      ),
                                      m("button", {"class":"siguiente boton"}, 
                                          "Siguiente"
                                      )
                                  ]
                              ),
                              m("div", {"class":"ui center aligned segment"},
                                  
                              )
                          ]
                      ),
                      m("div", {"class":"two wide column"}, 
                      )
                  ]
              ), 
              m("canvas", {"id":"canvas"}), 
              m("img", {"id":"imagen","src":"","style":{"display":"none"}}), 
              m("div", {"class":"modal","id":"ventanaModalPerder"}, 
                  m("div", {"class":"modal-perder"},
                      [
                          m("h1", 
                              "Has Perdido!"
                          ),
                          m("h3", 
                              "Nivel: Medio"
                          ),
                          m("h3", {"class":"puntuacionObtenida"}, 
                              "Puntuación Obtenida: "
                          ),
                          m("h3", {"class":"puntuacionRecord"}, 
                              "Récord Puntuación: "
                          ),
                          m("div", {"class":"contenedorpaisesacertados"},
                              [
                                  m("h3", {"class":"titulopaisesacertados"}, 
                                      "Ver paises acertados"
                                  ),
                                  m("div", {"class":"contenedorpaisesypuntuaciones"}, 
                                      m("p", {"class":"paisesypuntuaciones"})
                                  )
                              ]
                          ),
                          m("br"),
                          m("button", {"class":"volverIntentar boton"}, 
                              "Volver a Intentar"
                          ),
                          m("button", {"class":"volverMenu boton"}, 
                              "Volver al Menú Principal"
                          )
                      ]
                  )
              ), 
              m("div", {"class":"modal","id":"ventanaModalGanar"}, 
                  m("div", {"class":"modal-ganar"},
                      [
                          m("h1", 
                              "Enhorabuena has acertado todos!"
                          ),
                          m("h3", 
                              "Nivel: Medio"
                          ),
                          m("h3", {"class":"puntuacionObtenida"}, 
                              "Puntuación Obtenida: "
                          ),
                          m("h3", {"class":"puntuacionRecord"}, 
                              "Récord Puntuación: "
                          ),
                          m("div", {"class":"contenedorpaisesacertados"},
                              [
                                  m("h3", {"class":"titulopaisesacertados"}, 
                                      "Ver paises acertados"
                                  ),
                                  m("div", {"class":"contenedorpaisesypuntuaciones"}, 
                                      m("p", {"class":"paisesypuntuaciones"})
                                  )
                              ]
                          ),
                          m("br"),
                          m("button", {"class":"volverIntentar boton"}, 
                              "Volver a Intentar"
                          ),
                          m("button", {"class":"volverMenu boton"}, 
                              "Volver al Menú Principal"
                          )
                      ]
                  )
              )
          ]
      ]
  }
}
*/

/////// ENRUTAMIENTO ///////
const routes = {
  "/": {
      view: ()=> usuarioconectado ? m(Inicio) : m(Login)
  },
  "/inicio": {
      view:()=> usuarioconectado ? m(Inicio) : location.href = "./"
  },
  "/nivelfacil": {
      view:()=> usuarioconectado ? m(Nivel, {nivel: "Fácil"}) : location.href = "./"
  },
  "/nivelmedio": {
      view:()=> usuarioconectado ? m(Nivel, {nivel: "Medio"}) : location.href = "./"
  },
  "/niveldificil": {
      view:()=> usuarioconectado ? m(Nivel, {nivel: "Difícil"}) : location.href = "./"
  }
}

m.route(document.body, "/", routes)



////// FUNCIONES ///////
function InicioSesion(email, contrasena) {
    m.request({
        method: "GET",
        url:'/api/usuarios/'+email
    })
    .then(usuarios => {
        // Hacer algo con el usuario, como mostrarlo en la interfaz de usuario
        if(email == usuarios.email && contrasena == usuarios.contrasena){
            saveUsuarioLocalStorage(usuarios.email, usuarios.contrasena, usuarios.nombreusuario)
            location.href = "./index.html#!inicio"
        }
        else {
            return false
        }
    })
    .catch(error => console.error('Error al obtener usuario:', error));
}

function actualizarinsertarUsuario(email, nombreusuario, contrasena){
    m.request({
        method: "POST",
        url:'/api/usuarios',
        body: {
            email: email,
            nombreusuario: nombreusuario,
            contrasena: contrasena
        },
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function(response) {
        console.log("Usuario guardado:", response);
        // Limpiar el formulario después de guardar
        email = ""
        nombreusuario = ""
        contrasena = ""
    })
    .catch(function(error) {
        console.log("Error al guardar el usuario:", error);
    })
}

function insertarUsuario(email, nombreusuario, contrasena){
    m.request({
        method: "POST",
        url:'/api/usuarios',
        body: {
            email: email,
            nombreusuario: nombreusuario,
            contrasena: contrasena
        },
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function(response) {
        console.log("Usuario guardado:", response);
        // Limpiar el formulario después de guardar
        email = ""
        nombreusuario = ""
        contrasena = ""
    })
    .catch(function(error) {
        console.log("Error al guardar el usuario:", error);
    })
    
}

function insertarPuntuacion(){

}

function consultarRecord(){
    m.request({
        method: "GET",
        url:'/api/records/' + emailUsuario,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(records => {
        recordsUsuario = records
    })
    .catch(function(error) {
        console.log("Error al guardar el usuario:", error);
    })
}

function saveUsuarioLocalStorage(email, nombreusuario, contrasena){
    var usuario = {
        email: email,
        nombreusuario: nombreusuario,
        contrasena: contrasena
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log("Usuario guardado en localStorage:", usuario);
}

function recuperarUsuarioLocalStorage() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
        usuarioconectado = true
        emailUsuario = usuario.email
        contrasenaUsuario = usuario.contrasena
        nombreUsuario = usuario.nombreusuario
        console.log("Usuario cargado desde localStorage:", usuario);
    }
}

function rankingGlobal(){
    m.request({
        method: "GET",
        url:'/api/usuarios',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(usuarios => {
        usuarios.map(usuario => {
            m.request({
                method: "GET",
                url:'/api/records/' + usuario.email,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(records => {
                console.log(records)
                rankingglobal.push({nombreusuario: usuario.nombreusuario, record: records.totalrecord})
            })
            .catch(function(error) {
                console.log("Error al guardar el usuario:", error);
            })
        })
    })
    .catch(function(error) {
        console.log("Error al guardar el usuario:", error);
    })
}













