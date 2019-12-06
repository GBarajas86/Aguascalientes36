const nombre = document.getElementById("nombre");
const apellidoP = document.getElementById("apellidoP");
const apellidoM = document.getElementById("apellidoM");

const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const año = document.getElementById("año");
const titulo = document.getElementById("titulo");

// const homoclave = document.getElementById("homoclave");

function generarRfc(){
    titulo.innerHTML = nombre.value;

}