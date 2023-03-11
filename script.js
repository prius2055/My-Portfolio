const projects = [
  {
    id: 1,
    name: 'Multi Stories Post',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: ['./img/large-image.png', './img/Icon.png'],
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
  },

  {
    id: 2,
    name: 'Professional Art Printing data',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: ['./img/modal-hero.png', './img/Icon.png'],
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
  },

  {
    id: 3,
    name: 'Professional Art Printing data',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: ['./img/modal-hero.png', './img/Icon.png'],
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
  },

  {
    id: 4,
    name: 'Professional Art Printing data',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: ['./img/modal-hero.png', './img/Icon.png'],
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
  },

  {
    id: 5,
    name: 'Professional Art Printing data',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: ['./img/modal-hero.png', './img/Icon.png'],
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
  },

  {
    id: 6,
    name: 'Professional Art Printing data',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: ['./img/modal-hero.png', './img/Icon.png'],
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
  },

  {
    id: 7,
    name: 'Professional Art Printing data',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: ['./img/modal-hero.png', './img/Icon.png'],
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
  },
];

const projectCards = document.querySelector('.work-cards');
const modalContainer = document.querySelector('.modal-container');

projects.forEach((project, i) => {
  const div = document.createElement('div');
  div.className = `${i === 0 ? 'first-work-card' : 'other-work-cards'}`;
  div.innerHTML = `
          <h2>${project.name}</h2>
          <p>${project.description}</p>
          <ul class="list list-grey">
            <li>${project.technology[0]}</li>
            <li>${project.technology[1]}</li>
            <li>${project.technology[2]}</li>
          </ul>
  <button class='btn-orange'>See projects</button>`;
  projectCards.appendChild(div);
});

/* The modal */
const projectButtons = document.querySelectorAll('.btn-orange');
const modalOverlay = document.querySelector('.overlay');

projectButtons.forEach((btn, j) => {
  btn.addEventListener('click', () => {
    projects.forEach((project, i) => {
      if (j === i) {
        const modal = ` <div class='modal'>
        <div class='modal-heading'>
          <h2>${project.name}</h2>
          <img src='${project.image[1]}' alt='cancel image' class='modal-close' />
        </div>
        <ul class='modal-list'>
          <li>${project.technology[0]}</li>
          <li>${project.technology[1]}</li>
          <li>${project.technology[2]}</li>
        </ul>
        <div class='modal-detail'><img src='${project.image[0]}' alt='modal hero image' />
        <div class='modal-message'>
        <p>
        ${project.description}
       </p>
       <div class='modal-buttons'>
         <button class='btn-modal'>
           <span>See Live</span
           ><img src='${project.liveVersion}' alt='share button' />
         </button>
         <button class='btn-modal'>
           <span>See Source</span
           ><img src='${project.source}' alt='share button' />
         </button></div>
        
          </div>
        </div>
      </div>`;
        modalContainer.innerHTML = modal;
        document.body.append(modalContainer);
      }
    });

    modalContainer.classList.add('active');
    modalOverlay.classList.add('active');

    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', () => {
      modalContainer.classList.remove('active');
      modalOverlay.classList.remove('active');
    });
  });
});

const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
const mobileNavLogo = document.querySelector('.logo');
const mobileNavLink = document.querySelectorAll('.nav-link');
const mainContainer = document.querySelector('.main-container');
const bottomLine = document.querySelector('.bottom_line');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  mobileNavLogo.classList.toggle('active');
  mainContainer.classList.toggle('active');
  bottomLine.classList.toggle('active');
});

mobileNavLink.forEach((nav) => {
  nav.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    mobileNavLogo.classList.toggle('active');
    mainContainer.classList.toggle('active');
    bottomLine.classList.toggle('active');
  });
});

/* form validation */

const form = document.querySelector('form');
const email = document.querySelector('.input-email');
const errorMsg = document.querySelector('.error');

const emailPattern 
 = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
  const isValid = email.value.length === 0 || emailPattern.test(email.value);
  if (!isValid) {
    errorMsg.textContent 
     = 'Your email address should all be in lower case. yourname@example.com';
    errorMsg.className = 'error active';
    event.preventDefault();
  } else {
    errorMsg.textContent = '';
    errorMsg.className = 'error';
  }
});
