const productos = [
    {
        id: 1,
        nombre: "Remera básica",
        descripcion: "Remera de algodón color negro",
        imagen: "remera.jpg",
        precio: 15000,
        stock: 10
    },
    {
        id: 2,
        nombre: "Pantalón cargo",
        descripcion: "Pantalón cargo de gabardina",
        imagen: "pantalon.jpg",
        precio: 28000,
        stock: 5
    },
    {
        id: 3,
        nombre: "Campera deportiva",
        descripcion: "Campera liviana para entrenamiento",
        imagen: "campera.jpg",
        precio: 45000,
        stock: 8
    },
    {
        id: 4,
        nombre: "Zapatillas urbanas",
        descripcion: "Zapatillas cómodas para uso diario",
        imagen: "zapatillas.jpg",
        precio: 55000,
        stock: 3
    },
    {
        id: 5,
        nombre: "Gorra negra",
        descripcion: "Gorra ajustable de color negro",
        imagen: "gorra.jpg",
        precio: 12000,
        stock: 15
    }
];

const carrito = JSON.parse( localStorage.getItem('carrito'))  || [];

const listadoProduct = document.querySelector('.contenedor-columnas')

listadoProduct.innerHTML += '<h2>productos</h2>';
productos.forEach((producto)=>{
    const html = `
    <article class="products" data-id='${producto.id}'>
  <h2 class="tag">${producto.nombre}</h2>
  <p class="breve-product">${producto.description}</p>
  <span class="span-product">$ ${producto.precio}</span><br><br>
  <button class="button-products">Agregar</button>
</article>
    `;
    listadoProduct.innerHTML += html;
});



document.addEventListener('click',(event)=>{
   if (event.target.classList.contains('agregar')){
    const id = event.target.closest('article').dataset.id;
    const elemento = productos.find((producto)=> producto.id == id);
    console.log(elemento);
    const {  nombre, precio } =  elemento;
const producto={
  id: id,
  nombre:nombre,
  precio:precio,
  cantidad: 1,
};

//agregar al carrito
carrito.push(producto);
console.log(carrito);

localStorage.setItem('carrito',JSON.stringify(carrito));
};
})


