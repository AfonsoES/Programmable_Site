// Single, consolidated script: hero tilt, hover tilt, and MAX background motion

// Hero tilt
const hero = document.querySelector('.hero');
const heroPanel = document.querySelector('.hero-panel');

if (hero && heroPanel) {
  hero.addEventListener('mousemove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const moveX = (x / rect.width - 0.5) * 12;
    const moveY = (y / rect.height - 0.5) * 12;

    heroPanel.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  hero.addEventListener('mouseleave', () => {
    heroPanel.style.transform = 'translate(0, 0)';
  });
}

// Hover cards tilt
const hoverCards = document.querySelectorAll('.interactive-hover');
hoverCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * 4;
    const rotateY = (x / rect.width - 0.5) * -4;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});

