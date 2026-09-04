const botones = document.querySelectorAll('.button-products');

for (let boton of botones) {
  boton.addEventListener('click', () => {
    Swal.fire({
        title: "Has añadido al carrito",
        icon: "success"
      });
  });
}
/*
const menuTogle = document.querySelector('.menu-togle');
const nav = document.querySelector('nav');
//abrir menu
menuTogle.addEventListener('click',()=>{
    nav.classList('active');
})
//cerrar menu
document.addEventListener('click',(e)=>{
    if(
        !menuTogle.contains(e.target) &&
        !nav.contains(e.target)
 ){
    nav.classList.remove('active');
 }
})*/
