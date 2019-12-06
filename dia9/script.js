// //funciones
// function suma(num1, num2){
//     let resultado = num1 + num2;
//     console.log(resultado);
//     return resultado;
// }

// function alerta(){
//     alert("Alert dentro de mi funcion");
// }

// function celsiusFar(celsius){
//     let resultado = (celsius * 1.8) + 32;
//     console.log(resultado);
//     return resultado; 
// }

// function par(num){
//     if (num % 2 == 0) {
//         let res = "es par";
//         console.log(num + "es par");
//         return res;
//     } else {
//         let res = "es impar";
//         console.log(num + "es impar");
//         return res;
//     }

// }

// // suma(7,3);
// // let res = suma(2,5);
// // console.log(res);

// celsiusFar(22);
// par(7);

const control = {
    color: "blanco",
    material: "plastico",
    display: true,
    altura: 10,
    ancho: 5,
    botones: {
        encender: function () {
            alert("Aire encendido");
        },
        apagar: function () {
            alert("Aire apagado");
        }
    }

};

// console.log(control);
// console.log(control.color);
// control.botones.encender();
// control.botones.apagar();

//DOM
document.getElementById("color").innerHTML = control.color;
document.getElementById("material").innerHTML = control.material;
document.getElementById("display").innerHTML = control.display;
document.getElementById("altura").innerHTML = control.altura;
document.getElementById("ancho").innerHTML = control.ancho;


