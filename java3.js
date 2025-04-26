const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const juegos = {
    //Catalogo 1
    Fornite: {
      nombre: "Fortnite",
      descripcion: "Battle Royale de Epic Games.",
      imagen: "img2/Fortnite _ Xbox.jpg"
    },
    CallofDutyWarzone: {
        nombre: "Call of Duty Warzone",
        descripcion: "Juego de disparos en primera persona.",
        imagen: "img2/Call of Duty Warzone System Requirements PC (2021).jpg"
    },
    pubg: {
        nombre: "Pubg Battlegrounds",
        descripcion: "Juego de disparos en primera persona.",
        imagen: "image/pubg.jpg"
    },
    Battlefield1 :{
        nombre: "Battlefield 1",
        descripcion: "Juego de disparos",
        imagen: "img2/Aucune bataille ne se ressemble dans Battlefield 1.jpg"
    },
    counterstrike2 :{
        nombre: "Counter Strike 2",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/counter strike 2.jpg"
    },
    ArmaIII : {
        nombre: "Arma III",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Arma III.jpg"
    },
    HellLetLoose : {
        nombre: "Hell Let Loose",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Hell Let Loose.jpg"
    },
    

    // Tarjetas
    Insurgency :{
        nombre: "Insurgency Sandstorm",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Insurgency_ Sandstorm.jpg"
    },
    Battlefield2042: {
        nombre: "Battlefield 2042",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Battlefield 2042.jpg"
    },
    CompanyofHeroes :{
        nombre: "Company of Heroes",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Company of Heroes 3.jpg"
    },
    DCS : {
        nombre: "DCS World",
        descripcion: "Simulacion de vuelo",
        imagen: "img2/DCS World.jpg"
    },
    Enlisted : {
        nombre: "Enlisted",
        descripcion: "Juego de desparos en primera persona",
        imagen: "img2/Enlisted.jpg"
    },
    CallofDutyWWII : {
        nombre: "Call of Duty WWII",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Call of Duty WWII.jpg"
    },


    //tarjetas 3
    ZeroHour : {
        nombre: "Zero Hour",
        descripcion: "Juego de disparos en primera persona",
        imagen: "image/zero hour.jpg"
    },
    Squad : {
        nombre: "Squad",
        descripcion: "Juego de disparos en primera persona",
        imagen: "img2/Squad (2).jpg"
    },

    //Catalogo 2
    Valorant : {
        nombre: "Valorant",
        descripcion: "Juego de disparo se primera persona",
        imagen: "img2/Valorant.jpg"
    },
    HaloWars2 :{
        nombre: "Halo Wars 2",
        descripcion: "Juego de disparos en tercera persona",
        imagen: "img2/Halo Wars 2.jpg"
    }

  };

  const juego = juegos[id];

  if (juego) {
    document.getElementById('nombre-juego').textContent = juego.nombre;
    document.getElementById('descripcion-juego').textContent = juego.descripcion;
    document.getElementById('imagen-juego').src = juego.imagen;
  } else {
    document.body.innerHTML = "Juego no encontrado.";
  }