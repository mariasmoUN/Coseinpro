/* Menu */

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  const btn_Wapp = document.querySelector(".go-wpp-container");
  btn_Wapp.style.display = "none";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
  const btn_Wapp = document.querySelector(".go-wpp-container");
  btn_Wapp.style.display = "flex";
}

/* Hover de los servicios */

function showArriendos() {
  const arriendos = document.querySelector(".arriendos");
  arriendos.style.display = "none";
  const arriendosHover = document.querySelector(".hoverArriendos");
  arriendosHover.style.display = "flex";
}

function hideArriendos() {
  const arriendos = document.querySelector(".arriendos");
  arriendos.style.display = "flex";
  const arriendosHover = document.querySelector(".hoverArriendos");
  arriendosHover.style.display = "none";
}

function showVentas() {
  const ventas = document.querySelector(".ventas");
  ventas.style.display = "none";
  const ventasHover = document.querySelector(".hoverVentas");
  ventasHover.style.display = "flex";
}

function hideVentas() {
  const ventas = document.querySelector(".ventas");
  ventas.style.display = "flex";
  const ventasHover = document.querySelector(".hoverVentas");
  ventasHover.style.display = "none";
}

function showAvaluos() {
  const avaluos = document.querySelector(".avaluos");
  avaluos.style.display = "none";
  const avaluosHover = document.querySelector(".hoverAvaluos");
  avaluosHover.style.display = "flex";
}

function hideAvaluos() {
  const avaluos = document.querySelector(".avaluos");
  avaluos.style.display = "flex";
  const avaluosHover = document.querySelector(".hoverAvaluos");
  avaluosHover.style.display = "none";
}

function showHipotecas() {
  const hipotecas = document.querySelector(".hipotecas");
  hipotecas.style.display = "none";
  const hipotecasHover = document.querySelector(".hoverHipotecas");
  hipotecasHover.style.display = "flex";
}

function hideHipotecas() {
  const hipotecas = document.querySelector(".hipotecas");
  hipotecas.style.display = "flex";
  const hipotecasHover = document.querySelector(".hoverHipotecas");
  hipotecasHover.style.display = "none";
}

function showAsesorias() {
  const asesorias = document.querySelector(".asesorias");
  asesorias.style.display = "none";
  const asesoriasHover = document.querySelector(".hoverAsesorias");
  asesoriasHover.style.display = "flex";
}

function hideAsesorias() {
  const asesorias = document.querySelector(".asesorias");
  asesorias.style.display = "flex";
  const asesoriasHover = document.querySelector(".hoverAsesorias");
  asesoriasHover.style.display = "none";
}
