// document.addEventListener('DOMContentLoaded', () => {
//     const hamburgerMenu = document.getElementById('hamburger-menu');
//     const navMenu = document.querySelector('.nav');

//     hamburgerMenu.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//     });
// });
// // Carrito de compras
// let carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
// const carritoDiv = document.getElementById('carrito-lista');
// const totalDiv = document.getElementById('total');

// // Inicializar carrito en cada página
// document.addEventListener('DOMContentLoaded', () => {
//     actualizarCarrito();
// });

// // Agregar producto
// function agregarProducto(id, nombre, precio) {
//     // Verificar si el producto ya está en el carrito
//     const productoExistente = carrito.find(item => item.id === id);
//     if (productoExistente) {
//         return; 
//     }

//     const itemCarrito = { id, nombre, precio };
//     carrito.push(itemCarrito); 
//     guardarCarrito(); 
//     actualizarCarrito(); 
// }

// // Actualizar carrito
// function actualizarCarrito() {
//     if (!carritoDiv) return;

//     carritoDiv.innerHTML = ''; 
//     let total = 0;

//     // Mostrar los productos en el carrito
//     carrito.forEach(item => {
//         const divItem = document.createElement('div');
//         divItem.classList.add('carrito-item');
//         divItem.innerHTML = `${item.nombre} - ${item.precio} <button class="eliminar" data-id="${item.id}">Eliminar</button>`;
//         carritoDiv.appendChild(divItem);

//         total += parseFloat(item.precio.replace('$', '').replace('.', ''));
//     });

//     // Mostrar el total
//     if (totalDiv) {
//         totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
//     }

//     // Manejar los botones de eliminar
//     const botonesEliminar = document.querySelectorAll('.eliminar');
//     botonesEliminar.forEach(boton => {
//         boton.addEventListener('click', () => {
//             const id = boton.getAttribute('data-id');
//             eliminarProducto(id);
//         });
//     });
// }

// // Eliminar producto
// function eliminarProducto(id) {
//     carrito = carrito.filter(item => item.id !== id); 
//     guardarCarrito(); 
//     actualizarCarrito(); 
// }

// // Guardar carrito en localStorage
// function guardarCarrito() {
//     localStorage.setItem('carrito', JSON.stringify(carrito)); 
// }

// // Manejo de agregar productos a carrito en la página de productos
// const productos = document.querySelectorAll('.producto');

// productos.forEach(producto => {
//     const botonAgregar = producto.querySelector('.add-to-cart');

//     botonAgregar.addEventListener('click', () => {
//         const id = producto.getAttribute('data-id');
//         const nombre = producto.querySelector('h3').innerText;
//         const precio = producto.querySelector('p').innerText;

//         agregarProducto(id, nombre, precio); 
//     });
// });

// let nombre1 = "damian nicolas"
// let apellido1= "alderete"
// let nombreCompleto= nombre1 + " " + apellido1
// console.log(nombreCompleto);

// alert("hola mundo");

// let  numero1 = parseFloat(prompt("ingresa un numero: "));
// let  numero2 = parseFloat(prompt("ingresa otro numero: "));


// multi= numero1 * numero2;
// suma= numero1 + numero2;
// resta= numero1 - numero2;
// divi= numero1 / numero2 ;
// poten= numero1 ** numero2 ;

// console.log("la multiplicacion de ambos numeros es: ",multi);
// console.log("la suma de ambos numeros es: ",suma);
// console.log("la resta de ambos numeros es: ",resta);
// console.log("la division de ambos numeros es: ",divi);
// console.log("la potencia  de ambos numeros es: ",poten);

// let nombreUsuario = prompt("Ingresa tu nombre: ");
// let edad_Usuario = parseInt(prompt("Ingresa tu edad: "));
// let nombreEdadUsuario = " H ola " + nombreUsuario + " tienes " + edad_Usuario  + " años!! "
// console.log(nombreEdadUsuario);

// let num = 1;
// while (num <11){
//     console.log(num);
//     num = num + 1;
// }

// si es par 
for (let num = 1; num <= 10; num++) {
    if (num % 2 == 0) {
        console.log(num)
    };

}
for (let num = 2; num <= 10; num += 2) {
    console.log(num);

}
// let nombre = prompt("decime tu nombre ");
// document.write(nombre);
// let num1 = Number(prompt("ingresa un numero: "));
// let num2 = Number(prompt("ingresa otro numero: "));
// document.write(num1 + num2)

let num3 = 22;
let num4 = 17;
console.log(num3 == num4);
console.log(num3 != num4);

let edad = 10;
if (edad >=18){
console.log("puedes entrar");}
else{
    console.log("no puedes entrar");
    
}
edad = 18? console.log("podes pasasr porque tenes") : console.log("no podes pasar"); 
let eda = 18;
let nombre = "elsa";
console.log(nombre + " tu edad es " + eda);

console.log(`${nombre} tu edad es ${eda} , aca con acento frances`);

var nota = 0;
console.log("he realizado mi examen");

if (nota <= 5) { caliifcacion= 'insuficiente';}
    else if (nota <=6) {caliifcacion= 'suficiente'}
    else if (nota <=8) { caliifcacion= 'bien'; }
    else {caliifcacion= 'sobresaliente';
}
console.log("he obtenido una nota" , caliifcacion);
