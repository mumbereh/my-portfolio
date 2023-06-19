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
