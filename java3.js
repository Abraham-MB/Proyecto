// Función principal cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID del juego de la URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // Map URL id to juegos keys to handle case and spelling differences
    const idMap = {
      'fortnite': 'Fornite',
      'fornite': 'Fornite',
      'callofdutywarzone': 'CallofDutyWarzone',
      'pubg': 'pubg',
      'battlefield1': 'Battlefield1',
      'counterstrike2': 'counterstrike2',
      'arma3': 'ArmaIII',
      'hellletloose': 'HellLetLoose',
      'insurgencysandstorm': 'Insurgency',
      'battlefield2042': 'Battlefield2042',
      'companyofheroes': 'CompanyofHeroes',
      'dcsworld': 'DCS',
      'enlisted': 'Enlisted',
      'callofdutywwii': 'CallofDutyWWII',
      'zerohour': 'ZeroHour',
      'squad': 'Squad',
      'valorant': 'Valorant',
      'halowars2': 'HaloWars2'
    };

    // Normalize id from URL to lowercase and remove spaces
    const normalizedId = id ? id.toLowerCase().replace(/\s+/g, '') : null;
    const juegoKey = normalizedId && idMap[normalizedId] ? idMap[normalizedId] : null;

    // catalogo de todos los juegos
    const juegos = {

      //catalogo 1
      Fornite: {
        nombre: "Fortnite",
        descripcion: 
        "Juego de disparos multijugador gratuito en tercera persona que combina construcción rápida, estilo visual caricaturesco y modos de juego como Battle Royale o creativos, en constante actualización con eventos y colaboraciones.",
        precio:29.99,
        imagen: "img2/EPIC GAMES.jpg",
        //imagenes del slider
        screenshots: [
          "img2/FORTNITE.jpg",
          "img-detalle/fornite-de-1.jpg",
          "img-detalle/fornite-de-2.jpg",
          "img-detalle/fornite-de-3.jpg"
        ],
        //detalles del juego
        desarrollador: "Epic Games",
        genero: "Battle Royale, Acción",
        fecha: "25 de julio, 2017",
        requisitos: {
          minimos: {
            SO: "Windows 7/8/10 64-bit",
            procesador: "Intel Core i3-3225 3.3 GHz",
            memoria: "4 GB RAM",
            graficos: "Intel HD 4000 o equivalente",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "16 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-7300U 3.5 GHz / AMD Ryzen 3 3300U",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GTX 960 / AMD R9 280 o equivalente",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "30 GB"
          }
        }
      },
      CallofDutyWarzone: {
        nombre: "Call of Duty Warzone",
        descripcion: "FPS Battle Royale gratuito que enfrenta a hasta 150 jugadores en un gran mapa con mecánicas rápidas, armamento moderno y acción intensa, ambientado en el universo de Call of Duty.",
        precio:15.00,
        imagen: "img-desarrolladores/INFINITY WARD.jpg",
        imagen: "img-desarrolladores/INFINITY WARD.jpg",
        screenshots: [
          "img-detalle/cod-w-1.jpg",
          "img-detalle/cod-w-2.jpg",
          "img-detalle/cod-w-3.jpg"
        ],
        desarrollador: "Infinity Ward, Raven Software",
        genero: "Battle Royale, FPS",
        fecha: "10 de marzo, 2020",
        requisitos: {
          minimos: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i3-4340 o AMD FX-6300",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 670 / GeForce GTX 1650 o AMD Radeon HD 7950",
            directx: "12",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "125 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit o Windows 11 64-bit",
            procesador: "Intel Core i5-6600K o AMD Ryzen 5 1600X",
            memoria: "12 GB RAM",
            graficos: "NVIDIA GeForce GTX 1060 o AMD Radeon RX 580",
            directx: "12",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "125 GB SSD"
          }
        }
      },
      pubg: {
        nombre: "Pubg Battlegrounds",
        descripcion: "Pionero del género Battle Royale, este juego enfrenta a jugadores en combates tácticos donde sobreviven explorando mapas extensos, saqueando equipamiento y combatiendo hasta quedar un solo ganador.",
        precio: 2.99,
        imagen: "img-desarrolladores/PUBG X KRAFTON.avif",
        screenshots: [
          "img-detalle/pubg-1.jpg",
          "img-detalle/pubg-2.jpg",
          "img-detalle/pubg-3.jpg"
        ],
        desarrollador: "PUBG Studios",
        genero: "Battle Royale, Supervivencia",
        fecha: "20 de diciembre, 2017",
        requisitos: {
          minimos: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-4430 / AMD FX-6300",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "40 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-6600K / AMD Ryzen 5 1600",
            memoria: "16 GB RAM",
            graficos: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "50 GB SSD"
          }
        }
      },
      Battlefield1: {
        nombre: "Battlefield 1",
        descripcion: "FPS ambientado en la Primera Guerra Mundial que ofrece grandes batallas multijugador con vehículos, destructibilidad de escenarios y narrativa histórica intensa.",
        precio:120.00,
        imagen: "img-desarrolladores/DICE.jpg",
        screenshots: [
          "img2/BATTLEFIELD 1.jpg",
          "img-detalle/battle-1.jpg",
          "img-detalle/battle-2.jpg",
          "img-detalle/battle-3.jpg"
        ],
        desarrollador: "DICE",
        genero: "FPS, Acción",
        fecha: "21 de octubre, 2016",
        requisitos:{
          minimos: {
            SO: "Windows 7/8.1/10 64-bit",
            procesador: "Intel Core i5-6600K / AMD FX-6350",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 660 2GB / AMD Radeon HD 7850 2GB",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "50 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i7-4790 / AMD FX-8350",
            memoria: "16 GB RAM",
            graficos: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 480 4GB",
            directx: "11.1",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "50 GB"
          }
        }
      },
      counterstrike2: {
        nombre: "Counter Strike 2",
        descripcion: "FPS táctico competitivo centrado en partidas 5 vs 5, donde equipos de terroristas y antiterroristas se enfrentan en rondas rápidas con mecánicas de precisión y economía de armamento.",
        precio:20.00,
        imagen: "img-desarrolladores/VALVE CORPORATION.jpg",
        screenshots: [
          "img2/counter strike 2.jpg",
          "img-detalle/c-s2-1.jpg",
          "img-detalle/c-s2-2.jpg",
          "img-detalle/c-s2-3.jpg"
        ],
        desarrollador: "Valve",
        genero: "FPS, Táctico",
        fecha: "28 de septiembre, 2023",
        requisitos:{
          minimos: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-750 / AMD Phenom II X4 965",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 730 / AMD Radeon R7 240",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "85 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-9400F / AMD Ryzen 5 2600X",
            memoria: "12 GB RAM",
            graficos: "NVIDIA GeForce GTX 1080 / AMD Radeon RX 5500 XT",
            directx: "12",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "85 GB SSD"
          }
        }
      },
      ArmaIII: {
        nombre: "Arma III",
        descripcion: "Simulador militar sandbox con un enfoque en el realismo de combate, logística y misiones cooperativas en mapas abiertos y detallados, ideal para jugadores que buscan una experiencia táctica profunda.",
        precio:50.00,
        imagen: "img-desarrolladores/Bohemia Interactive.jpg",
        screenshots: [
          "img-detalle/Arma3-1.jpg",
          "img-detalle/Arma3-2.jpg",
          "img-detalle/Arma3-3.jpg"
        ],
        desarrollador: "Bohemia Interactive",
        genero: "Simulación militar, FPS",
        fecha: "12 de septiembre, 2013",
        requisitos:{
          minimos: {
            SO: "Windows 7/8/10 64-bit",
            procesador: "Intel Core i3-3225 3.3 GHz / AMD Phenom II X2 B57",
            memoria: "4 GB RAM",
            graficos: "NVIDIA GeForce GTX 650 / AMD Radeon HD 7750",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "45 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-4460 3.2 GHz / AMD Ryzen 5 1600X",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 960 / AMD Radeon R9 380",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "45 GB SSD"
          }
        }
      },
      HellLetLoose: {
        nombre: "Hell Let Loose",
        descripcion: "FPS militar realista ambientado en la Segunda Guerra Mundial, donde más de 100 jugadores se enfrentan en batallas históricas con roles específicos, comunicación jerárquica y línea de suministro.",
        precio:30.00,
        imagen: "img-desarrolladores/COVER 6 STUDIOS.png",
        screenshots: [
          "img-detalle/HLL-1.jpg",
          "img-detalle/HLL-2.jpg",
          "img-detalle/HLL-3.jpg"
        ],
        desarrollador: "Cover 6 Studios",
        genero: "FPS, Simulación",
        fecha: "27 de julio, 2021",
        requisitos:{
          minimos: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-6600 / AMD Ryzen 5 1600",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "20 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i7-8700K / AMD Ryzen 5 3600",
            memoria: "16 GB RAM",
            graficos: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT",
            directx: "12",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "20 GB SSD"
          }
        }
      },
      
      
      // primeras tarjetas


      Insurgency: {
        nombre: "Insurgency Sandstorm",
        descripcion: "FPS táctico en entornos de combate modernos con enfoque realista, sin HUD, con comunicación por voz direccional, fuego amigo activado y misiones cooperativas o PvP intensas.",
        precio:40.00,
        imagen: "img-desarrolladores/New-World-Interactive.png",
        screenshots: [
          "img-detalle/IS-1.jpg",
          "img-detalle/IS-2.jpg",
          "img-detalle/IS-3.jpg"
        ],
        desarrollador: "New World Interactive",
        genero: "FPS, Táctico",
        fecha: "12 de diciembre, 2018",
        requisitos:{
          minimos: {
            SO: "Windows 7/8/10 64-bit",
            procesador: "Intel Core i5-4440 / AMD FX-6300",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 760 / AMD Radeon HD 7970",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "40 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i7-8700K / AMD Ryzen 7 2700",
            memoria: "16 GB RAM",
            graficos: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 5700",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "40 GB SSD"
          }
        }
      },
      Battlefield2042: {
        nombre: "Battlefield 2042",
        descripcion: "Shooter en primera persona ambientado en un futuro cercano, con grandes mapas dinámicos, eventos climáticos extremos y multijugador masivo con clases personalizables.",
        precio:100.00,
        imagen: "img-desarrolladores/DICE.jpg",
        screenshots: [
          "img-detalle/b-2042-1.jpg",
          "img-detalle/b-2042-2.jpg",
          "img-detalle/b-2042-3.jpg"
        ],
        desarrollador: "DICE",
        genero: "FPS, Acción",
        fecha: "19 de noviembre, 2021",
        requisitos:{
          minimos: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-6600K / AMD Ryzen 5 3600",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560",
            directx: "12",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "100 GB"
          },
          recomendados: {
            SO: "Windows 10/11 64-bit",
            procesador: "Intel Core i7-4790 / AMD Ryzen 7 2700X",
            memoria: "16 GB RAM",
            graficos: "NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600 XT",
            directx: "12",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "100 GB SSD"
          }
        }
      },
      CompanyofHeroes: {
        nombre: "Company of Heroes",
        descripcion: "uego de estrategia en tiempo real ambientado en la Segunda Guerra Mundial, donde debes comandar tropas, capturar territorios y usar tácticas dinámicas para dominar el campo de batalla.",
        precio:20.00,
        imagen: "img-desarrolladores/Relic Entertainment.jpg",
        screenshots: [
          "img-detalle/coh3-1.jpg",
          "img-detalle/coh3-2.jpg",
          "img-detalle/coh3-3.jpg"
        ],
        desarrollador: "Relic Entertainment",
        genero: "Estrategia en tiempo real",
        fecha: "23 de febrero, 2023",
        requisitos:{
          minimos: {
            SO: "Windows XP/Vista/7/8/10 32-bit o 64-bit",
            procesador: "Intel Pentium 4 2.4 GHz / AMD 3500+",
            memoria: "1 GB RAM (2 GB para Vista/7/8)",
            graficos: "NVIDIA GeForce 6800 / ATI Radeon X800 128MB",
            directx: "9.0c",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "5 GB"
          },
          recomendados: {
            SO: "Windows XP/Vista/7/8/10 64-bit",
            procesador: "Intel Core 2 Duo 2.4 GHz / AMD Athlon 64 X2 4400+",
            memoria: "2 GB RAM",
            graficos: "NVIDIA GeForce 7800 / ATI Radeon X1800 256MB",
            directx: "9.0c",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "5 GB"
          }
        }
      },
      DCS: {
        nombre: "DCS World",
        descripcion: "Simulador de vuelo militar ultrarrealista que permite pilotar cazas, helicópteros y jets históricos o modernos en misiones auténticas, con controles detallados y físicas de vuelo precisas.",
        precio:200.00,
        imagen: "img-desarrolladores/Eagle Dynamics.png",
        screenshots: [
          "img-detalle/DCS-1.jpg",
          "img-detalle/DCS-2.jpg",
          "img-detalle/DCS-3.jpg"
        ],
        desarrollador: "Eagle Dynamics",
        genero: "Simulación de vuelo",
        fecha: "17 de octubre, 2008",
        requisitos:{
          minimos: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i3-9100 / AMD Ryzen 3 3200G",
            memoria: "16 GB RAM",
            graficos: "NVIDIA GeForce GTX 1050Ti / AMD Radeon RX 570",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "120 GB SSD"
          },
          recomendados: {
            SO: "Windows 10/11 64-bit",
            procesador: "Intel Core i5-10600K / AMD Ryzen 5 3600",
            memoria: "32 GB RAM",
            graficos: "NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800",
            directx: "12",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "256 GB SSD"
          }
        }
      },
      Enlisted: {
        nombre: "Enlisted",
        descripcion: "Shooter de escuadrones ambientado en la Segunda Guerra Mundial, donde controlas a un pelotón de soldados con armamento auténtico, y alternas entre tierra, aire y roles de apoyo táctico.",
        precio:10.00,
        imagen: "img-desarrolladores/Darkflow Software.png",
        screenshots: [
          "img-detalle/Enlisted-1.jpg",
          "img-detalle/Enlisted-2.jpg",
          "img-detalle/Enlisted-3.jpg"
        ],
        desarrollador: "Darkflow Software",
        genero: "FPS, MMO",
        fecha: "8 de abril, 2021",
        requisitos:{
          minimos: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i3-4130 / AMD FX-6300",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 660 2GB / AMD Radeon HD 7850 2GB",
            directx: "11",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "50 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-6600 / AMD Ryzen 5 1600",
            memoria: "16 GB RAM",
            graficos: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
            directx: "12",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "50 GB SSD"
          }
        }
      },
      CallofDutyWWII: {
        nombre: "Call of Duty WWII",
        descripcion: "Shooter en primera persona ambientado en la Segunda Guerra Mundial, con un enfoque arcade y cinematográfico, que revive batallas emblemáticas y ofrece campañas y multijugador intensos.",
        precio:50.00,
        imagen: "img-desarrolladores/Sledgehammer Games.jpg",
        screenshots: [
          "img-detalle/cod-wwii-1.jpg",
          "img-detalle/cod-wwii-2.jpg",
          "img-detalle/cod-wwii-3.jpg"
        ],
        desarrollador: "Sledgehammer Games",
        genero: "FPS, Acción",
        fecha: "3 de noviembre, 2017",
        requisitos:{
          minimos: {
            SO: "Windows 7 64-bit / Windows 8 64-bit / Windows 10 64-bit",
            procesador: "Intel Core i3-3225 3.3 GHz / AMD Ryzen 5 1400",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 660 @ 2 GB / AMD Radeon HD 7850 @ 2GB",
            directx: "11.0",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "90 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-2400 / AMD Ryzen R5 1600X",
            memoria: "12 GB RAM",
            graficos: "NVIDIA GeForce GTX 970 / GTX 1060 @ 6GB / AMD Radeon R9 390 / AMD RX 580",
            directx: "11.0",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "90 GB"
          }
        }
      },
      

      //tarjetas 3


      ZeroHour: {
        nombre: "Zero Hour",
        descripcion: "FPS táctico centrado en operaciones especiales tipo SWAT, donde la comunicación, el uso de herramientas y la planificación son clave para asaltos realistas en entornos urbanos cerrados.",
        precio:40.00,
        imagen: "img-desarrolladores/M7.jpg",
        screenshots: [
          "img-detalle/zero hour-1.jpg",
          "img-detalle/zero hour-2.jpg",
          "img-detalle/zero hour-3.jpg"
        ],
        desarrollador: "M7 Productions",
        genero: "FPS, Táctico",
        fecha: "12 de agosto, 2020",
        requisitos:{
          minimos: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i3-3225 a 3.3 GHz / AMD Ryzen 5 1400",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 660 @ 2 GB / AMD Radeon HD 7850 @ 2 GB",
            directx: "11.0",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "90 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-2400 / AMD Ryzen R5 1600X",
            memoria: "12 GB RAM",
            graficos: "NVIDIA GeForce GTX 970 / GTX 1060 @ 6 GB / AMD Radeon R9 390 / AMD RX 580",
            directx: "11.0",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "90 GB"
          }
        }
      },
      Squad: {
        nombre: "Squad",
        descripcion: "FPS militar en equipo con énfasis en la comunicación y cooperación entre escuadras, grandes mapas, combate realista y simulación de logística y estrategia bélica moderna.",
        precio:25.00,
        imagen: "img-desarrolladores/Offworld Industries.jpg",
        screenshots: [
          "img-detalle/squad-1.jpg",
          "img-detalle/squad-2.jpg",
          "img-detalle/squad-3.jpg"
        ],
        desarrollador: "Offworld Industries",
        genero: "FPS, Simulación militar",
        fecha: "23 de septiembre, 2020",
        requisitos:{
          minimos: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i o AMD Ryzen con 4 núcleos físicos",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 770 / AMD Radeon HD 7970 con al menos 4 GB de VRAM",
            directx: "11.0",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "80 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i o AMD Ryzen con 6 núcleos físicos",
            memoria: "16 GB RAM",
            graficos: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 570 con al menos 6 GB de VRAM",
            directx: "12.0",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "80 GB"
          }
        }
      },
      

      
      //Catalogo 2


      Valorant: {
        nombre: "Valorant",
        descripcion: "FPS competitivo por rondas que mezcla precisión táctica con habilidades únicas de personajes (agentes), enfocado en partidas 5 vs 5, desarrollado para eSports y jugabilidad estratégica.",
        precio:0.00,
        imagen: "img-desarrolladores/RIOT GAMES.jpg",
        screenshots: [
          "img-detalle/Valorant-1.jpg",
          "img-detalle/Valorant-2.jpg",
          "img-detalle/Valorant.-3.jpg"
        ],
        desarrollador: "Riot Games",
        genero: "FPS, Táctico",
        fecha: "2 de junio, 2020",
        requisitos:{
          minimos: {
            SO: "Windows 10 (Build 19041+) o 11 de 64 bits",
            procesador: "Intel Core 2 Duo E8400 / AMD Athlon 200GE",
            memoria: "4 GB RAM",
            graficos: "Intel HD 4000 / AMD Radeon R5 200",
            directx: "11.0",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "30 GB"
          },
          recomendados: {
            SO: "Windows 10 (Build 19041+) o 11 de 64 bits",
            procesador: "Intel i3-4150 / AMD Ryzen 3 1200",
            memoria: "4 GB RAM",
            graficos: "NVIDIA GeForce GT 730 / AMD Radeon R7 240",
            directx: "11.0",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "30 GB"
          }
        }
      },
      HaloWars2: {
        nombre: "Halo Wars 2",
        descripcion: "RTS de ciencia ficción dentro del universo Halo, en el que lideras fuerzas humanas o alienígenas en combates tácticos con héroes, habilidades especiales y estructuras estratégicas.",
        precio:25.00,
        imagen: "img-desarrolladores/CREATIVE ASSEMBLY.jpg",
        screenshots: [
          "img-detalle/Halow2-1.jpg",
          "img-detalle/Halow2-2.jpg",
          "img-detalle/Halow2-3.jpg"
        ],
        desarrollador: "343 Industries, Creative Assembly",
        genero: "Estrategia en tiempo real",
        fecha: "21 de febrero, 2017",
        requisitos:{
          minimos: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-2500 / AMD FX-4350",
            memoria: "6 GB RAM",
            graficos: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7750 / Intel HD 520",
            directx: "12.0",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "25 GB"
          },
          recomendados: {
            SO: "Windows 10 64-bit",
            procesador: "Intel Core i5-4690K / AMD FX-8350",
            memoria: "8 GB RAM",
            graficos: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 480",
            directx: "12.0",
            red: "Conexión a internet de banda ancha",
            almacenamiento: "25 GB"
          }
          
        }
      }
    };
    
    // Obtener información del juego seleccionado
    const juego = juegos[id];
    
      if (juego) {
      // Cargar datos del juego en la página
      document.getElementById('nombre-juego').textContent = juego.nombre;
      document.getElementById('descripcion-juego').textContent = juego.descripcion;

      // Update the price span with the game's price formatted as currency
      const precioElemento = document.getElementById('precio-juego');
      if (precioElemento && juego.precio !== undefined) {
        precioElemento.textContent = `$${juego.precio.toFixed(2)}`;
      }
      
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

      // Mostrar requisitos combinados
      if (juego.requisitos) {
        const min = juego.requisitos.minimos || {};
        const rec = juego.requisitos.recomendados || {};
        
        document.getElementById('req-os').textContent = `${min.SO || 'N/A'} - ${rec.SO || 'N/A'}`;
        document.getElementById('req-procesador').textContent = `${min.procesador || 'N/A'} - ${rec.procesador || 'N/A'}`;
        document.getElementById('req-memoria').textContent = `${min.memoria || 'N/A'} - ${rec.memoria || 'N/A'}`;
        document.getElementById('req-graficos').textContent = `${min.graficos || 'N/A'} - ${rec.graficos || 'N/A'}`;
        document.getElementById('req-directx').textContent = `${min.directx || 'N/A'} - ${rec.directx || 'N/A'}`;
        document.getElementById('req-red').textContent = `${min.red || 'N/A'} - ${rec.red || 'N/A'}`;
        document.getElementById('req-almacenamiento').textContent = `${min.almacenamiento || 'N/A'} - ${rec.almacenamiento || 'N/A'}`;

        // Set image to the right of requisitos dynamically
        const requisitosImg = document.querySelector('.requisitos-img img');
        if (requisitosImg) {
          requisitosImg.src = juego.imagen || '';
          requisitosImg.alt = `Imagen de ${juego.nombre}`;
        }
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

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  let calificacionSeleccionada = 0;

  document.querySelectorAll('.estrella').forEach(estrella => {
    estrella.addEventListener('click', function () {
      calificacionSeleccionada = parseInt(this.dataset.valor);
      actualizarEstrellas();
    });
  });

  function actualizarEstrellas() {
    document.querySelectorAll('.estrella').forEach(estrella => {
      const valor = parseInt(estrella.dataset.valor);
      estrella.classList.remove('bi-star-fill', 'bi-star');
      estrella.classList.add(valor <= calificacionSeleccionada ? 'bi-star-fill' : 'bi-star');
    });
  }

  // Function to load comments for the current game from localStorage
  function cargarComentarios(id) {
    const comentariosGuardados = localStorage.getItem('comentarios_' + id);
    if (comentariosGuardados) {
      const comentarios = JSON.parse(comentariosGuardados);
      const listaComentarios = document.getElementById('lista-comentarios');
      listaComentarios.innerHTML = '';
      comentarios.forEach(comentario => {
        const comentarioHTML = `
          <div class="border-top border-secondary pt-3 mt-3">
            <strong>${comentario.nombre}</strong> - ${'★'.repeat(comentario.calificacion)}${'☆'.repeat(5 - comentario.calificacion)}
            <p>${comentario.texto}</p>
          </div>
        `;
        listaComentarios.innerHTML += comentarioHTML;
      });
    }
  }

  // Function to save a comment for the current game in localStorage
  function guardarComentario(id, nombre, texto, calificacion) {
    const comentariosGuardados = localStorage.getItem('comentarios_' + id);
    let comentarios = comentariosGuardados ? JSON.parse(comentariosGuardados) : [];
    comentarios.push({ nombre, texto, calificacion });
    localStorage.setItem('comentarios_' + id, JSON.stringify(comentarios));
  }

  document.getElementById('btn-enviar-comentario').addEventListener('click', () => {
    const nombre = document.getElementById('nombre-comentario').value;
    const texto = document.getElementById('texto-comentario').value;

    if (nombre && texto && calificacionSeleccionada > 0) {
      // Save comment for the current game
      guardarComentario(id, nombre, texto, calificacionSeleccionada);

      // Reload comments to update the list
      cargarComentarios(id);

      // Limpiar
      document.getElementById('nombre-comentario').value = '';
      document.getElementById('texto-comentario').value = '';
      calificacionSeleccionada = 0;
      actualizarEstrellas();
    } else {
      alert('Completa todos los campos y selecciona una calificación.');
    }
  });

  // Load comments when the page loads for the current game
  if (id) {
    cargarComentarios(id);
  }

  // Agregar al carrito
  const addToCartBtn = document.querySelector('.btn-descargar');
  if (addToCartBtn && id && juegos[id]) {
    addToCartBtn.addEventListener('click', () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const gameName = juegos[id].nombre;
      if (!cart.includes(gameName)) {
        cart.push(gameName);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${gameName} ha sido agregado al carrito.`);
      } else {
        alert(`${gameName} ya está en el carrito.`);
      }
    });
  }
});