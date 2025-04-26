// Función principal cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID del juego de la URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    
    // Catálogo de juegos
    const juegos = {
      //Catalogo 1
      Fornite: {
        nombre: "Fortnite",
        descripcion: "Battle Royale de Epic Games.",
        imagen: "img2/Fortnite _ Xbox.jpg",
        // Agregamos screenshots para el slider
        screenshots: [
          "img2/Fortnite _ Xbox.jpg",
          "img2/fortnite_screenshot1.jpg",
          "img2/fortnite_screenshot2.jpg"
          // Agrega más screenshots según sea necesario
        ],
        desarrollador: "Epic Games",
        genero: "Battle Royale, Acción",
        fecha: "25 de julio, 2017"
      },
      CallofDutyWarzone: {
        nombre: "Call of Duty Warzone",
        descripcion: "Juego de disparos en primera persona.",
        imagen: "img2/Call of Duty Warzone System Requirements PC (2021).jpg",
        screenshots: [
          "img2/Call of Duty Warzone System Requirements PC (2021).jpg",
          "img2/cod_warzone_screenshot1.jpg",
          "img2/cod_warzone_screenshot2.jpg"
        ],
        desarrollador: "Infinity Ward, Raven Software",
        genero: "Battle Royale, FPS",
        fecha: "10 de marzo, 2020"
      },
      pubg: {
        nombre: "Pubg Battlegrounds",
        descripcion: "Juego de disparos en primera persona.",
        imagen: "image/pubg.jpg",
        screenshots: [
          "image/pubg.jpg",
          "image/pubg_screenshot1.jpg",
          "image/pubg_screenshot2.jpg"
        ],
        desarrollador: "PUBG Studios",
        genero: "Battle Royale, Supervivencia",
        fecha: "20 de diciembre, 2017"
      },
      Battlefield1: {
        nombre: "Battlefield 1",
        descripcion: "Juego de disparos",
        imagen: "img2/Aucune bataille ne se ressemble dans Battlefield 1.jpg",
        screenshots: [
          "img2/Aucune bataille ne se ressemble dans Battlefield 1.jpg",
          "img2/battlefield1_screenshot1.jpg",
          "img2/battlefield1_screenshot2.jpg"
        ],
        desarrollador: "DICE",
        genero: "FPS, Acción",
        fecha: "21 de octubre, 2016"
      },
      counterstrike2: {
        nombre: "Counter Strike 2",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/counter strike 2.jpg",
        screenshots: [
          "img2/counter strike 2.jpg",
          "img2/cs2_screenshot1.jpg",
          "img2/cs2_screenshot2.jpg"
        ],
        desarrollador: "Valve",
        genero: "FPS, Táctico",
        fecha: "28 de septiembre, 2023"
      },
      ArmaIII: {
        nombre: "Arma III",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Arma III.jpg",
        screenshots: [
          "img2/Arma III.jpg",
          "img2/arma3_screenshot1.jpg",
          "img2/arma3_screenshot2.jpg"
        ],
        desarrollador: "Bohemia Interactive",
        genero: "Simulación militar, FPS",
        fecha: "12 de septiembre, 2013"
      },
      HellLetLoose: {
        nombre: "Hell Let Loose",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Hell Let Loose.jpg",
        screenshots: [
          "img2/Hell Let Loose.jpg",
          "img2/hellletloose_screenshot1.jpg",
          "img2/hellletloose_screenshot2.jpg"
        ],
        desarrollador: "Black Matter",
        genero: "FPS, Simulación",
        fecha: "27 de julio, 2021"
      },
      
      // Tarjetas
      Insurgency: {
        nombre: "Insurgency Sandstorm",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Insurgency_ Sandstorm.jpg",
        screenshots: [
          "img2/Insurgency_ Sandstorm.jpg",
          "img2/insurgency_screenshot1.jpg",
          "img2/insurgency_screenshot2.jpg"
        ],
        desarrollador: "New World Interactive",
        genero: "FPS, Táctico",
        fecha: "12 de diciembre, 2018"
      },
      Battlefield2042: {
        nombre: "Battlefield 2042",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Battlefield 2042.jpg",
        screenshots: [
          "img2/Battlefield 2042.jpg",
          "img2/bf2042_screenshot1.jpg",
          "img2/bf2042_screenshot2.jpg"
        ],
        desarrollador: "DICE",
        genero: "FPS, Acción",
        fecha: "19 de noviembre, 2021"
      },
      CompanyofHeroes: {
        nombre: "Company of Heroes",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Company of Heroes 3.jpg",
        screenshots: [
          "img2/Company of Heroes 3.jpg",
          "img2/coh_screenshot1.jpg",
          "img2/coh_screenshot2.jpg"
        ],
        desarrollador: "Relic Entertainment",
        genero: "Estrategia en tiempo real",
        fecha: "23 de febrero, 2023"
      },
      DCS: {
        nombre: "DCS World",
        descripcion: "Simulacion de vuelo",
        imagen: "img2/DCS World.jpg",
        screenshots: [
          "img2/DCS World.jpg",
          "img2/dcs_screenshot1.jpg",
          "img2/dcs_screenshot2.jpg"
        ],
        desarrollador: "Eagle Dynamics",
        genero: "Simulación de vuelo",
        fecha: "17 de octubre, 2008"
      },
      Enlisted: {
        nombre: "Enlisted",
        descripcion: "Juego de desparos en primera persona",
        imagen: "img2/Enlisted.jpg",
        screenshots: [
          "img2/Enlisted.jpg",
          "img2/enlisted_screenshot1.jpg",
          "img2/enlisted_screenshot2.jpg"
        ],
        desarrollador: "Darkflow Software",
        genero: "FPS, MMO",
        fecha: "8 de abril, 2021"
      },
      CallofDutyWWII: {
        nombre: "Call of Duty WWII",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Call of Duty WWII.jpg",
        screenshots: [
          "img2/Call of Duty WWII.jpg",
          "img2/codww2_screenshot1.jpg",
          "img2/codww2_screenshot2.jpg"
        ],
        desarrollador: "Sledgehammer Games",
        genero: "FPS, Acción",
        fecha: "3 de noviembre, 2017"
      },
      
      //tarjetas 3
      ZeroHour: {
        nombre: "Zero Hour",
        descripcion: "Juego de disparos en primera persona",
        imagen: "image/zero hour.jpg",
        screenshots: [
          "image/zero hour.jpg",
          "image/zerohour_screenshot1.jpg",
          "image/zerohour_screenshot2.jpg"
        ],
        desarrollador: "M7 Productions",
        genero: "FPS, Táctico",
        fecha: "12 de agosto, 2020"
      },
      Squad: {
        nombre: "Squad",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Squad (2).jpg",
        screenshots: [
          "img2/Squad (2).jpg",
          "img2/squad_screenshot1.jpg",
          "img2/squad_screenshot2.jpg"
        ],
        desarrollador: "Offworld Industries",
        genero: "FPS, Simulación militar",
        fecha: "23 de septiembre, 2020"
      },
      
      //Catalogo 2
      Valorant: {
        nombre: "Valorant",
        descripcion: "Juego de disparo se primera persona",
        imagen: "img2/Valorant.jpg",
        screenshots: [
          "img2/Valorant.jpg",
          "img2/valorant_screenshot1.jpg",
          "img2/valorant_screenshot2.jpg"
        ],
        desarrollador: "Riot Games",
        genero: "FPS, Táctico",
        fecha: "2 de junio, 2020"
      },
      HaloWars2: {
        nombre: "Halo Wars 2",
        descripcion: "Juego de disparos en tercera persona",
        imagen: "img2/Halo Wars 2.jpg",
        screenshots: [
          "img2/Halo Wars 2.jpg",
          "img2/halowars2_screenshot1.jpg",
          "img2/halowars2_screenshot2.jpg"
        ],
        desarrollador: "343 Industries, Creative Assembly",
        genero: "Estrategia en tiempo real",
        fecha: "21 de febrero, 2017"
      }
    };
    
    // Obtener información del juego seleccionado
    const juego = juegos[id];
    
    if (juego) {
      // Cargar datos del juego en la página
      document.getElementById('nombre-juego').textContent = juego.nombre;
      document.getElementById('descripcion-juego').textContent = juego.descripcion;
      
      // Si existen estos elementos en el HTML, asignarles valores
      if (document.getElementById('desarrollador-juego')) {
        document.getElementById('desarrollador-juego').textContent = juego.desarrollador || "No disponible";
      }
      if (document.getElementById('genero-juego')) {
        document.getElementById('genero-juego').textContent = juego.genero || "No disponible";
      }
      if (document.getElementById('fecha-juego')) {
        document.getElementById('fecha-juego').textContent = juego.fecha || "No disponible";
      }
      
      // Configurar el slider si el juego tiene screenshots y existe el elemento main-slide-wrapper
      if (juego.screenshots && document.getElementById('main-slide-wrapper')) {
        setupSlider(juego.screenshots);
      } else {
        // Si no hay slider, al menos mostrar la imagen principal
        document.getElementById('imagen-juego').src = juego.imagen;
      }
      
    } else {
      document.body.innerHTML = "Juego no encontrado.";
    }
  });
  
  // Función para configurar el slider
  function setupSlider(imagenes) {
    const mainSlideWrapper = document.getElementById('main-slide-wrapper');
    const thumbnailsContainer = document.getElementById('thumbnails');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Limpiar contenedores
    mainSlideWrapper.innerHTML = '';
    thumbnailsContainer.innerHTML = '';
    
    // Variables de control
    let currentIndex = 0;
    
    // Comprobar si los elementos existen antes de trabajar con ellos
    if (!mainSlideWrapper || !thumbnailsContainer) {
      console.error("Elementos del slider no encontrados en el DOM");
      return;
    }
    
    // Crear slides y miniaturas
    imagenes.forEach((img, index) => {
      // Crear slide principal
      const slide = document.createElement('div');
      slide.className = `slide ${index === 0 ? 'active' : ''}`;
      
      const imgElement = document.createElement('img');
      imgElement.src = img;
      imgElement.alt = `Screenshot ${index + 1}`;
      
      slide.appendChild(imgElement);
      mainSlideWrapper.appendChild(slide);
      
      // Crear miniatura
      const thumbnail = document.createElement('div');
      thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
      
      const thumbImg = document.createElement('img');
      thumbImg.src = img;
      thumbImg.alt = `Thumbnail ${index + 1}`;
      
      thumbnail.appendChild(thumbImg);
      thumbnailsContainer.appendChild(thumbnail);
      
      // Evento click para la miniatura
      thumbnail.addEventListener('click', () => {
        goToSlide(index);
      });
    });
    
    // Si solo hay una imagen o no hay controles, ocultar los botones
    if (!prevBtn || !nextBtn || imagenes.length <= 1) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    } else {
      // Evento para botón anterior
      prevBtn.addEventListener('click', () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = imagenes.length - 1;
        goToSlide(newIndex);
      });
      
      // Evento para botón siguiente
      nextBtn.addEventListener('click', () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= imagenes.length) newIndex = 0;
        goToSlide(newIndex);
      });
    }
    
    // Función para ir a un slide específico
    function goToSlide(index) {
      // Actualizar slides
      const slides = document.querySelectorAll('.slide');
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
      
      // Actualizar miniaturas
      const thumbnails = document.querySelectorAll('.thumbnail');
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      thumbnails[index].classList.add('active');
      
      // Actualizar índice actual
      currentIndex = index;
    }
  }