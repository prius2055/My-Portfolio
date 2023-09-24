const projects = [
  {
    id: 1,
    name: 'spaceX',
    description:
      'A mission to space app that utilizes the space API, allowing users to book reservations for a journey to  space.',
    technology: ['React', 'Redux', 'API', 'CSS', 'Axios'],
    image: './img/spaceX.png',
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
    liveDemo: 'https://spacex-mv.netlify.app/',
    sourceCode: 'https://github.com/abeltsew/spacex',
  },

  {
    id: 2,
    name: 'BudgIT',
    description:
      'An interactive budget app that helps individuals plan and track their expenses and expenditures',
    technology: ['CSS', 'JavaScript', 'Ruby', 'Shell', 'Rails'],
    image: './img/BudgIT.png',
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
    liveDemo: 'https://budgit.onrender.com/',
    sourceCode: 'https://github.com/prius2055/rails-budget-app',
  },

  {
    id: 3,
    name: 'CodeHeros: Learn Software development',
    description:
      'A software training school that offers free software development training and provides an excellent opportunity for individuals who want to learn programming skills without incurring any financial burden.',
    technology: ['html', 'Bootstrap', 'JavaScript', 'Github'],
    image: './img/codeheros.png',
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
    liveDemo: 'https://prius2055.github.io/learn-web-development/',
    sourceCode: 'https://github.com/prius2055/learn-web-development',
  },

  {
    id: 4,
    name: 'Leaderboard',
    description:
      'A leaderboard that allows users POST and GET scores from a RESTAPI. It can be used to display latest scores update in sporting events',
    technology: ['JavaScript', 'Webpack', 'Gitflow', 'RESTAPI'],
    image: './img/leaderboard.png',
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
    liveDemo: 'https://prius2055.github.io/leaderboard-project/',
    sourceCode: 'https://github.com/prius2055/leaderboard-project',
  },

  {
    id: 5,
    name: 'Currency exchanger',
    description:
      'This is a currency exchage app. Users can check exchange rate of most world currencies against a base currency ',
    technology: ['React', 'Redux', 'API', 'github'],
    image: './img/currency-exchange.png',
    liveVersion: './img/Icon-2.png',
    source: './img/github.png',
    liveDemo: 'https://currency-exchange-app.onrender.com/',
    sourceCode: 'https://github.com/prius2055/Currency-Exchange-app',
  },
];

const projectCards = document.querySelector('.work-cards');
const modalContainer = document.querySelector('.modal-container');

projects.forEach((project, i) => {
  const div = document.createElement('div');
  div.className = 'work-card';
  div.innerHTML = `
  <img src=${project.image} alt='project image' class='work-img id='work-img/>
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

//Handle scroll animation
const workCards = document.querySelectorAll('.work-card');
const workImages = document.querySelectorAll('.work-img');
const workNotes = document.querySelectorAll('.work-notes');

const aboutParagraphs = document.querySelector('.about-paragraphs');

const techSkills = document.querySelectorAll('.tech-skills');

const objectInView = (card, percentageScroll = 100) => {
  const cardTop = card.getBoundingClientRect().top;
  return (
    cardTop <=
    (window.innerHeight || document.documentElement.clientHeight) *
      (percentageScroll / 100)
  );
};

const objectOutOfView = (card) => {
  const elementTop = card.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const handleScrollAnimation = () => {
  workImages.forEach((image) => {
    if (objectInView(image, 65)) {
      image.classList.add('scrolled');
    } else if (objectOutOfView(image)) {
      image.classList.remove('scrolled');
    }
  });

  workNotes.forEach((note) => {
    if (objectInView(note, 65)) {
      note.classList.add('scrolled');
    } else if (objectOutOfView(note)) {
      note.classList.remove('scrolled');
    }
  });

  workCards.forEach((work) => {
    if (objectInView(work, 65)) {
      work.classList.add('scrolled');
    } else if (objectOutOfView(work)) {
      work.classList.remove('scrolled');
    }
  });

  if (objectInView(aboutParagraphs, 65)) {
    aboutParagraphs.classList.add('scrolled');
  } else if (objectOutOfView(aboutParagraphs)) {
    aboutParagraphs.classList.remove('scrolled');
  }

  techSkills.forEach((skill) => {
    if (objectInView(skill, 65)) {
      skill.classList.add('scrolled');
    } else if (objectOutOfView(skill)) {
      skill.classList.remove('scrolled');
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

/* The modal */
const projectButtons = document.querySelectorAll('.btn-orange');
const modalOverlay = document.querySelector('.overlay');

projectButtons.forEach((btn, j) => {
  btn.addEventListener('click', (e) => {
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
           <a href ='${project.liveDemo}' target = '_blank' class='btn-modal'>
           <span>See Live</span
           ><img src='${project.liveVersion}' alt='share button' />
           </a>
           <a href ='${project.sourceCode}' target = '_blank' class='btn-modal'>
           <span>See Source</span
           ><img src='${project.source}' alt='share button' />
           </a>
          </div>
        
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

const header = document.querySelector('.header');
const navBar = document.querySelector('.navBar');
const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
const mobileNavLogo = document.querySelector('.logo');
const mobileNavLink = document.querySelectorAll('.nav-link');
const mainContainer = document.querySelector('.main-container');
const bottomLine = document.querySelector('.bottom_line');

hamburger.addEventListener('click', () => {
  header.classList.toggle('active');
  navBar.classList.toggle('active');
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  mobileNavLogo.classList.toggle('active');
  mainContainer.classList.toggle('active');
  bottomLine.classList.toggle('active');
});

mobileNavLink.forEach((nav) => {
  nav.addEventListener('click', () => {
    header.classList.toggle('active');
    navBar.classList.toggle('active');
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    mobileNavLogo.classList.toggle('active');
    mainContainer.classList.toggle('active');
    bottomLine.classList.toggle('active');
  });
});
