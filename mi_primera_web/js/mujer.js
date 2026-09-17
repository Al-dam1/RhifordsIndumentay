const cards = document.querySelectorAll('.products');

cards.forEach(card => {
  const img = card.querySelector('.img-product');

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Rotación solo de la imagen
    const rotateX = ((y - centerY) / 25) * -1;
    const rotateY = ((x - centerX) / 25);

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});

const botones = document.querySelectorAll('.button-products');

for (let boton of botones) {
  boton.addEventListener('click', () => {
    Swal.fire({
        title: "Has añadido al carrito",
        icon: "success"
      });
  });
}
//clase13 localstorage
//localStorage.setItem('nombre','damian');
//const nombre = localStorage.getItem('nombre');
//console.log(nombre);

//carrito compra
const productos = [
  {
    id:1,
    nombre: 'producto 1',
    description:'description producto 1',
    imagen:'imagen-1.jpg', 
    precio: 10,
    stock:10
  },
    {
      id:2,
      nombre: 'producto 2',
      description:'description producto 2',
      imagen:'imagen-.2jpg', 
      precio:20,
      stock:40
    },  
      {
        id:3,
        nombre: 'producto 3',
        description:'description producto 3',
        imagen:'imagen-3.jpg', 
        precio: 30,
        stock:90
      },  
        {
          id:4,
          nombre: 'producto 4',
          description:'description producto 4',
          imagen:'imagen-4.jpg', 
          precio: 40,
          stock:5
        },
];
                  //si esto de aca falla da otro valor
const carrito = JSON.parse( localStorage.getItem('carrito'))  || [];
console.log(carrito, typeof carrito);
//const producto = productos[1];
const { id, nombre, precio } =  productos[2];
const producto={
  id: id,
  nombre:nombre,
  precio:precio,
  cantidad: 1,
};
console.log(producto);

//agregar al carrito
carrito.push(producto);
console.log(carrito);

localStorage.setItem('carrito',JSON.stringify(carrito));
