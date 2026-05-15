// index.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Accessibility updates
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
    navLinks.setAttribute("aria-hidden", expanded);
  });
});


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            header.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0, 0, 0, 0.3)' : 'none';
        }
    });

    const modal = document.getElementById("certModal");
    const closeModal = document.querySelector(".close-modal");
    const thumbnails = document.querySelectorAll(".cert-thumbnail");

    thumbnails.forEach(img => {
        img.addEventListener('click', () => openModal(img.src));
    });

    if (closeModal && modal) {
        closeModal.onclick = () => modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (modal && event.target == modal) modal.style.display = "none";
    }


function openModal(imageSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("imgZoom");
    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
    }
}

// Close menu with Escape key and prevent background scroll when open
document.addEventListener('keydown', (e) => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (!hamburger || !navLinks) return;
    if (e.key === 'Escape') {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            navLinks.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('menu-open');
            hamburger.focus();
        }
    }
});

// Optional: simple CSS to prevent body scroll when menu is open
// Add a small style tag dynamically so no stylesheet edit is required
(function addBodyLockStyle(){
    const css = '.menu-open { overflow: hidden; }';
    const style = document.createElement('style');
    style.setAttribute('data-generated','hamburger-lock');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();
