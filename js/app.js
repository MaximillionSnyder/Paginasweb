/* =============================================
   Tu Web — App
   JavaScript vanilla | Sin dependencias
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // HEADER SCROLL
  // =============================================
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // =============================================
  // MOBILE MENU
  // =============================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-link');

  const updateActiveLink = () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // =============================================
  // CARRUSEL
  // =============================================
  const track = document.getElementById('carouselTrack');
  const cards = Array.from(track.querySelectorAll('.carousel-card'));
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');

  let currentIndex = 0;
  let visibleCount = getVisibleCount();
  let autoPlayId = null;
  let isTransitioning = false;

  function getVisibleCount() {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  const gap = 1.5; // rem — must match CSS gap value

  function getCardWidth() {
    const trackWidth = track.parentElement.offsetWidth;
    const gapTotal = (visibleCount - 1) * (gap * 16); // convert rem to px
    return (trackWidth - gapTotal) / visibleCount;
  }

  function getMaxIndex() {
    return Math.max(0, cards.length - visibleCount);
  }

  function getTransformValue() {
    const cardW = getCardWidth();
    const gapPx = gap * 16;
    return currentIndex * (cardW + gapPx);
  }

  function goTo(index) {
    if (isTransitioning) return;
    const maxIndex = getMaxIndex();
    index = Math.max(0, Math.min(index, maxIndex));
    if (index === currentIndex) return;

    isTransitioning = true;
    currentIndex = index;

    const translateX = getTransformValue();
    track.style.transform = `translateX(-${translateX}px)`;

    updateButtons();
    updateDots();
    resetAutoPlay();

    setTimeout(() => { isTransitioning = false; }, 500);
  }

  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  function updateButtons() {
    const maxIndex = getMaxIndex();
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }

  function buildDots() {
    dotsContainer.innerHTML = '';
    const count = getMaxIndex() + 1;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.dataset.index = i;
      dot.setAttribute('aria-label', `Ir al diseño ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
    updateDots();
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayId = setInterval(() => {
      const maxIndex = getMaxIndex();
      if (currentIndex >= maxIndex) {
        goTo(0);
      } else {
        next();
      }
    }, 4000);
  }

  function stopAutoPlay() {
    if (autoPlayId) {
      clearInterval(autoPlayId);
      autoPlayId = null;
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  function handleResize() {
    const newCount = getVisibleCount();
    if (newCount !== visibleCount) {
      visibleCount = newCount;
      currentIndex = Math.min(currentIndex, getMaxIndex());
      track.style.transform = `translateX(-${getTransformValue()}px)`;
      buildDots();
      updateButtons();
    } else {
      track.style.transform = `translateX(-${getTransformValue()}px)`;
    }
  }

  // Touch / swipe
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  }, { passive: true });

  // Pause auto-play on interaction
  const pauseAutoPlay = () => {
    stopAutoPlay();
    track.addEventListener('mouseleave', startAutoPlay, { once: true });
  };

  prevBtn.addEventListener('click', () => { prev(); pauseAutoPlay(); });
  nextBtn.addEventListener('click', () => { next(); pauseAutoPlay(); });
  dotsContainer.addEventListener('click', pauseAutoPlay);

  // Click on card → open detail
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const designId = card.dataset.design;
      openDesignDetail(designId);
    });
  });

  // Init
  buildDots();
  updateButtons();
  startAutoPlay();

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 150);
  });

  // =============================================
  // DESIGN DETAIL (SPA)
  // =============================================
  const overlay = document.getElementById('designOverlay');
  const detailSection = document.getElementById('designDetail');
  let isDetailOpen = false;

  function openDesignDetail(id) {
    const target = detailSection.querySelector(`.detail-content[data-design="${id}"]`);
    if (!target) return;

    document.body.style.overflow = 'hidden';
    overlay.classList.add('active');
    detailSection.classList.add('active');
    target.classList.add('active');
    isDetailOpen = true;
    stopAutoPlay();
  }

  function closeDesignDetail() {
    document.body.style.overflow = '';
    overlay.classList.remove('active');
    detailSection.classList.remove('active');
    detailSection.querySelectorAll('.detail-content').forEach(el => {
      el.classList.remove('active');
    });
    isDetailOpen = false;
    startAutoPlay();
  }

  // Close buttons
  detailSection.querySelectorAll('.detail-close').forEach(btn => {
    btn.addEventListener('click', closeDesignDetail);
  });

  overlay.addEventListener('click', closeDesignDetail);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDetailOpen) {
      closeDesignDetail();
    }
  });

  // CTA inside detail → close and scroll to contacto
  detailSection.querySelectorAll('.detail-cta').forEach(cta => {
    cta.addEventListener('click', (e) => {
      e.preventDefault();
      closeDesignDetail();
      const target = cta.getAttribute('href');
      if (target) {
        setTimeout(() => {
          document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        }, 350);
      }
    });
  });

  // Close when clicking outside the detail content inside detail section
  detailSection.addEventListener('click', (e) => {
    if (e.target === detailSection) {
      closeDesignDetail();
    }
  });

  // =============================================
  // FORM VALIDATION
  // =============================================
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const nombre = document.getElementById('nombre');
      const email = document.getElementById('email');

      // Reset errors
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

      if (!nombre.value.trim()) {
        nombre.parentElement.classList.add('error');
        valid = false;
      }

      if (!email.value.trim() || !isValidEmail(email.value)) {
        email.parentElement.classList.add('error');
        valid = false;
      }

      if (valid) {
        const btn = form.querySelector('.form-submit');
        btn.textContent = '¡Mensaje enviado!';
        btn.classList.add('sent');
        form.reset();
        setTimeout(() => {
          btn.textContent = 'Enviar mensaje';
          btn.classList.remove('sent');
        }, 3000);
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Real-time error clearing
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => {
      field.parentElement.classList.remove('error');
    });
    field.addEventListener('change', () => {
      field.parentElement.classList.remove('error');
    });
  });

  // =============================================
  // CLOSE MENU ON RESIZE (if opened in mobile then resized)
  // =============================================
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 640 && navLinks.classList.contains('open')) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });

});
