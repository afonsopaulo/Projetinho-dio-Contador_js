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
const particles = document.querySelectorAll('.hero-particles span');

const applyParallax = (event) => {
  const { innerWidth, innerHeight } = window;
  const ratioX = (event.clientX / innerWidth) - 0.5;
  const ratioY = (event.clientY / innerHeight) - 0.5;

  if (floatingCard && window.innerWidth > 640) {
    const offsetX = ratioX * 28;
    const offsetY = ratioY * 28;
    floatingCard.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  }

  particles.forEach((particle, index) => {
    const strength = (index + 1) * 6;
    const x = ratioX * strength;
    const y = ratioY * strength;
    particle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
};

window.addEventListener('mousemove', applyParallax);

window.addEventListener('resize', () => {
  if (floatingCard && window.innerWidth <= 640) {
    floatingCard.style.transform = 'none';
  }
});
