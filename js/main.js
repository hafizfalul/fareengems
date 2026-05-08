// Fareen Gems - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {

  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Sticky Header Shadow on Scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
      }
    });
  }

  // Gemstone Filter Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const gemCards = document.querySelectorAll('.gem-card-container'); // Container wrapping the gem-card

  if (filterBtns.length > 0 && gemCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Remove active class from all
        filterBtns.forEach(f => f.classList.remove('active'));
        // Add active to clicked
        e.target.classList.add('active');

        const filterValue = e.target.getAttribute('data-filter');

        gemCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
          } else {
            if (card.getAttribute('data-category') === filterValue) {
              card.style.display = 'block';
              card.style.animation = 'fadeIn 0.5s ease';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }
});

// Add basic CSS animation for filtering
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(style);
