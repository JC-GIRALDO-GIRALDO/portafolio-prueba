// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  let menuResponsive = document.querySelector(".checkbtn");

  menuResponsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
  };
});
