//alert("funcion");

//String
let x = "gualberto";

//Numerica
let edad = 32;

//Boolean
let mayorEdad = true;

console.log(x);
console.warn(x);
console.error(x);

//operaciones aritmeticas

let a= 35;
let b = 7;

let suma = a+b;
console.log(suma);

let resta = a-b;
console.log(resta);

let multiplicacion = a*b;
console.log(multiplicacion);

let residuo = 21%2;
console.log(residuo);

let exponente = 5**2;
console.log(exponente);

console.log("la suma de "+ a + " + " + b + " es: " + suma);
console.log("la resta de" + a + " - " +  b  + "es: " + resta);
console.log("la multiplicacion de " + a + " * " + b + "es:" + multiplicacion);
console.log("el residuo de 21 / 2: " + residuo);
console.log("el exponente de 5^2 es: " + exponente);


if (edad < 18) {
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
}

let numero = 4;
if (numero % 2 == 0) {
    console.warn(numero + " es par");
}else{
    console.error(numero + " es impar");
}

