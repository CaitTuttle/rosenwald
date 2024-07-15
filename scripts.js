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

    // Initialize the map
    const map = L.map('map').setView([35.7596, -79.0193], 7); // Centered on North Carolina

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Load the shapefile
    omnivore.shapefile('https://raw.githubusercontent.com/dgreene12/rosenwald/2d609186bb663c3f4a62dcae24e76308caca8dc7/North_Carolina_State_and_County_Boundary_Polygons.shp')
        .on('ready', function(layer) {
            map.fitBounds(layer.target.getBounds());
            layer.eachLayer(function(layer) {
                const countyName = layer.feature.properties.NAME;
                if (['Durham', 'Pasquotank', 'Martin', 'Hoke'].includes(countyName)) {
                    layer.setStyle({
                        color: 'blue',
                        weight: 2,
                        fillOpacity: 0.4,
                    });
                } else {
                    layer.setStyle({
                        color: '#ccc',
                        weight: 1,
                        fillOpacity: 0.1,
                    });
                }
            });
        })
        .addTo(map);
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');

    // Smooth scroll for navbar links
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - nav.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Parallax scroll effect for hero image
    window.addEventListener('scroll', function () {
        const heroImage = document.querySelector('.hero-image');
        const scrollPosition = window.scrollY;
        heroImage.style.opacity = scrollPosition > 50 ? 1 : 0;
    });

    // Highlight the relevant section of the navbar
    window.addEventListener('scroll', function () {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - nav.offsetHeight;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});

function toggleContent(buttonId, contentClass, picClass, overlayClass, boxClass) {
    const button = document.getElementById(buttonId);
    const contents = document.querySelectorAll(contentClass);
    const pic = document.querySelector(picClass);
    const overlay = document.querySelector(overlayClass);
    const box = document.querySelector(boxClass);

    button.addEventListener('click', function() {
        const isShowingAll = button.textContent === 'Show Less';

        contents.forEach((content) => {
            content.style.display = isShowingAll ? 'none' : 'block';
        });

        if (pic) pic.style.display = isShowingAll ? 'none' : 'block';
        if (overlay) overlay.style.display = isShowingAll ? 'none' : 'block';
        if (box) box.style.display = isShowingAll ? 'none' : 'block';

        button.textContent = isShowingAll ? 'Show More' : 'Show Less';
    });
}

// Apply the toggleContent function to each info section
toggleContent('show-more-info1', '.info1 .more-content', '.info1 .more-content-pic', '.info1 .more-content-over', '.info1 .more-content-boxes');
toggleContent('show-more-info2', '.info2 .more-content', '.info2 .more-content-pic', '.info2 .more-content-over', '.info2 .more-content-boxes');
toggleContent('show-more-info3', '.info3 .more-content', '.info3 .more-content-pic', '.info3 .more-content-over', '.info3 .more-content-boxes');
toggleContent('show-more-info4', '.info4 .more-content', '.info4 .more-content-pic', '.info4 .more-content-over', '.info4 .more-content-boxes');
toggleContent('show-more-info5', '.info5 .more-content', '.info5 .more-content-pic', '.info5 .more-content-over', '.info5 .more-content-boxes');
toggleContent('show-more-rank', '.more-ranking');



const slideIndices = { 1: 0, 2: 0 , 3: 0, 4: 0}; // Initialize slide indices for carousels

function moveSlides(direction, carouselId) {
    const slides = document.querySelector(`#carousel${carouselId} .carousel-slide`);
    const totalSlides = slides.children.length;

    slideIndices[carouselId] += direction;

    if (slideIndices[carouselId] < 0) {
        slideIndices[carouselId] = totalSlides - 1;
    } else if (slideIndices[carouselId] >= totalSlides) {
        slideIndices[carouselId] = 0;
    }

    const newTransform = -slideIndices[carouselId] * 100;
    slides.style.transform = `translateX(${newTransform}%)`;

    // Update indicators
    updateIndicators(carouselId);
}

function currentSlide(slideNumber, carouselId) {
    slideIndices[carouselId] = slideNumber - 1;
    moveSlides(0, carouselId); // Move to the specified slide
}

// Update indicators based on the current slide
function updateIndicators(carouselId) {
    const indicators = document.querySelectorAll(`#carousel${carouselId} .indicator`);
    indicators.forEach((indicator, index) => {
        if (index === slideIndices[carouselId]) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}