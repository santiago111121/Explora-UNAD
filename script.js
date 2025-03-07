function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

// Cerrar si se toca fuera del menú
document.addEventListener("click", function(event) {
    let sidebar = document.getElementById("sidebar");
    let menuIcon = document.querySelector(".menu-icon");

    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});
