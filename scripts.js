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
const listItems = document.querySelectorAll('#old-ranking li');
const listItems2 = document.querySelectorAll(' #new-ranking li');

const showMoreButton = document.getElementById('show-more');

// Initially hide all items beyond the 10th
listItems.forEach((item, index) => {
    if (index >= 10) {
        item.style.display = 'none';
    }
});

listItems2.forEach((item, index) => {
    if (index >= 10) {
        item.style.display = 'none';
    }
});
// Toggle the display of the remaining items on button click
showMoreButton.addEventListener('click', function() {
    const isShowingAll = showMoreButton.textContent === 'Show Less';

    listItems.forEach((item, index) => {
        if (index >= 10) {
            item.style.display = isShowingAll ? 'none' : 'list-item';
        }
    });
    listItems2.forEach((item, index) => {
        if (index >= 10) {
            item.style.display = isShowingAll ? 'none' : 'list-item';
        }
    });

    showMoreButton.textContent = isShowingAll ? 'Show More' : 'Show Less';
});