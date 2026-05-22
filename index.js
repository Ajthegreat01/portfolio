document.addEventListener("DOMContentLoaded", () => {

    /* HAMBURGER MENU */
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    function closeMenu() {
        navLinks.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        navLinks.setAttribute("aria-hidden", "true");
    }

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const expanded =
                hamburger.getAttribute("aria-expanded") === "true";

            hamburger.setAttribute("aria-expanded", !expanded);
            navLinks.setAttribute("aria-hidden", expanded);
        });

        // Close menu when clicking on nav links
        const navItems = navLinks.querySelectorAll("a");
        navItems.forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                closeMenu();
            }
        });
    }

    /* SMOOTH SCROLL */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                navLinks?.classList.remove("active");
            }
        });
    });

    /* HEADER SHADOW */
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");

        if (header) {
            header.style.boxShadow =
                window.scrollY > 50
                    ? "0 2px 20px rgba(0,0,0,0.3)"
                    : "none";
        }
    });

    /* CERTIFICATE ZOOM */
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("imgZoom");
    const closeModal = document.querySelector(".close-modal");
    const thumbnails = document.querySelectorAll(".cert-thumbnail");

    thumbnails.forEach((img) => {
        img.addEventListener("click", () => {

            modal.classList.add("show");
            modalImg.src = img.src;

            document.body.style.overflow = "hidden";
        });
    });

    /* CLOSE BUTTON */
    closeModal?.addEventListener("click", closeZoom);

    /* CLICK OUTSIDE IMAGE */
    modal?.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeZoom();
        }
    });

    /* ESC KEY CLOSE */
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeZoom();
        }
    });

    function closeZoom() {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    }
});