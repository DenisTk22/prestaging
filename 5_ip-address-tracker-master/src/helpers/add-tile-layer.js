import L from 'leaflet';

export function addTileLayer(map) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge"target="_blank" > Frontend Mentor</a>.Coded by < a href = "#" > Denis Tkachev</ > ',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        // accessToken: ''
    }).addTo(map);
}