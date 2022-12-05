/*------------------------------------*\
  # AFFICHAGE DU MENU POUR LE MOBILE
\*------------------------------------*/

// On cible les éléments à modifier
const hamburger = document.querySelector(".menuBurger");
const menu = document.querySelector(".menu");
const page = document.documentElement;

// La fonction permettant de basculer l'affichage en ajoutant/supprimant des classes
function doToggle() {
  this.classList.toggle('-open');
  menu.classList.toggle('-open');
  page.classList.toggle('noscroll');
}

// La fonction doToggle() est appelé lorsqu'on clique sur l'icone de menu
hamburger.addEventListener('click', doToggle);