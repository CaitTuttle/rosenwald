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


document.addEventListener('DOMContentLoaded', () => {
    // Old Ranking Section
    const listItems = document.querySelectorAll('#old-ranking li');
    const listItems2 = document.querySelectorAll('#new-ranking li');   
    const showMoreButton = document.getElementById('show-more-rank');

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

    // Info1 Section
    const info1Content = document.querySelectorAll('.info1 .more-content');
    const info2Content = document.querySelectorAll('.info2 .more-content');
    const info3Content = document.querySelectorAll('.info3 .more-content');
    const info4Content = document.querySelectorAll('.info4 .more-content');
    const info5Content = document.querySelectorAll('.info5 .more-content');
    const moreContentOverlay = document.querySelector('.info1 .more-content-over');
    const moreContentOverlay2 = document.querySelector('.info2 .more-content-over');
    const moreContentOverlay3 = document.querySelector('.info3 .more-content-over');
    const moreContentOverlay4 = document.querySelector('.info4 .more-content-over');
    const moreContentOverlay5 = document.querySelector('.info5 .more-content-over');
    const moreContentPic = document.querySelector('.info1 .more-content-pic');
    const moreContentPic2 = document.querySelector('.info2 .more-content-pic');
    const moreContentPic3 = document.querySelector('.info3 .more-content-pic');
    const moreContentPic4 = document.querySelector('.info4 .more-content-pic');
    const moreContentPic5 = document.querySelector('.info5 .more-content-pic');
    const moreContentBox1 = document.querySelector('.info1 .more-content-boxes');
    const moreContentBox2 = document.querySelector('.info2 .more-content-boxes');
    const moreContentBox3 = document.querySelector('.info3 .more-content-boxes');
    const moreContentBox4 = document.querySelector('.info4 .more-content-boxes');
    const moreContentBox5 = document.querySelector('.info5 .more-content-boxes');



    const showMoreInfo1 = document.getElementById('show-more-info1');
    const showMoreInfo2 = document.getElementById('show-more-info2');
    const showMoreInfo3 = document.getElementById('show-more-info3');
    const showMoreInfo4 = document.getElementById('show-more-info4');
    const showMoreInfo5 = document.getElementById('show-more-info5');

    info1Content.forEach((content) => {
        content.style.display = 'none';
    });
    info2Content.forEach((content) => {
        content.style.display = 'none';
    });
    
    info3Content.forEach((content) => {
        content.style.display = 'none';
    });
    info4Content.forEach((content) => {
        content.style.display = 'none';
    });
    info5Content.forEach((content) => {
        content.style.display = 'none';
    });

    showMoreInfo1.addEventListener('click', function() {
        const isShowingAll = showMoreInfo1.textContent === 'Show Less';

        
        info1Content.forEach((content) => {
            content.style.display = isShowingAll ? 'none' : 'block';
        });
        
        
        moreContentPic.style.display = isShowingAll ? 'none' : 'block';

        moreContentOverlay.style.display = isShowingAll ? 'none' : 'block';

        moreContentBox1.style.display = isShowingAll ? 'none' : 'block';

        showMoreInfo1.textContent = isShowingAll ? 'Show More' : 'Show Less';
    });
    
    showMoreInfo2.addEventListener('click', function() {
        const isShowingAll = showMoreInfo2.textContent === 'Show Less';

        info2Content.forEach((content) => {
            content.style.display = isShowingAll ? 'none' : 'block';
        });
        
        moreContentPic2.style.display = isShowingAll ? 'none' : 'block';

        moreContentOverlay2.style.display = isShowingAll ? 'none' : 'block';

        moreContentBox2.style.display = isShowingAll ? 'none' : 'block';

        showMoreInfo2.textContent = isShowingAll ? 'Show More' : 'Show Less';
    });

    showMoreInfo3.addEventListener('click', function() {
        const isShowingAll = showMoreInfo3.textContent === 'Show Less';

        info3Content.forEach((content) => {
            content.style.display = isShowingAll ? 'none' : 'block';
        });
        
        moreContentPic3.style.display = isShowingAll ? 'none' : 'block';

        moreContentOverlay3.style.display = isShowingAll ? 'none' : 'block';
        moreContentBox3.style.display = isShowingAll ? 'none' : 'block';
        showMoreInfo3.textContent = isShowingAll ? 'Show More' : 'Show Less';
    });
    
    showMoreInfo4.addEventListener('click', function() {
        const isShowingAll = showMoreInfo4.textContent === 'Show Less';

        info4Content.forEach((content) => {
            content.style.display = isShowingAll ? 'none' : 'block';
        });
        
        moreContentPic4.style.display = isShowingAll ? 'none' : 'block';

        moreContentOverlay4.style.display = isShowingAll ? 'none' : 'block';
        moreContentBox4.style.display = isShowingAll ? 'none' : 'block';

        showMoreInfo4.textContent = isShowingAll ? 'Show More' : 'Show Less';
    });

    showMoreInfo5.addEventListener('click', function() {
        const isShowingAll = showMoreInfo5.textContent === 'Show Less';

        info5Content.forEach((content) => {
            content.style.display = isShowingAll ? 'none' : 'block';
        });
        
        moreContentPic5.style.display = isShowingAll ? 'none' : 'block';

        moreContentOverlay5.style.display = isShowingAll ? 'none' : 'block';
        moreContentBox5.style.display = isShowingAll ? 'none' : 'block';

        showMoreInfo5.textContent = isShowingAll ? 'Show More' : 'Show Less';
    });

});


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