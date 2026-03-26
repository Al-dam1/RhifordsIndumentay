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

