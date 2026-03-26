let imagenes = [
    {
        "url": "",
        "nombre": "Proyecto 01",
        "descripcion": "Este es el proyecto 01 fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"

    },
    {
        "url": "img/img2.webp",
        "nombre": "Proyecto 02",
        "descripcion": "Hola a todos este es el proyecto02 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"

    },
    {
        "url": "img/img3.webp",
        "nombre": "Proyecto 03",
        "descripcion": "Este proyecto, es el 03 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}

let num1 = 3
let num2= 9
let total = num1*num2
let nombre = console.log(total)

let nombre_2= "damian"
let nume4= parseint(prompt(nombre + "decime tu segundo nombre"))
console.log(nume4)

let nombre1 = "damian nicolas"
let apellido1= "alderete"
let nombreCompleto= nombre1 + apellido1
console.log(nombreCompleto);


//console.log("holaa wachooo mira este numero;", 3 ** 3);
// console.log("q onda tocayo ; chukiii", 3 * 20);
// console.warn("ojo al loro!!");
// console.error("prohibido el ingreso de loretos!");
// console.info("hola , mira esta informacion");
// var num2 = 8;
// console.log(num2);
// num2 = 16;
// console.log(num2);
// console.log(typeof num2);
// numero = Number.parseInt("9012");
// console.log(numero);
// suma = 32 + 23;
// console.log(suma);
// var text1 = "hola";
// var text2 = "mundo";
// var text = text1 + " " + text2;
// console.log(text);
// var text4 = "hola mundo,";
// text4 += " empezemos a jugar con JS";
// console.log(text4);
// // var nombre = prompt("ingresa tu nombre wacho", "");
// // document.write("hola " + nombre);
// // console.log(nombre);
// /*
// Crear un programa que reciba dos números como entrada, realice varias operaciones aritméticas con ellos y muestre los resultados
// en la consola del navegador. Además, se deberá verificar si el resultado de la suma de ambos números es mayor o menor que un valor
// dado.
//  Tips:

// Validación de entradas: asegurate de que los usuarios ingresen números válidos. Utilizá isNaN() para verificar que las entradas no
// sean texto u otros valores no numéricos.

// Uso de parseFloat() y parseInt(): dependiendo del ejercicio, recomendá que utilicen parseFloat() si los números pueden tener
// decimales, o parseInt() si solo aceptan números enteros.

// Descomposición del problema: recordá que podés dividir el problema en partes más pequeñas. Primero capturá los números, luego
// realizá las operaciones, y por último verificá los resultados.

// Consola del navegador: mostrá los resultados usando console.log() para que los estudiantes puedan ver los cálculos en la consola del
// navegador. Es una excelente herramienta para debuggear.

// */
// // ingreso de datos
// // var Number1 = prompt("Ingresa un numero:");
// // var Number2 = prompt("ingresa otro numero");
// // // pruebo si es numero o no..
// if (isNaN(Number1) || isNaN(Number2)) {
//   console.log("no son numeros, ingrese un numero!!");
// } else {
//   Number1 = parseFloat(Number1);
//   Number2 = parseFloat(Number2);

//   // operaciones aritmeticas
//   var suma = Number1 + Number2;
//   var resta = Number1 - Number2;
//   var multiplicacion = Number1 * Number2;
//   var divi = Number1 / Number2;
//   var expo = Number1 ** Number2;

//   //muestra de las operaciones aritmeticas
//   console.log("suma;", suma);
//   console.log("resta;", resta);
//   console.log("multiplicacion;", multiplicacion);
//   console.log("division;", divi);
//   console.log("exponencial;", expo);

//   // compracion
//   var valorComparacion = 39;

//   // mayor menor
//   if (suma < valorComparacion) {
//     console.log("suma es menor a:", valorComparacion);
//   } else if (suma > valorComparacion) {
//     console.log("suma es mayor a:", valorComparacion);
//   } else {
//     console.log("suma es igual a :", valorComparacion);
//   }
//   // jo
//   if (multiplicacion < valorComparacion) {
//     console.log("multiplicacion es menor:", valorComparacion);
//   } else if (multiplicacion > valorComparacion) {
//     console.log("multiplicacion es mayor a:", valorComparacion);
//   } else {
//     console.log("multiplicacion es igual a:", valorComparacion);
//   }
// }
// var resultadoHTML = `
//   <p>Suma: ${suma}</p>
//   <p>Resta: ${resta}</p>
//   <p>Multiplicación: ${multiplicacion}</p>
//   <p>División: ${divi}</p>
//   <p>Exponencial: ${expo}</p>
// `;

// if (suma < valorComparacion) {
//   resultadoHTML += `<p>La suma es menor que ${valorComparacion}</p>`;
// } else if (suma > valorComparacion) {
//   resultadoHTML += `<p>La suma es mayor que ${valorComparacion}</p>`;
// } else {
//   resultadoHTML += `<p>La suma es igual a ${valorComparacion}</p>`;
// }

// document.getElementById("resultado").innerHTML = resultadoHTML;

// /*
// Crear un programa que reciba el nombre y la edad de una persona, los concatene en una frase y luego convierta la edad de string a número para
// verificar si la persona es mayor de edad.

// Tips:

// Validación de edad: asegurate de que la edad ingresada sea un número válido antes de realizar cualquier operación. Usá isNaN() para evitar
// errores cuando el usuario ingresa texto o un valor vacío en lugar de un número.

// Concatenación de cadenas: recordá que podés concatenar textos fácilmente con el operador +. Experimentá con diferentes formas de concatenar
// los valores para personalizar el mensaje de salida.

// Conversión de tipos: usá parseInt() o Number() para convertir la edad de un string a un número, lo que es clave para realizar comparaciones o
// cálculos matemáticos.

// Mensajes claros: asegurate de mostrar mensajes claros en la consola. Esto ayuda tanto al usuario como a vos mismo a entender si el programa está
// funcionando como esperabas.

// Pruebas con datos diferentes: probá el programa con diferentes nombres y edades (incluyendo casos límite como menores de edad o números
// cercanos a 18) para verificar que la lógica del programa sea robusta.

//  */

// // hola, este es un comentario en linea!!

// /*
//   este
//     es
//         un
//             comentario
//                 en
//                     varias
//                         lineas
//  */





