document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    }

    // Parallax scroll effect
    window.addEventListener('scroll', function () {
        const heroImage = document.querySelector('.hero-image');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            heroImage.style.opacity = 1;
        } else {
            heroImage.style.opacity = 0;
        }
    });
});
