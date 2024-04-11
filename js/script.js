const sidebar = document.querySelector(".sidebar");
const arriendos = document.querySelector(".arriendos");
const arriendosHover = document.querySelector(".hoverArriendos");
const ventas = document.querySelector(".ventas");
const ventasHover = document.querySelector(".hoverVentas");
const avaluos = document.querySelector(".avaluos");
const avaluosHover = document.querySelector(".hoverAvaluos");
const hipotecas = document.querySelector(".hipotecas");
const hipotecasHover = document.querySelector(".hoverHipotecas");
const asesorias = document.querySelector(".asesorias");
const asesoriasHover = document.querySelector(".hoverAsesorias");
const btn_Wapp = document.querySelector(".go-wpp-container");
const btnTop = document.querySelector(".go-top-container");

/* Menu */

function showSidebar() {
  sidebar.style.display = "flex";
  btn_Wapp.style.display = "none";
  btnTop.style.display = "none";
}

function hideSidebar() {
  sidebar.style.display = "none";
  btn_Wapp.style.display = "flex";
  btnTop.style.display = "flex";
}

/* Hover de los servicios */

function showArriendos() {
  arriendos.style.display = "none";
  arriendosHover.style.display = "flex";
}

function hideArriendos() {
  arriendos.style.display = "flex";
  arriendosHover.style.display = "none";
}

function showVentas() {
  ventas.style.display = "none";
  ventasHover.style.display = "flex";
}

function hideVentas() {
  ventas.style.display = "flex";
  ventasHover.style.display = "none";
}

function showAvaluos() {
  avaluos.style.display = "none";
  avaluosHover.style.display = "flex";
}

function hideAvaluos() {
  avaluos.style.display = "flex";
  avaluosHover.style.display = "none";
}

function showHipotecas() {
  hipotecas.style.display = "none";
  hipotecasHover.style.display = "flex";
}

function hideHipotecas() {
  hipotecas.style.display = "flex";
  hipotecasHover.style.display = "none";
}

function showAsesorias() {
  asesorias.style.display = "none";
  asesoriasHover.style.display = "flex";
}

function hideAsesorias() {
  asesorias.style.display = "flex";
  asesoriasHover.style.display = "none";
}

/* Botón flotante */

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
};

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
