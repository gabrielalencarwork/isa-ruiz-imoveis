/* ==========================================
   ISA RUIZ — MAIN APPLICATION JAVASCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initPropertyFilters();
  initSmoothScroll();
  initStatsCounter();
  initWhatsAppWidget();
});

/* Mobile Menu Toggle */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      if (navMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });
}

/* Property Filter Tabs */
function initPropertyFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const propertyCards = document.querySelectorAll('.property-card');

  if (!filterBtns.length || !propertyCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      propertyCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'todos' || cardCat === category) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInStep 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* Smooth Scroll */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* Animated Counters */
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-number');
  let animated = false;

  function runCounter() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10);
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      const speed = target / 50;

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = prefix + Math.ceil(count) + suffix;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = prefix + target + suffix;
        }
      };

      updateCount();
    });
  }

  window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.hero-stats');
    if (!statsSection || animated) return;
    const pos = statsSection.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      animated = true;
      runCounter();
    }
  });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    const pos = statsSection.getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      animated = true;
      runCounter();
    }
  }
}

/* WhatsApp Floating Widget Logic */
function initWhatsAppWidget() {
  const trigger = document.getElementById('waTrigger');
  const popup = document.getElementById('waPopup');
  const closeBtn = document.getElementById('waClose');

  if (!trigger || !popup) return;

  trigger.addEventListener('click', () => {
    popup.classList.toggle('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  }

  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !trigger.contains(e.target)) {
      popup.classList.remove('active');
    }
  });
}
