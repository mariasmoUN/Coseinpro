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
  /*   btnTop.style.display = "flex"; */
}

/* Feed de instagram */

document.addEventListener("DOMContentLoaded", function () {
  const accessToken =
    "IGQWRNdFNJbGVsUF9kd1BjNlJmbDJVUFBtU1Y5TTR0R2g3dHQxS0ZASVlhxTHhDYVlxQk1jRnY0WjZA4OHAtVHRMNHRpYlZAzQUNRY1BkbEt3U2FKSEotUXE1bnVfTmE5ZAEIyREdiTWFsdlA2X0pibHVUQWFfSVVieTAZD";
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`;
  let currentIndex = 0;
  let photos = [];

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      photos = data.data;
      const photosContainer = document.getElementById("photos");
      photos.forEach((photo) => {
        const photoElement = document.createElement("div");

        photoElement.innerHTML = `
                  <a href="${photo.permalink}" target="_blank">
                      <img src="${photo.media_url}" alt="${photo.caption}" style="width:100%;"/>
                  </a>
              `;
        photosContainer.appendChild(photoElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching Instagram photos: ", error);
    });

  /* Botones del carrusel */

  const prevButton = document.getElementById("prev");
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
    const offset = currentIndex * -100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
});

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
  if (scrolled > 100) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
};
