let usuarioconectado = false
let emailUsuario = ""
let contrasenaUsuario = "" 
let nombreUsuario = ""
let recordsUsuario = {}
let rankingglobal = []
let urls = []
let imagenes = []
let key = "jGzIDSFwd34.dhgu38d_>hfud38hdbthdv"

recuperarUsuarioLocalStorage()

////// PAGINAS ///////
function Inicio(){
    
    let editar = false
    let editarEmail = ""
    let editarUsuario = ""
    let editarContrasena = ""
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
                                    "class":"editarperfil boton",
                                    style: {
                                        width: "100%"
                                    }},
                                    "Editar Perfil"
                                ),
                                m("br"),
                                m("br"),
                                m("p", {"class":"mensajeeditar"}),
                                m("button", {
                                    style: {
                                        width: "100%"
                                    },
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
                                m("label", {"class":"textoeditar","for":"Email"},
                                    "Email:"
                                ),
                                m("br"),
                                m("input", 
                                    {"class":"email-editar campo-sesion","type":"email","name":"email-editar","readonly":"readonly",
                                        value: emailUsuario,
                                        oncreate:(e)=>{
                                            editarEmail = e.dom
                                        }
                                    }),
                                    m("br"),
                                    m("br"),
                                m("label", {"class":"textoeditar","for":"Nombre de Usuario"},
                                    "Nombre de Usuario:"
                                ),
                                m("br"),
                                m("input", 
                                    {"class":"username-editar campo-sesion","type":"text","name":"username-editar", 
                                        value: nombreUsuario,
                                        oncreate:(e)=>{
                                            editarUsuario = e.dom
                                        }
                                }),
                                m("br"),
                                m("br"),
                                m("label", {"class":"textoeditar","for":"Contrasena"},
                                    "Contraseña: "
                                ),
                                m("br"),
                                m("input", 
                                    {
                                        "class":"passwd-editar campo-sesion","type":"password","name":"passwd-editar",
                                        value: contrasenaUsuario,
                                        oncreate:(e)=>{
                                            editarContrasena = e.dom
                                        }
                                    }
                                ),
                                m("br"),
                                m("br"),
                                m("p", {"class":"mensajeeditarmodal"}),
                                m("br"),
                                m("button", {
                                    "class":"btneditar boton",
                                    onclick: ()=>{
                                        actualizarUsuario(editarEmail.value, editarUsuario.value, editarContrasena.value)
                                    }
                                
                                },
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
    let inputemailregistro
    let inputusuarioregistro
    let inputcontrasenaregistro
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
                            m("label", {
                                "for":"email-registrar"}, 
                                "Email:"
                            ),
                            m("br"),
                            m("input", {
                                oncreate:(e)=>{
                                    inputemailregistro = e.dom
                                }, 
                                "class":"email-registrar campo-sesion","type":"email","id":"email-registrar","name":"email-registrar"}),
                            m("br"),
                            m("br"),
                            m("label", {"for":"username-registrar"}, 
                                "Nombre de Usuario:"
                            ),
                            m("br"),
                            m("input", {
                                oncreate:(e)=>{
                                    inputusuarioregistro = e.dom
                                }, 
                                "class":"username-registrar campo-sesion","type":"text","id":"username-registrar","name":"username-registrar"}),
                            m("br"),
                            m("br"),
                            m("label", {"for":"passwd-registrar"}, 
                                "Contraseña: "
                            ),
                            m("br"),
                            m("input", {
                                oncreate:(e)=>{
                                    inputcontrasenaregistro = e.dom
                                }, 
                                "class":"passwd-registrar campo-sesion","type":"password","id":"passwd-registrar","name":"passwd-registrar","title":"Debe contener al menos una letra y un numero. Debe tener mas de seis caracteres y menos de 20"}),
                            m("br"),
                            m("br"),
                            m("p", {"class":"respuestaregistrar"}),
                            m("button", {
                                onclick:()=>{
                                    insertarUsuario(inputemailregistro.value, inputusuarioregistro.value, inputcontrasenaregistro.value)
                                },
                                "class":"btnregistrar boton"
                            }, 
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
    let nivel = ""
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
    let numimagen = 0
    let vecesfallado = 0
    let imghabitantes
    let imgmonumento
    let imgsilueta
    let imgfamoso
    let imgcapital
    let imagenesutilizadas = {}
    let img
    

  return {
        oninit:({attrs})=> {
            consultarRecord()
            nivel = attrs.nivel
        },
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
                                                            m("h1", {
                                                                "class":"habitantesycapital","id":"habitantes",
                                                                oncreate:(e)=>{
                                                                    imghabitantes = e.dom
                                                                }
                                                            })
                                                        ),
                                                        m("div", {
                                                            "class":"imagenesdificil","id":"imagen2",
                                                            oncreate:(e)=>{
                                                                imgmonumento = e.dom
                                                            }
                                                        }),
                                                        m("div", {
                                                            "class":"imagenesdificil","id":"imagen3",
                                                            oncreate:(e)=>{
                                                                imgsilueta = e.dom
                                                            }
                                                        })
                                                    ]
                                                ),
                                                m("div", {"id":"imagenes"},
                                                    [
                                                        m("div", {
                                                            "class":"imagenesdificil","id":"imagen4",
                                                            oncreate:(e)=>{
                                                                imgfamoso = e.dom
                                                            }
                                                        }),
                                                        m("div", {"class":"textosdificil","id":"imagen5"}, 
                                                            m("h1", {
                                                                "class":"habitantesycapital","id":"capital",
                                                                oncreate:(e)=>{
                                                                    imgcapital = e.dom
                                                                }
                                                            })
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
                                //IMAGENES NIVEL MEDIO
                                attrs.nivel == "Medio"
                                ? [
                                    m("div", {"class":"ui center aligned segment"},
                                        [
                                            m("div", {"id":"imagenes"},
                                                [
                                                    m("div", {
                                                        "class":"image","id":"imagen1",
                                                        oncreate:(e) => {
                                                            imagenes.push(e.dom)
                                                        }
                                                    }),
                                                    m("div", {"class":"image","id":"imagen2",
                                                    oncreate:(e) => {
                                                        imagenes.push(e.dom)
                                                    }}),
                                                    m("div", {"class":"image","id":"imagen3",
                                                    oncreate:(e) => {
                                                        imagenes.push(e.dom)
                                                    }})
                                                ]
                                            ),
                                            m("div", {"id":"imagenes"},
                                                [
                                                    m("div", {"class":"image","id":"imagen4",
                                                    oncreate:(e) => {
                                                        imagenes.push(e.dom)
                                                    }}),
                                                    m("div", {"class":"image","id":"imagen5",
                                                    oncreate:(e) => {
                                                        imagenes.push(e.dom)
                                                    }}),
                                                    m("div", {"class":"image","id":"imagen6",
                                                    oncreate:(e) => {
                                                        imagenes.push(e.dom)
                                                    }})
                                                ]
                                            )
                                        ]
                                    ),
                                    m("img", {
                                        oncreate:(e)=>{
                                            img = e.dom
                                        },
                                        "id":"imagen","src":"","style":{"display":"none"}})
                                ]
                                : null,
                                //PARA TODOS LOS NIVELES
                                //CASILLAS
                                m("div.palabrascontenido", {
                                    "class":"ui center aligned segment palabrascontenido",
                                    style: {display: "flex", justifyContent: "center", alignItems: "center"}
                                    }, 
                                        m("div", {"id":"palabras"},
                                            
                                            //console.log(inputs.length, inputs),
                                            nombrepais?.length
                                            ? nombrepais.split("").map((letra,index) => {
                                                return m("input", {
                                                    maxLength: 1, 
                                                    key: index,
                                                    value: letra == "_" ? "_" : null,
                                                    readOnly: letra == "_" ? true : false,
                                                    style: {
                                                        width : "98px",
                                                        height : "100px",
                                                        float : "left",
                                                        border : "2px solid",
                                                        borderRadius : "10px",
                                                        margin : "4px",
                                                        textAlign : "center",
                                                        fontSize : "50px",
                                                        backgroundColor: letra == "_" ? "gray" : "transparent"

                                                    },
                                                    oncreate: (e)=>{
                                                        if (letra == "_") {
                                                            letrasUsuario[index] = "_"
                                                        }
                                                        else {
                                                            letrasUsuario[index] = ""
                                                        }
                                                        inputs[index] = e.dom
                                                        focusinputvacio()
                                                    },
                                                    oninput:(e)=>{
                                                        e.target.value = e.target.value.toUpperCase();
                                                        
                                                        if (!e.target.value.match(/^[A-ZÑ]$/)) {
                                                            e.target.value = ""
                                                        }
                                                        else {
                                                            if (e.target.value.length == e.target.maxLength) {
                                                                let nextInput = e.target.nextElementSibling
                                                                while (nextInput && (nextInput.readOnly || !nextInput.matches("input"))) {
                                                                    nextInput = nextInput.nextElementSibling;
                                                                }
                                                                if (nextInput) {
                                                                    nextInput.focus();
                                                                }
                                                            }
                                                            
                                                            if(e.target.value != "_"){
                                                                letrasUsuario[index]= e.target.value
                                                            }
                                                            
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
                                                            
                                                            if(e.target.value != "_"){
                                                                letrasUsuario[index]= e.target.value
                                                            }
                                                            console.log(letrasUsuario)
                                                        }
                                                    },
                                                
                                                },
                                                )
                                            })
                                            
                                            : null
                                        ),
                                        
                                        
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
                                        ? m("button", {
                                            "class":"pista boton",
                                            onclick:()=>{
                                                pista()
                                            }
                                        }, 
                                            "Pista"
                                        ) 
                                        : null,
                                        m("button", {
                                            "class":"comprobar boton",
                                            onclick:()=>{
                                                console.log(respuesta)
                                                if(resuelto != true){
                                                    perder(respuesta)
                                                }
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
                            "Puntuación Obtenida: " + puntos + " Puntos"
                        ),
                        m("h3", {"class":"puntuacionRecord"}, 
                            "Récord Puntuación: " + (attrs.nivel == "facil" ? recordsUsuario.recordfacil : attrs.nivel == "Medio" ? recordsUsuario.recordmedio : recordsUsuario.recorddificil)
                    
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
                        m("button", {
                            style: {width:"50%"},
                            "class":"volverIntentar boton",
                            onclick:()=>{
                                location.reload()
                            }}, 
                            "Volver a Intentar"
                        ),
                        m("button", {
                            style: {width:"50%"},
                            "class":"volverMenu boton",
                            onclick:()=>{
                                location.href = "./"
                            }
                        }, 
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
                                "Récord Puntuación: " + (attrs.nivel == "facil" ? recordsUsuario.recordfacil : attrs.nivel == "medio" ? recordsUsuario.recordmedio : recordsUsuario.recorddificil)
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
                            m("button", {
                                style: {width:"50%"},
                                "class":"volverIntentar boton",
                                onclick:()=>{
                                    location.reload()
                                }}, 
                                "Volver a Intentar"
                            ),
                            m("button", {
                                style: {width:"50%"},
                                "class":"volverMenu boton",
                                onclick:()=>{
                                    location.href = "./"
                                }
                            }, 
                                "Volver al Menú Principal"
                            )
                        ]
                    ),
                    
                )
                : null
            ]
            
  }
  

    function pintarImagenDificil() {
        //depende del número del fallo que ha cometido el usuario pone una imagen o otra
        numimagen++
        let imagen = ""
        switch (numimagen) {
        case 1://habitantes
            console.log(habitantespais)
            imghabitantes.innerText = habitantespais

            break;
        case 2://monumento famoso
            imagen = "monumentos/"+monumentopais
            imgmonumento.style.backgroundImage = 'url("../img/monumentos/' + monumentopais + '")' 
            // $("#imagen2").click(function () {
            //     ventanamodal(imagen)
            // })
            break;
        case 3://silueta del pais
            imagen = "siluetas/"+siluetapais
            imgsilueta.style.backgroundImage = 'url("../img/siluetas/' + siluetapais + '")'
            // $("#imagen3").click(function () {
            // ventanamodal(imagen)
            // })
            break;
        case 4://persona famosa
            imagen = "famosos/"+famosopais
            imgfamoso.style.backgroundImage = 'url("../img/famosos/' + famosopais + '")'
            // $("#imagen4").click(function () {
            // ventanamodal(imagen)
            // })
            break;
        case 5://capital del pais
            imgcapital.innerText = capitalpais
            break;

        }
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
        if(nivel == "Medio"){
            recortarImagenMedio()
        }
    }

    function focusinputvacio() {
        // Te lleva al primer input vacío para escribir
        let primerinputvacio = 0;
        
            while (inputs[primerinputvacio]?.readOnly) {
                if(primerinputvacio < inputs.length){
                    primerinputvacio++;
                }
            }
            inputs[primerinputvacio]?.focus();
        
        
    }

    function pista() {
        // Si pulsas al botón pista te muestra una letra al azar en el nombre del país
        let letraaleatoria;

        if (resuelto != true) {
            if (pistasutilizadas < 2) {
                pistasutilizadas++;
                do {
                    letraaleatoria = Math.floor(Math.random() * nombrepais.length);
                } while (inputs[letraaleatoria].readOnly);

                inputs[letraaleatoria].value = nombrepais[letraaleatoria];
                inputs[letraaleatoria].style.backgroundColor = "gray";
                inputs[letraaleatoria].readOnly = true;
                letrasUsuario[letraaleatoria] = nombrepais[letraaleatoria]
            }
        }
    }

    function pintarBanderaMedio() {
        let numeroaleatorio = Math.floor(Math.random() * 6);
        console.log(numeroaleatorio)
        
    
        let urlselec = urls[numeroaleatorio]
    
        if (urlselec in imagenesutilizadas) {
            pintarBanderaMedio()
        }
        else {
            imagenes[numeroaleatorio].style.backgroundImage =  'url("' + urls[numeroaleatorio] + '")'
            imagenes[numeroaleatorio].style.backgroundRepeat = "no-repeat"
            imagenesutilizadas[urlselec] = true
        }
    
        if (resuelto == true) {
            
            for (let i = 0; i < 6; i++) {
                imagenes[i].style.backgroundImage = 'url("' + urls[i] + '")'
            }
        }
    }
    
    function recortarImagenMedio() {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
    
        var img = document.getElementById("imagen");
        var ancho, alto;
    
        img.onload = function () {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            ancho = img.naturalWidth / 3;
            alto = img.naturalHeight / 2;
    
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
            urls = [];
            for (var i = 0; i < 6; i++) {
                var x = (i % 3) * ancho;
                var y = Math.floor(i / 3) * alto;
    
                var canvasParte = document.createElement("canvas");
                canvasParte.id = i;
                canvasParte.width = ancho;
                canvasParte.height = alto;
    
                var ctxParte = canvasParte.getContext("2d");
    
                ctxParte.drawImage(canvas, x, y, ancho, alto, 0, 0, ancho, alto);
    
                var parteImagen = document.createElement("img");
                parteImagen.src = canvasParte.toDataURL();
                urls.push(parteImagen.src);
            }
    
            var anchoimagenes = canvasParte.width;
            var altoimagenes = canvasParte.height;
    
            for (i = 1; i <= 6; i++) {
                let trozo = document.getElementById("imagen" + i);
                trozo.style.width = `${anchoimagenes}px`;
                trozo.style.height = `${altoimagenes}px`;
            }
        };
        
        img.src = `./img/banderas/${banderapais}`
    }

    function siguientenivel() {
        // Reinicia las variable y muestra otro país
        if (resuelto == true) {
            
            numaleatorio = Math.floor(Math.random() * 50) + 1;
            puntosporronda = 60;
            contador = 0;
            letrasUsuario = []
            pistasutilizadas = 0;
            resuelto = false;
            respuesta = ""
            inputs.map(i => {
                i.value = ""
                i.style.backgroundColor = "transparent"
                i.readOnly = false
                console.log(i.value)
            })
            if(nivel == "Difícil"){
                imgcapital.innerText = ""
                imgfamoso.style.backgroundImage = 'url("")'
                imghabitantes.innerText = ""
                imgsilueta.style.backgroundImage = 'url("")'
                imgmonumento.style.backgroundImage = 'url("")'
            }
            numimagen = 0
            pais();
            if(nivel == "Medio"){
                for (let i = 0; i < 6; i++) {
                    imagenes[i].style.backgroundImage = 'url("")'
                }
            }
                
            
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
                    nombrepais = paises[i].nombre.toUpperCase()
                    idpais = paises[i].id_pais
                    capitalpais = paises[i].capital
                    habitantespais = paises[i].habitantes
                    monumentopais = paises[i].monumento
                    siluetapais = paises[i].silueta
                    famosopais = paises[i].persona_Famosa
                    banderapais = paises[i].bandera
                    console.log(nombrepais)
                }
            }

            
            //Compruebo si está repetido el pais para mostrarlo
            if (nombrepais in paisesmostrados) {
                numaleatorio = Math.floor(Math.random() * 50) + 1;
                pais();
            } else {
                if(nivel == "Medio"){
                    recortarImagenMedio()
                }
                focusinputvacio();
                
        
                
                
        
            }
            }).catch(function (e) {
                console.log("ERROR" + e.message);
            });
        
    }

    function perder() {
        // Si haces más de 5 fallos pierdes la partida
        if (contador < 5) {
            contador++;
            comprobar();
        } else if (contador == 5) {
            comprobar();
            if (resuelto == false) {
                fin = true;
                modalperder = true
            }
        }
    }
    
    function comprobar() {
        nombrepais.split("").map((letra,index) => {
            if(letra == "_"){
                console.log("letra " + letra)
                letrasUsuario[index] = letra
            }
            respuesta += letrasUsuario[index]
        })
        comprobarrespuesta(respuesta);
        // Comprueba todas las letras para ver cuales están en la posición correcta
        for (let i = 0; i < letrasUsuario.length; i++) {
            if (letrasUsuario[i] != nombrepais[i]) {
                console.log("aqui")
                inputs[i].value = ""
                letrasUsuario[i] = ""
            }
            else {
                inputs[i].style.backgroundColor = "green"
                inputs[i].readOnly = true;

            }
        }

        
        // Si está mal puesto el nombre por el usuario te resta puntos
        if (resuelto != true) {
            
            puntosporronda -= 10;
            if(nivel == "Medio"){
                pintarBanderaMedio()
            }
            else if(nivel == "Difícil"){
                pintarImagenDificil()
            }
            respuesta = ""
        }
        else{
            // letrasUsuario.map((letra, index) =>{
            //     inputs[index].value = letra
            //     inputs[index].style.backgroundColor = "green"
            //     console.log(inputs[index].style.backgroundColor)
            // })
            
            if(nivel == "Medio"){
                pintarBanderaMedio()
            }
        }

        if (Object.keys(paisesmostrados).length == 5) {
            console.log(paisesmostrados.length)
            fin = true;
            almacenarPartida();
            almacenarRecord();
            modalganar = true
        }
        
        
    }
    
    function comprobarrespuesta(respuesta) {
        console.log("Respuesta" + respuesta)
        if (nombrepais == respuesta) {
            paisesmostrados[nombrepais] = { "Adivinado": true, "Puntuaje": puntosporronda };
            console.log(paisesmostrados)
            resuelto = true;
            puntos += puntosporronda;
        }
    }

    function almacenarPartida() {
        let paisesacertados = ""
        Object.keys(paisesmostrados).map(pais => {
            paisesacertados += pais.toLowerCase() + ", "
        })
        console.log(emailUsuario, paisesacertados, puntos, nivel)
        
        m.request({
            method: "POST",
            url:'/api/partidas',
            body: {
                email: emailUsuario,
                paisesacertados: paisesacertados,
                puntuacion: puntos,
                nivel: nivel
            },
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function(response) {
            console.log("Partida guardada:", response);
            // Limpiar el formulario después de guardar
            paisesacertados = ""
        })
        .catch(function(error) {
            console.log("Error al guardar el usuario:", error);
        })
    }

    function almacenarRecord() {
            let puntostotales = 0
            let puntosfacil = recordsUsuario.recordfacil
            let puntosmedio = recordsUsuario.recordmedio
            let puntosdificil = recordsUsuario.recorddificil
            let recordpuntos = recordsUsuario.totalrecord

            if(nivel == "Fácil"){
                puntostotales = puntos + puntosmedio + puntosdificil
            }
            else if(nivel == "Medio"){
                puntostotales = puntos + puntosfacil + puntosdificil
            }
            else{
                puntostotales = puntos + puntosmedio + puntosfacil
            }
            m.request({
                method: "PUT",
                url:'/api/records/' + emailUsuario,
                body: {
                    email: emailUsuario,
                    recordfacil: puntos > puntosfacil && nivel =="Fácil" ? puntos : puntosfacil,
                    recordmedio: puntos > puntosmedio && nivel =="Medio" ? puntos : puntosmedio,
                    recorddificil: puntos > puntosdificil && nivel =="Difícil" ? puntos : puntosdificil,
                    totalrecord: puntostotales > recordpuntos ? puntostotales : recordpuntos
                },
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(function(response) {
                console.log("Record guardada:", response);
                // Limpiar el formulario después de guardar
                
            })
            .catch(function(error) {
                console.log("Error al guardar el record:", error);
            })
        
    }


    
}

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
        usuarios.contrasena = desencriptarContrasena(usuarios.contrasena)
        console.log(usuarios.contrasena)
        //Hacer algo con el usuario, como mostrarlo en la interfaz de usuario
        if(email == usuarios.email && contrasena == usuarios.contrasena){
            console.log("si")
            saveUsuarioLocalStorage(usuarios.email, usuarios.nombreusuario, usuarios.contrasena)
            location.href = "./index.html#!inicio"
        }
        else {
            console.log("no")
            return false
        }
    })
    .catch(error => console.error('Error al obtener usuario:', error));
}

function insertarUsuario(email, nombreusuario, contrasena){
    contrasena = encriptarContrasena(contrasena)
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

function actualizarUsuario(email, nombreusuario){
    console.log(email, nombreusuario, contrasenaUsuario)
    contrasenaUsuario = encriptarContrasena(contrasenaUsuario)
    m.request({
        method: "PUT",
        url:'/api/usuarios/'+email,
        body: {
            email: email,
            nombreusuario: nombreusuario,
            contrasena: contrasenaUsuario
        },
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function(response) {
        console.log("Usuario actualizado:", response);
        // Limpiar el formulario después de guardar
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

//Guardar sesión del Usuario
function saveUsuarioLocalStorage(email, nombreusuario, contrasena){
    var usuario = {
        email: email,
        nombreusuario: nombreusuario,
        contrasena: encriptarContrasena(contrasena)
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log("Usuario guardado en localStorage:", usuario);
}

function recuperarUsuarioLocalStorage() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
        usuarioconectado = true
        emailUsuario = usuario.email
        contrasenaUsuario = desencriptarContrasena(usuario.contrasena)
        nombreUsuario = usuario.nombreusuario
        console.log("Usuario cargado desde localStorage:", usuario);
    }
}

//Ranking Global
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

function encriptarContrasena(contrasena){
    var encrypted = CryptoJS.AES.encrypt(contrasena, key).toString();
    return encrypted
}

function desencriptarContrasena(contrasena){
    var decrypted = CryptoJS.AES.decrypt(contrasena, key).toString(CryptoJS.enc.Utf8);
    return decrypted
}
