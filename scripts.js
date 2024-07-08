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
