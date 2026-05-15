const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    }
});

function openModal(imageSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("imgZoom");

    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("certModal");
    const closeModal = document.querySelector(".close-modal");
    const thumbnails = document.querySelectorAll(".cert-thumbnail");

    thumbnails.forEach(img => {
        img.addEventListener('click', () => {
            openModal(img.src);
        });
    });

    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});