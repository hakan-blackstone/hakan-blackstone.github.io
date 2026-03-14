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
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Sending...';
        btn.style.opacity = '0.8';
        
        // Simulate API call
        setTimeout(() => {
          btn.innerHTML = 'Sent Successfully! ✓';
          btn.style.backgroundColor = '#10b981';
          btn.style.color = 'white';
          
          form.reset();
          
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = '';
            btn.style.color = '';
            btn.style.opacity = '1';
          }, 3000);
        }, 1500);
      });
    }
  });
