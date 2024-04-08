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
