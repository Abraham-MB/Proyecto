document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.card-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const indicators = document.querySelectorAll('.catalog-indicator');
    const cardWidth = 290; // Ancho de cada tarjeta + margen
    const visibleCards = 4; // Número de tarjetas visibles a la vez
    
    let currentIndex = 0;
    const maxIndex = Math.ceil(cardContainer.children.length / visibleCards) - 1;
    
    // Función para actualizar la posición del carrusel
    function updateCarousel() {
      // Actualizar la posición de las tarjetas
      cardContainer.style.transform = `translateX(-${currentIndex * cardWidth * visibleCards}px)`;
      
      // Actualizar indicadores
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
    
    // Evento para el botón anterior
    prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
    
    // Evento para el botón siguiente
    nextButton.addEventListener('click', function() {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    });
    
    // Eventos para los indicadores
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', function() {
        currentIndex = index;
        updateCarousel();
      });
    });
  });