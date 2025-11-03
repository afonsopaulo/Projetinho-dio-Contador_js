const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));

const nav = document.querySelector('.nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 120) {
    nav.classList.add('nav-hidden');
  } else {
    nav.classList.remove('nav-hidden');
  }
  lastScroll = current;
});

const floatingCard = document.querySelector('.floating-card');
window.addEventListener('mousemove', (event) => {
  const { innerWidth, innerHeight } = window;
  const offsetX = ((event.clientX / innerWidth) - 0.5) * 20;
  const offsetY = ((event.clientY / innerHeight) - 0.5) * 20;
  floatingCard.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
