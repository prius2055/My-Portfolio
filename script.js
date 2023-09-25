const projects = [
  {
    id: 1,
    name: 'spaceX',
    description:
      'An innovative and captivating Mission to Space application leveraging the rich capabilities of the space API. This cutting-edge app empowers users to embark on an extraordinary journey to outer space by facilitating seamless reservations and bookings for an experience that transcends our earthly bounds. With the mission to space app, the cosmos is now within reach.',
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
      'Introducing an engaging and user-friendly Interactive Budgeting application, designed to empower individuals with effective financial planning and expense tracking tools. This intuitive app goes beyond mere budgeting; it serves as a comprehensive financial companion, assisting users in meticulous expense planning and tracking, providing real-time insights into their financial health, and ultimately helping them achieve their financial goals with confidence and ease',
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
      'Welcome to our distinguished Software Training School, a remarkable institution committed to the noble cause of democratizing software development education. Our mission is to offer tuition-free, world-class training in the art of software development, presenting a golden opportunity for enthusiastic individuals to embark on a transformative journey into the realm of programming without any financial constraints. Here, knowledge is freely shared, and barriers to learning are dismantled, empowering aspiring developers to acquire invaluable coding skills and chart their own path to a prosperous future in the tech industry, unhindered by financial burdens.',
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
      'Introducing a dynamic Leaderboard Platform, meticulously crafted to offer users the capability to seamlessly POST and GET scores via a REST API. This versatile leaderboard serves as the quintessential solution for tracking and displaying real-time score updates in sporting events. With its user-friendly interface and robust API integration, users can effortlessly contribute their scores and access the latest updates, creating an engaging and interactive experience for sports enthusiasts worldwide.',
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
      'Behold our cutting-edge Currency Exchange Application, a feature-rich platform designed to empower users with the ability to effortlessly access and compare exchange rates of a wide array of global currencies against a chosen base currency. This comprehensive app provides users with real-time, up-to-date information, ensuring they are well-informed about the dynamic world of currency exchange. Whether for international travelers, financial professionals, or anyone keen on monitoring currency fluctuations, this app offers a user-friendly and indispensable tool to stay in control of their financial decisions. ',
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
