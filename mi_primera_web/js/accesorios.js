
const botones = document.querySelectorAll('.button-products');

for (let boton of botones) {
  boton.addEventListener('click', () => {
    Swal.fire({
        title: "Has añadido al carrito",
        icon: "success"
      });
  });
}
