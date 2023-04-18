const projects = [
  {
    id: 1,
    name: 'CodeHeros: Learn Software development',
    description:
      'A software training school that offers free software development training and provides an excellent opportunity for individuals who want to learn programming skills without incurring any financial burden.',
    technology: ['html', 'Bootstrap', 'JavaScript', 'Github'],
    image: ['../img/learn-web-dev.png', '../img/learn-web-dev-2.png'],
    liveVersion: '../img/Icon-2.png',
    source: '../img/github.png',
  },

  {
    id: 2,
    name: 'Interactive To-do list',
    description:
      'An interactive to-do app that helps individuals organize their work.',
    technology: ['CSS', 'JavaScript', 'Webpack', 'Jest', 'github workflow'],
    image: ['../img/todo-app.png', '../img/todo-app.png'],
    liveVersion: '../img/Icon-2.png',
    source: '../img/github.png',
  },

  {
    id: 3,
    name: 'Leaderboard',
    description:
      'A leaderboard that allows users POST and GET information from a RESTAPI.',
    technology: ['JavaScript', 'Webpack', 'Gitflow', 'RESTAPI'],
    image: ['../img/leaderboard.png', '../img/leaderboard.png'],
    liveVersion: '../img/Icon-2.png',
    source: '../img/github.png',
  },

  {
    id: 4,
    name: 'Professional Art',
    description: 'Lorem Ipsum is simply dummy text of the printing ',
    technology: ['html', 'Bootstrap', 'Ruby', 'github'],
    image: ['../img/modal-hero.png', '../img/modal-hero.png'],
    liveVersion: '../img/Icon-2.png',
    source: '../img/github.png',
  },

  {
    id: 5,
    name: 'Professional Art Printing data',
    description: 'Lorem Ipsum is simply dummy text of the printing and ',
    technology: ['html', 'Bootstrap', 'Ruby', 'github'],
    image: ['../img/modal-hero.png', '../img/modal-hero.png'],
    liveVersion: '../img/Icon-2.png',
    source: '../img/github.png',
  },

  {
    id: 6,
    name: 'Professional Art Printing data',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    technology: ['html', 'Bootstrap', 'Ruby', 'github'],
    image: ['../img/modal-hero.png', '../img/modal-hero.png'],
    liveVersion: '../img/Icon-2.png',
    source: '../img/github.png',
  },

  {
    id: 7,
    name: 'Professional Art Printing data',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    technology: ['html', 'Bootstrap', 'Ruby', 'github'],
    image: ['../img/modal-hero.png', '../img/modal-hero.png'],
    liveVersion: '../img/Icon-2.png',
    source: '../img/github.png',
  },
];

const projectCards = document.querySelector('.work-cards');
const modalContainer = document.querySelector('.modal-container');

projects.forEach((project, i) => {
  const div = document.createElement('div');
  div.className = `${i === 0 ? 'first-work-card' : 'other-work-cards'}`;
  div.innerHTML = `
  <img src=${
    window.innerWidth < 768 ? project.image[0] : project.image[1]
  } alt='project image'/>
  <div class='work-notes'>
          <h2>${project.name}</h2>
          <p>${project.description}</p>
          <ul class="list list-grey">
            <li>${project.technology[0]}</li>
            <li>${project.technology[1]}</li>
            <li>${project.technology[2]}</li>
            <li>${project.technology[3]}</li>
          </ul>
  
<button class='btn-orange'>See project</button>
</div>
          `;
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
          <img src='./img/Icon.png' alt='cancel image' class='modal-close' />
        </div>
        <ul class='modal-list'>
          <li>${project.technology[0]}</li>
          <li>${project.technology[1]}</li>
          <li>${project.technology[2]}</li>
          <li>${project.technology[3]}</li>
        </ul>
        <div class='modal-detail'><img src='${project.image}' alt='modal hero image' />
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

const emailPattern =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
  const isValid = email.value.length === 0 || emailPattern.test(email.value);
  if (!isValid) {
    errorMsg.textContent =
      'Your email address should all be in lower case. yourname@example.com';
    errorMsg.className = 'error active';
    event.preventDefault();
  } else {
    errorMsg.textContent = '';
    errorMsg.className = 'error';
  }
});

/* FORM STORAGE */

const userInputs = [fullName, firstName, lastName, email, msg];

function userData() {
  const userObject = {
    fullname: fullName.value,
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    message: msg.value,
  };
  localStorage.setItem('user', JSON.stringify(userObject));
}

userInputs.forEach((input) => {
  input.addEventListener('change', userData);
  const parsedObject = JSON.parse(localStorage.getItem('user'));
  if (parsedObject) {
    fullName.value = parsedObject.fullname;
    firstName.value = parsedObject.firstname;
    lastName.value = parsedObject.lastName;
    email.value = parsedObject.email;
    msg.value = parsedObject.message;
  }
});
