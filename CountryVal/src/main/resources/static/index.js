let usuarioconectado = false
let usuario = "admin"
let contrasena = "admin"

////// PAGINAS ///////
function Inicio(){
    return {
        view:()=>[
                   m("div", {"class":"ui center aligned segment"},
                     m("h1", {"class":"ui header saludar"},
                        "Bienvenido Usuario"
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
                                m("h5", {"class":"puntosfacil"}),
                                m("h5", {"class":"puntosmedio"}),
                                m("h5", {"class":"puntosdificil"}),
                                m("h5", {"class":"puntosglobal"}),
                                m("br"),
                                m("button", {
                                    onclick:()=>{
                                        consultarUsuario()
                                    },
                                    "class":"editarperfil boton"},
                                "Editar Perfil"
                                ),
                                m("br"),
                                m("br"),
                                m("p", {"class":"mensajeeditar"}),
                                m("button", {"class":"btncerrarsesion boton"},
                                "Cerrar Sesion"
                                )
                            ]
                            )
                        ),
                        m("div", {"class":"ten wide column"},
                            [
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
                                        },
                                        "Nivel Fácil"
                                    ),
                                    m("a", {
                                            "href":"./index.html#!nivelmedio",
                                            "class":"ui orange inverted button btnnivelmedio"
                                        },
                                        "Nivel Medio"
                                    ),
                                    m("a", {
                                            "href":"./index.html#!niveldificil",
                                            "class":"ui red inverted button btnniveldificil"},
                                        "Nivel Difícil"
                                    )
                                    ]
                                ),
                                m("div", {"class":"two wide column"},
                                )
                                ]
                            ),
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
                                m("table", {"id":"tablamarcador"})
                            ]
                            )
                        )
                        ]
                   ),
                   m("div", {"class":"modal","id":"ventanaModal"},
                     m("div", {"class":"modal-content"},
                        [
                            m("div", {"class":"cerrar"},
                            m.trust("&times;")
                            ),
                            m("h2",
                            "Registrarse"
                            )
                        ]
                     )
                   ),
                   m("div", {"class":"modal","id":"ventanaModalUsuario"},
                        m("div", {"class":"modal-content"},
                            [
                                m("div", {"class":"cerrar"},
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
                 ]
    }
}

function Login(){
  return {
      view:()=>[
          [
              m("div", {"class":"ui center aligned segment segmento-inicio-sesion"}, 
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
                                          m("input", {"class":"username-inicio campo-sesion","type":"username","name":"username-inicio","placeholder":"Nombre de Usuario","required":"required"}),
                                            m("br"),
                                            m("br"),
                                          m("input", {
                                            "class":"mail-inicio campo-sesion","type":"email","name":"mail-inicio","placeholder":"Direccion Email","required":"required"}),
                                            m("br"),
                                            m("br"),
                                          m("input", {"class":"passwd-inicio campo-sesion","type":"password","name":"passwd-incio","placeholder":"Contraseña","required":"required"}),
                                            m("br"),
                                            m("br"),
                                          m("a", {"class":"btn-iniciar boton","name":"btn-iniciar"}, 
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
                                              "Registrate aquí"
                                          )
                                      ]
                                  )
                              ]
                          )
                      ]
                  )
              ), 
              m("div", {"class":"modal","id":"ventanaModal"}, 
                  m("div", {"class":"modal-content"},
                      [
                          m("div", {"class":"cerrar"}, 
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
          ]
      ]
  }
}

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
                              m("div", {"class":"ui center aligned segment"},
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
                              ),
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
                                  [
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

function NivelFacil () {
    let respuesta = "";
    let nombrepais;
  return {
        oncreate:()=> {
            FuncionalidadLvlFacil()
        },
        view:()=> 
             [
                m("div", {"class":"ui center aligned segment"}, 
                    m("h1", {"class":"ui header"}, 
                        "Nivél Facil"
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
                                m("div.palabrascontenido", {"class":"ui center aligned segment palabrascontenido"}, 
                                    m("div", {"id":"palabras"},
                                        nombrepais?.length ? 
                                        nombrepais.split("").map( (n,index) => {
                                            return m("input", {maxLength: 1, 
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
                                                oninput:(e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                    if (!e.target.value.match(/^[A-ZÑ]$/)) {
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
                                                        
                                                        respuesta += e.target.value
                                                        console.log(respuesta)
                                                    }
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
                                                    }
                                                    // if (paisseleccionado[i] == "_") {
                                                    //     e.target.value = "_";
                                                    //     e.target.readOnly = true;
                                                    // }
                                                }
                                            })
                                            // newInput.setAttribute("id", i);
                                            // newInput.classList.add("hola");
                            
                                            // Si pulsas el botón retroceso borra letra por letra
                                        })
                                        : null
                                    )
                                ),
                                m("div", {"class":"ui center aligned segment"},
                                    [
                                        m("button", {"class":"volverinicio boton"}, 
                                            "Volver al inicio"
                                        ),
                                        m("button", {"class":"pista boton"}, 
                                            "Pista"
                                        ),
                                        m("button", {
                                            "class":"comprobar boton",
                                            onclick:()=>{
                                                comprobar(respuesta)
                                            }
                                        }, 
                                            "Comprobar"
                                        ),
                                        m("button", {"class":"siguiente boton"}, 
                                            "Siguiente"
                                        )
                                    ]
                                ),
                                m("div", {"class":"ui center aligned segment"},
                                    [
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
                                )
                            ]
                        ),
                        m("div", {"class":"two wide column"}, 
                        )
                    ]
                ), 
                m("div", {"class":"modal","id":"ventanaModalPerder"}, 
                    m("div", {"class":"modal-perder"},
                        [
                            m("h1", 
                                "Has Perdido!"
                            ),
                            m("h3", 
                                "Nivel: Fácil"
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
                                "Nivel: Fácil"
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

  function FuncionalidadLvlFacil(){
    let paisseleccionado;
    let pistasutilizadas = 0;
    let resuelto = false;
    let numaleatorio = Math.floor(Math.random() * 50) + 1;
    let paisesmostrados = {};
    let puntos = 0;
    let puntosporronda = 60;
    let contador = 0;
    let cerrado = true;
    let fin = false;
    let idpais=0;
    let capitalpais;
    let habitantespais;
    let monumentopais;
    let siluetapais;
    let famosopais;
    let banderapais;

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

    pais();
    console.log(nombrepais)
    // Pulsar botón volver al inicio y vuelves al inicio
    // document.getElementById(".volverinicio").addEventListener("click", function () {
    //     location.href = "../html_css/inicio.html";
    // });

    // // Pulsas el botón siguiente y pasa al siguiente nivel
    // document.querySelector(".siguiente").addEventListener("click", siguientenivel);

    // // Pulsas el botón comprobar y te comprueba el nombre del país
    // document.querySelector(".comprobar").addEventListener("click", perder);

    // // Pulsas el botón pista y te da una pista
    // document.querySelector(".pista").addEventListener("click", pista);

    // Si pulsas el enter te comprueba y si pulsas el espacio te lleva al siguiente nivel
    document.addEventListener('keypress', function (e) {
        if (fin == false) {
            if (e.which == 13) {
                perder();
            } else if (e.which == 32) {
                siguientenivel();
            }
        }
    });

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

    function pais() {
        // Obtengo los datos de todos los paises
        fetch("/api/v1/paises")
        .then(response => response.json())
        .then(paises => {
            for (let i = 0; i < paises.length; i++) {
                if (paises[i].id_pais == numaleatorio) {
                    console.log(paises[i])
                    nombrepais = paises[i].nombre;
                    idpais = paises[i].id_pais;
                    capitalpais = paises[i].capital;
                    habitantespais = paises[i].habitantes;
                    monumentopais = paises[i].monumento;
                    siluetapais = paises[i].silueta;
                    famosopais = paises[i].persona_Famosa;
                    banderapais = paises[i].bandera;
                }
            }
            m.redraw()
            // Compruebo si está repetido el pais para mostrarlo
        if (nombrepais.toUpperCase() in paisesmostrados) {
            numaleatorio = Math.floor(Math.random() * 50) + 1;
            pais();
        } else {
            console.log(nombrepais)
            // Creo un input para cada letra del pais
            resuelto = false;
            let divpalabras = document.getQuerySelector(".palabras");
            paisseleccionado = nombrepais.split("");
            console.log(nombrepais);
            divpalabras.innerHTML = "";

            
            focusinputvacio();

            m.redraw()
        }
        }).catch(function (e) {
            console.log("ERROR" + e.message);
        });
        
    }

    function comprobar(respuesta) {
        console.log(respuesta)
        comprobarrespuesta();
        // Comprueba todas las letras para ver cuales están en la posición correcta
        for (let i = 0; i < respuesta.length; i++) {
            if (respuesta[i].value != paisseleccionado[i]) {
                respuesta[i].value = "";
            } else {
                if (respuesta[i].style.backgroundColor != "gray") {
                    respuesta[i].style.backgroundColor = "green";
                    respuesta[i].readOnly = true;
                }
            }
        }
        // Si está mal puesto el nombre por el usuario te resta puntos
        if (resuelto != true) {
            puntosporronda -= 10;
            document.querySelector(".puntosronda").innerHTML = puntosporronda + " puntos";
        }
        if (Object.keys(paisesmostrados).length == 50) {
            fin = true;
            puntuaciones();
            document.querySelector("#ventanaModalGanar").style.display = "block";
        }
        focusinputvacio();
    }

    function comprobarrespuesta() {
        // Comprueba si la cadena que ha puesto el usuario es correcta
        let res = "";
        let respuesta = document.querySelectorAll(".hola");
        for (let i = 0; i < respuesta.length; i++) {
            res += respuesta[i].value;
        }
        if (nombrepais == res) {
            paisesmostrados[nombrepais] = { "Adivinado": true, "Puntuaje": puntosporronda };
            resuelto = true;
            puntos += puntosporronda;
            document.querySelector(".puntospartida").innerHTML = puntos + " puntos";
        }
    }

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

    function siguientenivel() {
        // Reinicia las variable y muestra otro país
        if (resuelto == true) {
            numaleatorio = Math.floor(Math.random() * 50) + 1;
            puntosporronda = 60;
            contador = 0;
            pistasutilizadas = 0;
            document.querySelector(".puntosronda").innerHTML = "60 puntos";
            pais();
        }
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
                puntuaciones();
                document.querySelector("#ventanaModalPerder").style.display = "block";
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

    function puntuaciones() {
        // Ventana modal con las puntuaciones de la partida cuando pierdes
        almacenardatos(puntos);
        document.querySelector(".puntuacionObtenida").innerHTML += puntos + " Puntos";
        document.querySelector(".puntuacionRecord").innerHTML += puntos + " Puntos";
        for (let key in paisesmostrados) {
            if (paisesmostrados.hasOwnProperty(key)) {
                document.querySelector(".paisesypuntuaciones").innerHTML += key + ": " + paisesmostrados[key].Puntuaje + " Puntos<br>";
            }
        }
        document.querySelector(".volverIntentar").addEventListener("click", function () {
            location.href = "../html_css/nivelfacil.html";
        });
        document.querySelector(".volverMenu").addEventListener("click", function () {
            puntos = 0;
            location.href = "../html_css/inicio.html";
        });
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
                              m("div", {"class":"ui center aligned segment"},
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
                              ),
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
                                  [
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


/////// ENRUTAMIENTO ///////
const routes = {
  "/": {
      view: ()=> m(Inicio)
  },
  "/login": {
      view:()=> m(Login)
  },
  "/nivelfacil": {
      view:()=> m(NivelFacil)
  },
  "/nivelmedio": {
      view:()=> m(NivelMedio)
  },
  "/niveldificil": {
      view:()=> m(NivelDificil)
  }
}

m.route(document.body, "/", routes)


////// FUNCIONES ///////
function consultarUsuario() {
    fetch('/api/v1/usuarios')
    .then(response => response.json())
    .then(usuarios => {
        // Hacer algo con el usuario, como mostrarlo en la interfaz de usuario
        usuarios.map(u => console.log(u.nombre))
    })
    .catch(error => console.error('Error al obtener usuario:', error));
}




