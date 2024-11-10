// variable donde se almacena la respuesta correcta
let respuestaCorrecta = "";
//funcion que myuestra la pregunta 
function mostrarPregunta(tipo) {
const preguntasAleatorias = [
    { pregunta: "¿Cuál es la capital de Francia?", respuesta: "París" },
    {
    pregunta: "¿Quién ganó el Oscar a Mejor Película en 2020?",
    respuesta: "Parasite",
    },
    {
    pregunta: "¿Cuántos jugadores hay en un equipo de fútbol?",
    respuesta: "11",
    },
    {
    pregunta: "¿Qué es la fotosíntesis?",
    respuesta:
        "Proceso por el cual las plantas convierten la luz solar en energía",
    },
    {
    pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
    respuesta: "George Washington",
    },
];
//condicional segun la eleccion del jugador
switch (tipo) {
    case "geografia":
    respuestaCorrecta = "París";
    document.getElementById("pregunta").innerText =
        "¿Cuál es la capital de Francia?";
    break;
    case "entretenimiento":
    respuestaCorrecta = "Parasite";
    document.getElementById("pregunta").innerText =
        "¿Quién ganó el Oscar a Mejor Película en 2020?";
    break;
    case "deportes":
    respuestaCorrecta = "11";
    document.getElementById("pregunta").innerText =
        "¿Cuántos jugadores hay en un equipo de fútbol?";
    break;
    case "ciencia":
    respuestaCorrecta =
        "Proceso por el cual las plantas convierten la luz solar en energía";
    document.getElementById("pregunta").innerText =
        "¿Qué es la fotosíntesis?";
    break;
    case "historia":
    respuestaCorrecta = "George Washington";
    document.getElementById("pregunta").innerText =
        "¿Quién fue el primer presidente de los Estados Unidos?";
    break;
    case "random":
    const preguntaAleatoria =
        preguntasAleatorias[
          Math.floor(Math.random() * preguntasAleatorias.length)
        ];
    respuestaCorrecta = preguntaAleatoria.respuesta;
    document.getElementById("pregunta").innerText =
        preguntaAleatoria.pregunta;
    break;
}
//DOM 
document.getElementById("b1").style.display = "block";
document.getElementById("respuesta").value = "";
document.getElementById("resultado").innerText = "";
}
// FUNCION QUE VERIFIC LAS RESPUESTAS YA SEAN CORRECTAS O INCORRECTAS
function verificarRespuesta() {
const respuestaUsuario = document.getElementById("respuesta").value.trim();
if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
    document.getElementById("resultado").innerText = "¡Correcto!";
    document.getElementById("resultado").style.color = "green";
} else {
    document.getElementById("resultado").innerText =
    "Incorrecto. La respuesta correcta es: " + respuestaCorrecta;
    document.getElementById("resultado").style.color = "red";
}
}
