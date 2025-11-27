// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const navList = document.getElementById('nav-list');
if (toggle && navList) {
  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  navList.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navList.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Reveal on scroll
const io = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Optional toast helper (на будущее, если понадобится уведомление)
const toast = document.getElementById('toast');
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('is-show');
  setTimeout(() => toast.classList.remove('is-show'), 2600);
}
