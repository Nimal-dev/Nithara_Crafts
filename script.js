document.addEventListener('DOMContentLoaded', () => {
  /*
    The card hover effects are now handled purely by CSS for a cleaner, modern interaction.
  */

  // Scroll-based animations for section titles
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'animate' class to trigger CSS transition for section-title
        entry.target.querySelector('.section-title')?.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all sections containing a section-title
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.querySelector('.section-title')) {
      observer.observe(section);
    }
  });

  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});