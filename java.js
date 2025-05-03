
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
    e.preventDefault(); 

    // validar el email o contraseña 
    window.location.href = "index2.html"; 
});
