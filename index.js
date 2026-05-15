
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Functionality to enlarge image when clicked
document.querySelectorAll('.cert-thumbnail').forEach(image => {
    image.onclick = () => {
        // Create the enlarged view container
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9); z-index: 2000;
            display: flex; align-items: center; justify-content: center;
            cursor: zoom-out;
        `;
        
        const enlargedImg = document.createElement('img');
        enlargedImg.src = image.src;
        enlargedImg.style.cssText = "max-width: 90%; max-height: 90%; border-radius: 10px;";
        
        modal.appendChild(enlargedImg);
        document.body.appendChild(modal);
        
        // Close when clicking anywhere on the overlay
        modal.onclick = () => modal.remove();
    };
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});
