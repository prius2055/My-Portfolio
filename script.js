const projects = [
  {
    name: "Professional Art Printing data",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: ``,
    technology: ["html", "Bootstrap", "Ruby on rails"],
    liveVersion: "",
    source: "",
  },

  {
    name: "Professional Art Printing data",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: ``,
    technology: ["html", "Bootstrap", "Ruby on rails"],
    liveVersion: "",
    source: "",
  },

  {
    name: "Professional Art Printing data",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: ``,
    technology: ["html", "Bootstrap", "Ruby on rails"],
    liveVersion: "",
    source: "",
  },

  {
    name: "Professional Art Printing data",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: ``,
    technology: ["html", "Bootstrap", "Ruby on rails"],
    liveVersion: "",
    source: "",
  },

  {
    name: "Professional Art Printing data",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: ``,
    technology: ["html", "Bootstrap", "Ruby on rails"],
    liveVersion: "",
    source: "",
  },

  {
    name: "Professional Art Printing data",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: ``,
    technology: ["html", "Bootstrap", "Ruby on rails"],
    liveVersion: "",
    source: "",
  },
];

const projectCards = document.querySelector('.works-card');

projects.map((project) => {
  let div = document.createElement('div');
  div.className = 'work-card';

  div.innerHTML = `<div class='work-card-details'><h2>${project.name}</h2><p>${project.description}</p><ul class='list list-grey'><li>${project.technology[0]}</li><li>${project.technology[1]}</li><li>${project.technology[2]}</li>
  </ul></div> <button class='btn-orange btn-orange-big'>See projects</button>`;

  projectCards.appendChild(div);
});

const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
const mobileNavLogo = document.querySelector('.logo');
const mobileNavLink = document.querySelectorAll('.nav-link');
const mainContainer = document.querySelector('.main-container');
const bottomLine = document.querySelector('.bottom_line');
const buttonOrangeBig = document.querySelectorAll('.btn-orange-big');

const modalContainer = document.querySelector('.modal-container');
const modalOverlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.modal-close');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  mobileNavLogo.classList.toggle('active');
  mainContainer.classList.toggle('active');
  bottomLine.classList.toggle('active');
});

mobileNavLink.forEach((nav) => {
  nav.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

/* The modal */

buttonOrangeBig.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalContainer.classList.add('active');
    modalOverlay.classList.add('active');
  });
});

modalClose.addEventListener('click', function () {
  modalContainer.classList.remove('active');
  modalOverlay.classList.remove('active');
});
