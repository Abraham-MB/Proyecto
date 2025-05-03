document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('form[role="search"]');
  const searchInput = document.getElementById('search-input');
  const autocompleteResults = document.getElementById('autocomplete-results');
  const gameCards = document.querySelectorAll('.card.tarjetas2');
  const cartButton = document.getElementById('cart-button');
  const cartContainer = document.getElementById('cart-container');
  const cartItemsList = document.getElementById('cart-items');
  const closeCartButton = document.getElementById('close-cart');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Extrae datos del juego de todos los elementos relevantes para autocompletar al momento de buscar
  const carouselAnchors = Array.from(document.querySelectorAll('#carouselExampleRide a[href*="index3.html?id="], #carouselExampleFade a[href*="index3.html?id="], .carrucel-1 a[href*="index3.html?id="], .carrucel-2 a[href*="index3.html?id="], .carrucel a[href*="index3.html?id="]'));
  const tarjetas2Cards = Array.from(document.querySelectorAll('.card.tarjetas2'));
  const tarjetas3Cards = Array.from(document.querySelectorAll('.card.tarjetas3 a'));

  const gamesFromCarousel = carouselAnchors.map(a => {
    const id = a.getAttribute('href').split('id=')[1];
    const img = a.querySelector('img');
    let name = id;
    if (img) {
      if (img.alt && img.alt !== '...') {
        name = img.alt;
      } else if (img.id) {
        name = img.id;
      }
    }
    return { id, img: img ? img.src : '', name };
  });

  const gamesFromTarjetas2 = tarjetas2Cards.map(card => {
    const a = card.querySelector('a');
    const id = a.getAttribute('href').split('id=')[1];
    const img = card.querySelector('img.card-img');
    const name = card.querySelector('.card-title').textContent;
    return { id, img: img ? img.src : '', name };
  });

  const gamesFromTarjetas3 = tarjetas3Cards.map(a => {
    const id = a.getAttribute('href').split('id=')[1];
    const img = a.querySelector('img');
    const name = img ? img.alt || img.id || id : id;
    return { id, img: img ? img.src : '', name };
  });

  //Combinar todos los juegos y eliminar duplicados por id
  const gamesMap = new Map();
  [...gamesFromCarousel, ...gamesFromTarjetas2, ...gamesFromTarjetas3].forEach(game => {
    if (!gamesMap.has(game.id)) {
      gamesMap.set(game.id, game);
    }
  });
  const games = Array.from(gamesMap.values());

  // // Función para representar los elementos del carrito en el contenedor del carrito
  function renderCart() {
    cartItemsList.innerHTML = '';
    if (cart.length === 0) {
      const emptyMessage = document.createElement('li');
      emptyMessage.textContent = 'El carrito está vacío.';
      cartItemsList.appendChild(emptyMessage);
      return;
    }
    cart.forEach((gameName, index) => {
      const game = games.find(g => g.name === gameName);
      if (!game) return;

      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.alignItems = 'center';
      li.style.marginBottom = '8px';

      const link = document.createElement('a');
      link.href = `index3.html?id=${game.id}`;
      link.style.display = 'flex';
      link.style.alignItems = 'center';
      link.style.textDecoration = 'none';
      link.style.color = 'white';
      link.style.flexGrow = '1';
      link.style.cursor = 'pointer';

      const img = document.createElement('img');
      img.src = game.img;
      img.alt = game.name;
      img.style.width = '50px';
      img.style.height = '50px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '5px';
      img.style.marginRight = '10px';

      const span = document.createElement('span');
      span.textContent = game.name;

      link.appendChild(img);
      link.appendChild(span);

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Eliminar';
      removeBtn.className = 'btn btn-sm btn-danger';
      removeBtn.style.marginLeft = '10px';
      removeBtn.addEventListener('click', () => {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
      });

      li.appendChild(link);
      li.appendChild(removeBtn);
      cartItemsList.appendChild(li);
    });
  }

  renderCart();

  // Evento de entrada de búsqueda de autocompletar
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    autocompleteResults.innerHTML = '';
    if (!query) {
      autocompleteResults.style.display = 'none';
      return;
    }
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(query));
    if (filteredGames.length === 0) {
      autocompleteResults.style.display = 'none';
      return;
    }
    filteredGames.forEach(game => {
      const div = document.createElement('div');
      div.className = 'autocomplete-item d-flex align-items-center p-2';
      div.style.cursor = 'pointer';

      const img = document.createElement('img');
      img.src = game.img;
      img.alt = game.name;
      img.style.width = '40px';
      img.style.height = '40px';
      img.style.objectFit = 'cover';
      img.style.marginRight = '10px';
      img.style.borderRadius = '5px';

      const span = document.createElement('span');
      span.textContent = game.name;

      div.appendChild(img);
      div.appendChild(span);

      div.addEventListener('click', () => {
        window.location.href = `index3.html?id=${game.id}`;
      });

      autocompleteResults.appendChild(div);
    });
    autocompleteResults.style.display = 'block';
  });

  // Ocultar autocompletar al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target)) {
      autocompleteResults.style.display = 'none';
    }
  });

  // Evento de clic del botón Agregar al carrito
  gameCards.forEach(card => {
    const addToCartBtn = card.querySelector('.btn-t2');
    addToCartBtn.addEventListener('click', () => {
      const gameName = card.querySelector('.card-title').textContent;
      if (!cart.includes(gameName)) {
        cart.push(gameName);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
      }
    });
  });

  // Al hacer clic en el botón del carrito se alterna la visibilidad del contenedor del carrito.
  cartButton.addEventListener('click', () => {
    if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
      cartContainer.style.display = 'block';
    } else {
      cartContainer.style.display = 'none';
    }
  });

  // El botón Cerrar carrito oculta el contenedor del carrito
  closeCartButton.addEventListener('click', () => {
    cartContainer.style.display = 'none';
  });
});
