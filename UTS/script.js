// script.js

// Scroll animation
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Project filter
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-buttons button.active').classList.remove('active');
    button.classList.add('active');

    const category = button.getAttribute('data-category');
    projectItems.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Handle home link to scroll to top
const homeLink = document.querySelector('.nav-links a[href="#home"]');
if (homeLink) {
  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
