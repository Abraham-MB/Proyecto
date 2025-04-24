
const loginForm = document.getElementById("login-form");
const registroForm = document.getElementById("registro-form");

function mostrarRegistro() {
    loginForm.classList.add("hidden");
    registroForm.classList.remove("hidden");
}

function mostrarLogin() {
    registroForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
}


document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que se envíe el formulario
    // Aquí podrías validar el email/contraseña si quieres
    window.location.href = "index2.html"; // Redirige a la tienda
});
