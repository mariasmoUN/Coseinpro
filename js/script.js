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
const sectionAll = document.querySelectorAll("section[id]");

/* Menu */

function showSidebar() {
  sidebar.classList.toggle("sidebar-active");
  btn_Wapp.style.display = "none";
}

function hideSidebar() {
  sidebar.classList.remove("sidebar-active");
  btn_Wapp.style.display = "flex";
}

/* Feed de instagram */

/* document.addEventListener("DOMContentLoaded", function () {

  let currentIndex = 0;
  let photos = [];

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const items = data.data;
      items.forEach((item) => {
        if (item.media_type !== "VIDEO") {
          photos.push(item);
          const photosContainer = document.getElementById("photos");
          const photoElement = document.createElement("div");
          const imageUrl =
            item.media_type === "CAROUSEL_ALBUM"
              ? item.thumbnail_url || item.media_url
              : item.media_url;
          photoElement.innerHTML = `
                      <a href="${item.permalink}" target="_blank">
                          <img src="${imageUrl}" alt="${item.caption}" style="width:100%;"/>
                      </a>
                  `;
          photosContainer.appendChild(photoElement);
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching Instagram photos: ", error);
    }); */

/* Botones del carrusel */

/*  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const carousel = document.getElementById("photos");

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < photos.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  function updateCarousel() {
    const offset = currentIndex * -106.66;
    carousel.style.transform = `translateX(${offset}%)`;
  }
}); */

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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  sidebarIsActive = sidebar.classList.contains("sidebar-active");

  if (scrolled > 100 && !sidebarIsActive) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
};
