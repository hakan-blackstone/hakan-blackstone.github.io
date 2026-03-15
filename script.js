document.addEventListener('DOMContentLoaded', () => {
    // Sticky header on scroll
    const header = document.querySelector('.header');
    
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          // Offset for fixed header
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Form submission handling
    const form = document.getElementById('schedule-form');
    if (form) {
      form.addEventListener('submit', () => {
        const btn = form.querySelector('button[type="submit"]');
        btn.innerHTML = 'Redirecting...';
        btn.style.opacity = '0.8';
      });
    }
  });
