const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const juegos = {
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