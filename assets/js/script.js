const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const animatedElements = document.querySelectorAll('[data-animate]');
if (animatedElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  animatedElements.forEach((el) => observer.observe(el));
}

document.querySelectorAll('.flip-card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});

const countdownTargets = {
  submission: '2026-03-05T23:59:59-12:00',
  workshop: '2026-06-03T09:00:00-06:00',
};

const formatCountdown = (targetDate) => {
  const now = new Date();
  const target = new Date(targetDate);
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));

  if (Number.isNaN(diff)) {
    return null;
  }
  if (diff < 0) {
    return 'Event completed';
  }
  if (diff === 0) {
    return 'Today';
  }
  return `${diff} days remaining`;
};

Object.entries(countdownTargets).forEach(([key, date]) => {
  const el = document.querySelector(`[data-countdown="${key}"]`);
  if (!el) {
    return;
  }
  const formatted = formatCountdown(date);
  if (formatted) {
    el.textContent = `${el.textContent} | ${formatted}`;
  }
});
