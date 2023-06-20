const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const closeBtn = document.querySelector('.close-button');
const links = document.querySelectorAll('.links');
menuToggle.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show');
    closeBtn.style.display = 'none';
    menuToggle.style.display = 'block';
  } else {
    nav.classList.add('show');
    menuToggle.style.display = 'none';
    closeBtn.style.display = 'block';
  }
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('show');
  closeBtn.style.display = 'none';
  menuToggle.style.display = 'block';
});

links.forEach((n) => n.addEventListener('click', () => {
  nav.classList.remove('show');
  menuToggle.style.display = 'block';
}));

// Projects
const project = [
  {
    src: 'images/61.png',
    title: 'Tonic',
    description: [
      'A daily selection of privately personalized reads no accounts or sign-ups required',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    ],
    details: 'See project',
    live: 'https://mumbereh.github.io/my-portfolio',
    source: 'https://github.com/mumbereh/my-portfolio',
  },
  {
    src: 'images/4.png',
    title: 'Multi-Post Stories',
    description: [
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    ],
    details: 'See project',
    live: 'https://mumbereh.github.io/my-portfolio',
    source: 'https://github.com/mumbereh/my-portfolio',
  },
  {
    src: 'images/1.png',
    title: 'Facebook 360',
    description: [
      'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    ],
    details: 'See project',
    live: 'https://mumbereh.github.io/my-portfolio',
    source: 'https://github.com/mumbereh/my-portfolio',
  },
  {
    src: 'images/2.png',
    title: 'Uber Navigation',
    description: [
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    ],
    details: 'See project',
    live: 'https://mumbereh.github.io/my-portfolio',
    source: 'https://github.com/mumbereh/my-portfolio',
  },
];

const proContainer = document.querySelector('.pro-container');

for (let i = 0; i < project.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="card">
      <div class="pic">
        <img src="${project[i].src}" alt="">
      </div>
      <div>
        <h2 class="title">${project[i].title}</h2>
        <ul class="field">
          <li class="cano">FACEBOOK</li>
          <li class="tag">&#8226; Full Stack Dev </li>
          <li class="tag">&#8226; 2015</li>
        </ul>
        <p class="desk-praa">${project[i].description[0]}</p>
        <ul class="trainning">
          <li class="other-skills">html</li>
          <li class="ruby">Ruby on Rails</li>
          <li class="other-skills">css</li>
          <li class="other-skills">javascript</li>
        </ul>
        <button class="card-btn">${project[i].details}</button>
        <a href="${project[i].live}">...</a>
      </div>
    </div>
  `;
  proContainer.appendChild(card);
}

const popupModal = document.querySelector('#popup-modal');
const cardBtn = document.querySelectorAll('.card-btn');

cardBtn.forEach((btn, btnIndex) => {
  btn.addEventListener('click', () => {
    popupModal.style.display = 'block';
    const cardIndex = btnIndex;
    popupModal.innerHTML = `
      <div class="popup">
        <h2 class="pop-title">${project[cardIndex].title}</h2>
        <ul class="pop-field">
          <li class="cano">CANOPY</li>
          <li class="tag">&#8226; Back End Dev</li>
          <li class="tag">&#8226; 2015</li>
        </ul>
        <div class="pop-img-container">
          <img class="pop-img" src="${project[cardIndex].src}" alt="">
        </div>
        <div class="pop-para">
          <p>${project[cardIndex].description[0]}</p>
        </div>
        <div class="pop-skills">
          <ul class="pop-training">
            <li class="other-skills">HTML</li>
            <li class="other-skills">CSS</li>
            <li class="other-skills">JavaScript</li>
            <li class="other-skills">Ruby</li>
            <li class="other-skills">Bootstrap</li>
          </ul>
        </div>
        <div class="pop-links">
          <a href="${project[cardIndex].live}">
            <button class="pop-link1 pop-card-btn" type="submit">
              See live
              <img class="search" src="pop-images/live.png" alt="">
            </button>
          </a>
          <a href="${project[cardIndex].source}">
            <button class="pop-link2 pop-card-btn" type="submit">
              See source
              <img class="search" src="pop-images/popup.png" alt="">
            </button>
          </a>
        </div>
        <p id="close-btn">&times;</p>
      </div>
    `;

    const closebtn = document.querySelector('#close-btn');
    closebtn.addEventListener('click', () => {
      popupModal.style.display = 'none';
    });
  });
});

function validateEmail() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();
  const errorMessage = document.getElementById('email-error');

  if (email === '') {
    errorMessage.textContent = 'Email is required';
    errorMessage.style.display = 'block';
    return false;
  } if (email !== email.toLowerCase()) {
    errorMessage.textContent = 'Email must contain only lowercase letters';
    errorMessage.style.display = 'block';
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Invalid email address';
    errorMessage.style.display = 'block';
    return false;
  }
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
  return true;
}

if (validateEmail()) {
  document.getElementById('contact-form').submit();
}
