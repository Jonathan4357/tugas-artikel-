   // Animasi muncul saat scroll
   const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  // Smooth scroll lebih halus
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Scrollspy sederhana (highlight link di navbar)
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Back to Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.innerText = "↑";
  backToTopButton.className = 'back-to-top';
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========= Ini tambahan untuk Baca Selengkapnya ==========
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const fullArticle = this.previousElementSibling;
      if (fullArticle.style.display === 'none' || fullArticle.style.display === '') {
        fullArticle.style.display = 'block';
        this.innerText = 'Sembunyikan';
      } else {
        fullArticle.style.display = 'none';
        this.innerText = 'Baca Selengkapnya';
      }
    });
  });

  // ========= Animasi Baca Selengkapnya ==========  
document.querySelectorAll('.read-more').forEach(button => {
button.addEventListener('click', function(e) {
  e.preventDefault();
  const fullArticle = this.previousElementSibling;
  if (!fullArticle.classList.contains('show')) {
    fullArticle.classList.add('show');
    this.innerText = 'Sembunyikan';
  } else {
    fullArticle.classList.remove('show');
    this.innerText = 'Baca Selengkapnya';
  }
});
});