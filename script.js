function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

// Cerrar si se toca fuera del menú
document.addEventListener("click", function (event) {
  let sidebar = document.getElementById("sidebar");
  let menuIcon = document.querySelector(".menu-icon");

  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.classList.remove("active");
  }
});

function toggleModoOscuro() {
  const body = document.body;
  const switchModo = document.getElementById("modoToggle");
  const activado = switchModo.checked;

  if (activado) {
    body.classList.add("modo-oscuro");
    localStorage.setItem("modoOscuro", "activado");
  } else {
    body.classList.remove("modo-oscuro");
    localStorage.setItem("modoOscuro", "desactivado");
  }
}

// Al cargar la página, aplicar modo según localStorage y actualizar el switch
window.addEventListener("DOMContentLoaded", () => {
  const switchModo = document.getElementById("modoToggle");
  const activado = localStorage.getItem("modoOscuro") === "activado";

  if (activado) {
    document.body.classList.add("modo-oscuro");
    if (switchModo) switchModo.checked = true;
  } else {
    document.body.classList.remove("modo-oscuro");
    if (switchModo) switchModo.checked = false;
  }
});
