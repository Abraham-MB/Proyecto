const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const juegos = {
    Fornite: {
      nombre: "Fortnite",
      descripcion: "Battle Royale de Epic Games.",
      imagen: "img2/Fortnite _ Xbox.jpg"
    },
    cod: {
        nombre: "Call of Duty",
        descripcion: "Juego de disparos en primera persona.",
        imagen: "cod.jpg"
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