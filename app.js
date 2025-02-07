// image scale
const cardsimage = document.querySelectorAll('.image');

//  an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  },
  {
    root: document.querySelector('.scroll-container'),
    threshold: 0.9, // Trigger when 90% of the card is visible
  }
);

// Observe each card
cardsimage.forEach((card) => observer.observe(card));


// loader 
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 6000);
});

// scroll

document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".scroller");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  const scrollAmount = 300;

  // Scroll forward
  nextButton.addEventListener("click", () => {
    nextButton.addEventListener('mousedown', (e) => e.preventDefault());
    scroller.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  // Scroll backward
  prevButton.addEventListener("click", () => {
    prevButton.addEventListener('mousedown', (e) => e.preventDefault());
    scroller.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });
});

// scroll for android

const scroller = document.querySelector('.scroller');

// Variables to track touch and scroll position
let isDragging = false;
let startX;
let scrollStart;

scroller.addEventListener(
    'touchstart',
    (e) => {
        isDragging = true;
        startX = e.touches[0].pageX; 
        scrollStart = scroller.scrollLeft; 
        scroller.style.scrollBehavior = 'smooth'; 
    },
    { passive: true }
);

scroller.addEventListener(
    'touchmove',
    (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].pageX; 
        const deltaX = startX - currentX; 
        scroller.scrollLeft = scrollStart + deltaX; 
    },
    { passive: true }
);

scroller.addEventListener('touchend', () => {
    isDragging = false;
    scroller.style.scrollBehavior = 'smooth';
});