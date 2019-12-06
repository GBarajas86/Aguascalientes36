const titulo = document.getElementById("titulo");
const cajaDeTexto = document.getElementById("cajaDeTexto");
// titulo.innerHTML = "JS para Principiantes";
// titulo.style.color = "red";



function changeColor(color){
    titulo.style.color = color;

}

function addClass(clase){
    titulo.className = clase;
    // titulo.classList.add(clase);
}

function changeText(){
    titulo.innerHTML = cajaDeTexto.value;

}

changeColor("red");